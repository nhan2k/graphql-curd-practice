import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./entities/User";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "graphql",
    username: "root",
    password: "mysqlpw",
    logging: true,
    synchronize: false,
    host: "0.0.0.0",
    port: 49155,
    entities: [Users],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main()
  .then(() => {
    console.log("Connected Database");
  })
  .catch((err) => {
    console.log(err);
  });
