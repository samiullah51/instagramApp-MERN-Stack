const User = require("../models/User");
const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("tesing apiss......");
});

module.exports = router;
