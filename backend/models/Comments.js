const mongoose = require("mongoose");
const CommentsSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userPic: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", CommentsSchema);
