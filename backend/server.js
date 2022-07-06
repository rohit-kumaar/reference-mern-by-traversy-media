const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

app.get("/api/goals", (req, res) => {
  res.status(200).json({ message: "Get Goals" });
});

app.listen(port, () =>
  console.log(`Server is running in port http://localhost:${port}`)
);
