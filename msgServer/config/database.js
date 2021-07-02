const {
    Sequelize
} = require('sequelize');

module.exports = new Sequelize('msger', 'dominicgada', 'Box060799', {
    host: 'localhost',
    dialect: 'postgres'
});