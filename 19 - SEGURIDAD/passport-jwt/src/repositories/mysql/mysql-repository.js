export default class MySqlRepository {
  constructor(model) {
    this.model = model;
  }

  getAll = async () => {
    try {
      return await this.model.findAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  getById = async (id) => {
    try {
      return await this.model.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (obj) => {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, body) => {
    try {
      return await this.model.update(body, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      return await this.model.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
}
