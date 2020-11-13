const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const mealModel=
    sequelize.define('meal', 
    {
        mealName: {
            type: DataTypes.String,
            allowNull: false,
        },
        mealDescription: {
            type: DataTypes.String,
            allowNull: false,
        },
        mealComment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

module.export = mealModel;