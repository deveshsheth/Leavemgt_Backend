const Sequelize = require('sequelize');

const sequelize = require('../utils/pgdb');

const Department = sequelize.define('department', {
  departmentid: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  departmentname: {
    type: sequelize.STRING,
    allowNull: false,
    require:true
  },
  
});

module.exports = Department;