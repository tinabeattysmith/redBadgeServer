const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const PantryItemModel = require('./pantryItem');
const MealModel = require('./meal');

const ItemMealModel=
    sequelize.define('ItemMeal', 
    {
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
 
        },
        mealId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

module.exports = ItemMealModel;