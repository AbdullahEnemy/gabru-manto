const foodItems = require("../models/foodItems");

const addItem = async (req, res, next) => {
  try {
    if (authorize_user("admin", req, res)) return;
    const existingFoodItem = await foodItems.findOne({
      name: req.body.name,
      restaurantName: req.body.restaurantName,
    });
    if (existingFoodItem) {
      return res.status(400).json({ message: "Food item already exists" });
    }
    const newFoodItem = await foodItems.create(req.body);
    res.status(200).json({ message: "Food item added successfully" });
    next();
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during addition: ${error.message}`,
    });
  }
};
const show = async (req, res, next) => {
  try {
    const RegisteredfoodItems = await foodItems.find();
    if (!RegisteredfoodItems) {
      return res.json({ message: "No rejected request " });
    }
    res.status(200).json(RegisteredfoodItems);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred when fetching foodItems: ${error}`,
    });
  }
};
const index = async (req, res) => {
  try {
    const showfoodItems = await foodItems.findOne({ _id: req.params.id });

    if (!showfoodItems) {
      return res.json({ message: "No foodItems Found" });
    }

    res.status(200).json(showfoodItems);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during foodItems fetching: ${error}`,
    });
  }
};
const del = async (req, res) => {
  try {
    if (authorize_user("admin", req, res)) return res;

    const deletedfoodItems = await foodItems.findOneAndDelete({
      _id: req.params.id,
    });

    if (!deletedfoodItems) {
      return res.status(400).json({ message: "Restaurant not found" });
    }

    res.status(200).json({ message: "foodItems deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during foodItems deletion: ${error}`,
    });
  }
};

const authorize_user = (type, req, res) => {
  if (req.user && req.user.userType !== type) {
    return res.json({
      status: 403,
      message: "You are not allowed to perform this action",
    });
  }
  return false; 
};

const foodItemControllers = {
  addItem: addItem,
  show: show,
  index: index,
  del: del,
};

module.exports = foodItemControllers;
