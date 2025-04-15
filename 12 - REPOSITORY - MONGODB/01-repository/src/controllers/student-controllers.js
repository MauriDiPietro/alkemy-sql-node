import { studentServices } from "../services/student-services.js";


class StudentControllers {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res, next) => {
    try {
     
      res.status(200).json(students);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const student = await this.service.getById(id)
      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
     
      res.status(200).json(studentUpd);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
    
      res.status(200).json(studentDel);
    } catch (error) {
      next(error);
    }
  };
}

export const studentControllers = new StudentControllers(studentServices);
