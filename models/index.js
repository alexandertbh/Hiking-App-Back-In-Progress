//TODO: Finish adjusting the copy paste of the sql database

const Hike = require("./Hike");
const User = require("./User");
const Trip = require("./Trip");

Hike.belongsToMany(Trip, {
  through: 'TripHike',
  // foreignKey: "trip_id",
  // onDelete: "CASCADE",
});

// Trip have many Hikes
Trip.belongsToMany(Hike, {
  through: 'TripHike',
  // foreignKey: "hike_id",
  // onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)
User.belongsToMany(Trip, {
  through: 'UserTrip',
  // as: 'product_tags',
  // foreignKey: "trip_id",
  // onDelete: "CASCADE",
});

// Trip belongToMany User (through ProductTag)
Trip.belongsToMany(User, {
  // as: 'product_tags',
  through: 'UserTrip',

  // foreignKey: "user_id",
});


module.exports = {
  Hike,
  User,
  Trip,
};
