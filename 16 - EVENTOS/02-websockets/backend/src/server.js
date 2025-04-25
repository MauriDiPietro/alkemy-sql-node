import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import messageRouter from "./routes/message-router.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { initMySqlDB } from "./config/db-connection.js";
import { websocketServerUp } from "./socket-server.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/messages", messageRouter);

app.use(errorHandler);

initMySqlDB()
  .then(() => console.log("Conectado a la db"))
  .catch((err) => console.log(err));

const PORT = 8080;

const httpServer = app.listen(PORT, () =>
  console.log(`SERVER UP ON PORT ${PORT}`)
);

export const socketServer = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

websocketServerUp(socketServer);
