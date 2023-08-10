const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Mezcal extends Model {}

Mezcal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://lh3.googleusercontent.com/pw/AIL4fc8lL_iVZNLkLW0N6SPPsHaeVpGix_EDpg8QxrfPaP3_K7qwcW_O3GI-GfTjvu8fGIhd_4Rd4KAe7rWsG2U2NhsdjPBLrviqa2dxt_05sTQUaBdbphzLGDuLrH6jrqxCwtnVKY17CVkypN1WexBRor6T=w779-h652-s-no?authuser=0'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "mezcal",
  }
);

module.exports = Mezcal;
