const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mezcal extends Model {}

Mezcal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        agave: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        abv: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aroma: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pallet: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'mezcal',
    }
);

module.exports = Mezcal;