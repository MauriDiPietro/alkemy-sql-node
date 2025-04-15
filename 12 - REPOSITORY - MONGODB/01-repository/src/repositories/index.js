import { studentRepositoryMySQL } from "./mysql/student-repository.js";

let studentRepository = null;
let persistence = 'mysql';

switch (persistence) {
    case 'mysql':
        studentRepository = studentRepositoryMySQL
        break;

    default:
        break;
}

export default { studentRepository }