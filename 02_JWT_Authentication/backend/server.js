const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const express = require("express");
const colors = require("colors");

connectDB();

const app = express();

// For create user
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router connection
app.use("/api/goals", require("./routes/goalRouters"));

// Override the default express error handler
app.use(errorHandler);

// Server running
app.listen(port, () =>
  console.log(`Server is running in port http://localhost:${port}`)
);
