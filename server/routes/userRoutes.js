const express = require("express");
const userController = require("../controllers/userControllers");
const { userVerification } = require("../middlewares/auth_middleware");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/", userVerification);
router.patch("/user/:id", userVerification, userController.changePassword);
router.delete("/:id", userVerification, userController.del);
router.get("/show", userVerification, userController.show);
router.get("/:id", userVerification, userController.index);
module.exports = router;
