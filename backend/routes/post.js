const Post = require("../models/Post");

const router = require("express").Router();

// Create a new post
router.post("/new", async (req, res) => {
  const newPost = new Post({
    userId: req.body.userId,
    username: req.body.username,
    profilePic: req.body.profilePic,
    desc: req.body.desc,
    poster: req.body.poster,
  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Get all posts of a specific user
router.get("/allposts/:userId", async (req, res) => {
  try {
    const allPosts = await Post.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// Delete a specific post
router.delete("/delete/:postId", async (req, res) => {
  try {
    const delPost = await Post.find({ _id: req.params.postId });
    res.status(200).json(delPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});
// Get all posts
router.get("/allposts", async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
