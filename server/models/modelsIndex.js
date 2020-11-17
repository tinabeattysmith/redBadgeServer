const userModel = require('./user');
const PantryItemModel = require('./pantryItem');
const CategoryModel = require('./category');
const MealModel = require('./meal');
const RequestModel = require('./request');
const RoleModel = require('./role');

module.exports = {
  UserModel: userModel,
  PantryItemModel,
  CategoryModel,
  MealModel,
  RoleModel,
  RequestModel,
};

// Associations
let user = require('./user');
let role = require('./role');
let category = require('./category');
let item = require('./pantryItem');
let meal = require('./meal');

// 1:M, role has many usesr.  An user belongs to a role.  
// user table receives roleId
role.hasMany(user);
user.belongsTo(role);

// 1:M, category has many items.  An item belongs to a category.  
// pantryItem table receives categoryId
category.hasMany(item);
item.belongsTo(category);

// M:M
item.belongsToMany(meal, { through: 'ItemMeal' });
meal.belongsToMany(item, { through: 'ItemMeal' });