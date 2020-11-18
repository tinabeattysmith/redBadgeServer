const userModel = require('./user');
const PantryItemModel = require('./pantryItem');
const CategoryModel = require('./category');
const MealModel = require('./meal');
const RequestModel = require('./request');
const RoleModel = require('./role');
const ItemMeal = require('./ItemMeal');

module.exports = {
  UserModel: userModel,
  PantryItemModel,
  CategoryModel,
  MealModel,
  RoleModel,
  RequestModel,
  ItemMeal,
};

// Associations
let user = require('./user');
let role = require('./role');
let category = require('./category');
let item = require('./pantryItem');
let meal = require('./meal');
let itemMeal = require('./ItemMeal')

// 1:M, role has many usesr.  An user belongs to a role.  
// user table receives roleId
role.hasMany(user);
user.belongsTo(role);

// 1:M, category has many items.  An item belongs to a category.  
// pantryItem table receives categoryId
category.hasMany(item);
item.belongsTo(category);

// 1:M, meal has many items.  An item belongs to a meal.  
meal.hasMany(itemMeal);
itemMeal.belongsTo(meal);

// 1:M, meal has many items.  An item belongs to a meal.  
item.hasMany(itemMeal);
itemMeal.belongsTo(item);

// M:M
// item.belongsToMany(meal, 
//   { through: 'ItemMeal', });

// meal.belongsToMany(item, 
//   { through: 'ItemMeal' });