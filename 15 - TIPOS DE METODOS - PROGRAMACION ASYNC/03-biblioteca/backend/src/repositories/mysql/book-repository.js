import { BookModel } from "../../models/book-model.js";
import MySqlRepository from "./mysql-repository.js";

export default class BookRepository extends MySqlRepository {
  constructor() {
    super(BookModel);
  }
}

export const bookRepositoryMySQL = new BookRepository();
