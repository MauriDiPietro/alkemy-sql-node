import { db } from "../config/db-connection.js";
import models from "../models/associations.js";
import { fakerES as faker } from "@faker-js/faker";

const { StudentModel, CourseModel } = models;

const courseData = [
  {
    title: "JavaScript",
    description:
      "Lenguaje de programación web del lado del cliente y servidor.",
  },
  {
    title: "Python",
    description:
      "Lenguaje popular para ciencia de datos, automatización y desarrollo web.",
  },
  {
    title: "Java",
    description:
      "Lenguaje robusto usado en aplicaciones empresariales y móviles.",
  },
  {
    title: "C#",
    description:
      "Lenguaje desarrollado por Microsoft, ideal para aplicaciones Windows y videojuegos con Unity.",
  },
  {
    title: "Go",
    description:
      "Lenguaje eficiente y simple, ideal para sistemas distribuidos y backend.",
  },
  {
    title: "Ruby",
    description:
      "Lenguaje orientado a objetos, conocido por el framework Rails.",
  },
  {
    title: "PHP",
    description:
      "Lenguaje ampliamente utilizado en desarrollo web del lado del servidor.",
  },
  {
    title: "TypeScript",
    description:
      "Superset de JavaScript con tipado estático, ideal para aplicaciones grandes.",
  },
  {
    title: "Swift",
    description: "Lenguaje moderno de Apple para desarrollo iOS y macOS.",
  },
  {
    title: "Kotlin",
    description: "Lenguaje moderno y conciso para desarrollo Android.",
  },
  {
    title: "Rust",
    description: "Lenguaje seguro y de alto rendimiento para sistemas.",
  },
  {
    title: "C++",
    description:
      "Lenguaje poderoso para desarrollo de software de alto rendimiento.",
  },
  {
    title: "Scala",
    description:
      "Lenguaje funcional para aplicaciones en JVM y sistemas escalables.",
  },
  {
    title: "Perl",
    description:
      "Lenguaje veterano usado en administración de sistemas y scripting.",
  },
  {
    title: "Elixir",
    description:
      "Lenguaje funcional y concurrente, ideal para sistemas distribuidos.",
  },
  {
    title: "Dart",
    description:
      "Lenguaje de Google usado principalmente con Flutter para apps móviles.",
  },
  {
    title: "R",
    description: "Lenguaje especializado en estadísticas y análisis de datos.",
  },
  {
    title: "SQL",
    description: "Lenguaje de consulta para bases de datos relacionales.",
  },
];

const seeder = async () => {
  try {
    await db.sync({ force: true });

    const courses = [];
    for (const data of courseData) {
      const course = await CourseModel.create({
        title: data.title,
        description: data.description,
      });
      courses.push(course);
    }

    for (let i = 0; i < 100; i++) {
      const student = await StudentModel.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        studentId: i + 1,
      });

      const getRandomCourses = (courses) => {
        const num = Math.floor(Math.random() * 5) + 1; //1 y 5
        const numSelect = courses.sort(() => 0.5 - Math.random());
        return numSelect.slice(0, num);
      };

      const randomCourses = getRandomCourses(courses);
      await student.addCoursesOfStudent(randomCourses);
    }
    console.log("datos generados con exito");
  } catch (error) {
    console.log(error);
  } finally {
    await db.close();
    console.log("operacion finalizada");
  }
};

seeder();
