const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const userModel=
    sequelize.define('user', 
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            // TODO: Figureout how to set username to be 1st letter of firstname + lastnamer\
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

module.exports = userModel;

