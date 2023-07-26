const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drink extends Model {}

Drink.init(
    {
        id: {},
        name: {},
        style: {},
        agave: {},
        abv: {},
        origin: {},
        aroma: {},
        pallet: {},
    },
);

module.exports = Drink;