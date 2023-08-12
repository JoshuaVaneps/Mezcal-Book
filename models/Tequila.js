const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tequila extends Model {}

Tequila.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    style: {
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
    appearance: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://lh3.googleusercontent.com/pw/AIL4fc8-uH7xKU4x12JpdkphTb_376OrcEWC0-LVz_VC6Q9V3Qp1vGDwgFnI65ReAN3PIGzhaki9k14DTyqrXNZq9rEv-VOYFHTmHHna54dHjvskYYnZ9tYa7FxR6crjzLLBzTEBpQ8Yx-Xrk5IDeIwxcxF1=w422-h414-s-no?authuser=0",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tequila",
  }
);

module.exports = Tequila;
