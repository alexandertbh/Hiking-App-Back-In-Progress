//TODO: Finish adjusting the copy paste of the sql database

const Hike = require("./Hike");
const User = require("./User");
const Trip = require("./Trip");

// Hike belongsTo Trip
Hike.belongsToMany(Trip, {
  through: TripHike,
  foreignKey: "trip_id",
  onDelete: "CASCADE",
});

// Trip have many Hikes
Trip.hasMany(Hikes, {
  foreignKey: "hike_id",
  onDelete: "CASCADE",
});

// Trip belongToMany User (through ProductTag)
Trip.belongsToMany(User, {
  // as: 'product_tags',
  foreignKey: "user_id",
});

// Tags belongToMany Products (through ProductTag)
User.hasMany(Trip, {
  through: UserTrip,
  // as: 'product_tags',
  foreignKey: "trip_id",
  onDelete: "CASCADE",
});

module.exports = {
  Hike,
  User,
  Trip,
};
