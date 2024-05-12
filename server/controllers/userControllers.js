const User = require("../models/user");
const { createSecretToken } = require("../utils/secret_token");
const bcrypt = require("bcryptjs");
const signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
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
    console.log("ok");
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

const changePassword = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      _id: req.params.id,
    });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const auth = await bcrypt.compare(
      req.body.currentPassword,
      existingUser.password
    );
    if (!auth) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }
    existingUser.password = req.body.newPassword;
    await existingUser.save();
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during password update: ${error}`,
    });
  }
};
const del = async (req, res) => {
  try {
    if (authurize_user("admin", req, res)) return res;

    const deletedUser = await User.findOneAndDelete({
      _id: req.params.id,
    });

    if (!deletedUser) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during User deletion: ${error}`,
    });
  }
};
const show = async (req, res) => {
  try {
    if (authurize_user("admin", req, res)) return res;
    const showUser = await User.find({ userType: "user" });

    if (!showUser) {
      return res.json({ message: "No User Found" });
    }

    res.status(200).json(showUser);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during User fetching: ${error}`,
    });
  }
};
const index = async (req, res) => {
  try {
    if (authurize_user("admin", req, res)) return res;

    const showUser = await User.findOne({ _id: req.params.id });

    if (!showUser) {
      return res.json({ message: "No User Found" });
    }

    res.status(200).json(showUser);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during User fetching: ${error}`,
    });
  }
};
const authurize_user = (type, req, res) => {
  if (req.user && req.user.userType !== type)
    return res.json({
      status: 403,
      message: "You are not allowed to perform this action",
    });
};
const userController = {
  signup: signup,
  login: login,
  changePassword: changePassword,
  del: del,
  show: show,
  index: index,
};

module.exports = userController;
