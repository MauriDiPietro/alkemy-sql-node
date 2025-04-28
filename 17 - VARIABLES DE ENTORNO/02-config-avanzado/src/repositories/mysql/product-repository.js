import { ProductModel } from "./models/product-model.js";
import MySqlRepository from "./mysql-repository.js";

export default class ProductRepository extends MySqlRepository {
  constructor() {
    super(ProductModel);
  }
}

export const productRepositoryMySQL = new ProductRepository();
