const express = require("express");
const restaurantController = require("../controllers/restaurantControllers");
const { userVerification } = require("../middlewares/auth_middleware");
const router = express.Router();
router.post("/register", userVerification, restaurantController.register);
router.patch("/:id", userVerification, restaurantController.approve);
router.get("/pending", userVerification, restaurantController.showPending);
router.get("/show", userVerification, restaurantController.show);
module.exports = router;
