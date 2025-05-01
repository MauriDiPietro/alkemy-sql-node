import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import { initMySQLDB } from "./config/db-connection.js";
import config from "./config/index.js";
import { errorHandler } from "./middlewares/error-handler.js";
import userRouter from "./routes/user-router.js";
import './middlewares/passport.js'

const app = express();

app.use(cookieParser());
app.use(passport.initialize())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use(errorHandler);

initMySQLDB()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Database connection error:", error));

app.listen(config.PORT, () => console.log("Server running on port 8080"));
