import { DataTypes } from "sequelize";
import { db } from "../config/db-connection.js";

export const UserModel = db.define(
  "users",
  {
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    // role: { type: DataTypes.STRING, allowNull: false, defaultValue: "user" },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      references: {
        model: "roles",
        key: "id", //role_id --> id (roles)
      },
    },
  },
  {
    paranoid: true, // soft delete
    timestamps: true, // createdAt, updatedAt
  }
);
