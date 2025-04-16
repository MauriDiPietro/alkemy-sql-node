import { connect } from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/alkemy";

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};
