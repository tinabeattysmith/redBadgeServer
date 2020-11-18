const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to the database');
    }, 
    function(err) {
        console.log(`Error`, `${err}`);
    }
);

module.exports = sequelize;