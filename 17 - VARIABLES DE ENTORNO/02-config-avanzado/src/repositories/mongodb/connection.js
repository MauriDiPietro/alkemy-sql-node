import { connect } from "mongoose";
import config from "../../config/index.js";

const MONGO_URL = config.MONGO_URL;

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};
