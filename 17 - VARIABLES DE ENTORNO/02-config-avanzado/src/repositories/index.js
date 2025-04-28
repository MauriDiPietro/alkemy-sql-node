import { initMySqlDB } from "./mysql/connection.js";
import { initMongoDB } from "./mongodb/connection.js";
import { productRepositoryMySQL } from "./mysql/product-repository.js";
import { productRepositoryMongo } from "./mongodb/product-repository.js";
import { productRepositoryFs } from "./filesystem/product-repository.js";
import config from "../config/index.js";

let productRepository = null;
let persistence = config.PERSISTENCE;

switch (persistence) {
    case 'mysql':
        initMySqlDB().then(()=>console.log('conectado a mysql')).catch((err)=>console.log(err));
        productRepository = productRepositoryMySQL;
        // userRepository = userRepositoryMySQL;
        break;
    case 'mongo':
        initMongoDB().then(()=>console.log('conectado a mongo')).catch((err)=>console.log(err));
        productRepository = productRepositoryMongo;
        // userRepository = userRepositoryMongo;
    case 'fs':
        productRepository = productRepositoryFs;
        break;
    default:
        break;
}

export default { productRepository };