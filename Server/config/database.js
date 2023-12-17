const mongoose = require("mongoose");

require("dotenv").config();
exports.dbConnect = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(process.env.DATABASE_URL);
    console.log("DataBase Connected", ConnectionInstance.connection.host);
  } catch (error) {
    console.log(`Error in DB Connection ${error}`);
    process.exit(1);
  }
};
