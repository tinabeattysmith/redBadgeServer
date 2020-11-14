const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const mealModel=
    sequelize.define('meal', 
    {
        mealName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mealDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mealComment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

module.exports = mealModel;