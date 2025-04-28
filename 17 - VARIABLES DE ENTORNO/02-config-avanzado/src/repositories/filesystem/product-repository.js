import path from 'path'
import FSRepository from "./fs-repository.js";

class ProductRepositoryFS extends FSRepository {
    constructor(path) {
        super(path);
    }
}

export const productRepositoryFs = new ProductRepositoryFS(path.join(process.cwd(), "src/data/products.json"));