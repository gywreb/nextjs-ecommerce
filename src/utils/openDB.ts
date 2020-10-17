import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDB = async () => {
  return open({
    filename: "./microphones.sqlite",
    driver: sqlite3.Database,
  });
};
