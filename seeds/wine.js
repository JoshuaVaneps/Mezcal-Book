const { Wine } = require("../models");

const wineData = [
    {
        name: "Lágrimas San Vicente",
        origin: "Baja California, Mexica",
        grape: "Chardonnay",
        winery: "Llano Colorado",
        style: "White"
    },
    {
        name: "Abadia do Seixo Rias Baixas",
        origin: "Galicia, Spain",
        grape: "Albarino",
        winery: "Pazo de Villarei",
        style: "White"
    },
    {
        name: "Baron Foucher Sauvignon Blanc",
        origin: "Vin de France, France",
        grape: "Sauvignon Blanc",
        winery: "Famille Baron Foucher",
        style: "White"
    },
    {
        name: "Anko Torrentes",
        origin: "Salta, Argentina",
        grape: "Torrontes",
        winery: "Anko",
        style: "White",
    },
    {
        name: "Santo Tomas Chenin Blanc",
        origin: "Baja California, Mexico",
        grape: "Chenin Blanc",
        winery: "Santo Tomas",
        style: "White"
    },
    {
        name: "Mas Fi Cava",
        origin: "Penedes, Catalonia, Spain",
        grape: "Xarel-lo, Macabeo, Parellada",
        winery: "Masachs Estate",
        style: "Sparkling"
    },
    {
        name: "Raventos",
        origin: "Sant Sadurní d'Anoia, Catalonia, Spain",
        grape: "Chardonnay, Macabeo, Xarel-lo, Parellada",
        winery: "Raventos i Blanc",
        style: "Sparkling",
    },
    {
        name: "Gueissard Rose",
        origin: "Cotes de Provence, France",
        grape: "Shiraz/Syrah, Grenache, Mourvedre, Cinsault, Rolle",
        winery: "Gueissard",
        style: "Rose"
    },
    {
        name: "Miguel Torres Estalado",
        origin: "Chile",
        grape: "Pais",
        winery: "Miguel Torres",
        style: "Sparkling Rose"
    },
    {
        name: "Altocedro Cabernet Sauvignon",
        origin: "Mendoza, Argentina",
        grape: "Cabernet Sauvignon",
        winery: "Altocedro",
        style: "Red"
    },
    {
        name: "Vilot Hill Pinot Noir",
        origin: "Oregon, United States",
        grape: "Pinot Noir",
        winery: "Violet Hill",
        style: "Red"
    },
    {
        name: "Palafox Pinero",
        origin: "Baja California, Mexico",
        grape: "Cabernet Sauvignon, Merlot, Tempranillo",
        winery: "Palafox",
        style: "Red"
    },
    {
        name: "Ontanon Tempranillo",
        origin: "Rioja, Spain",
        grape: "Tempranillo, Garnacha",
        winery: "Ontanon",
        style: "Red"
    },
    {
        name: "Laberinto",
        origin: "San Luis Potosi, Mexico",
        grape: "Cabernet Sauvignon, Merlot, Tempranillo",
        winery: "Cava Quintanilla",
        style: "Red"
    },
    {
        name: "Gobanilla Monastrell", 
        origin: "Murcia, Spain",
        grape: "Monastrell", 
        winery: "Emporio Wines",
        style: "Red"
    },
]

const seedWines = () => Wine.bulkCreate(wineData);

module.exports = seedWines;