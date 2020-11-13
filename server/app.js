const express = require('express');
const app = express();
const sequelize = require('./db');

sequelize.sync(); //pass in {force: true} to reset tables

// Non-protected route
// app.use('/user', user);



app.listen(3050, function() {
    console.log('App is listening on port 3050.')
});