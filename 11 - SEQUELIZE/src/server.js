import express from "express";
import { initMySQLDB } from "./config/db-connection.js";
import { errorHandler } from "./middlewares/error-handler.js";
import studentRouter from './routes/student-router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/students', studentRouter);

app.use(errorHandler)

initMySQLDB()
  .then(() => console.log("conectado a la db"))
  .catch((error) => console.log(error));

  
app.listen(8080, () => console.log("SERVER OK, puerto 8080"));
