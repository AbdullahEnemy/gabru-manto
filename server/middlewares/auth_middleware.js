const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ status: false });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false });
      } else {
        const user = await User.findById(data.id);
        if (user) {
          req.user = {
            status: true,
            user: user.username,
            userType: user.userType,
          };
          next();
        } else {
          return res.json({ status: false });
        }
      }
    });
  } catch (error) {
    console.error("Error during user verification:", error);
    res
      .status(500)
      .json({ error: "An error occurred during user verification" });
  }
};
