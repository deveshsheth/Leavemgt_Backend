const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.PG_DATABASE,
    process.env.PG_DATABASE_USER,
    process.env.PG_DATABASE_PASSWORD,
    {
        dialect: 'postgres',
    }
);

module.exports = sequelize