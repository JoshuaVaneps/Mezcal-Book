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
      defaultValue: 'https://photos.google.com/share/AF1QipMz5sG4_j0Z7W7T30hLXB0gCMWRwYxw1Yz4w22Dw9JCbluo3EstAeuvlU8SF4sNLw/photo/AF1QipM7hodKHvW9CBviWsyfttqDL3KsfPFx8Q8g5lk6?key=VHN5NExxQV91QmRiMXdkWmFNVDg3U2tkcmxMUUJB'
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
