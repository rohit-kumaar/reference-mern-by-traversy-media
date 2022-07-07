const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRouters"));

app.listen(port, () =>
  console.log(`Server is running in port http://localhost:${port}`)
);
