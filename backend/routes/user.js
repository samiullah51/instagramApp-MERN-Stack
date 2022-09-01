const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
const { verifyToken } = require("./verifyToken");
// Register a new User
router.post("/register", async (req, res) => {
  // Check exist user
  const checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.status(300).json({ message: "User already exist" });
    return false;
  }
  const newUser = new User({
    email: req.body.email,
    fullName: req.body.fullName,
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    // const { password, ...others } = savedUser._doc;
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Log in existing user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json("User not found");
      return false;
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const realPassword = await hashedPassword.toString(CryptoJS.enc.Utf8);

    if (realPassword !== req.body.password) {
      res.status(401).json("Invalid Credentials");
      return false;
    }

    // Create Token
    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.PASS_SEC,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.header("auth-token", token).json({ ...others, token });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all users
router.get("/allusers", verifyToken, async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
module.exports = router;
