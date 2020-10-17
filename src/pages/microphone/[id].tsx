import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import React from "react";
import { Microphone } from "../../../model/Microphone";
import { openDB } from "../../utils/openDB";

export type MicrophoneProps = Microphone;

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const MicrophoneDetail: NextPage<MicrophoneProps> = (props) => {
  const { brand, model, price, imageUrl } = props;
  const router = useRouter();
  if (Object.keys(props).length) {
    if (router.isFallback) return <div>Loading...</div>;
    else {
      return (
        <Box paddingTop={5}>
          <Container maxWidth="lg">
            <Paper elevation={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      style={{ width: "50%" }}
                      src={prefix + imageUrl}
                      alt="microphoneImg"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography gutterBottom variant="h5">
                    {brand + " " + model}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    $ {price}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                  >
                    Description : Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Est, aut. Quibusdam quasi reiciendis,
                    suscipit magnam excepturi unde nihil aliquam odit delectus,
                    sed labore provident ab magni iste quidem ducimus eligendi?
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </Box>
      );
    }
  }
  return <div>Page not found</div>;
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const id = ctx.params?.id as string;
  const db = await openDB();
  const microphone = await db.get("SELECT * FROM Microphone WHERE id = ?", [
    +id,
  ]);

  return { props: microphone };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await openDB();
  const microphones = await db.all("SELECT * FROM Microphone");
  const paths = microphones.map((microphone) => {
    return {
      params: {
        id: microphone.id.toString(),
      },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

export default MicrophoneDetail;
