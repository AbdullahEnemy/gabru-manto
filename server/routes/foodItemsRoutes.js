const express = require("express");
const foodItemControllers = require("../controllers/foodItemsControllers");
const { userVerification } = require("../middlewares/auth_middleware");
const router = express.Router();

router.post("/add", userVerification, foodItemControllers.addItem);
router.get("/show", userVerification, foodItemControllers.show);
router.get("/:id", userVerification, foodItemControllers.index);
router.delete("/:id", userVerification, foodItemControllers.del);
module.exports = router;
