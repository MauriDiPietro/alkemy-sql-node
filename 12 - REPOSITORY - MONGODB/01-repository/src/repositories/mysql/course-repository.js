import models from "../../models/associations.js";
import MySqlRepository from "./mysql-repository.js";

const { CourseModel } = models;

class CourseRepository extends MySqlRepository {
  constructor() {
    super(CourseModel);
  }
}

export const courseRepositoryMySQL = new CourseRepository();
