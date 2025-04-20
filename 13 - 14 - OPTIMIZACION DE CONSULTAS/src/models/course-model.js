import { db } from "../config/db-connection.js";
import { DataTypes } from "sequelize";

export const CourseModel = db.define(
  "courses",
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    timestamps: true,
  }
);


