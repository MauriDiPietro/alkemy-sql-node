import { db } from "../config/db-connection.js";
import { DataTypes } from "sequelize";

export const MessageModel = db.define(
  "messages",
  {
    username: { type: DataTypes.STRING, allowNull: false },
    message: { type: DataTypes.STRING, allowNull: false },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);
