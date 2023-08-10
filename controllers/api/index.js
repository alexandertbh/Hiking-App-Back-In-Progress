const express = require("express");
const router = express.Router();

const hikeRouters = require("./hikeController");
const userRouters = require("./userController");
const tripRouters = require("./tripController");

router.get("/", (req, res) => {
  res.send("this is the homepage!");
});

router.use("/hikes", hikeRouters);
router.use("/trips", tripRouters);
router.use("/users", userRouters);

module.exports = router;
