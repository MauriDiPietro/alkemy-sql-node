import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/mysql/user-repository.js";
import CustomError from "../utils/custom-error.js";
import { createHash, isValidPassword } from "../utils/user-utils.js";
import config from "../config/index.js";

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  getByEmail = async (email) => {
    try {
      return await this.repository.getByEmail(email);
    } catch (error) {
      throw new Error(error);
    }
  };

  register = async (body) => {
    try {
      const { email, password } = body;
      const existUser = await this.getByEmail(email);
      if (existUser) throw new CustomError("El usuario ya existe", 400);
      const response = await this.repository.create({
        ...body,
        password: createHash(password),
      });
      if (!response)
        throw new CustomError("Error al registrar al usuario", 400);
      return response;
    } catch (error) {
      throw error;
    }
  };

  login = async (email, password) => {
    try {
      const existUser = await this.getByEmail(email);
      if (!existUser) throw new CustomError("Credenciales incorrectas", 401);
      const passValid = isValidPassword(password, existUser.password);
      if (!passValid) throw new Error("Credenciales incorrectas", 401);
      return existUser;
    } catch (error) {
      throw error;
    }
  };

  generateToken = (user) => {
    const payload = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      role: user.role_id,
    };
    return jwt.sign(payload, config.SECRET_KEY_JWT, {
      expiresIn: "20m",
    });
  };
}

export const userService = new UserService(userRepository);
