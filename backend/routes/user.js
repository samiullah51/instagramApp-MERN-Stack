const User = require("../models/User");
const router = require("express").Router();

router.get("/register", (req, res) => {
  res.send("tesing apiss......");
});

module.exports = router;
