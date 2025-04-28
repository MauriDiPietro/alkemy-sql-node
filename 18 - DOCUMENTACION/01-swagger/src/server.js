//npm i swagger-jsdoc swagger-ui-express

import express from "express";
import bookRouter from "./routes/book-router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { initMySqlDB } from "./config/db-connection.js";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import { info } from "./docs/info.js";

const app = express();

const specs = swaggerJSDoc(info);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRouter);

app.use(errorHandler);

initMySqlDB()
  .then(() => console.log("Conectado a la db"))
  .catch((err) => console.log(err));

const PORT = 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
