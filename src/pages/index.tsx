import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Microphone } from "../../model/Microphone";
import { openDB } from "../utils/openDB";

export interface HomePageProps {
  microphones: Microphone[];
  numberOfPages: undefined;
}

const prefix = "/nextjs-ecommerce";

const HomePage: NextPage<HomePageProps> = ({ microphones, numberOfPages }) => {
  const router = useRouter();
  const { currentPage } = router.query;

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        {microphones.map(({ id, model, brand, price, imageUrl }) => (
          <Grid key={id} item xs={6} md={3}>
            <Card>
              <Link href="/microphone/[id]" as={`/microphone/${id}`}>
                <CardActionArea>
                  <CardMedia
                    image={prefix + imageUrl}
                    title="microphone"
                    style={{ height: "300px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {model}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {brand}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        marginTop={3}
        marginBottom={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          count={numberOfPages}
          page={currentPage ? +currentPage + 1 : 1}
          renderItem={(item) => (
            <Link href={item.page === 1 ? "/" : `/${item.page - 1}`}>
              <PaginationItem {...item} />
            </Link>
          )}
        />
      </Box>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const currentPage = ctx.params?.currentPage as string;
  const currentPageNumber = +(currentPage || 0);
  const min = currentPageNumber * 4;
  const max = (currentPageNumber + 1) * 4;
  const db = await openDB();
  const allMicrophones = await db.all("SELECT * FROM Microphone");

  const numberOfPages = Math.ceil(allMicrophones.length / 4);

  const microphones = allMicrophones.slice(min, max);

  return { props: { microphones, numberOfPages } };
};

export default HomePage;
