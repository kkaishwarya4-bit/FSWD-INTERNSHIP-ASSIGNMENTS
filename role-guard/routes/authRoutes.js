const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const {
  auth,
  adminOnly
} = require("../middleware/auth");

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {

  const {
    name,
    email,
    password,
    role
  } = req.body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role
  });

  await user.save();

  res.json({
    message: "User Registered"
  });
});


// LOGIN
router.post("/login", async (req, res) => {

  const {
    email,
    password
  } = req.body;

  const user =
    await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User Not Found"
    });
  }

  const match =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!match) {
    return res.status(400).json({
      message: "Wrong Password"
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    }
  );

  res.json({
    token
  });
});


// USER ROUTE
router.get(
  "/profile",
  auth,
  (req, res) => {

    res.json({
      message:
      "Welcome User",
      user: req.user
    });
  }
);


// ADMIN ROUTE
router.get(
  "/admin",
  auth,
  adminOnly,
  (req, res) => {

    res.json({
      message:
      "Welcome Admin"
    });
  }
);

module.exports = router;