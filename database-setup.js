const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const databaseSetup = async () => {
  const db = await open({
    filename: "./microphones.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });

  const microphones = await db.all("SELECT * FROM Microphone");

  console.log(JSON.stringify(microphones, null, 4));
};

databaseSetup();
