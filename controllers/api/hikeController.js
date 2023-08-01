const express = require("express");
const router = express.Router();
const Hike = require("../../models");

//get all hikes
router.get("/", async (req, res) => {
  const hikeData = await Hike.findAll();
  return res.json(hikeData);
});

//get hike by id
router.get("/:id", async (req, res) => {
  try {
    const hikeData = await Hike.findByPk(req.params.id);

    if (!hikeData) {
      res.status(404).json({ message: "No hike found with that ID!" });
      return;
    }

    res.status(200).json(hikeData);
  } catch (err) {
    res.status.json(err);
  }
});

//create new hike
router.post("/", async (req, res) => {
  try {
    const newHike = {
      name: req.body.name,
      miles: req.body.mils,
      elevation: req.body.elevation,
      difficulty: req.body.elevation,
      trailhead: req.body.elevation,
    };
    console.log("newHike:", newHike);
    const dbData = await Hike.create(newHike);
    console.log("dbData:", dbData);
    return res.json({
      hike: dbData,
    });
  } catch (err) {
    console.log("error:", err);
  }
  return res.status(500).json({ msg: "could not create Hike" });
});

//delete hike by id
router.delete("/:id", async (req, res) => {
  try {
    const hikeData = await Hike.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!hikeData) {
      res.status(400).json({ message: "no hike with that ID!" });
      return;
    }

    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update hike by id
router.put("/:id", async (req, res) => {
  try {
    const hikeData = await Hike.update(
      {
        name: req.body.name,
        miles: req.body.miles,
        elevation: req.body.elevation,
        difficult: req.body.difficulty,
        trailhead: req.body.trailhead,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!hikeData) {
      res.status(400).json({ message: "there is no hike with that ID!" });
      return;
    }
    res.status(200).json(hikeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
