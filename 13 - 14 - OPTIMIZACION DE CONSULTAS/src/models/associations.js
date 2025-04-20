//N:N

import { CourseModel } from "./course-model.js";
import { StudentModel } from "./student-model.js";

StudentModel.belongsToMany(CourseModel, {
    through: 'StudentCourses',
    as: 'coursesOfStudent',
    foreignKey: 'studentId' //en la tabla StudentCourses el studentId representa al estudiante
})

// const student = await StudentModel.findOne(1, {
//     include: ['coursesOfStudent']
// })

CourseModel.belongsToMany(StudentModel, {
    through: 'StudentCourses',
    as: 'students',
    foreignKey: 'courseId'
})

// await CourseModel.findOne(1, {
//     include: ['students']
// })

/*
StudentCourses
courseId  |  studentId
1         |  1
2         |  1   
*/

export default {
    StudentModel,
    CourseModel
}