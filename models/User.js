const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const bcrypt = require("bcrypt")

class User extends Model {}

User.init({
    // add properites here, ex:
    userName: {
         type: DataTypes.STRING,
         unique:true,
         allowNull:false
    },
    password:{
        type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[8]
         }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail:true
        }
    },
},{
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,4);
            return userObj
        }
    }
});

module.exports=User