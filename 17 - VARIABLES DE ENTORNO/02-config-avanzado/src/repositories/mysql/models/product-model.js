import { db } from "../connection.js";
import { DataTypes } from "sequelize";

export const ProductModel = db.define(
  "products",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);
