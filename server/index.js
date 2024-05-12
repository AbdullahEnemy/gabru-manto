const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const resturantRouter = require("./routes/restaurantRoutes");
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;
const app = express();

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome Hassan Cake" });
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/users", userRouter);
app.use("/resturants", resturantRouter);
