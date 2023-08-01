const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const bcrypt = require("bcrypt");

class Trip extends Model {}

Trip.init(
  {
    // add properites here, ex:
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Trip;
