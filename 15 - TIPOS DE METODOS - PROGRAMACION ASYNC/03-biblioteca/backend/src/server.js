import express from "express";
import bookRouter from "./routes/book-router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { initMySqlDB } from "./config/db-connection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRouter);

app.use(errorHandler);

initMySqlDB()
  .then(() => console.log("Conectado a la db"))
  .catch((err) => console.log(err));

const PORT = 8080;

app.listen(PORT, () => console.log(`SERVER UP ON PORT ${PORT}`));
