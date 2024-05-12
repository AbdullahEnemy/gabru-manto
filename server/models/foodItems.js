const mongoose = require("mongoose");
const foodItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  restaurantName: {
    type: String,
    required: [true, "Your Restaurant Name is required"],
  },
  cuisine: {
    type: String,
    required: [true, "Missing required field 'cuisine'"],
  },
  price: {
    type: Number,
    required: [true, "Your price is missing"],
  },
  imgUrl: {
    type: String,
    required: [true, "IMG URL is missing"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Food Items", foodItemsSchema);
