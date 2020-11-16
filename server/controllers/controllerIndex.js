const userController = require("./userController");
const pantryItemController = require("./pantryItemController");
const requestController = require("./requestController");

module.exports = {
    User: userController,
    PantryItem: pantryItemController,
    Request: requestController
};