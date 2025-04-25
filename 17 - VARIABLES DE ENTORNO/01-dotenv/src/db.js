import { Sequelize } from "sequelize";
import config from "./config/index.js";

console.log(config)

const db = new Sequelize(
  config.DB_NAME_MYSQL,
  config.DB_USER_MYSQL,
  config.DB_PASSWORD_MYSQL,
  {
    host: config.DB_HOST_MYSQL,
    dialect: "mysql",
    logging: false,
  }
);
// const db = new Sequelize(process.env.MYSQL_URL)

export const initMySQL = async () => {
  try {
    await db.sync({ force: false });
  } catch (error) {
    throw new Error(`Error connecting to MySQL: ${error}`);
  }
};
