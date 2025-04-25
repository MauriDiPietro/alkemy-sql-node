import express from 'express';
import { initMySQL } from './db.js';
import config from './config/index.js';

const app = express();

const PORT = config.PORT

// console.log(config.ENV)

initMySQL()
  .then(() => console.log('Connected to MySQL'))
  .catch((error) => console.error(error));

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));