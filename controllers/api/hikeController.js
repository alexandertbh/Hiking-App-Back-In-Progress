const express = require("express");
const router = express.Router();
const { User, Trip, Hike } = require("../../models");

//get all hikes
router.get("/", async (req, res) => {
  const hikeData = await Hike.findAll();
  console.log(hikeData);
  return res.json(hikeData);
});

//post a new hike
router.post("/", async (req, res) => {
  console.log("req.body:", req.body);
  try {
    const hikeData = await Hike.create(req.body);
    res.status(200).json(hikeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
