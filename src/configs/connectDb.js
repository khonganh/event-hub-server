const { mongoose } = require("mongoose");

require("dotenv").config();

const dbUrl = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.vctpyev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log("🚀 ~ connectDb ~ connection:", connection.connection.host);
  } catch (err) {
    console.log("🚀 ~ connectDb ~ err:", err);
    process.exit(1);
  }
};

module.exports = connectDb;
