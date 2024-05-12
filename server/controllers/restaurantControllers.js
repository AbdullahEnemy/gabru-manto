const Restaurant = require("../models/restaurant");

const register = async (req, res, next) => {
  try {
    if (authurize_user("user", req, res)) return res;
    const existingRestaurant = await Restaurant.findOne({
      name: req.body.name,
    });
    if (existingRestaurant) {
      return res.status(400).json({ message: "Restaurant already exists" });
    }
    const newRestaurant = await Restaurant.create(req.body);
    res.status(200).json({ message: "Restaurant registered successfully" });
    next();
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during registration: ${error.message}`,
    });
  }
};
const approve = async (req, res, next) => {
  try {
    if (authurize_user("admin", req, res)) return res;
    const updatedRestaurant = await Restaurant.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: "Registered",
          updatedAt: Date.now(),
        },
      }
    );

    if (!updatedRestaurant) {
      return res.status(400).json({ message: "Restaurant not found" });
    }

    res.status(200).json({ message: "Restaurant Approved successfully" });
  } catch (error) {
    res.status(500).json({
      error: `An error occurred during Restaurant approval: ${error}`,
    });
  }
};
const showPending = async (req, res, next) => {
  try {
    if (authurize_user("admin", req, res)) return res;
    const PendingRestaurant = await Restaurant.find({ status: "pending" });
    if (!PendingRestaurant) {
      return res.json({ message: "No rejected request " });
    }

    res.status(200).json(PendingRestaurant);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred when fetching Pending Restaurants: ${error}`,
    });
  }
};
const show = async (req, res, next) => {
  try {
    if (authurize_user("admin", req, res)) return res;
    const RegisteredRestaurant = await Restaurant.find({
      status: "Registered",
    });
    if (!RegisteredRestaurant) {
      return res.json({ message: "No rejected request " });
    }

    res.status(200).json(RegisteredRestaurant);
  } catch (error) {
    res.status(500).json({
      error: `An error occurred when fetching Registered Restaurants: ${error}`,
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
const restaurantControllers = {
  register: register,
  approve: approve,
  showPending: showPending,
  show: show,
};

module.exports = restaurantControllers;