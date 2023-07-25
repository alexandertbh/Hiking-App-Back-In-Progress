const express = require("express");
const router = express.Router();

const hikeRouters = require("./hikeController");
const userRouters = require("./userController");
const tripRouters = require("./tripController");

router.get("/", (req, res) => {
  res.send("this is the homepage!");
});

router.use("/api/hike".hikeRouters);
router.use("/api/user".userRouters);
router.use("/api/trip".tripRouters);
