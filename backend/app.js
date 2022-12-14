const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connection = require("./connection");
const cors = require("cors");
// Import routes
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

// Cors Configuration
app.use(cors());
// dotenv Configuration
dotenv.config();

// DB Connection
connection();

// Config JSON
app.use(express.json());

// api routes
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

// Listening to port
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
