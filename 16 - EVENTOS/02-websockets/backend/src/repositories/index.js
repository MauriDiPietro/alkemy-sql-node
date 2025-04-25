import { messageRepositoryMySQL } from "./mysql/message-repository.js";

let messageRepository = null;
let persistence = 'mysql';

switch (persistence) {
    case 'mysql':
        // await initMySqlDB();
        messageRepository = messageRepositoryMySQL;
        break;
    case 'mongo':
        // await initMongoDB();
        // messageRepository = messageRepositoryMongo;
    default:
        break;
}

export default { messageRepository };