const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const roleModel=
    sequelize.define('role', 
    {
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roleDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
module.exports = roleModel;