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

// roleModel.sync(); //pass in {force: true} to reset tables
module.exports = roleModel;