require("dotenv").config();
const express = require("express");
const argon2 = require("argon2");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

// @register router
router.post("/register", async (req, res) => {
  const { userName, passWord } = req.body;
  //check null userName or password
  if (!userName || !passWord) {
    return res.status(400).json({
      success: false,
      message: "Missing userName or passWord",
    });
  }
  try {
    //check have userName
    const user = await User.findOne({ userName });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "UserName already" });
    //hasPass
    const newPass = await argon2.hash(passWord);
    //create new use
    const newUser = new User({
      userName,
      passWord: newPass,
    });
    await newUser.save();

    //return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ASS_TOKEN
    );
    return res.json({
      success: true,
      message: "Register success",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Interval server error",
    });
  }
});

// @login router

router.post("/login", async (req, res) => {
  const { userName, passWord } = req.body;
  if (!userName || !passWord) {
    return res.status(400).json({
      success: false,
      message: "Missing userName or passWord",
    });
  }
  try {
    //search user in database
    const user = await User.findOne({ userName });
    //if have user
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "UserName or Password err" });
    }

    //check pass
    const verifyPass = await argon2.verify(user.passWord, passWord);
    //if pass err
    if (!verifyPass) {
      return res
        .status(400)
        .json({ success: false, message: "Password or UserName err" });
    }
    //return token
    const accessToken = jwt.sign({ userId: user._id }, process.env.ASS_TOKEN);
    return res.json({
      success: true,
      message: "Login success",
      accessToken,
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
