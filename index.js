const express = require("express");
const sequelize = require("./config");
const { User, Trip, Hike } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const allRoutes = require("./controllers");

app.use(allRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`listenin to port ${PORT}!`);
  });
});
