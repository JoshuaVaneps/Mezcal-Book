const sequelize = require("../Main/config/connection");
const seedMezcal = require("./mezcals.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedMezcal();
  process.exit(0);
};

seedAll();
