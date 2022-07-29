// Connection to the database
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // process.env.MONGO_URL = mongodb://localhost:27017/mernapp
    const conn = await mongoose.connect("mongodb://localhost:27017/mernapp");

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
