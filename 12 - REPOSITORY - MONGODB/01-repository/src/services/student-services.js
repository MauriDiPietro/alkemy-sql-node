import CustomError from "../utils/custom-error.js"
import repositories from '../repositories/index.js';
const { studentRepository } = repositories

class StudentServices {
    constructor(repository) {
        this.repository = repository
    }

    getById = async (id) => {
        try {
            const response = await this.repository.getStudentById(id)
            if(!response) throw new CustomError('Student not found', 404);
            return response
        } catch (error) {
            throw error
        }
    }
}

export const studentServices = new StudentServices(studentRepository)