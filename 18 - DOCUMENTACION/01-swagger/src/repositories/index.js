import { bookRepositoryMySQL } from "./mysql/book-repository.js";

let bookRepository = null;
let persistence = 'mysql';

switch (persistence) {
    case 'mysql':
        // await initMySqlDB();
        bookRepository = bookRepositoryMySQL;
        break;
    case 'mongo':
        // await initMongoDB();
        // bookRepository = bookRepositoryMongo;
    default:
        break;
}

export default { bookRepository };