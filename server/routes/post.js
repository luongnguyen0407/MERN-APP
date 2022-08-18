const express = require("express");
const verifyToken = require("../middleware/auth");
const router = express.Router();
const Post = require("../models/Post");
router.post("/", verifyToken, async (req, res) => {
  const { title, description, status, url } = req.body;
  if (!title) {
    return res.status(500).json({
      success: false,
      message: "Invalid Title",
    });
  }
  if (!url) {
    return res.status(500).json({
      success: false,
      message: "Invalid url",
    });
  }
  try {
    const newPost = new Post({
      title,
      description,
      status: status || "To Learn",
      url: url?.startsWith("https://") ? url : `https://${url}`,
      user: req.userId,
    });
    await newPost.save();
    return res.json({
      success: true,
      message: "Create Post Success",
      newPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
});

module.exports = router;
