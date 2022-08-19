const express = require("express");
const verifyToken = require("../middleware/auth");
const router = express.Router();
const Post = require("../models/Post");

//get all post
router.get("/", verifyToken, async (req, res) => {
  try {
    const post = await Post.find({ user: req.userId }).populate("user", [
      "userName",
    ]);
    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
});

//create post
router.post("/", verifyToken, async (req, res) => {
  const { title, description, status, url } = req.body;
  if (!title) {
    return res.status(500).json({
      success: false,
      message: "Invalid Title",
    });
  }
  try {
    const newPost = new Post({
      title,
      description: description || "",
      status: status || "To Learn",
      url: (url?.startsWith("https://") ? url : `https://${url}`) || "",
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

//update post

router.put("/:id", verifyToken, async (req, res) => {
  const { title, description, status, url } = req.body;
  if (!title) {
    return res.status(500).json({
      success: false,
      message: "Invalid Title",
    });
  }
  try {
    let updatePost = {
      title,
      description: description || "",
      status: status || "To Learn",
      url: (url?.startsWith("https://") ? url : `https://${url}`) || "",
    };
    const authUpdatePost = { _id: req.params.id, user: req.userId };
    updatePost = await Post.findOneAndUpdate(authUpdatePost, updatePost, {
      new: true,
    });
    if (!updatePost) {
      return res.status(401).json({
        success: false,
        message: "Error ID Post or ID User",
      });
    }
    return res.json({
      success: true,
      message: "Update Post Success",
      updatePost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
});

//delete post

router.delete("/:id", verifyToken, async (req, res) => {
  const authDeletePost = { _id: req.params.id, user: req.userId };
  deletePost = await Post.findOneAndDelete(authDeletePost);
  if (!deletePost) {
    return res.status(401).json({
      success: false,
      message: "Error ID Post or ID User",
    });
  }
  return res.json({
    success: true,
    message: "Delete Post Success",
  });
});

module.exports = router;
