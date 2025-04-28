import "dotenv/config";

export default {
  PORT: process.env.PORT || 3000,
  DB_NAME_MYSQL: process.env.DB_MYSQL_NAME,
  DB_USER_MYSQL: process.env.DB_MYSQL_USER,
  DB_PASSWORD_MYSQL: process.env.DB_MYSQL_PASS,
  DB_HOST_MYSQL: process.env.DB_MYSQL_HOST,
  MONGO_URL: process.env.MONGO_URL,
  PERSISTENCE: process.env.PERSISTENCE,
};
