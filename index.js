const express = require("express");
const sequelize = require("./config");
const { User, Trip, Hike } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;
console.log(process.env);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allRoutes = require("./controllers");

app.use(allRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listenin to port ${PORT}!`);
  });
});
