const express = require("express");
const userController = require("../controllers/userControllers");
const { userVerification } = require("../middlewares/auth_middleware");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/", userVerification);
module.exports = router;
