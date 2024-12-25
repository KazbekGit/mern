import express from "express";
import connectToDB from "./config/db.js";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:2000",
  })
);

app.get('/', (req, res) => {
  res.status(200).send('<h3>Main page here</h3>')
})

const startServer = () => {
  try {
    // Connect to DB
    connectToDB();
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

startServer();
