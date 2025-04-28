import CustomError from "../utils/custom-error.js";
import repository from '../repositories/index.js'

const { productRepository } = repository;

class ProductService {
    constructor(repository) {
        this.repository = repository;
    }

    getAll = async () => {
        try {
            return await this.repository.getAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    getById = async (id) => {
        try {
            const product = await this.repository.getById(id);
            if (!product) throw new CustomError('Product not found', 404);
            return product;
        } catch (error) {
            throw (error);
        }
    }

    create = async (product) => {
        try {
           const newProd = await this.repository.create(product);
           if(!newProd) throw new CustomError('Error creating product', 400);
           return newProd; 
        } catch (error) {
            throw (error);
        }
    }

    update = async (id, obj) => {
        try {
            const prodUpd = await this.repository.update(id, obj);
            if(!prodUpd) throw new CustomError('Error updating product', 400);
            return prodUpd;
        } catch (error) {
            throw new Error(error);
        }
    }

    delete = async (id) => {
        try {
            const prodDel = await this.repository.delete(id);
            if(!prodDel) throw new CustomError('Error deleting product', 400);
            return prodDel;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const productService = new ProductService(productRepository);