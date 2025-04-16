import { productServices } from "../services/product-services.js";


class ProductControllers {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res, next) => {
    try {
      const product = await this.service.getAll();
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await this.service.getById(id)
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const newProd = await this.service.create(req.body)
      res.status(201).json(newProd);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const prodUpd = await this.service.update(id, req.body)
      res.status(200).json(prodUpd);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const prodDel = await this.service.delete(id)
      res.status(200).json(prodDel);
    } catch (error) {
      next(error);
    }
  };
}

export const productControllers = new ProductControllers(productServices);
