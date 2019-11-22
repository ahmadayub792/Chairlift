import { createConnection } from "typeorm";

export function connect() {
  const conn = createConnection({
    database: "chairlift",
    entities: [
      "./src/entities/*.ts",
    ],
    host: "db",
    logging: true,
    password: "docker",
    port: 5432,
    synchronize: true,
    type: "postgres",
    username: "postgres",
  });

  return conn;
}