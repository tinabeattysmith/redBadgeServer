const userModel = require('./user');
const PantryItemModel = require('./pantryItem');
const CategoryModel = require('./category');
const MealModel = require('./meal');
const RequestModel = require('./request');
const RoleModel = require('./role')

module.exports = {
  UserModel: userModel,
  PantryItemModel: PantryItemModel,
  CategoryModel: CategoryModel,
  MealModel: MealModel,
  RoleModel: RoleModel,
};
