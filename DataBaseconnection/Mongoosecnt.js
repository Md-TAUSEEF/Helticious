const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/.env" });

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection to MongoDB successful");
  } catch (error) {
    console.error("Database connection failed:", {
      message: error.message,
      name: error.name,
      stack: error.stack,
    });
    process.exit(1);
  }
};

module.exports = connectdb;
