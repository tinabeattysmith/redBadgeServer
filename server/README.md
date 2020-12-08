# About this project

This app was created to help in my daily life by tracking pantry inventory and associating inventory to meals.

The purpose is to provide the backend to the single page app dowehaveit.

This project created using Node.js, Express, JWT, bycrpt, Sequelize, and Postgres and deployed to Heroku.

## Tables

The app was built using models and controllers. There are mutliple tables and endpoints.
Tables:
user
role
pantryItem
category
meal
request

## Associations

The planned database associations include:
Pantry item to Category
Pantry item to meal

### Routes/endpoints

There are multiple routes/endpoints configured and successfully tested via PostMan.

### Unauthorized route

user with endpoints: register, login, viewUsers, and userInfo.
The user route includes an additional enpoint which requires validate-session with the intent to control user deletion by role - admin.

### Authorized route

Authorized routes require the middleware, validate-session.
item with endpoints: createItem, viewItems, itemInfo/:id, update/:id, delete/:id
request with endpoints: createRequest, viewRequests, requestInfo/:id, updateRequest/:id
category with endpoints: createCategory, viewCategories, categoryInfo/:id
meal with endpoints: createMeal, viewMeals, mealInfo/:id, updateMeal/:id, deleteMeal/:id
role with endpoints: createRole, viewRoles, roleInfo/:id
