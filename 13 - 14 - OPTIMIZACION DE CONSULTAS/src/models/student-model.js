import { db } from "../config/db-connection.js";
import { DataTypes } from "sequelize";

export const StudentModel = db.define(
  "students",
  {
    firstName: {
      type: DataTypes.STRING(20), //VARCHAR(20)
      allowNull: false, //NOT NULL
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true  //Crea un índice
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    paranoid: true,
    indexes: [
      {
        fields: ["studentId"]
      }
    ]
  }
);

/*
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    studentId INT NOT NULL,
    deletedAt TIMESTAMP NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
)
*/

