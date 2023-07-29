const sequelize = require("../config/connection");
const seedMezcal = require("./mezcals.js");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedMezcal();
  process.exit(0);
};

seedAll();
