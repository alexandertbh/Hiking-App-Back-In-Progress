const express = require("express");
const router = express.Router();
const { User, Trip, Hike } = require("../../models");

//get all hikes
router.get("/", async (req, res) => {
  const hikeData = await Hike.findAll();
  return res.json(hikeData);
});

//post a new hike
// router.post("/", async (req, res) => {
//   try {
//     const hikeData = await Hike.create(req.body);
//     res.status(200).json(hikeData);
//     console.log("hikeData:", hikeData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post("/", async (req, res) => {
  try {
    const hikeData = await Hike.create(req.body);
    // 200 status code means the request is successful
    return res.status(200).json(hikeData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

module.exports = router;
