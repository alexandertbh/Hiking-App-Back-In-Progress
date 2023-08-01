const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const bcrypt = require("bcrypt");

class Hike extends Model {}

Hike.init(
  {
    // add properites here, ex:
    name: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: true,
    },
    miles: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    elevation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    trailhead: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
  }
);

module.exports = Hike;
