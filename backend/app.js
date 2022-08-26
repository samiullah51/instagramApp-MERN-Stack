const express = require("express");
const dotenv = require("dotenv");
const app = express();
// Import routes
const userRouter = require("./routes/user");

// dotenv Configuration
dotenv.config();

// api routes
app.use("/api/user", userRouter);

// Listening to port
app.listen(5000, () => {
  console.log("server is running on port 5000");
});
