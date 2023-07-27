const sequalize = require("../config/index");

const Hike = require("../models/Hike");
const hikeSeedData = require("./hikeSeedData.json");

const seedHike = async () => {
  await sequalize.sync({ force: true });

  await Hike.bulkCreate(hikeSeedData);
  console.log("seed successful");

  process.exit(0);
};

seedHike();
