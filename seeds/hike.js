const sequalize = require("../config/index");
const { Hike, User, Trip } = require("../models");
const router = express.Router();
const hikeSeedData = require("./hikeSeedData.json");




const seedHike = async () => {
  await sequalize.sync({ force: false });

  await Hike.bulkCreate(hikeSeedData);
  console.log("seed successful");

  process.exit(0);
};

seedHike();
