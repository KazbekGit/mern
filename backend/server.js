import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MongoDB_URI = process.env.MongoDB_URI;

mongoose
  .connect(MongoDB_URI)
  .then(() => {
    console.log("DB is connected");
  })
  .catch(() => {
    "DB connection error";
  });

const app = express();

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
