const express = require("express");
const router = express.Router();
const { Trip } = require("../../models");

//get all trips
router.get("/", async (req, res) => {
  const tripData = await Trip.findAll();
  return res.json(tripData);
});

//get trip by id
router.get("/:id", async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id);

    if (!tripData) {
      res.status(404).json({ message: "No trip found with that ID!" });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status.json(err);
  }
});

//create new trip
router.post("/", async (req, res) => {
  try {
    const newTrip = {
      name: req.body.name,
      date: req.body.date,
    };
    const dbData = await Trip.create(newTrip);
    return res.json({
      trip: dbData,
    });
  } catch (err) {
    console.log("error:", err);
  }
  return res.status(500).json({ msg: "could not create Trip" });
});

//delete trip by id
router.delete("/:id", async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tripData) {
      res.status(400).json({ message: "no trip with that ID!" });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update trip by id
router.put("/:id", async (req, res) => {
  try {
    const tripData = await Trip.update(
      {
        name: req.body.name,
        date: req.body.date,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!tripData) {
      res.status(400).json({ message: "there is no trip with that ID!" });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
