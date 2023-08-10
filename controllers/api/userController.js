const express = require("express");
const router = express.Router();
const { User, Trip } = require("../../models");

//get all users
router.get("/", async (req, res) => {
  const userData = await User.findAll();
  return res.json(userData);
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res.status(404).json({ message: "No User found with that ID!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status.json(err);
  }
});

//create new user
router.post("/", async (req, res) => {
  try {
    const newUser = {
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
    };
    const dbData = await User.create(newUser);
    return res.json({
      user: dbData,
    });
  } catch (err) {
    console.log("error:", err);
  }
  return res.status(500).json({ msg: "could not create User" });
});

//delete user by id
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(400).json({ message: "no user with that ID!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update user by id
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(
      {
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!userData) {
      res.status(400).json({ message: "there is no user with that ID!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
