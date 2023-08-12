const { Beer } = require("../models");

const beerData = [
    {
        name: "Corona",
        brewery: "Grupo Modelo",
        origin: "Mexico",
        style: "Mexican Lager",
        abv: 4.5
    },
    {
        name: "Dos Equis Lager",
        brewery: "Cuauhtemoc Moctezuma Brewery",
        origin: "Monterrey, Mexico",
        style: "Mexican Lager",
        abv: 4.2
    },
    {
        name: "Tecate",
        brewery: "Cervecería Tecate",
        origin: "Baja California, Mexico",
        style: "Mexican Lager",
        abv: 4.5
    },
    {
        name: "Modelo Especial",
        brewery: "Grupo Modelo",
        origin: "Mexico",
        style: "Mexican Lager",
        abv: 4.4
    },
    {
        name: "Pacifico",
        brewery: "Grupo Modelo",
        origin: "Mazatlan, Mexico",
        style: "Mexican Lager",
        abv: 4.4
    },
    {
        name: "No Mames",
        brewery: "Tripping Animals Brewing Co.",
        origin: "Doral, Florida",
        style: "Mexican-Style Lager",
        abv: 6
    },
    {
        name: "Skyway",
        brewery: "Green Bench",
        origin: "St. Petersburg, Florida",
        style: "Double Hazy India Pale Ale",
        abv: 8.2
    },
    {
        name: "Mango Wit",
        brewery: "Proof Brewing Company",
        origin: "Tallahassee, Florida",
        style: "Witbeer",
        abv: 5.7
    },
    {
        name: "Beach Hippie",
        brewery: "Persimmon Hollow",
        origin: "Deland, Florida",
        style: "American India Pale Ale",
        abv: 7.2
    },
    {
        name: "Key Lime Cider",
        brewery: "Cigar City Cider and Mead",
        origin: "Tampa, Florida", 
        style: "Cider",
        abv: 5.5
    },
    {
        name: "Cervezeria Cielito Lindo Hefeweizen",
        brewery: "Cervezeria Cielito Lindo",
        origin: "Guadalajara, Mexico",
        style: "Hefeweizen",
        abv: 5.5
    },
    {
        name: "Limonada",
        brewery: "Tripping Animals Brewing Co.",
        origin: "Doral, Florida",
        style: "Sour",
        abv: 6
    },
    {
        name: "Agama",
        brewery: "Unseen Creatures",
        origin: "Miami, Florida",
        style: "American Amber",
        abv: 5.2
    },
    {
        name: "Athletic Brewing (Rotating)",
        brewery: "Athletic Brewing",
        origin: "Milford, Connecticut",
        style: "Rotating",
        abv: 0
    }
]

const seedBeers = () => Beer.bulkCreate(beerData);

module.exports = seedBeers;