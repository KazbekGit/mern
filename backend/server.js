import express from "express";
import connectToDB from "./config/db.js";
import cors from "cors";
import { Router } from "express";

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5000",
  })
);

app.get('/', (req, res) => {
  res.status(200).send('<h3>Main page here</h3>')
})

const startServer = async () => {
  try {
    // Connect to DB
    await connectToDB();
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is started on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error to connect to BD", error.message);
  }
};

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.json({
    message: err.message,
  });
});

// logging
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

startServer();
