const { User } = require("../models");

const userdata = [
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "Josh",
    email: "josh@yahoo.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "Nick",
    email: "nick@yahoo.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "Alec",
    email: "alec@yahoo.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "harry",
    email: "harry@yahoo.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
  {
    name: "pablo",
    email: "pablo@yahoo.com",
    password: "$2b$10$88kgc5UqhazWBZ8kabw7Vuov/.yBZpwcUzEvcsC5FhkEIuf9f4wQO",
    isManager: true,
  },
];
const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
