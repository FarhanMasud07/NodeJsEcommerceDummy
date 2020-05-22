const Sequelize = require('sequelize');

const sequelize = new Sequelize('mern', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
