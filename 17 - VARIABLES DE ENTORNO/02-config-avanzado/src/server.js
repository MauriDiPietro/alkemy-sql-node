import express from "express";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error-handler.js";
import productRouter from "./routes/product-router.js";
import config from "./config/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const PORT = config.PORT || 8000;

app.use("/products", productRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log("Server listening on port 8080"));
