const sequalize = require("../config/index");

const Hike = require("../models/Hike");
const hikeSeedData = require("./hikeSeedData.json");

//switch to an async
// const seedDatabase = () => {
//   return sequalize.sync({ force: true }).then(() => {
//     Hike.bulkCreate(hikeSeedData).then(() => {
//       console.log("Hike Seed Data Added");
//     });
//   });
// };

const seedHike = async () => {
  await sequalize.sync({ force: true });

  await Hike.bulkCreate(hikeSeedData);
  console.log("seed successful");

  process.exit(0);
};

seedHike();
