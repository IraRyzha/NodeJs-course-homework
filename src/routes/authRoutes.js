const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthService = require("../services/authService");

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await AuthService.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const newUser = await AuthService.register({ username, password });
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await AuthService.findUserByUsername(username);
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    if (user.current_token) {
      const isValid = await AuthService.validateToken(user.current_token);
      if (isValid) {
        return res
          .status(200)
          .json({ message: "Login successful", token: user.current_token });
      }
    }

    const token = await AuthService.generateToken(user);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

module.exports = router;
