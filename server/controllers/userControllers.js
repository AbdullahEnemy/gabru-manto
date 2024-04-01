const User = require("../models/user");
const { createSecretToken } = require("../utils/secret_token");
const bcrypt = require("bcryptjs");
const signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    console.log(req.body);
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create(req.body);
    const token = createSecretToken(user._id);
    console.log(user);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(200).json({ message: "Signup successful" });
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: `An error occurred during signup: ${error}` });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const auth = await bcrypt.compare(req.body.password, user.password);
      if (!auth) {
        return res.status(401).json({ message: "Password is incorrect" });
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(200)
        .json({ message: "Login successful", data: user, token: token });
    } else {
      res.status(400).json({ message: "User not found." });
    }
    // next()
  } catch (error) {
    res.status(500).json({ error: `An error occurred during login: ${error}` });
  }
};
const authurize_user = (req, res) => {
  if (req.user && req.user.userType !== "admin")
    return res.json({
      status: 403,
      message: "You are not allowed to perform this action",
    });
};
const userController = {
  signup: signup,
  login: login,
};

module.exports = userController;
