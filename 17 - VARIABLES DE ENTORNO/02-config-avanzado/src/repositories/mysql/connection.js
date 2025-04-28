import { Sequelize } from "sequelize";
import config from "../../config/index.js";

export const db = new Sequelize(
  config.DB_NAME_MYSQL,
  config.DB_USER_MYSQL,
  config.DB_PASSWORD_MYSQL,
  {
    host: config.DB_HOST_MYSQL,
    dialect: "mysql",
    logging: false,
  }
);

export const initMySqlDB = async () => {
  try {
    await db.sync({ force: false });
  } catch (err) {
    throw new Error(err);
  }
};
