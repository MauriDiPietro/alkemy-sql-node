import { userService } from "../services/user-service.js";

class UserController {
  constructor(service) {
    this.service = service;
  }

  register = async (req, res, next) => {
    try {
      const response = await this.service.register(req.body);
      res.json({ message: "Register OK", user: response });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await this.service.login(email, password);
      const token = this.service.generateToken(user);
      res
        .cookie("token", token, { httpOnly: true })
        .json({ message: "Login OK", user: user.email });
    } catch (error) {
      next(error);
    }
  };

  getInfoUser = async (req, res, next) => {
    try {
      const email = req.user.email;
      const user = await this.service.getByEmail(email);
      res.json(user);
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UserController(userService);
