const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connection = require("./connection");
// Import routes
const userRouter = require("./routes/user");

// dotenv Configuration
dotenv.config();

// DB Connection
connection();

// api routes
app.use("/api/user", userRouter);

// Listening to port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
