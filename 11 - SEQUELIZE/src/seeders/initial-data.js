import { db } from "../config/db-connection.js";
import models from "../models/associations.js";

const { StudentModel, CourseModel } = models;

const seeder = async () => {
  try {
    await db.sync({ force: true });

    const student1 = await StudentModel.create({
      firstName: "Carlos",
      lastName: "Gomez",
      studentId: 1,
    });
    const student2 = await StudentModel.create({
      firstName: "Juan",
      lastName: "Gonzalez",
      studentId: 2,
    });

    const course1 = await CourseModel.create({
      title: "Javascript",
      description: "Curso de JS Inicial",
    });
    const course2 = await CourseModel.create({
      title: "Typescript",
      description: "Curso de TS Avanzado",
    });

    await student1.addCoursesOfStudent([course1, course2]);
    await student2.addCoursesOfStudent([course1]);
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
    console.log("operacion finalizada");
  }
};

seeder();

// const test = async () => {
//   const course = await CourseModel.findOne({
//     where: { id: 1 },
//     include: [
//       {
//         model: StudentModel,
//         as: "students",
//       },
//     ],
//   });

//   console.log(JSON.stringify(course, null, 2))
// };

// test()
