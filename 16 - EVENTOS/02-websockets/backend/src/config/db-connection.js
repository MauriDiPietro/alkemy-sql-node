import { Sequelize } from "sequelize";

export const db = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export const initMySqlDB = async () => {
  try {
    await db.sync({ force: false });
  } catch (err) {
    throw new Error(err);
  }
};

