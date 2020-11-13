const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const roleModel=
    sequelize.define('role', 
    {
        roleName: {
            type: DataTypes.String,
            allowNull: false,
        },
        requestDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

module.export = roleModel;