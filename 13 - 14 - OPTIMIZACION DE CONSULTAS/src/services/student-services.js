import CustomError from "../utils/custom-error.js";
import repositories from "../repositories/index.js";
import { errorMessages } from "../utils/status-messages.js";
import { courseServices } from "./course-services.js";
const { studentRepository } = repositories;

class StudentServices {
  constructor(repository) {
    this.repository = repository;
  }

  getById = async (id) => {
    try {
      const response = await this.repository.getStudentById(id);
      if (!response) throw new CustomError(errorMessages.NOT_FOUND, 404);
      return response;
    } catch (error) {
      throw error;
    }
  };

  getAll = async (orderLastName) => {
    try {
      return await this.repository.getAllStudents(orderLastName);
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (body) => {
    try {
      const response = await this.repository.create(body);
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
      return response;
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
      throw error;
    }
  };

  addCourseToStudent = async (idStudent, idCourse) => {
    try {
      const student = await this.getById(idStudent);
    //   console.log(student)
      const course = await courseServices.getById(idCourse);
      const response = await student.addCoursesOfStudent([course]);
      if (!response) throw new CustomError(errorMessages.ERROR_CREATE, 400);
      return response;
    } catch (error) {
      throw error;
    }
  };
}

export const studentServices = new StudentServices(studentRepository);
