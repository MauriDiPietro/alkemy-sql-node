import models from "../../models/associations.js";
import MySqlRepository from "./mysql-repository.js";

const { StudentModel, CourseModel } = models;

class StudentRepository extends MySqlRepository {
  constructor() {
    super(StudentModel);
  }

  getStudentById = async (id) => {
    try {
      return await this.model.findOne({
        where: { id },
        include: [
          {
            model: CourseModel,
            as: "coursesOfStudent",
            attributes: ["title", "description"],
            through: { attributes: [] },
            required: true
          },
        ],
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  getAllStudents = async (orderLastName = 'ASC') => {
    try {
      return await this.model.findAll({
        attributes: ["firstName", "lastName"],
        order: [["lastName", `${orderLastName}`]],
        include: [
          {
            model: CourseModel,
            as: "coursesOfStudent",
            attributes: ["title"],
            through: { attributes: [] },
            required: true
          },
        ],
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const studentRepositoryMySQL = new StudentRepository();
