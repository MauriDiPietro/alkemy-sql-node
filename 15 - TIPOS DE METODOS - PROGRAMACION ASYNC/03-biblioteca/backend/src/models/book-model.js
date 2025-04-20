import { db } from "../config/db-connection.js";
import { DataTypes } from "sequelize";

export const BookModel = db.define(
  "books",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    image: { type: DataTypes.STRING },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);
