require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
// database
const connectDB = require("./db/connect");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
