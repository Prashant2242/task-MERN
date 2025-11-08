// Connection/connection.js
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://prashantbhatt488:Prashant123@cluster0.qhhdmji.mongodb.net/"
    );
    console.log(" MongoDB Connected");
  } catch (error) {
    console.error(" MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connection;
