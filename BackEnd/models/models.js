const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Sequelize = require ('sequelize'); 

const sequelize = new Sequelize(
    
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date_de_naissance: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    nombre_achat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
);


const Register = sequelize.define('Register', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },

    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date_de_naissance: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    nombre_achat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Login;
module.exports = Register;
