const sequelize = require('sequelize')

const User = sequelize.define('User',{

    userid:{
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fullname:{
        type:sequelize.STRING,
        allowNull:false,
        require:true,
    },
    phoneno:{
        type:sequelize.BIGINT,
        allowNull:false,
        require:true,
    },
    email:{
        type:sequelize.STRING,
        allowNull:false,
        require:true,
    },
    password:{
        type:sequelize.STRING,
        allowNull:false,
        require:true,
    },
    address:{
        type:sequelize.TEXT,
        allowNull:false,
        require:true,
    },
    pincode:{
        type:sequelize.INTEGER,
        allowNull:false,
        require:true,
    },
    isdeleted:{
        type:sequelize.INTEGER,
        allowNull:false,
        require:true,
        defaultValue:0
    }
})

module.exports = User;