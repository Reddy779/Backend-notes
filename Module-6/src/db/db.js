const mongoose = require('mongoose');


async function connectDB() {

  try {

    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected successfully");

  } catch (err) {
    console.log("Database Connection ERROR", err);
  }

}

module.exports = connectDB;