const { Cocktail } = require("../models");

const cocktailData = [
    {
        name: "Screamin' Iguana",
        base_spirit: "Fidencio Mezcal",
        ingredients: "Fidencio, St. Elder liquer, Chareau, Ancho Verde, Simple, Honeydew Aguachile, Topo Chico",
        glass: "Collins",
        garnish: "Dehydrated Lime Wheel"
    },
    {
        name: "Ilegal Old Fashioned",
        base_spirit: "Blend of spirits",
        ingredients: "Ilegal Reposado, Herradura Reposade, Rittenhouse Rye, Orange-Pilloncillo Syrup, Orange bitters, Mole bitters",
        glass: "Rocks",
        garnish: "Orange twist"
    },
    {
        name: "Sandia Spritz",
        base_spirit: "Mira Firoe Vermouth",
        ingredients: "Mira Firoe, Pamplemoouse, Cava, watermelon juice, lime juice, lemon juice, agave, salt",
        glass: "Wine",
        garnish: "Dehydrated Grapefruit"
    },
    {
        name: "El Bandido",
        base_spirit: "Reves Whiskey",
        ingredients: "Reves, Cappelletti, Frangelico, Alvear sherry, Angostura bitters",
        glass: "Rocks",
        garnish: "Smoked with reyes coaster on top"
    },
    {
        name: "Oaxacan on Sunshine",
        base_spirit: "Gracios a Dios Gin",
        ingredients: "Gracios a Dios Gin, Chinola, Pastis, Lemon juice, Heavy cream, Mango-chamomile simple, Orange bitters",
        glass: "Snifter",
        garnish: "Mint"
    }
];

const seedCocktails = () => Cocktail.bulkCreate(cocktailData);

module.exports = seedCocktails;