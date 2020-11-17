const userController = require("./userController");
const pantryItemController = require("./pantryItemController");
const requestController = require("./requestController");
const categoryController = require("./categoryController");
const mealController = require("./mealController");
const roleController = require("./roleController");

module.exports = {
    User: userController,
    PantryItem: pantryItemController,
    Request: requestController,
    Category: categoryController,
    Meal: mealController,
    Role: roleController,
};