import { GetStaticPaths } from "next";
import { openDB } from "../utils/openDB";
import HomePage, { getStaticProps } from "./";

export default HomePage;
export { getStaticProps };

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await openDB();
  const microphones = await db.all("SELECT * FROM Microphone");
  if (microphones) {
    const paths = Array.from(Array(Math.ceil(microphones.length / 3)).keys())
      .map((page) => {
        return {
          params: {
            currentPage: page.toString(),
          },
        };
      })
      .slice(0);
    return {
      fallback: false,
      paths,
    };
  } else return { fallback: true, paths: [] };
};
