import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MongoDB_URI = process.env.MongoDB_URI;

const connectToDB = async () => {
  await mongoose
    .connect(MongoDB_URI)
    .then(() => {
      console.log("DB is connected");
    })
    .catch(() => {
      "DB connection error";
    });
};

export default connectToDB;
