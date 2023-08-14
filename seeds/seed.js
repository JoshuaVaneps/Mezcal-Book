const sequelize = require("../config/connection");
const seedCocktails = require("./cocktails");
const seedMezcal = require("./mezcals.js");
const seedTequila = require("./tequilas.js");
const seedUser = require("./userData");
const seedWines = require("./wine");
const seedBeers = require("./beers");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedMezcal();
  await seedTequila();
  await seedCocktails();
  await seedWines();
  await seedBeers();
  process.exit(0);
};

seedAll();
