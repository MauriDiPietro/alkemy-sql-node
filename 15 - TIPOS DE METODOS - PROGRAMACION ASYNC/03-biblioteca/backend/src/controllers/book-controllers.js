import { bookServices } from "../services/book-services.js";

class BookControllers {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res, next) => {
    try {
      const { order } = req.query;
      const books = await this.service.getAll(order);  
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await this.service.getById(id);
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const newBook = await this.service.create(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const bookUpd = await this.service.update(id, req.body);
      res.status(200).json(bookUpd);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const bookDel = await this.service.delete(id);
      res.status(200).json(bookDel);
    } catch (error) {
      next(error);
    }
  };
}

export const bookControllers = new BookControllers(bookServices);
