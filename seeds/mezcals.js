const { Mezcal } = require("../models");

const mezcalData = [
  {
    brand: "Banhez",
    name: "Espadin & Barril",
    style: "Ensamble/Joven",
    agave: "Espadin & Barrill",
    abv: 42,
    origin: "Ejutla, Oaxaca",
    aroma: "Herbaceous, citrus fruit, and clay",
    pallet: "Baked banana, black pepper, and peat",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_kR2w4KqTHhTE7kEVs9QYQCpeplyMmkTtZvf-3KkO7Le_4Wb3FpvwkIVdTBMIpZdSlMguGRBjqd8O8njSMh77JD2NuYeBiB5aaf9qVGCkiCEnSrvaJANA_pNDG7A6Zn8-k2vPBiLeSMILhwYPINFID=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Banhez",
    name: "Tobala",
    style: "Joven",
    agave: "Tobala",
    abv: 47,
    origin: "La Compania, Oaxaca",
    aroma: "Green mango, leather, and fresh green herbs",
    pallet: "Sweet tropical fruit, ripe pineapple, and banana",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_CmgJXULYYZ1Um8HaAEg6Og9W6o4b_2hTJsmDkMYLC8CHW2tTrZuVgtakyY1pf0gU1BCHQA3T8kamR6Rbs5NzInNH8Kspze2MOpZfW69xnFw6EftkoFozHx7QL4biIe-Y-3Afnnt8WhZo0ZBnN7FLQ=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Bozal",
    name: "Borrego",
    style: "Pechuga",
    agave: "Castilla",
    abv: 52,
    origin: "Ejutla, Oaxaca",
    aroma: "Lemon zest, smoked lean lamb, fruity",
    pallet: "Pine, allspice, sea salt, and galla apple",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-MB1E5H9sxwG1gd5LJmF-FUZGmlaCwMzgyuQv1_-AAi3klcNTGZjD7JlE8jCLahv73iyXhQIR6o69_-jbx3cbhsXcJJEJaS7PsX8OiUKPoG0ryN-w500jpQS0dIY9aGdqUnAZ75GUa8P_dE9AyWMuf=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Bozal",
    name: "Chino Verde",
    style: "Joven",
    agave: "Verde",
    abv: 48.4,
    origin: "Sierra Madre del Sur Mountains, Sola de Vega, Oaxaca",
    aroma: "Earth, dried herbs, burlap, soft smokiness",
    pallet: "Ancho chiles, charred meats",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8XVKzBUinWiWEGL_CyqCfns2dDe27J5nNP2g_VLpgg7oincf7oybEKv5F4kPBCbn6-4wzQ1UHfT_80MpIF47YL3c8WLqzfjUX0OkVsfcsbg7sU1s5YZSHkLucHoYhVW5r_y_VyEU2mbzD2RicrIISk=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Bozal",
    name: "Cuixe",
    style: "Joven",
    agave: "Cuishe",
    abv: 47,
    origin: "San Luis Amatlan, Oaxaca",
    aroma: "Citrus, strong minerality",
    pallet: "Dry, rich tropical fruit",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-P3JRC0kZ1-YcGj9ah_RFASEB0V_mmF71wWtSnsGBaV85R5DbMLY7rK-8M7GMHhzPqWNP3NWXoBGu5DzLaznA09budMecZrHYwSEb3JX5vrj44d0Dk61BtyvZsxlaVczqfMQtDX578YHPKaUDLJ_3J=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Bozal",
    name: "Sacatoro",
    style: "Joven",
    agave: "Sacatoro",
    abv: 44.8,
    origin: "Mazatlan, Oaxaca",
    aroma: "Wet earth, rich smokiness, wild flowers",
    pallet: "Herbal, minerality, salty, smooth",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-ZgoZGMPqlvQdQa-FX2J50rca1x5LF5Xp8_EWP1Wbmerf3hHg1vQNI_y-Ia_fr75BMPa5hkA27kELPY1DNVeuLAM_9nj_YjWajODp8ciMV-vdssv9yMQr78VX07jiQt9QDZsu0W0G2D1TL_036S2Sr=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Bozal",
    name: "Tobasiche",
    style: "Joven",
    agave: "Tobaziche",
    abv: 47,
    origin: "Ejutla, Oaxaca",
    aroma: "Herbaceous, cedar",
    pallet: "Rich earth, savory smokiness",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_OCWewmzURnWcbse--7-sFHkIab60PEj_19wqHjpcpyNpZuErz40K3PmvFpTFBdO1_PyFzYkYEqAw2vlUk101cMQNnmpIvsSpShvfu-xWItZt4RGsKbvryaFPcxJM4XHJM5AyWpmdVpJdvnSCpVksU=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Bruxo ",
    name: "#2 Espadin & Barril",
    style: "Abocado, Ensamble",
    agave: "Espadin, Barril",
    abv: 46,
    origin: "Agua del Espino, Oaxaca",
    aroma: "Earthy, hints of citrus",
    pallet: "Brazil nuts, aloe",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9qaUdcM28sauJwSCqWbhnt1r91kQMulGvdzi8w2Pb0Y1m3FCoiaq5idIzo1uNiSk9wddPDMOfWioE8y2fDCuMHW-yP6fsCqoDsZOyLyFn0i0Ln-wvfJOyk9OXx2fj2SfA23mM4dKziNdk8vfKz-D64=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Caballito",
    name: "Cerreo Chato",
    style: "Joven",
    agave: "Chato",
    abv: 46,
    origin: "Amatitan, Jalisco",
    aroma: "Cooked agave, baked bread, broiled grapefruit",
    pallet: "Green bell pepper, anise, cooked agave, cream, tangerine, vanilla",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc__C1pHqdzRnGQ_jqD9Or8xZYxRovgP4waD0MfDk1yFiyGTuXbscdOPAKd2MM2HNXmAOzmt7JVOpp3MM2CEmzOCmBtqJjj3c6uzM4uSB2qwN-YexolwZ7TLcFhf5Vy5AH2Bgw58f4tL5AJRYTReYWsE=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Chacolo",
    name: "3 Anos Capon",
    style: "Joven",
    agave: "A. Angustifolia",
    abv: 48.3,
    origin: "Zapotitlan de Vadillo, Jalisco",
    aroma: "Mint, pine wood, lime",
    pallet: "Vanilla bean, peppermint, hint of lime, ginger",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc98ueA5pWXQpI0O5-YdjPBvc7Fkrb69BajUQ_BJ7lMYxCvA_srSw3OELnopbaMDtFpQOaroq184J-ipmAg4f5Aw1mUuBIdRwPMPp1b9DlJJqZ1VieNOEPDWKW244pp3vbpEBMFnswKA7h9bNjCJ5LVb=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Cuentacuentos",
    name: "El Barro",
    style: "Joven",
    agave: "Espadin",
    abv: 46,
    origin: "Santiago Matalan, Oaxaca",
    aroma: "Wet clay, green forest after rain, dark fruits",
    pallet:
      "Balanced with a sour touch, green apple, fresh cream, strawberry jam, brulee, coffee powder",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9VDonsaDZOpFd3YKweFiZwm_m-8ciemp7F4f_U-Sc08QRJfHveb_NJPnIybFyBe85QyCMINP6izj9YEy_NUIFh4mrc7RS4JyPuNqmmz2truTTExwBlg7lnKZ4qJ75Y9U2zWfAhfJWK7KsraXI05p3I=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Arroqueño",
    style: "Joven",
    agave: "Arroqueño",
    abv: 49,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Dark fruits (mostly cherry), clay, bright, vegetal",
    pallet: "Melon, baking chocolate, fresh green beans",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9Gt0-s_s_4l-D2O_dJ2CidzsiiAowhCpoe2jCRYeP6ool9_wD9CzcknKIyWuQ5Zd7kxDUt5V8EmJS5X90vOW1sxw8fRozwLr12VNq9EcG5GO2eeEytT59VCcFwqssBuUPmrZYXAjJrAyEh-ApGGnTB=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Chichicapa",
    style: "Joven",
    agave: "Espadin",
    abv: 46,
    origin: "San Baltazar Chichicapa, Oaxaca",
    aroma: "Herbaceous, citrus, light smoke",
    pallet: "Smooth, fruity, tropical fruits, roasted agave",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-T7Ic19cE480HziVBOa5nNHPUIAujlRRlAxHWO5ZsK1C-i2M8sRDstUaOUJ77f23P-pBWkoTWcaJCHjnD4ncvYEn7SnU-5y9JI8t7qSCJJIbgZKt-ftA2zg8T0VsBAOcUY5o6IRyoZ4MazlgzSDaQo=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Crema de Mezcal",
    style: "Joven",
    agave: "Espadin",
    abv: 40,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "Sweet, smoky, chocolate, coffee",
    pallet: "Rich, creamy, balanced sweetness with smoky undertones",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-VQqKm8R_ZcA1-MSxTuKcX0n20uerZHwAW8q_Obe0GMWKwopYbNQHBcw9jTguj2S9NVloVLwUXdu2UQJXaGa021N_GRAWNYIK2P9--lnOjWBADGrc4NaA9qqx_P1F-w7L7Jisf5umG-D57M8pA3qSi=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Minero",
    style: "Joven",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Sweet, fruity, earthy, smokey",
    pallet: "Smooth, complex, tropical fruits, roasted agave, chocolate",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_UtFhj3wvNs8V9Ev4iBiIRNO09gtVWr8jma5bXYzN-nu70j0aLHSJ3SxaZ1jye74GEOibhhMDq4Ac3Blc3OkQPhP-SgWHa4H9lBhCTLVevGJNlQ2jmsHY9d4gHB56YP-aPDWU0MkSHmq3iBblDzJT7=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Pechuga",
    style: "Pechuga",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Basil, lemon, ocean, fruit",
    pallet: "Smoky, warm, coal and spice",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-FX0ZgPeVdiyKBTkeYR7_qExI00ga5VhTWVwdlW7_-_tqXj97-0OkmkSPW-mXEI7n0UPekfvgCqSZTpCjKVNkRi64kXIp3a2wiEPeOT5cmbabpmCY7LPBKKSWHpkbnxmPlVzPgKHXlWJ8C06hThmgB=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "San Pablo Ameyaltepec",
    style: "Joven",
    agave: "Pizorra, Tobala",
    abv: 47,
    origin: "Puebla",
    aroma: "Dried pineapple and papaya",
    pallet: "Very floral, dried tropical fruit, creamy cheese",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_LhMNVO2L4vAs2L56Jj2ihsjXPi9-FKm9CHeAVYKolmBOS4QrnIY9ES61sir6o0pSZFgmzih3lH5YhCwkVfT_Je4M3tBd5dN5yTKT86IyPtesnV5OksZvNIFcpjz3qRgK6Odq8n5q5eODnv-vy_4xM=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Santo Domingo Albarradas",
    style: "Joven",
    agave: "Espadin",
    abv: 48,
    origin: "Oaxaca",
    aroma: "Peaches, cream, sweet fruit",
    pallet: "Spicy, woody, clean dry finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_lAxT6z-c0qRiy-aeCZ0PAWEiupkWVvA77fg6L-2k2yIANwlutA4hf5rMnEMw4ogEbSa7Rt8sE5MXQuuCYeJgT3nSFZZGGAcEwH2JntM03n0743dkm21TSZmdignKDhDK0GO3zZAwDTemKAfXgtfR9=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Tepextate",
    style: "Joven",
    agave: "Tepextate",
    abv: 45,
    origin: "Santa Maria Albarradas, Oaxaca",
    aroma: "Complex, earthy, hints of smoke",
    pallet: "Delicate, roasted agave, herbal undertones, touch of sweetness",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc93cPpiFAgHcXvYKW2UARIqgt7bMc95emOMDaGDCRFkL4qzCgsg1EbH3yQOig2RoWwZakMRkYDesRE-63eWLfOIIavMjz4JmceS_VwZEb0RpX_9cHaQag3TzyazgR0bOfsGsEVfoNe8MKQJ10mdXR7k=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Tobala",
    style: "Joven",
    agave: "Tobala",
    abv: 46,
    origin: "Santa Maria Albarradas, Oaxaca",
    aroma: "Intense, floral, tropical fruits",
    pallet: "Complez, tipe agave, sweet spices, touch of minerality",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_O31VqtXN0CFuU-3bB_k9IlyND01VIw_9DhZDjzoTPwqGGVtcs-t7_OxtoaFqzRK1I_d0RjdLX_kh24qEwneNsn3bcfooLmYC9lOkFQBBUSVTBpK47t13I3QKEZWD0vO3hmont5mx2i80qxD9BUPGB=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Tobaziche",
    style: "Joven",
    agave: "Tobasiche",
    abv: 47,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "Complex, herbal, hintes of smoke",
    pallet: "Vibrant, fresh agave, herbal undertones, subtle spiciness",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-m6J-9grCJ9ZuHQ2pk65li81oJmICvuTEb-mbvdsfnm7TVqSPIUkIlZiQtNqxcvkH-bwiyV4FHhB9QwxNRGVDj54LwQFdUsfMVfKdBs5PjydJmdFJM212seTTHFoX42AY7C0-c437kov5Rnn370aXf=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Vida",
    style: "Joven",
    agave: "Espadin",
    abv: 42,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "fruity aromatics, hints of honey, vanilla, roasted agave",
    pallet:
      "Ginger, cinnamon, burnt sandalwood, banana, tangerine, long soft finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-F3nLfsyzmXSQSlQHKfjBi31O-k_tGoMLxryrtGPRpcm7X8pfyHqqL7FNAtDx7ocA9AsToRXgSab5hqbrT4faXeaARdDlz-ogLyUsHiDBpqJFHsrD-dhRFkepBouaMdnNaN1I5lXhRhfj5L7kExv6U=w500-h500-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Vida de Muertos",
    style: "Joven",
    agave: "Espadin",
    abv: 45,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "Tropical fruits, warming spices",
    pallet:
      "Creamy texture, floral notes, green herbs, poblano peppers, long complex finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_OBpEQKnVUoEa1hBGi2P0gtwdzEtBSSbO-LRkO4jR9erKPD7akuSv_SGdbJ68OHBCLqbX1F9ckMcmfB84fTvT4zDQNI41G761y6r9WkswXsbvh_lNdIWE8HVPNWz0YSZ-lCA251uVD99sw_naA90GV=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Del Maguey",
    name: "Vida Single Village Puebla",
    style: "Joven",
    agave: "Espadin",
    abv: 40,
    origin: "Axocopan, Puebla",
    aroma:
      "Bright fruits and florals, hints of green herbs, poblano, minerality",
    pallet: "Agave, citrus, white peach, candied pine",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8gpkA5ODARpW9S3fMV90i5mB4ujmyec79_B-nsafaitEZ4GkhZraynPvwUHx7GbusWTlLZ7k_r-w-W9EWTmhD-404GjcR1X8v0bBAvUv3XHP3xW1X7XQSQ50dzHM4Z9ufJH2WYGa9Vg0w6TKV4QRS7=w204-h884-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Barril",
    style: "Joven",
    agave: "Barril",
    abv: 47,
    origin: "La Campana, Santa Maria, Zouquitlan, Oaxaca",
    aroma: "Earthy, light hints of smoke",
    pallet: "Delicate blend of sweetness, citrus and minerality",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9dzBVLWjcnmWCxNG1BnygmxMt-wZxdKgEgsnvAW9lZjPstvNnk9ydM3L-yKdBt9Dogaw2OwVLZgHEtbuGfA1CUH-wj2v3I9vdWRIl8SGnsnPbW25duRJ-NEmWklia2c61ixt1pRI3ghHReWVYhLI7I=w433-h577-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Cuixe",
    style: "Joven",
    agave: "Cuishe",
    abv: 47,
    origin: "Santa Maria, Santiago Matalan, Oaxaca",
    aroma: "Earthy, wet clay",
    pallet: "Spithy with subtle hints of smooth smoke",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9NTuagxHpGHGSWav2RlHmFdIhS2l9HQfdSGAjnMOoOvVfuxg2YEDT-YSuAwzwsondvMCN2sbuWilByVN_wucln0Y5o2w5UsZ1g6yO7QnbsE8trrDCwDZtxoo-_qVxZsTn__9JiWjbvt8NNGHtOvECM=w432-h577-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Espadin",
    style: "Aged in Glass",
    agave: "Espadin",
    abv: 47,
    origin:
      "Lachigui, San Luis del Rio, San Pedro Quiatoni, Santa Maria Zoquitlan, Santiago Matatlán",
    aroma: "Herbaceous, roasted agave, mint",
    pallet:
      "Savory with notes of citrus, basil, and rosemary. Warm lingering finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8JU18tWgc_G4FT1G80KuHoITZvyB1CbAjtb-FhJ0eDe1WiE6jCJSzF4Zju5h5yPs-HOIKnxjGCj3NoWfVBrujTyy_3tromUYwPW2VgEf3k5wJcK4sHyTYXC8T0J6FJI2i6AREmu9kbPlsWhH3IPMYN=w433-h577-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Madrecuize",
    style: "Joven",
    agave: "Madrecuixe",
    abv: 46,
    origin: "Lachigui, reo Seco, Santa Maria, Zoquitlan, Santiago Matalan",
    aroma:
      "Herbal, floral notes, hints of fresh-cut grass with a touch of earthiness",
    pallet:
      "Complez and balanced, flavors of mints, eucalyptus, green vegetables, subtle hints of citrus",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8aE_UE7P0z0ht4EQHPcb0nVhv69IxHoeAAIYFu8ZFHzlRf4vS5FR401Lus8uL9sX1cVj1h5X4tlanEojNc95yQg1WshwCpm7gLMGJlVrvujgSU947OERntpDu36t0vrg9ONuvIkbBoxU_bSA9uwkmb=w433-h577-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Pechuga",
    style: "Pechuga",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Maria Zoquitlan, Santiago, Matalan, Oaxaca",
    aroma: "Ripe fruits, spices, delicate smoke",
    pallet: "Sweet and savory flavors, tropical fruits, cinnamon, clove, umami",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9wkPiGxGeCEMwNN_EyRXDjAc42H8tFnW9fvTEH5f2vqLOB5SC6pYkxQjjvO5RdMLDWySnmE8lw97pOH0mNC4-D1T0FeXP6NS1ZzntDwkmrKJ756vS578qw36pVN6HQG8tGWxtgPh9_5VnJDhKqDuwT=w433-h577-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Tepeztate",
    style: "Joven",
    agave: "Tepeztate",
    abv: 46,
    origin:
      "Lachigui, Rio seco, San Baltazar Guelavila, San Luis del Rio, Santa Maria Zoquitlan, Oaxaca",
    aroma:
      "Herbal and floral notes, hints of roasted agave and a touch of smoke",
    pallet: "Green pepper, tropical fruit, earthiness and a hint of minerality",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8EttKzitwjVJS5XWsCQ_fxBvGzBIW0kriq2Ee07K-hxv6_wtAt60VTsRmQj4AaRPt6O5dfZK3Xq7DJiwYSpxjt7ycIdj1zf6PuZxJYr5j_dyFmDuiJvWkPeiUUGr89lLxno1TmrpO7qaqsirJZ2eSB=w433-h577-s-no?authuser=0",
  },
  {
    brand: "El Jolgorio",
    name: "Tobala",
    style: "Joven",
    agave: "Tobala",
    abv: 47,
    origin: "Lachigui, San Baltazar, Guelavila, Santiago Matatlan, Oaxaca",
    aroma: "Banana, pine, lemon zest",
    pallet: "Brine, taffy, cedar, mango, pleasantly viscous",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9_tRkzpMTntMDDBEpRzPXNqJmHCHpItG2hgHampAVkzcZYYUPlmc2SZETbjt3t_1XV5oIZXSUK6XYmi0b4toR5mh1HiyikWIW8v7AkHQdJMJtA2a-cT1ekCSaxWhWFhDUPzIyllpP2MQOucFb0G0Pq=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Fidencio",
    name: "Joven Clasico",
    style: "Joven",
    agave: "Espadin",
    abv: 45,
    origin: "Santiago Matalan, Oaxaca",
    aroma: "Wood smoke, green pepper, vegetal",
    pallet: "Tobacco, tar, pine",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_5sjQIWoD9VtiQnzfrDildzxcTY5462swZA9v4g0e0rb43MzpG5ilp5wTz-gpRdgCWfEhEffYbHrgeIPKHwhvljXMCRQu8OsCtDDTnRFJRX0ZCFH53ZW7Yc11GgodnXHv1J5di4vNUs9uC7Qglio_v=w500-h500-s-no?authuser=0",
  },
  {
    brand: "Gracias a Dios",
    name: "Espadin Reposado",
    style: "Reposado",
    agave: "Espadin",
    abv: 45,
    origin: "Santiago Matalan, Oaxaca",
    aroma: "Spicy, nutty, vanilla",
    pallet: "Low acidity/alcohol perception",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_d7nOglnzWuhrloVZMZHkVFTcoaFRDpls0-3D6G6rjRd-AJzE3oTa8x6U_JTU5bbmz00rigJ_99vgU2wYAwa9-IqkASw8XKu0mddFAtVmcJNOIQfPf9Hn5WDLyc9O8BYePVgEycusVAmrHv9l6tfFP=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Ilegal",
    name: "Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 40,
    origin: "Matatlan Valley, Oaxaca",
    aroma: "Eucalyptus, minerals",
    pallet: "Green apple, fresh citrus, red chiltepes",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_Z_Dv5j8BLyHxbEdsVpKP8oWu9kU9Wyy3yMdLVg9LB8iB2gODMpyoj-uiN5jWqJYvstOepnZ3AWnpD6BwVgF7mEuggQVdB17GDIdXBxXXb2D3g1oA4DYqinw8cLZTVwAdFd6SeHiU5TJac6PTrne7N=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Ilegal",
    name: "Reposado",
    style: "Reposado",
    agave: "Espadin",
    abv: 40,
    origin: "Matatlan Valley, Oaxaca",
    aroma: "Caramelized pear, bitter orange",
    pallet: "Clove, butterscotch, hints of vanilla",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_2abapHvWOeBjp8prMuE96a4LI0sD1BiS7AQaRotbwnzwugo5igPVz9yH1J4Jy2ihXn7OYqTg67mG4dojKelYNKJYfoXpcUV7GHpfDnG3NYxJoUqB9GfcyPWyXt2AbTVLn50XvGEkxIB-L9Qq2HKM8=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Ilegal",
    name: "Anejo",
    style: "Anejo",
    agave: "Espadin",
    abv: 40,
    origin: "Matatlan Valley, Oaxaca",
    aroma: "Maple, clove, bitter orange",
    pallet: "Dark chocolate, sweet agave",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8BifMEAUYoOf7p1fQ_pQhmcLH-t7KkTyOl1JjnvQRDMsZzkkm7PMfy__Nw6qNjbwHrHCmqc-u7G-WbzujC9xY9TywekcsUagVyh-65ZwJFXMvAEbg8mZqAK1cDeTDGih4868CCX8_rZ1M00Jm2rABK=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Ilegal",
    name: "7 Year Anejo",
    style: "Extra Anejo",
    agave: "Espadin",
    abv: 41.32,
    origin: "Tlacolula, Oaxaca",
    aroma: "Roasted agave, baked apple, oak",
    pallet: "Honey, dark chocolate, fig",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_6GpwbtHE5IYD1274kfdkmC44jcLjynkiDsklO72R6JKN6zhX9n4Kvov23V_qflakOSXVZZ8v2bE9BsCk-36DAv4H5oCprFs2fDwzMkmPy9pNhmyULD7dmEeuwGPeln9bq_N3TjkWH9ygSoRtn2Y-C=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Koch",
    name: "Mezcal Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 47,
    origin: "Rio de Ejutla, San Baltazar Guelavila, Oaxaca",
    aroma: "Herbaceous, ripe fruit",
    pallet: "Coconut, herbs, spices",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9tAaqL9tjp-_hrRv2qdfCVv_CYDM0iVePPOXi3cshT0UTj513XGWUj-YHWf1UDTbzbG9gN2GW4cJLOgoAyYs0XV2wAk7D2KWerK6-aHkOd53pRQtjtKTh-fAcT_GxXkVqX1n_Xjp1mdQTAR0SlrAe7=w433-h577-s-no?authuser=0",
  },
  {
    brand: "La Higuera",
    name: "Sotol",
    style: "Joven",
    agave: "Dasylirion, Wheeleri",
    abv: 48,
    origin: "Chihuahua",
    aroma: "Herbal, hint of smoke, rosy, soft vanilla",
    pallet: "Herbs, pineapple, cinnamon candy, honey roasted peanuts",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-Isk-Ek_MEv8-LaFeqyDJX0buPSp_XGh8INL2RvxaAasdArfOiw5FWtjNZY8RCwbDWcEtV2mUI2hH_yJmlzrg5U1qZ-f0_l7rm-wcunAv6KNQ82rE_1brkyQFih7SZ8RQEtQgBDlKJCDi7PqG4U0LX=w500-h500-s-no?authuser=0",
  },
  {
    brand: "La Luna",
    name: "Bruto",
    style: "Joven",
    agave: "Bruto",
    abv: 50.62,
    origin: "Michoacan",
    aroma: "Light smoke, roasted papaya, old leather",
    pallet: "Mild roasted coconut, fermented vegetables, thyme, oregano",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9GmAA9o2Kss8MFxWG_I2T17TIcKSdy0de9MFZopdXH3vDCcCvaK_HK7QIvzhm50ezIJGg9LZzW9hQAxuIjm46liI1DGx4Ss6VCrd2NxCRFoR0WdP3OdR6shQa4OLWxa1SylkyJKhSMKKp8waz_BRvJ=w225-h540-s-no?authuser=0",
  },
  {
    brand: "La Luna",
    name: "Cupreata",
    style: "Joven",
    agave: "Cupreata",
    abv: 49,
    origin: "Etucuaro, Michoacan",
    aroma: "Bright and floral",
    pallet: "Subtle smoke, citrusy, smooth",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc887g3OowYf5U21luCJ0lVre2cRCFDIy73akboYrw_z6sjf1KTNnKs4nPwrzSp4tAlfRO3CYo2-Adqj6QYJVrK6IrDZExMa52liQfkgBdyy-jDZAOqCuxwPuAaQVZdp79igAOU7dnjWImKLGHZVlDvb=w433-h577-s-no?authuser=0",
  },
  {
    brand: "La Luna",
    name: "Espadincillo",
    style: "Joven",
    agave: "Espadincillo",
    abv: 48,
    origin: "Etucuaro, Michoacan",
    aroma: "Citrus, grapefruit peel, strawberry yogurt",
    pallet:
      "Roasted agave, citrusy, layered with a touch of smoke, sweet and crisp finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-F8XVBRfV10hSD-PdwNY6jF43pRK-vN6GmAOxK3s741u8pPD0-W84_KL3xOGDru14kNf8aS7YiWVXdImv1rbsdwr_3ORYTmb_sSx7QtuXn3YOZMCClmgGzJhCv9C_57uBNgJGCuPiJe_lJVO4IP3p_=w433-h577-s-no?authuser=0",
  },
  {
    brand: "La Luna",
    name: "Manso Sahuayo",
    style: "Joven",
    agave: "Unspecified Sahuayo",
    abv: 48,
    origin: "Etucuaro, Michoacan",
    aroma: "Earthy, cheese, woodsy, agave, vanilla, sweet fruit",
    pallet: "Cigar leaf, chocolate, citrus, white pepper, hints of smoke",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_wC-G_S_pO7DpsSsaL84OZOmJdD3CA5Cz4bbLN7bNEr3cGlm9n8kBaexE6voEurTXJ32kLlModaUZXvmmfZs7Ev6bHjWUIzUCERXf8g-yElIntwf67fQlgV-6pGfnPn6Ur90c9t-swv2VJTEHHRqex=w433-h577-s-no?authuser=0",
  },
  {
    brand: "La Luna",
    name: "Reyes Chino",
    style: "Pechuga",
    agave: "Chino",
    abv: 48.51,
    origin: "Morelia, Michoacan",
    aroma: "Soft and grassy, citrus undertones",
    pallet: "Mint, fennel, lemongrass",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_9iRL0Doh4wRyCdQLe3xz-lM_Z2oFna_9qaj9icKpOUl9P9C_0utqnsSg-j3fa_uBHhm6kRq68Kt5GbvX_SDqy7ngvlslfcNrV9l-ePccmbU1Qb1jbBOeKUEtm4C7dxMK1VX-7dkIPwmFxauqaUqAP=w433-h577-s-no?authuser=0",
  },
  {
    brand: "La Venenosa",
    name: "Raicilla Sierra de Occidental",
    style: "Joven",
    agave: "Maximilians",
    abv: 42,
    origin: "Mascota, Jalisco",
    aroma: "Lime zest, acetone, savory herbs, terracotta",
    pallet:
      "Unsweetened lemon and lime juice, minerals, fresh ground pepper, followed by apple cider vinegar",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_nEm9s40jK7XugcTu3X-NliIdWVix4BAHH9zkQPGrR4iTdNQhH1lNqfgRJdHgc6irLvtJMrLhRZJX9pEQxiY7e8ksNM3PeFO58D-x5MedLtO9Rnk2hLsND7w7osnxOWSmraFCV3x8PhROeD80j0uVf=w433-h577-s-no?authuser=0",
  },
  {
    brand: "La Venenosa",
    name: "Raicilla Tabernas",
    style: "Joven",
    agave: "Chico Aguilar",
    abv: 46,
    origin: "Jalisco",
    aroma: "Grapefruit, grape skins",
    pallet: "Sugary canilla that falls quickly, agave nectar, cheese",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-kg_RyZ-3bF-cKRfBLKZd5yr32JAbfSBpBPsod8t2qBdvGWsewWWDsHlKatAOua6XQa423G6haK_wU7VBCQ-3VFwjYdG2X1VuDzDAiCbnGyldvv6ZvSP-XPm8kcT8GYfnnTHoybX9ft5iQMol6z7MJ=w500-h500-s-no?authuser=0",
  },
  {
    brand: "La Venenosa",
    name: "Sierra de Tigre",
    style: "Joven",
    agave: "Bruto",
    abv: 44.8,
    origin: "Manzanilla de la Paz, Jalisco",
    aroma: "Fruity, apricots, oranges, sour",
    pallet: "Light fruit, salt, cinnamon, funky",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-ypfu25dHjvI8kgroz5PdGs1_-lY4Se-xxOjP3Q2Z_sd6D0m4oyBDF5S1myHfVXSO8M6GBxG6CgxH5NpWKO6L2TEN0TL8u754ODIILzRx23VY4x6E1fiGZdKzWjQwLEfCBr-aSdbxA-_oj15gxdxbL=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcal Vago",
    name: "Espadin",
    style: "Joven",
    agave: "Espadin",
    abv: 50,
    origin: "Candelaria Yegole, Oaxaca",
    aroma: "Lilac, perfume, lavender",
    pallet: "Hot, mesquite and pine",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_eMtpRRSml6HpVr5BKIdUmrF21ZWlTwC87jy0fzPuq4_dOgIN9SeXA1NVIxbgXk75Vf1Q3Jf6TB35ncumgWCUaeDughh0ZT5ino1diG9L1if7U0_uTZAYlwhos6at0vtJ8VOq9m11AD-X_otM5iGSn=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcal Vago",
    name: "Elote",
    style: "Joven",
    agave: "Angustifolia",
    abv: 50,
    origin: "Candelaria Yegole, Oaxaca",
    aroma: "Sweet notes, mint, candle wax",
    pallet: "Roasted sweet corn, caramel, cream",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc86mghofLb1gjypWapOaIDReIoULM7tNo2oNtpwOL8g4EqexxlP3sV9qX5iIpLxX_pWB1Uzkh0lWDVBxX8bJDAdwxlJ5L9WVGok6Axsq96PE9GpHm-UgVAFy8FcS2Oyw9vikgGI3lEOV1eRBz5EhfFx=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcal Vago",
    name: "Ensamble",
    style: "Ensamble",
    agave: "Barril, Coyote, Espadin, Sierra Negra, Tepeztate, Tobala",
    abv: 50,
    origin: "Sola de Vega, Oaxaca",
    aroma: "Clay, earthy, pine needles",
    pallet: "Charred sinnamon, pumpkin, chestnuts",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8vLw7CgfVWm7XSo9HqsWXLiGLTRB3XxpH8qYmQS8-h7Edok-a6U0k321TasHoB352BLe8oqMX69PuOXjeddqB2h9t3ZBVhy6npKqrYf0eoEm27a9YcWnGpu2J8QIWcx6w8PxVmCmgEGpgilKDHHfcL=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcal Vago",
    name: "Madrecuixe",
    style: "Joven",
    agave: "Madrecuishe",
    abv: 50,
    origin: "Miahuatlan, Oaxaca",
    aroma: "Floral, earthy, fruity",
    pallet: "Minerals, orange, pepper",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8aFEQon7DzyxmsHz1Mf0Av3G5wyKF7GLEgtEe_26XPtz8n6dgqsECVpE2ijL8H5gfkT4a1EjsEqwrduH4dJ-9DzNUJhrCOeMvbdR8bbN6ZlsM2WkzvIVCMasFqfUvjua6ajvAi_2V-GmiBkY9UC_SJ=w225-h540-s-no?authuser=0",
  },
  {
    brand: "Mezcales de Leyenda",
    name: "Guerrero",
    style: "Joven",
    agave: "Ancho",
    abv: 46,
    origin: "Mazatlan, Xochipala",
    aroma: "Citrus fruit, herbs, cheesy",
    pallet: "Citrus, papaya, black pepper",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9_N5CSY3f9NRPQWvVk3I3YWCIE9WuT7lYPQUZu0-RU6_Tad98VPMqHFO5wa32MdJrz9RbvKib3gYI4Xi8-sC9htyJwMFpP-3hBlKzzPCp_kvLlmg3jiFXooewY_XAVZ6olL-iKJXYNftJH4OEHH0IE=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcales de Leyenda",
    name: "Durango",
    style: "Joven",
    agave: "Cenizo",
    abv: 47,
    origin: "Durango",
    aroma: "Floral, leather, wet clay, very light smoke",
    pallet:
      "Buttery, notes of coriander and fruit, finish is smooth and lingering like hard candy",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc86EjjzCIL4hwGU3RIKhHNYmcER91FIaqS4v6Gx5bkbvbZgCLVbim79r6Nnv6Wa7Q-MT76ViW2cMAW8y61wLPvoP4A4vVRS9ndp12hzKa4s44O5OavEhjIAdBn9CtWJMLzn9C3kUAqagjTvf4E4_1Vc=w455-h549-s-no?authuser=0",
  },
  {
    brand: "Mezcales de Leyenda",
    name: "Montana",
    style: "Joven",
    agave: "Montana",
    abv: 45,
    origin: "Tamaulipas",
    aroma:
      "Deep char, herbal (spearmint, earth, minerals, overall greeness), damp forrest",
    pallet:
      "Sweet mild palate, powerful and very long finish with sweet menthol",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8XU3ugMHPaFxJVLSlMLj9QrrS6P6eAitZbu4TMzPmMTfKaEHQpMO1h7ctfY8ap-w8JD_6U0t79iWdr0RwaeAaoJNGDBPIXRuOWlGMl4QKSUqSazpbE9Fydv2w8tQfnVfA22ngpTaDmhVfLTh5W7hZP=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcales de Leyenda",
    name: "Puebla",
    style: "Joven",
    agave: "Tobala",
    abv: 48,
    origin: "San Nicolas Huajuapan, Puebla",
    aroma: "Green, herby, mineral, various underripe fruits, slight saltiness",
    pallet:
      "Fruity up front with an almost brininess and spiciness on the finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_mwAAOlebyC45WHufYA1pcWCclq4Fgty5EUqGplcbyDA8ilFtOU2DGmiRdpVoDki1QOrhiot02Kd8OaZMVWNGUnQVYaSX6NFFwvuLY-938BGTDlmkKhwe9xY4mEV3me-S1WbhYHL06nW5mduADHDbh=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcales de Leyenda",
    name: "Potosi",
    style: "Joven",
    agave: "Salmiana",
    abv: 42,
    origin: "San Luis Potosi",
    aroma: "Smoky, floral, pepper",
    pallet: "Mild notes of elderflower, jalapeno, lemon",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-ZwUEDqIx6JUYfRmF4N6AxAmSXWQTLOwHzZOo9BIC84eIv4G_Bo_SSOKpCd_F-bVXKgmE-S8hxeyFLPOsZDnGhqreFayrR__2hNQZ_SOOr4F8ogQPUQMZ-zOWq9Q0m0fNoHeLIUsHp_I10ygvhnu1a=w500-h500-s-no?authuser=0",
  },
  {
    brand: "Mezcales de Leyenda",
    name: "Solar",
    style: "Joven",
    agave: "Cenizo, Durangensis",
    abv: 45.9,
    origin: "Durango",
    aroma: "Herbal notes",
    pallet: "Lingers on palate, clean",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9ZLfCpCSC6E1smLu1zNrQO_YQl-IUpG-dEv68Sog_lfqzlI7CpX7N7rv-n61hZOgtYqzDuCYJPmW8CMEJKkLt_NNbhFvxhqTKFNTbSji7ADnk5pITKT_UDciMz8pC7ybVCT6s4RGjLkQP5sIYaYDTo=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Mezcallosfera",
    name: "Madrecuixe y Verde",
    style: "Joven, Ensamble",
    agave: "Madrecuixe, Verde",
    abv: 48.29,
    origin: "Miahuatlan",
    aroma: "Nutty, leather, spice",
    pallet: "Mildly sweet, lemon, lavender, mango, spicy finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc96rmVcrmESKjOITMTaBFHus7d8fLixdXD6f0uxNsMMw0gKFMJmucMmcXgeMeULdgDM5iLwGm2WZ9nhxdyEod9I1ZQyy6FqQNG1EmwnBVgvBr_pNooNoFUugPud8u-8TYHxOrLKXy7QXhQB-V5O455Q=w408-h612-s-no?authuser=0",
  },
  {
    brand: "Mina Real",
    name: "Blanco",
    style: "Joven",
    agave: "Espadin",
    abv: 45,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Smoky agave, roasted pineapple, tropical fruit, earthiness",
    pallet: "Citrus, tropical fruits, herbal undertones",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_7q3SS_jGeEic9TI7eOYBnrEgIFO71G5jNr_phXykwni7yiBrOnHj_MFStfqOFB63b7oSGtJcqzUCMDrk6pityzfkuUMLqcFMHqfc8WXYpd2lEjWta2HEk4RFDRyMH3ZmkmtFG4wbl-A1MMsUmEOOE=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Montelobos",
    name: "Espadin",
    style: "Joven",
    agave: "Espadin",
    abv: 43,
    origin: "Oaxaca",
    aroma: "Grilled pineapple, citrus zest, hints of herbs and smokiness",
    pallet: "Citrus, pepper, hot",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8v7IQmqY76VgK8tKiSnk8OAAos8852p6k9ReDuA6wnxlZLk9CXqnRJAKrvxmm6ZPWTt1dIYkcfh-3m72IvBZCtutHF3UedwdCZkPHMcs3DGbmMDBCox4qXD0Hho-UdqaK_RpZZRyGbmMw05Vonos-3=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Nuestra Soledad",
    name: "Ejutla",
    style: "Joven",
    agave: "Espadin",
    abv: 47,
    origin: "Ejutla de Crespo, Oaxaca",
    aroma: "Roasted fruits, herbs, earthiness, subtle citrus",
    pallet:
      "Fruity sweetness, hints of herbs and botanicals, pomelo, almond oil",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-FgQUFeETkEkXHXqMDasyXK2OG0zYcJihUiJ7Cv_52WouhH1mlcGVBTsFrRo2W0SrH6URBTpM1wl3LsVFlrd9H_XH9JXNrAEBcsK71jJgnpTnmzLokjjZri-TC5M698oP6f4wZwmNZpXcP-jzHHMBk=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Nuestra Soledad",
    name: "San Baltazar",
    style: "Joven",
    agave: "Espadin",
    abv: 48,
    origin: "Village of Tlacolula, San Luis del Rio, Oaxaca",
    aroma:
      "Chinese five spices (star anise, sloces, cinnamon, sichuan peppercorns, and fennel seed), wet stone",
    pallet: "Sweet, ripe, tropical fruits, caramelized agave",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8Et1UjhvB8q9JX3CC8dHDFZZnliwDts4FGSMeOvAtaOaIsbIn4JVU_Gue35DlLyHkG-FhuH93vWAFMW1i5AHWIefzAxXWT7cQWB59KdoC0KuMAM488TsVTGZ5WfoTWaQwQxRVgmiOIQLpU3EdhubJF=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Nuestra Soledad",
    name: "San Luis Del Rio",
    style: "Joven",
    agave: "Espadin",
    abv: 48,
    origin: "Village of Tlacolula, San Luis del Rio, Oaxaca",
    aroma: "Orange, citrus, vanilla, mild/clean smoke",
    pallet:
      "Sparkling grapefruit and citrus aromatics with wet stone, rish and creamy mouth feel. Savory butterscotch and herbs.",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8l5uzMH0D6n7QVuLpaY1xtxbjmJ8nj1OSz9RQk4Y2YcabG9FMOc5aEuttelprshul9O6-AESgwSvreg0bsYmaggl4mk-8DmLsn0ZAkTzMqDa3qvfRmgx1ZD16rgAzZ2MlqUYEYFUUMApDhRtk3ZICN=w277-h899-s-no?authuser=0",
  },
  {
    brand: "Nuestra Soledad",
    name: "Zoquitlan",
    style: "Joven",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Maria, Zoquitlan, Oaxaca",
    aroma: "Smokey, tropical fruits, citrus",
    pallet:
      "Lemon zest, red pepper, berries, tropical fruits, quick finish that smooths out to leave a lingering sweetness",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9vXYeMlk0lKPc3IJ2OFpIRJY_vdI8zB4TdLEvOORSNa5_HxhPUiAXa8kWKJctm3HPB5j_2rB9kqKD1VVk2eyodxWBXk-WLP17WR0MQB_Ul0A8XF2ORfiYc0-MNRX40dVEzd8UY5qSHZD47LDuzbi3o=w277-h899-s-no?authuser=0",
  },
  {
    brand: "Ojo de Tigre",
    name: "Joven",
    style: "Joven",
    agave: "Espadin, Tobala",
    abv: 40,
    origin: "Puebla, Oaxaca",
    aroma: "Honey, brown sugar",
    pallet: "Lime peel, white pepper, stone fruit",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_85Sxm7LAj3HwEFeOwCwcE7Yc2EkOrCGKngQF6S_GEZcqtr3op7Kz4UzY9AI6ta1JSUYWdzCiITPNE6DgSFU19-ivFqN3GKCyYgtykozKca8CaoilI1BINLMUzPdA6ORAZqoRObwkz7_CMDD-5JaL_=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Pierde Almas",
    name: "La Puritita",
    style: "Joven",
    agave: "Espadin",
    abv: 40,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "Soft smoke, floral, subtle leather",
    pallet: "Savory smoke, earthy undertones, chocolate aftertaste",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_bpfH9U14mEAWHlBFp53Dc9yGsEMtR-J9BK_Cm-VT3PaplqJ3nD0ZGDNPTkM7jmpihgSzrkgsOgJNhp35kWJD43ZhhAf-YSevScLzQ5JImCKI5HXTwrGw4wjS4K6BR1s0xtQeGNWrLYaKMIogl85Sf=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Peloton",
    name: "Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 41,
    origin: "Oaxaca",
    aroma: "Kiwi fruit, lemon zest, dried peppercorn",
    pallet: "Soft smoke, hot spice, woody",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_afbPxFoABb-ORyUqQVQQxOBKjdpzMnZQy70Sv6_quY5q61JlvAIrsYAd94zOADQLBKmSZbp0zQa4chYmjqMyf36FzGnG-72i1hlLsRtZXJlCkELOVj7Glr-OcW5tuDaO9d1dxaFHRL3yDBUz1K_CU=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Por Siempre",
    name: "Sotol",
    style: "Joven",
    agave: "Sotol",
    abv: 45,
    origin: "Janos, Chihuahua",
    aroma: "Earthy, rich wet soil, crystalized honey",
    pallet: "Black pepper, earth, spice, mineral",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8OJaHl-PyUWu6_3QSnTKGlO3lpBX30KPibhON6mjPlKPN8g48TpQaWm7vTPbeP0z6QXkGIRoQPQdk4vY1llEHPMkO-fgJ9Qv9Ndz5dR1xcMhJ9GGHq7h6pxs-0RGVQTfrCvn-7Vj58zq8O9DHipZq3=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Real Minero",
    name: "Barril",
    style: "Joven",
    agave: "Barril",
    abv: 50,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Wet rock, brown sugar, black pepper",
    pallet: "Spicy, earthy, tropical fruit, vanilla",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8_4WOikaOal5C45yT4Hmaq1d83RykqKe3iQNs1TsoFZ87mTpwOBGuyfEnX3v88EL8YE9U5Y0KjeJircms8fEqYEJj6spq_YqPJ1OSOgUUbJJ6Q_NgPxA7qfUFTX5o9rcQgfVkCkY2n8kdj_CwyGqOy=w433-h576-s-no?authuser=0",
  },
  {
    brand: "Rey Campero",
    name: "Espadin",
    style: "Joven",
    agave: "Espadin",
    abv: 48,
    origin: "Canelaria Yegole, Oaxaca",
    aroma: "Charred pineapple, anise, fennel",
    pallet: "Barbacoa, guava, mint, mineral, tamarind",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9WfWI0mPMg3ypVy8_8mpa7oZurtTMuXwPNc_WDI-JgH5ymxd6d8gZkZkO3UO0nUI5z7I8eUmVdAAp5aLgufK6IZGajMDe5zq4Gvxvn5LHYrSJyFTZmkrQSFNKo50ySrsb9W0o5ucRM0cZNTIrvInCz=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Rey Campero",
    name: "Jabali",
    style: "Joven",
    agave: "Jabali",
    abv: 48,
    origin: "Oaxaca",
    aroma:
      "Bright and mineral with leathery smoke. Stone fruit, mostly peach. Lime peel.",
    pallet:
      "Great tension between smoke and fruit. Lots of sour fruit. Calamansi orange, green banana, lime juice, with powerful earthy smoke.",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8wuAlx102BfTkUkzghOLT5tup-Z5DDfLzDKyLK18vzvP9wg2zpxwKQc0euJ2VF3mmk6hZl-52hyZMHSDLFBsLR-LQTfvrzvcMcz0qfdEDhTn5IIRYpaDFihJ9O-I2Mr0YB0Bl6OSMBTkD1SRwhDqTg=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Rey Campero",
    name: "Tepextate",
    style: "Joven",
    agave: "Tepeztate",
    abv: 48,
    origin: "Oaxaca",
    aroma: "Green bell pepper, jalapeno, light hint of mint",
    pallet:
      "Roasted jalapenos with a gentle spiciness. Hot tabales candy. Leather and ash in the finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_7IEZ4poSD8CglGV3YMqVrscEQ2xYepgHK8ZDAwr_tL9PvOmjlbL-3hgtjkOwiDSreCsm6BPfCPTvMKQx3H9wH9l53zAEXsfsrUbUsORwe8Myii3cqScHtYWEY9MJEZA19hC7Md7G-5y6THYnZTBes=w433-h577-s-no?authuser=0",
  },
  {
    brand: "Xicaru",
    name: "Pechuga Mole",
    style: "Pechuga",
    agave: "Espadin",
    abv: 46,
    origin: "Santiago, Matatlan, Oaxaca",
    aroma: "Chicken fat, cedarwood, spice",
    pallet: "Chicken bullion, savory, salty, nutty",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9yn-6wwvpNdaUojb5OZ_1nU7WIXyrt7MDbypjgiptTt2kSeh9bsmK-BL00y8jso0nk6Ly_S9LjUikdanqY1zeihF6yHvAfw6LkfIIMc-tdz5VSkoCz0b9m2wodwaJDVxG0u8DHUxXYmJQT1vv4jSyj=w433-h577-s-no?authuser=0",
  },
];

const seedMezcals = () => Mezcal.bulkCreate(mezcalData);

module.exports = seedMezcals;
