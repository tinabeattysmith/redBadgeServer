const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const pantryItemModel=
    sequelize.define('pantryItem', 
    {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        itemDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        importance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        itemPrice: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isUsed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        itemComment: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    });

module.exports = pantryItemModel;