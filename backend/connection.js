const mongoose = require("mongoose");

const connection = async () => {
  const conn = await mongoose.connect(process.env.DB_URI);
  !conn
    ? console.log("connection failed")
    : console.log("connected Successfully");
};

module.exports = connection;
