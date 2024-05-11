const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  poe: {
    type: String,
    required: [true, "Your PoE is required"],
  },
  contact: {
    type: Number,
    required: [true, "Your contact is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  cuisine: {
    type: String,
    required: [true, "Missing required field 'cuisine'"],
  },
  rating: {
    type: Number,
    required: [true, "Your rating is missing (/5)"],
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

module.exports = mongoose.model("Restaurant", restaurantSchema);
