import { ProductModel } from "./models/product-model.js";
import MongoRepository from "./mongo-repository.js";

class ProductRepositoryMongo extends MongoRepository {
  constructor(model) {
    super(model);
  }

  getByName = async (name) => {
    try {
      return await this.model.find({ name });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const productRepositoryMongo = new ProductRepositoryMongo(ProductModel);