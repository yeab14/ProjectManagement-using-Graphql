const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/my_database", {
      
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`.red.underline.bold);
    process.exit(1); 
  }
};

module.exports = connectDB;