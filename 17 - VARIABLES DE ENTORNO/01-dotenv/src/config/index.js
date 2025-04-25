import dotenv from "dotenv";

const ENV = "PROD";

dotenv.config(
    {
        path: ENV === "PROD" ? "../.env.prd" : ENV === "QAS" ? "../.env.qas" : "../.env.dev"
    }
);

export default {
    ENV,
    PORT: process.env.PORT || 3000,
    DB_NAME_MYSQL: process.env.DB_NAME_MYSQL,
    DB_USER_MYSQL: process.env.DB_USER_MYSQL,
    DB_PASSWORD_MYSQL: process.env.DB_PASSWORD_MYSQL,
    DB_HOST_MYSQL: process.env.DB_HOST_MYSQL,
}