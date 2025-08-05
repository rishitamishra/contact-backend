const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc Register a new user
// @route POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("User created", user);

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      message: "User registered successfully"
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      accessToken,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Get current user
// @route GET /api/users/current
// @access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json({
    message: "Current user info",
    user: req.user,
  });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
