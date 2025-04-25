import { MessageModel } from "../../models/message-model.js";
import MySqlRepository from "./mysql-repository.js";

export default class MessageRepository extends MySqlRepository {
  constructor() {
    super(MessageModel);
  }
}

export const messageRepositoryMySQL = new MessageRepository();
