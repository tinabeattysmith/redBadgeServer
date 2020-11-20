const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const {PantryItemModel} = require('./modelsIndex');

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

    // mealModel.associate = () => {
    //     mealModel.belongsToMany(PantryItemModel,{
    //         through: itemMeal,})
    // }

    module.exports = mealModel;