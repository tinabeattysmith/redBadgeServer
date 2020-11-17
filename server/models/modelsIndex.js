const userModel = require('./user');
const PantryItemModel = require('./pantryItem');
const CategoryModel = require('./category');
const MealModel = require('./meal');
const RequestModel = require('./request');
const RoleModel = require('./role');
const roleModel = require('./role');
const categoryModel = require('./category');
const pantryItemModel = require('./pantryItem');
const mealModel = require('./meal');


module.exports = {
  UserModel: userModel,
  PantryItemModel: PantryItemModel,
  CategoryModel: CategoryModel,
  MealModel: MealModel,
  RoleModel: RoleModel,
  RequestModel: RequestModel,
};

// Associations
// 1:1, user table will get roleID
roleModel.hasOne(userModel);
userModel.belongsTo(roleModel);

// 1:M, category has many items.  An item belongs to a category.  
// pantryItem table receives categoryId
categoryModel.hasMany(pantryItemModel);
pantryItemModel.belongsTo(categoryModel);

// M:M
pantryItemModel.belongsToMany(mealModel, { through: 'ItemMeal' });
mealModel.belongsToMany(pantryItemModel, { through: 'ItemMeal' });