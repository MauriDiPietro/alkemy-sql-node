import MySqlRepository from "./mysql-repository.js";
import models from "../../models/associations.js";
const { UserModel, RoleModel, PermissionModel } = models;

class UserRepository extends MySqlRepository {
  constructor(model) {
    super(model);
  }

  getByEmail = async (email) => {
    try {
      return await this.model.findOne({
        where: {
          email,
        },
        include: {
          model: RoleModel,
          as: "role",
          include: [
            {
              model: PermissionModel,
              as: "permisos",
              attributes: ["name"],
              through: { attributes: [] },
            },
          ],
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const userRepository = new UserRepository(UserModel);
