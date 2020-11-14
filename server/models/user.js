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

