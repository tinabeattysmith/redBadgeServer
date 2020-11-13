const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const userModel=
    sequelize.define('user', 
    {
        firstName: {
            type: DataTypes.String,
            allowNull: false
        },
        lastName: {
            type: DataTypes.String,
            allowNull: false
        },
        userName: {
            type: DataTypes.String,
            allowNull: false,
            unique: true
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

module.export = userModel;

