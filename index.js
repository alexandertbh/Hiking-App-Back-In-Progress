const express = require("express");
const sequelize = require("./config");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const allRoutes = require("./controllers");

// app.use(allRoutes);
const { User, Trip } = require("./models")

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`listenin to port ${PORT}!`);
  });
});
