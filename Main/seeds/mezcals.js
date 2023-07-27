const { Drink } = require('../models')

const mezcalData = [
    {
        "name": "Banhez Espadin & Barril",
        "style": "Ensamble/Joven",
        "agave": ["Espadin", "Barril"],
        "abv": 42,
        "origin": "Ejutla, Oaxaca",
        "aroma": "Herbaceous, citrus fruit, and clay",
        "pallet": "Baked banana, black pepper, and peat"
    },
    {
        "name": "Banhez Tobala",
        "style": "Joven",
        "agave": "Tobala",
        "abv": 47,
        "origin": "La Compania, Oaxaca",
        "aroma": "Green mango, leather, and fresh green herbs",
        "pallet": "Sweet tropical fruit, ripe pineapple, and banana"
    },
    {
        "name": "Bozal Borrego",
        "style": "Pechuga",
        "agave": "Castilla",
        "abv": 52,
        "origin": "Ejutla, Oaxaca",
        "aroma": "Lemon zest, smoked lean lamb, fruity",
        "pallet": "Pine, allspice, sea salt, and galla apple"
    },    
    {
        "name": "Bozal Chino Verde",
        "style": "Joven",
        "agave": "Verde",
        "abv": 48.4,
        "origin": "Sierra Madre del Sur Mountains, Sola de Vega, Oaxaca",
        "aroma": "Earth, dried herbs, burlap, soft smokiness",
        "pallet": "Ancho chiles, charred meats"
    },
    {
        "name": "Bozal Cuixe",
        "style": "Joven",
        "agave": "Cuishe",
        "abv": 47,
        "origin": "San Luis Amatlan, Oaxaca",
        "aroma": "Citrus, strong minerality",
        "pallet": "Dry, rich tropical fruit"
    },
    {
        "name": "Bozal Sacatoro",
        "style": "Joven",
        "agave": "Sacatoro",
        "abv": 44.8,
        "origin": "Mazatlan, Oaxaca",
        "aroma": "Wet earth, rich smokiness, wild flowers",
        "pallet": "Herbal, minerality, salty, smooth"
    },
    {
        "name": "Bozal Tobasiche",
        "style": "Joven",
        "agave": "Tobaziche",
        "abv": 47,
        "origin": "Ejutla, Oaxaca",
        "aroma": "Herbaceous, cedar",
        "pallet": "Rich earth, savory smokiness"
    },
    {
        "name": "Bruxo #2",
        "style": "abocado, Ensamble",
        "agave": "Espadin, Barril",
        "abv": 46,
        "origin": "Agua del Espino, Oaxaca",
        "aroma": "Earthy, hints of citrus",
        "pallet": "Brazil nuts, aloe"
    },
    {
        "name": "Caballito Cerreo Chato",
        "style": "Joven",
        "agave": "Chato",
        "abv": 46,
        "origin": "Amatitan, Jalisco",
        "aroma": "Cooked agave, baked bread, broiled grapefruit",
        "pallet": "Green bell pepper, anise, cooked agave, cream, tangerine, vanilla"
    },
    {
        "name": "Chacolo 3 Anos Capon",
        "style": "Joven",
        "agave": "A. Angustifolia",
        "abv": 48.3,
        "origin": "Zapotitlan de Vadillo, Jalisco",
        "aroma": "Mint, pine wood, lime",
        "pallet": "Vanilla bean, peppermint, hint of lime, ginger"
    },
    {
        "name": "Cuentacuentos El Barro",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 46,
        "origin": "Santiago Matalan, Oaxaca",
        "aroma": "Wet clay, green forest after rain, dark fruits",
        "pallet": "Balanced with a sour touch, green apple, fresh cream, strawberry jam, brulee, coffee powder"
    },
    {
        "name": "Del Maguey Arroqueño",
        "style": "Joven",
        "agave": "Arroqueño",
        "abv": 49,
        "origin": "Santa Catarina Minas, Oaxaca",
        "aroma": "Dark fruits (mostly cherry), clay, bright, vegetal",
        "pallet": "Melon, baking chocolate, fresh green beans"
    },
    {
        "name": "Del Maguey Chichicapa",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 46,
        "origin": "San Baltazar Chichicapam, Oaxaca",
        "aroma": "Herbaceous, citrus, light smoke",
        "pallet": "Smooth, fruity, tropical fruits, roasted agave"
    },
    {
        "name": "Del Magury Crema de Mezcal",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 40,
        "origin": "San Luis del Rio, Oaxaca",
        "aroma": "Sweet, smoky, chocolate, coffee",
        "pallet": "Rich, creamy, balanced sweetness with smoky undertones"
    },
    {
        "name": "Del Maguey Minero",
        "style": "Joven",
        "agave": "Espadin", 
        "abv": 46,
        "origin": "Santa Catarina Minas, Oaxaca",
        "aroma": "Sweet, fruity, earthy, smokey",
        "pallet": "Smooth, complex, tropical fruits, roasted agave, chocolate"
    },
    {
        "name": "Del Maguey Pechuga",
        "style": "Pechuga",
        "agave": "Espadin",
        "abv": 46,
        "origin": "Santa Catarina Minas, Oaxaca",
        "aroma": "Basil, lemon, ocean, fruit",
        "pallet": "Smoky, warm, coal and spice"
    },
    {
        "name": "Del Maguey San Pablo Ameyaltepec",
        "style": "Joven",
        "agave": "Pizorra, Tobala",
        "abv": 47,
        "origin": "Puebla",
        "aroma": "Dried pineapple and papaya",
        "pallet": "Very floral, dried tropical fruit, creamy cheese"
    },
    {
        "name": "Del Maguey Santo Domingo Albarradas",
        "style": "Joven", 
        "agave": "Espadin",
        "abv": 48,
        "origin": "Oaxaca",
        "aroma": "Peaches, cream, sweet fruit",
        "pallet": "Spicy, woody, clean dry finish"
    },
    {
        "name": "Del Maguey Tepextate",
        "style": "Joven",
        "agave": "Tepextate",
        "abv": 45,
        "origin": "Santa Maria Albarradas, Oaxaca",
        "aroma": "Complex, earthy, hints of smoke",
        "pallet": "Delicate, roasted agave, herbal undertones, touch of sweetness"
    },
    {
        "name": "Del Maguey Tobala",
        "style": "Joven",
        "agave": "Tobala",
        "abv": 46,
        "origin": "Santa Maria Albarradas, Oaxaca",
        "aroma": "Intense, floral, tropical fruits",
        "pallet": "Complez, tipe agave, sweet spices, touch of minerality"
    },
    {
        "name": "Del Maguey Tobaziche",
        "style": "Joven",
        "agave": "Tobasiche",
        "abv": 47,
        "origin": "San Luis del Rio, Oaxaca",
        "aroma": "Complex, herbal, hintes of smoke",
        "pallet": "Vibrant, fresh agave, herbal undertones, subtle spiciness"
    },
    {
        "name": "Del Maguey Vida",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 42,
        "origin": "San Luis del Rio, Oaxaca",
        "aroma": "fruity aromatics, hints of honey, vanilla, roasted agave",
        "pallet": "Ginger, cinnamon, burnt sandalwood, banana, tangerine, long soft finish"
    },
    {
        "name": "Del Maguey Vida de Muertos",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 45,
        "origin": "San Luis del Rio, Oaxaca",
        "aroma": "Tropical fruits, warming spices",
        "pallet": "Creamy texture, floral notes, green herbs, poblano peppers, long complex finish"
    },
    {
        "name": "Del Maguey Vida Single Village Puebla",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 40,
        "origin": "Axocopan, Puebla",
        "aroma": "Bright fruits and florals, hints of green herbs, poblano, minerality",
        "pallet": "Agave, citrus, white peach, candied pine"
    },
    {
        "name": "El Jolgorio Barril",
        "style": "Joven",
        "agave": "Barril",
        "abv": 47,
        "origin": "La Campana, Santa Maria, Zouquitlan, Oaxaca",
        "aroma": "Earthy, light hints of smoke",
        "pallet": "Delicate blend of sweetness, citrus and minerality"
    },
    {
        "name": "El Jolgorio Cuixe",
        "style": "Joven",
        "agave": "Cuishe",
        "abv": 47,
        "origin": "Santa Maria, Santiago Matalan, Oaxaca",
        "aroma": "Earthy, wet clay",
        "pallet": "Spithy with subtle hints of smooth smoke"
    },
    {
        "name": "El Jolgorio Espadin",
        "style": "Aged in Glass",
        "agave": "Espadin",
        "abv": 47,
        "origin": "Lachigui, San Luis del Rio, San Pedro Quiatoni, Santa Maria Zoquitlan, Santiago Matatlán",
        "aroma": "Herbaceous, roasted agave, mint",
        "pallet": "Savory with notes of citrus, basil, and rosemary. Warm lingering finish"
    },
    {
        "name": "El Jolgorio Madrecuize",
        "style": "Joven",
        "agave": "Madrecuixe",
        "abv": 46,
        "origin": "Lachigui, reo Seco, Santa Maria, Zoquitlan, Santiago Matalan",
        "aroma": "Herbal, floral notes, hints of fresh-cut grass with a touch of earthiness",
        "pallet": "Complez and balanced, flavors of mints, eucalyptus, green vegetables, subtle hints of citrus"
    },
    {
        "name": "El Jolgorio Pechuga",
        "style": "Pechuga",
        "agave": "Espadin",
        "abv": 46,
        "origin": "Santa Maria Zoquitlan, Santiago, Matalan, Oaxaca",
        "aroma": "Ripe fruits, spices, delicate smoke",
        "pallet": "Sweet and savory flavors, tropical fruits, cinnamon, clove, umami"
    },
    {
        "name": "El Jolgorio Tepeztate",
        "style": "Joven",
        "agave": "Tepeztate",
        "abv": 46,
        "origin": "Lachigui, Rio seco, San Baltazar Guelavila, San Luis del Rio, Santa Maria Zoquitlan, Oaxaca",
        "aroma": "Herbal and floral notes, hints of roasted agave and a touch of smoke",
        "pallet": "Green pepper, tropical fruit, earthiness and a hint of minerality"
    },
    {
        "name": "El Jolgorio Tobala",
        "style": "Joven",
        "agave": "Tobala",
        "abv": 47,
        "origin": "Lachigui, San Baltazar, Guelavila, Santiago Matatlan, Oaxaca",
        "aroma": "Banana, pine, lemon zest",
        "pallet": "Brine, taffy, cedar, mango, pleasantly viscous"
    },
    {
        "name": "Fidencio Joven Clasico",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 45,
        "origin": "Santiago Matalan, Oaxaca",
        "aroma": "Wood smoke, green pepper, vegetal",
        "pallet": "Tobacco, tar, pine"
    },
    {
        "name": "Gracias a Dios Espadin Reposado",
        "style": "Reposado",
        "agave": "Espadin",
        "abv": 45,
        "origin": "Santiago Matalan, Oaxaca",
        "aroma": "Spicy, nutty, vanilla",
        "pallet": "Low acidity/alcohol perception"
    },
    {
        "name": "Ilegal Joven",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 40,
        "origin": "Matatlan Valley, Oaxaca",
        "aroma": "Eucalyptus, minerals",
        "pallet": "Green apple, fresh citrus, red chiltepes"
    },
    {
        "name": "Ilegal Reposado",
        "style": "Reposado",
        "agave": "Espadin",
        "abv": 40,
        "origin": "Matatlan Valley, Oaxaca",
        "aroma": "Caramelized pear, bitter orange",
        "pallet": "Clove, butterscotch, hints of vanilla"
    },
    {
        "name": "Ilegal Anejo",
        "style": "Anejo",
        "agave": "Espadin",
        "abv": 40,
        "origin": "Matatlan Valley, Oaxaca",
        "aroma": "Maple, clove, bitter orange",
        "pallet": "Dark chocolate, sweet agave"
    },
    {
        "name": "Ilegal 7 Year Anejo",
        "style": "Extra Anejo",
        "agave": "Espadin",
        "abv": 41.32,
        "origin": "Tlacolula, Oaxaca",
        "aroma": "Roasted agave, baked apple, oak",
        "pallet": "Honey, dark chocolate, fig"
    },
    {
        "name": "Koch el Mezcal Joven",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 47,
        "origin": "Rio de Ejutla, San Baltazar Guelavila, Oaxaca",
        "aroma": "Herbaceous, ripe fruit",
        "pallet": "Coconut, herbs, spices"
    },
    {
        "name": "La Higuera",
        "style": "Joven",
        "agave": "Dasylirion, Wheeleri",
        "abv": 48,
        "origin": "Chihuahua",
        "aroma": "Herbal, hint of smoke, rosy, soft vanilla",
        "pallet": "Herbs, pineapple, cinnamon candy, honey roasted peanuts"
    },
    {
        "name": "La Luna Bruto",
        "style": "Joven",
        "agave": "Bruto",
        "abv": 50.62,
        "origin": "Michoacan",
        "aroma": "Light smoke, roasted papaya, old leather",
        "pallet": "Mild roasted coconut, fermented vegetables, thyme, oregano"
    },
    {
        "name": "La Luna Cupreata",
        "style": "Joven",
        "agave": "Cupreata",
        "abv": 49,
        "origin": "Etucuaro, Michoacan",
        "aroma": "Bright and floral",
        "pallet": "Subtle smoke, citrusy, smooth"
    },
    {
        "name": "La Luna Espadincillo",
        "style": "Joven",
        "agave": "Espadincillo",
        "abv": 48,
        "origin": "Etucuaro, Michoacan",
        "aroma": "Citrus, grapefruit peel, strawberry yogurt",
        "pallet": "Roasted agave, citrusy, layered with a touch of smoke, sweet and crisp finish"
    },
    {
        "name": "La Luna Manso Sahuayo",
        "style": "Joven",
        "agave": "Unspecified Sahuayo",
        "abv": 48, 
        "origin": "Etucuaro, Michoacan",
        "aroma": "Earthy, cheese, woodsy, agave, vanilla, sweet fruit",
        "pallet": "Cigar leaf, chocolate, citrus, white pepper, hints of smoke"
    },
    {
        "name": "La Luna Reyes Chino",
        "style": "Pechuga",
        "agave": "Chino",
        "abv": 48.51,
        "origin": "Morelia, Michoacan",
        "aroma": "Soft and grassy, citrus undertones",
        "pallet": "Mint, fennel, lemongrass"
    },
    {
        "name": "La Venenosa Raicilla Sierra de Occidental",
        "style": "Joven",
        "agave": "Maximilians",
        "abv": 42,
        "origin": "Mascota, Jalisco",
        "aroma": "Lime zest, acetone, savory herbs, terracotta",
        "pallet": "Unsweetened lemon and lime juice, minerals, fresh ground pepper, followed by apple cider vinegar"
    },
    {
        "name": "La Venenosa Raicilla Tabernas",
        "style": "Joven",
        "agave": "Chico Aguilar",
        "abv": 46,
        "origin": "Jalisco",
        "aroma": "Grapefruit, grape skins",
        "pallet": "Sugary canilla that falls quickly, agave nectar, cheese"
    },
    {
        "name": "La Venenosa Sierra de Tigre",
        "style": "Joven",
        "agave": "Bruto",
        "abv": 44.8,
        "origin": "Manzanilla de la Paz, Jalisco",
        "aroma": "Fruity, apricots, oranges, sour",
        "pallet": "Light fruit, salt, cinnamon, funky"
    },
    {
        "name": "Mezcal Vago Espadin",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 50,
        "origin": "Candelaria Yegole, Oaxaca",
        "aroma": "Lilac, perfume, lavender",
        "pallet": "Hot, mesquite and pine"
    },
    {
        "name": "Mezcal Vago Elote",
        "style": "Joven",
        "agave": "Angustifolia",
        "abv": 50,
        "origin": "Candelaria Yegole, Oaxaca",
        "aroma": "Sweet notes, mint, candle wax",
        "pallet": "Roasted sweet corn, caramel, cream"
    },
    {
        "name": "Mezcal Vago Ensamble",
        "style": "Ensamble",
        "agave": "Barril, Coyote, Espadin, Sierra Negra, Tepeztate, Tobala",
        "abv": 50,
        "origin": "Sola de Vega, Oaxaca",
        "aroma": "Clay, earthy, pine needles",
        "pallet": "Charred sinnamon, pumpkin, chestnuts"
    },
    {
        "name": "Mezcal Vago Madrecuixe",
        "style": "Joven",
        "agave": "Madrecuishe",
        "abv": 50,
        "origin": "Miahuatlan, Oaxaca",
        "aroma": "Floral, earthy, fruity",
        "pallet": "Minerals, orange, pepper"
    },
    {
        "name": "Mezcales de Leyenda Guerrero",
        "style": "Joven",
        "agave": "Ancho",
        "abv": 46,
        "origin": "Mazatlan, Xochipala",
        "aroma": "Citrus fruit, herbs, cheesy",
        "pallet": "Citrus, papaya, black pepper"
    },
    {
        "name": "Mezcales de Leyenda Durango Cenizo",
        "style": "Joven",
        "agave": "Cenizo",
        "abv": 47,
        "origin": "Durango",
        "aroma": "Floral, leather, wet clay, very light smoke",
        "pallet": "Buttery, notes of coriander and fruit, finish is smooth and lingering like hard candy"
    },
    {
        "name": "Mezcales de Leyenda Montana",
        "style": "Joven",
        "agave": "Montana",
        "abv": 45,
        "origin": "Tamaulipas",
        "aroma": "Deep char, herbal (spearmint, earth, minerals, overall greeness), damp forrest",
        "pallet": "Sweet mild palate, powerful and very long finish with sweet menthol"
    },
    {
        "name": "Mezcales de Leyenda Puebla",
        "style": "Joven",
        "agave": "Tobala",
        "abv": 48,
        "origin": "San Nicolas Huajuapan, Puebla",
        "aroma": "Green, herby, mineral, various underripe fruits, slight saltiness",
        "pallet": "Fruity up front with an almost brininess and spiciness on the finish"
    },
    {
        "name": "Mezcales de Leyenda Potosi",
        "style": "Joven",
        "agave": "Salmiana",
        "abv": 42,
        "origin": "San Luis Potosi",
        "aroma": "Smoky, floral, pepper",
        "pallet": "Mild notes of elderflower, jalapeno, lemon"
    },
    {
        "name": "Mezcales de Leyenda Solar",
        "style": "Joven",
        "agave": "Cenizo, Durangensis",
        "abv": 45.9,
        "origin": "Durango",
        "aroma": "Herbal notes",
        "pallet": "Lingers on palate, clean"
    },
    {
        "name": "Mezcalosfera Madrecuixe y Verde",
        "style": "Joven, Ensamble",
        "agave": "Madrecuixe, Verde",
        "abv": 48.29,
        "origin": "Miahuatlan",
        "aroma": "Nutty, leather, spice",
        "pallet": "Mildly sweet, lemon, lavender, mango, spicy finish"
    },
    {
        "name": "Mina Real Joven",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 45,
        "origin": "Santa Catarina Minas, Oaxaca",
        "aroma": "Smoky agave, roasted pineapple, tropical fruit, earthiness",
        "pallet": "Citrus, tropical fruits, herbal undertones"
    },
    {
        "name": "Montelobos Joven",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 43,
        "origin": "Oaxaca",
        "aroma": "Grilled pineapple, citrus zest, hints of herbs and smokiness",
        "pallet": "Citrus, pepper, hot"
    },
    {
        "name": "Nuestra Soledad Ejutla",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 47,
        "origin": "Ejutla de Crespo, Oaxaca",
        "aroma": "Roasted fruits, herbs, earthiness, subtle citrus",
        "pallet": "Fruity sweetness, hints of herbs and botanicals, pomelo, almond oil"
    },
    {
        "name": "Nuestra Soledad San Baltazar",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 48,
        "origin": "Village of Tlacolula, San Luis del Rio, Oaxaca",
        "aroma": "Chinese five spices (star anise, sloces, cinnamon, sichuan peppercorns, and fennel seed), wet stone",
        "pallet": "Sweet, ripe, tropical fruits, caramelized agave"
    },
    {
        "name": "Nuestra Soledad San Luis Del Rio",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 48,
        "origin": "Village of Tlacolula, San Luis del Rio, Oaxaca",
        "aroma": "Orange, citrus, vanilla, mild/clean smoke",
        "pallet": "Sparkling grapefruit and citrus aromatics with wet stone, rish and creamy mouth feel. Savory butterscotch and herbs."
    },
    {
        "name": "Nuestra Soledad Zoquitlan",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 46,
        "origin": "Santa Maria, Zoquitlan, Oaxaca",
        "aroma": "Smokey, tropical fruits, citrus",
        "pallet": "Lemon zest, red pepper, berries, tropical fruits, quick finish that smooths out to leave a lingering sweetness"
    },
    {
        "name": "Ojo de Tigre",
        "style": "Joven",
        "agave": "Espadin, Tobala",
        "abv": 40,
        "origin": "Puebla, Oaxaca",
        "aroma": "Honey, brown sugar",
        "pallet": "Lime peel, white pepper, stone fruit"
    },
    {
        "name": "Pierde Almas La Puritita",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 40,
        "origin": "San Luis del Rio, Oaxaca",
        "aroma": "Soft smoke, floral, subtle leather",
        "pallet": "Savory smoke, earthy undertones, chocolate aftertaste"
    },
    {
        "name": "Peloton Joven",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 41,
        "origin": "Oaxaca",
        "aroma": "Kiwi fruit, lemon zest, dried peppercorn",
        "pallet": "Soft smoke, hot spice, woody"
    },
    {
        "name": "Por Siempre",
        "style": "Joven",
        "agave": "Sotol",
        "abv": 45,
        "origin": "Janos, Chihuahua",
        "aroma": "Earthy, rich wet soil, crystalized honey",
        "pallet": "Black pepper, earth, spice, mineral"
    },
    {
        "name": "Real Minero Barril",
        "style": "Joven",
        "agave": "Barril",
        "abv": 50,
        "origin": "Santa Catarina Minas, Oaxaca",
        "aroma": "Wet rock, brown sugar, black pepper",
        "pallet": "Spicy, earthy, tropical fruit, vanilla"
    },
    {
        "name": "Rey Campero Espadin",
        "style": "Joven",
        "agave": "Espadin",
        "abv": 48,
        "origin": "Canelaria Yegole, Oaxaca",
        "aroma": "Charred pineapple, anise, fennel",
        "pallet": "Barbacoa, guava, mint, mineral, tamarind"
    },
    {
        "name": "Rey Campero Jabali",
        "style": "Joven",
        "agave": "Jabali",
        "abv": 48,
        "origin": "Oaxaca",
        "aroma": "Bright and mineral with leathery smoke. Stone fruit, mostly peach. Lime peel.",
        "pallet": "Great tension between smoke and fruit. Lots of sour fruit. Calamansi orange, green banana, lime juice, with powerful earthy smoke."
    },
    {
        "name": "Rey Campero Tepextate",
        "style": "Joven",
        "agave": "Tepeztate",
        "abv": 48,
        "origin": "Oaxaca",
        "aroma": "Green bell pepper, jalapeno, light hint of mint",
        "pallet": "Roasted jalapenos with a gentle spiciness. Hot tabales candy. Leather and ash in the finish"
    },
    {
        "name": "Xicaru Pechuga Mole",
        "style": "Pechuga",
        "agave": "Espadin",
        "abv": 46,
        "origin": "Santiago, Matatlan, Oaxaca",
        "aroma": "Chicken fat, cedarwood, spice",
        "pallet": "Chicken bullion, savory, salty, nutty"
    }
]

const seedMezcals = () => Drink.bulkCreate(mezcalData);

module.exports = seedMezcals;