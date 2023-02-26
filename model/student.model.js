const Sequelize = require('sequelize');

const sequelize = require('../utils/pgdb');

const Student = sequelize.define('student', {
  studentid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  stuname: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  stuphoneno: {
    type: Sequelize.BIGINT,
    allowNull: false,
    require:true
  },
  studob: {
    type: Sequelize.DATE,
    allowNull: false,
    require:true
  },
  stugender: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  stuemail: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  stupassword: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  stuaddress: {
    type: Sequelize.TEXT,
    allowNull: false,
    require:true
  },
  stupincode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    require:true
  },
  stusemester: {
    type: Sequelize.STRING,
    allowNull: false,
    require:true
  },
  stuenrollmentno: {
    type: Sequelize.BIGINT,
    allowNull: false,
    require:true
  },
  
  
});

module.exports = Role;