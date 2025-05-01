import { DataTypes } from "sequelize";
import { db } from "../config/db-connection.js";

export const PermissionModel = db.define(
    "permissions",
    {
        name: { type: DataTypes.STRING, allowNull: false }
    },
    {
        timestamps: false
    }
)

/*
CREATE TABLE permissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

INSERT INTO test.permissions (name)
VALUES 
  ('create'),
  ('read'),
  ('update'),
  ('delete');
*/