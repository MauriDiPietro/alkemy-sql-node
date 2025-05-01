import 'dotenv/config';

export default {
    PORT: process.env.PORT || 3000,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    SECRET_KEY_JWT: process.env.SECRET_KEY_JWT,
}