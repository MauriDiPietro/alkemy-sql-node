import { studentServices } from "../services/student-services.js";


class StudentControllers {
  constructor(service) {
    this.service = service;
  }

  getAll = async (req, res, next) => {
    try {
      const { order } = req.query;
      const students = await this.service.getAll(order);
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
      const newStudent = await this.service.create(req.body)
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const studentUpd = await this.service.update(id, req.body)
      res.status(200).json(studentUpd);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const studentDel = await this.service.delete(id)
      res.status(200).json(studentDel);
    } catch (error) {
      next(error);
    }
  };

  addCourseToStudent = async(req, res, next) =>{
    try {
      const { idStudent } = req.params;
      const { idCourse } = req.params;
      const response = await this.service.addCourseToStudent(idStudent, idCourse);
      res.status(201).json(response)
    } catch (error) {
      next(error)
    }
  }
}

export const studentControllers = new StudentControllers(studentServices);
