import CustomError from "../utils/custom-error.js";
import models from "../models/associations.js";

const { StudentModel, CourseModel } = models;

class StudentControllers {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res, next) => {
    try {
      // findAll({ paranoid: false })
      const students = await this.model.findAll({
        //SELECT * FROM ....
        include: [
          {
            model: CourseModel,
            as: "coursesOfStudent", //mismo nombre que en belongsToMany
            attributes: ["title"],
          },
        ],
      });
      res.status(200).json(students);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const student = await this.model.findByPk(id, {
        //const student = await this.model.findOne({where: {id}}}, {
        include: [
          {
            model: CourseModel,
            as: "coursesOfStudent",
          },
        ],
      });
      if (!student) throw new CustomError("Student not found", 404);
      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  };

  create = async (req, res, next) => {
    try {
      const newStudent = await this.model.create(req.body);
      res.status(201).json(newStudent);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const { id } = req.params;
      const studentUpd = await this.model.update(req.body, { where: { id } });
      if (!studentUpd) throw new CustomError("Student not found", 404);
      res.status(200).json(studentUpd);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const { id } = req.params;
      const studentDel = await this.model.destroy({ where: { id } });
      if (!studentDel) throw new CustomError("Student not found", 404);
      res.status(200).json(studentDel);
    } catch (error) {
      next(error);
    }
  };
}

export const studentControllers = new StudentControllers(StudentModel);
