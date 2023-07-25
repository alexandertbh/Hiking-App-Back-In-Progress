const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config");
const bcrypt = require("bcrypt");

class Trip extends Model {}

Trip.init(
  {
    // add properites here, ex:
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
    hooks: {
      beforeCreate: (userObj) => {
        userObj.password = bcrypt.hashSync(userObj.password, 4);
        return userObj;
      },
    },
  }
);

module.exports = Trip;
