import CustomError from "../utils/custom-error.js";
import { errorMessages } from "../utils/status-messages.js";
import repositories from "../repositories/index.js";
const { bookRepository } = repositories;

export default class BookServices {
  constructor(repository) {
    this.repository = repository;
  }

  getAll = async (orderTitle) => {
    try {
      return await this.repository.getAll(orderTitle);
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      const response = await this.repository.getById(id);
      if (!response) throw new CustomError(errorMessages.NOT_FOUND, 404);
      return response;
    } catch (error) {
      throw error;
    }
  };

  create = async (obj) => {
    try {
      const response = await this.repository.create(obj);
      if (!response) throw new CustomError(errorMessages.ERROR_CREATE, 400);
      return response;
    } catch (error) {
      throw error;
    }
  };

  update = async (id, body) => {
    try {
      const response = await this.repository.update(id, body);
      if (!response) throw new CustomError(errorMessages.ERROR_UPDATE, 400);
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const response = await this.repository.delete(id);
      if (!response) throw new CustomError(errorMessages.ERROR_DELETE, 400);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const bookServices = new BookServices(bookRepository);
