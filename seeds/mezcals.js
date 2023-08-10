const { Mezcal } = require("../models");

const mezcalData = [
  {
    name: "Banhez Espadin & Barril",
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
    name: "Banhez Tobala",
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
    name: "Bozal Borrego",
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
    name: "Bozal Chino Verde",
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
    name: "Bozal Cuixe",
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
    name: "Bozal Sacatoro",
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
    name: "Bozal Tobasiche",
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
    name: "Bruxo #2",
    style: "abocado, Ensamble",
    agave: "Espadin, Barril",
    abv: 46,
    origin: "Agua del Espino, Oaxaca",
    aroma: "Earthy, hints of citrus",
    pallet: "Brazil nuts, aloe",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9qaUdcM28sauJwSCqWbhnt1r91kQMulGvdzi8w2Pb0Y1m3FCoiaq5idIzo1uNiSk9wddPDMOfWioE8y2fDCuMHW-yP6fsCqoDsZOyLyFn0i0Ln-wvfJOyk9OXx2fj2SfA23mM4dKziNdk8vfKz-D64=w433-h577-s-no?authuser=0",
  },
  {
    name: "Caballito Cerreo Chato",
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
    name: "Chacolo 3 Anos Capon",
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
    name: "Cuentacuentos El Barro",
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
    name: "Del Maguey Arroqueño",
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
    name: "Del Maguey Chichicapa",
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
    name: "Del Magury Crema de Mezcal",
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
    name: "Del Maguey Minero",
    style: "Joven",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Sweet, fruity, earthy, smokey",
    pallet: "Smooth, complex, tropical fruits, roasted agave, chocolate",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_9O8OPVKAElMWicU1aTfkLfmvd4rnjpgfciNvJsC-vUsN3-4w0KZ60BdXKl3DaSPiuh7TnnTIjTe6_MNbE9XUkekC8IeboQk9Qtz_rfZVnLwcTC-OPvJMpWCLZXFzBxunQSWdp-TuIIBopFPjJ1NDf=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Pechuga",
    style: "Pechuga",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Basil, lemon, ocean, fruit",
    pallet: "Smoky, warm, coal and spice",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9ngb5PaUz3yTIP6CCep3lbeRIgqNh_5ASsD4JkOxqkyZ5CDj5jJyDpCp0GGtq-hIKjMB4ESKbhQYEXSU6Lg61Ay_dzZPasNlvUtvlSBI11ACjsm13HhWV66N7nluXNPN8FFPzT6LhebMNTKD00MvAG=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey San Pablo Ameyaltepec",
    style: "Joven",
    agave: "Pizorra, Tobala",
    abv: 47,
    origin: "Puebla",
    aroma: "Dried pineapple and papaya",
    pallet: "Very floral, dried tropical fruit, creamy cheese",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9fFZhIAYKbe3YkLRxF6lX4Enyp3L4fOxEfFKzl-blKcRcaBAdlKUejIcW73fBKsjFk2D75y5DcIIvQ5U2S-0BYT_wSxE6C5zAjf9uBB78-LZ8FJbLuWxLKn6evioJcXYtnz2ABwkElZ08f4qH-cMf2=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Santo Domingo Albarradas",
    style: "Joven",
    agave: "Espadin",
    abv: 48,
    origin: "Oaxaca",
    aroma: "Peaches, cream, sweet fruit",
    pallet: "Spicy, woody, clean dry finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-jMch07Kw2uVHY41-X950qDhftGjwwQlSq8DyNVEkt_qOdAaF3QPL0DkJ2mDRuCLigEhVDWdOXBZd1pdyWTibDAgQlubegYSUK1EYRhprEcwRfrLdbTtmzU6HQokr8Y4M9YHUCDidQPo9AYQTjmMU5=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Tepextate",
    style: "Joven",
    agave: "Tepextate",
    abv: 45,
    origin: "Santa Maria Albarradas, Oaxaca",
    aroma: "Complex, earthy, hints of smoke",
    pallet: "Delicate, roasted agave, herbal undertones, touch of sweetness",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_RjFBHStAu0KcYakkNaAlMSz64XsuyXSxObz8o7btqAhgNdx_DixzAZD0KWLsMUPm0D1fUgGWteiIowhVr6eU_ZmaiTIdfMr0rde_aqcUatMBeLN3D8gwJUqt0KBdF6x1RNJw4pa6RzLEOsujjZW41=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Tobala",
    style: "Joven",
    agave: "Tobala",
    abv: 46,
    origin: "Santa Maria Albarradas, Oaxaca",
    aroma: "Intense, floral, tropical fruits",
    pallet: "Complez, tipe agave, sweet spices, touch of minerality",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_CmgJXULYYZ1Um8HaAEg6Og9W6o4b_2hTJsmDkMYLC8CHW2tTrZuVgtakyY1pf0gU1BCHQA3T8kamR6Rbs5NzInNH8Kspze2MOpZfW69xnFw6EftkoFozHx7QL4biIe-Y-3Afnnt8WhZo0ZBnN7FLQ=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Tobaziche",
    style: "Joven",
    agave: "Tobasiche",
    abv: 47,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "Complex, herbal, hintes of smoke",
    pallet: "Vibrant, fresh agave, herbal undertones, subtle spiciness",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-khLmb1VlGmHes6zxc2s5C9I6BS4fhANCMaOMXZkA6zu2Qb7upSKtNeGEo7tTlGMBU2qdXfWRnTYnDRHaffyRV3v-PktWhLa4wXMUBqiFdvhxhTh-P2To1ShfUmSQhgGYYHsXId7MaZp7gzJPycQUk=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Vida",
    style: "Joven",
    agave: "Espadin",
    abv: 42,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "fruity aromatics, hints of honey, vanilla, roasted agave",
    pallet:
      "Ginger, cinnamon, burnt sandalwood, banana, tangerine, long soft finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc84Snzj-m8afpd75yHiwKOjd09XlFnYk3oF_kw_YdMNSJG-1zOdh7uXyXBGfQZTT2vI9U2-mWqS15LrHXUY5nywvQ411ZBy0o5kWWUo7U662ZhHdLQR9qgZuv4w6cMGRFZGzBHXdZWrVdMlR6c_gmqe=w500-h500-s-no?authuser=0",
  },
  {
    name: "Del Maguey Vida de Muertos",
    style: "Joven",
    agave: "Espadin",
    abv: 45,
    origin: "San Luis del Rio, Oaxaca",
    aroma: "Tropical fruits, warming spices",
    pallet:
      "Creamy texture, floral notes, green herbs, poblano peppers, long complex finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-OBwoaWSY2xuHerw0juK9QLGXowvC6fd-FvbeLy1ZmOm7zdiV0TpYlAoB1NP7qCrqXxZVabfjs5__xQThVzo53X4K9hd7KpfJzgA8Jm139K2SJxy6AQYrWL97REK9v-IPx6FGnAp1RmxAuPfglaB0r=w433-h577-s-no?authuser=0",
  },
  {
    name: "Del Maguey Vida Single Village Puebla",
    style: "Joven",
    agave: "Espadin",
    abv: 40,
    origin: "Axocopan, Puebla",
    aroma:
      "Bright fruits and florals, hints of green herbs, poblano, minerality",
    pallet: "Agave, citrus, white peach, candied pine",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8rbFH1HkASP59gW3dgh93RdvbsGH9e-XwUdsh2FtcPTwm3-Oco2j4aUhlqURYaaVcwQcjm8C7PmBNSYfCJC-TkR4o33k4B7QR694yL16mcPtFKUQdHymlrOl-ImH4UPkYJbXaxdkmMzrXkDTtyAl6g=w220-h955-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Barril",
    style: "Joven",
    agave: "Barril",
    abv: 47,
    origin: "La Campana, Santa Maria, Zouquitlan, Oaxaca",
    aroma: "Earthy, light hints of smoke",
    pallet: "Delicate blend of sweetness, citrus and minerality",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9Byph434zUHei-QKTW5zH9Vr0DMO9Xzt5UgU-K8_9QhmBv70oTYLq3j454IFdQuocNTvgbiiUI9uE-wkmeo_A7fn2wihXWw2cAqAF-1O9bSufBJLZX22Oi7qE9zAgYXiWGgguHYQnqKhcxIdd8vwO3=w433-h577-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Cuixe",
    style: "Joven",
    agave: "Cuishe",
    abv: 47,
    origin: "Santa Maria, Santiago Matalan, Oaxaca",
    aroma: "Earthy, wet clay",
    pallet: "Spithy with subtle hints of smooth smoke",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8EvaqC_EaI9kRzE0AAtNGmVuvWL3439KK7TsTZCMW7HEpqNKkqro0-Rnuju8wOqEz7P4n-fRxkO96Br5J9bZyUDjqwdombmzho8I7fb0qTh4dIBXj0CwgGOOTSMBjDuyguQRzZIa54AGFja6t4OwYJ=w432-h577-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Espadin",
    style: "Aged in Glass",
    agave: "Espadin",
    abv: 47,
    origin:
      "Lachigui, San Luis del Rio, San Pedro Quiatoni, Santa Maria Zoquitlan, Santiago Matatlán",
    aroma: "Herbaceous, roasted agave, mint",
    pallet:
      "Savory with notes of citrus, basil, and rosemary. Warm lingering finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8lPB-LZ6QZDNH58KaFghb1HPhpNzQycaXRaRq0yW9GaTqXrDLcMIcmSjkVSB_YyJrpdvBiKp9RkU3-lm4qI_HnMSbik7B6lz31k6NkBAPzEGCm79di6GVvHrMLHVUd13O5DZ_lHDEPqv37qirQnpq9=w433-h577-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Madrecuize",
    style: "Joven",
    agave: "Madrecuixe",
    abv: 46,
    origin: "Lachigui, reo Seco, Santa Maria, Zoquitlan, Santiago Matalan",
    aroma:
      "Herbal, floral notes, hints of fresh-cut grass with a touch of earthiness",
    pallet:
      "Complez and balanced, flavors of mints, eucalyptus, green vegetables, subtle hints of citrus",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-DTd2-f-Ey-AyMJg_JxYMRsTLTtVSeZcekrBRjrERje2DlEQOum5ipIKHfGCaE32-otr0DHNEvCA0778a2pN-ZcYxjPhVAdrF18Ybnqf6RqSdrMCiOXFNFZlFjpn--4nbQS7tMrfY00TZTpWqQET1x=w433-h577-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Pechuga",
    style: "Pechuga",
    agave: "Espadin",
    abv: 46,
    origin: "Santa Maria Zoquitlan, Santiago, Matalan, Oaxaca",
    aroma: "Ripe fruits, spices, delicate smoke",
    pallet: "Sweet and savory flavors, tropical fruits, cinnamon, clove, umami",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_DMadPkUCP5d_s-1a3G0HJodDh_m4tKI6roUkx-4B9gbKvsKrF462Qgjm-HHTXXprZtmacUOYglM13WcOi41UVbaei15ymfKge_ije6d6NLTcVKPWqUC2wYNZ6NvDbHBC5BaVcsp5qsUi52wo53arv=w433-h577-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Tepeztate",
    style: "Joven",
    agave: "Tepeztate",
    abv: 46,
    origin:
      "Lachigui, Rio seco, San Baltazar Guelavila, San Luis del Rio, Santa Maria Zoquitlan, Oaxaca",
    aroma:
      "Herbal and floral notes, hints of roasted agave and a touch of smoke",
    pallet: "Green pepper, tropical fruit, earthiness and a hint of minerality",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-JDL-3WXb480zyccA9tlv36EFnyIvFYfm1hs24o-YZpko6wSsWJ1B-VRGifqjjYnEc59NYZqZ--4tPJD4wt-ForqhAk1xktPIdnWKNCDdKRc_iF3CIa5AZEHh2b0pygNHgVTqJagmAE_C1jaCrkBgN=w433-h577-s-no?authuser=0",
  },
  {
    name: "El Jolgorio Tobala",
    style: "Joven",
    agave: "Tobala",
    abv: 47,
    origin: "Lachigui, San Baltazar, Guelavila, Santiago Matatlan, Oaxaca",
    aroma: "Banana, pine, lemon zest",
    pallet: "Brine, taffy, cedar, mango, pleasantly viscous",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9SooGOfiC9gAIc0NQyn8B3B34ELHnlhhutn3mXdJzj1AhM7mBLXTAqhxVF1umzC6_cgmyUoJ_hvYuJ3H_wrkQgk_IhBM1IHLPmaA7hTGosRmMCmxlxQTMX0s1ToaU5LGen4fv1-ipoRWfALt20OOs4=w433-h577-s-no?authuser=0",
  },
  {
    name: "Fidencio Joven Clasico",
    style: "Joven",
    agave: "Espadin",
    abv: 45,
    origin: "Santiago Matalan, Oaxaca",
    aroma: "Wood smoke, green pepper, vegetal",
    pallet: "Tobacco, tar, pine",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_WMxIgpi_94jLlutk0kiNafvAq7JgJG1UCnctPZVB0Nv6MY0uAxY-3UD1FHsIpJAITdZw6zHVLac5LD86OGg1C9ONwMPPRVnyIrDBpDNuKztW6t5H0I7_DRPjzpH-cXgasvBSfF-DDQfrDzCCCSKhR=w500-h500-s-no?authuser=0",
  },
  {
    name: "Gracias a Dios Espadin Reposado",
    style: "Reposado",
    agave: "Espadin",
    abv: 45,
    origin: "Santiago Matalan, Oaxaca",
    aroma: "Spicy, nutty, vanilla",
    pallet: "Low acidity/alcohol perception",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-bgpzpo9aLXJOeJHo5LRlHQ0IU5dPc-WMFHdG5sT4qw-aOK88n8J1eVWKKFu8BH__bBOSC3VCu9UDMgMtoE8LLRMIPuMXU0T8WWHGOvgHtCnJs9YvxWyN3cA4VHCSf3Ezih0gPb_vWLMY2UtxQZQYi=w433-h577-s-no?authuser=0",
  },
  {
    name: "Ilegal Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 40,
    origin: "Matatlan Valley, Oaxaca",
    aroma: "Eucalyptus, minerals",
    pallet: "Green apple, fresh citrus, red chiltepes",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9iBwUl88zZFeWeCVvBuGhQcE32F_6yNcwZInjezpQHPF9YYeF0R7bu6mKBlTkedZzrIkvQ9_6a2HBooMuG7WbKP1ayzRInxDOhiV2CYIJdkEz8AVXAXJy_ZvvYBgZTXg8j4F7bZK-Rj1-Od2MvzeYf=w433-h577-s-no?authuser=0",
  },
  {
    name: "Ilegal Reposado",
    style: "Reposado",
    agave: "Espadin",
    abv: 40,
    origin: "Matatlan Valley, Oaxaca",
    aroma: "Caramelized pear, bitter orange",
    pallet: "Clove, butterscotch, hints of vanilla",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9KAAwkCWhZibLUNIc9InY5eBlcQba5KlLKbHgaeToR-dfinq_p8zWb74xHzW6oAV5sHAgtBxoalFLbWkDfAuZKyVGl0clYlICtZDV8ePytAgG0OM6Q62aTOoTt8oynLWOBbelEPUZydccAG6Uc_XiW=w433-h577-s-no?authuser=0",
  },
  {
    name: "Ilegal Anejo",
    style: "Anejo",
    agave: "Espadin",
    abv: 40,
    origin: "Matatlan Valley, Oaxaca",
    aroma: "Maple, clove, bitter orange",
    pallet: "Dark chocolate, sweet agave",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9_Y7dXa1v8GdAQ2RkoP_Qq3JfC-LoOoQWlHqsbE1tBCv__lnThW-akeu2Mhk0qNS5VrJbheGAh_OPjEc5Pz_OVg78BgUFsL_ddpTzlZw-uNAs1Ch5knTD3fabgNIVgfXFePYY2DttVJlNJfsVY1k5G=w433-h577-s-no?authuser=0",
  },
  {
    name: "Ilegal 7 Year Anejo",
    style: "Extra Anejo",
    agave: "Espadin",
    abv: 41.32,
    origin: "Tlacolula, Oaxaca",
    aroma: "Roasted agave, baked apple, oak",
    pallet: "Honey, dark chocolate, fig",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8-bZVAikld3vfbnviP4C0wC2iAkxKpJnhwY-oVqTzPDPLB-0tL9k0PijoHTUSAq7pmJotfBfu_ICW1Rzh5vgUAvS0L9CYD73vx3nEgoJDLu7CmmwHWPKeK93SE8bsi8hvzCEMRTGgb-hq8ihJW4fPa=w433-h577-s-no?authuser=0",
  },
  {
    name: "Koch el Mezcal Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 47,
    origin: "Rio de Ejutla, San Baltazar Guelavila, Oaxaca",
    aroma: "Herbaceous, ripe fruit",
    pallet: "Coconut, herbs, spices",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_loyWSsc_Oxz__k72WX9I15kHC1lYaJLontzHUIYEJScBG_fzZ_X8uG3NAG2VPvPt4mbV6_pFYYAq-KU-4wKn1UiGJSA8vV-TNO8t287_S2dkyfSCukSTsWXIO-ofv0JmdJ2XBO0Q0WwsUbEyQ2VNP=w433-h577-s-no?authuser=0",
  },
  {
    name: "La Higuera",
    style: "Joven",
    agave: "Dasylirion, Wheeleri",
    abv: 48,
    origin: "Chihuahua",
    aroma: "Herbal, hint of smoke, rosy, soft vanilla",
    pallet: "Herbs, pineapple, cinnamon candy, honey roasted peanuts",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-HCnSTNvaR8PzcUjQFdpQGQ_69DzP9-iYN5ZDpszKeLML1NcoYB_Yy-SUh0RSraDFUHF2Ls35dej2DYE__lDA0zmj3f80IyWNfPeV1930u8YyBx3eVIHJGXq9Nf70EhDGxDaresRxhDhi39h7VU85G=w500-h500-s-no?authuser=0",
  },
  {
    name: "La Luna Bruto",
    style: "Joven",
    agave: "Bruto",
    abv: 50.62,
    origin: "Michoacan",
    aroma: "Light smoke, roasted papaya, old leather",
    pallet: "Mild roasted coconut, fermented vegetables, thyme, oregano",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9Q42nnSz5VkVTLn7-pSRXdCudO5PKVLQFF8EizPbVDol3cpOGWQVLLQar7pyzhg5yBcm_3XCPhmUOXccMWXO3VTzQ8UM2oY_CoHK0mU38g-7eMizmT9bZK4mgiKtyY4H5NDWp1CvDZVJH4V7P3WJu9=w225-h540-s-no?authuser=0",
  },
  {
    name: "La Luna Cupreata",
    style: "Joven",
    agave: "Cupreata",
    abv: 49,
    origin: "Etucuaro, Michoacan",
    aroma: "Bright and floral",
    pallet: "Subtle smoke, citrusy, smooth",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8j5bKuaHldEsCjmASvYJwe0p6LiMv62NNH95QkJQgxlc1IDDiY5-VWkkTjm_DpaoYZKL5F9RRIKXJGLFuUW8qGbg4IikNuyX5af9fWL9Y0YzyGFTBsJqyHMza3FNWcG1svX7XHDd4uLF8HEf2Tjmvz=w433-h577-s-no?authuser=0",
  },
  {
    name: "La Luna Espadincillo",
    style: "Joven",
    agave: "Espadincillo",
    abv: 48,
    origin: "Etucuaro, Michoacan",
    aroma: "Citrus, grapefruit peel, strawberry yogurt",
    pallet:
      "Roasted agave, citrusy, layered with a touch of smoke, sweet and crisp finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_39mmpCSizcNCCSyCLRlt-L65ofZIugmiLzsQpS6jTrZIQlVkAfkyCeTdaSuT3DIfZ4SdtIs6_tW3iKBSygeh23B9UF8BW4klJl7GKAF86YiB3QTduHSA3ChX62C9zFlqCXIiYwpwik5eFrFwG9Axb=w433-h577-s-no?authuser=0",
  },
  {
    name: "La Luna Manso Sahuayo",
    style: "Joven",
    agave: "Unspecified Sahuayo",
    abv: 48,
    origin: "Etucuaro, Michoacan",
    aroma: "Earthy, cheese, woodsy, agave, vanilla, sweet fruit",
    pallet: "Cigar leaf, chocolate, citrus, white pepper, hints of smoke",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-TyHgy74U0Y-kgHMWff43-XyIWq8ZxKgekFhnzbgKEy42jD72qVEcsWW_94lQx35VZXOFfPnouCkyobdPLoiw-1ob6u4NiXSiPmMoEb7rHIjveuhWxkwPSmqKVhdvr3CNWaWsxW_qUOYVHVFV2VGJt=w433-h577-s-no?authuser=0",
  },
  {
    name: "La Luna Reyes Chino",
    style: "Pechuga",
    agave: "Chino",
    abv: 48.51,
    origin: "Morelia, Michoacan",
    aroma: "Soft and grassy, citrus undertones",
    pallet: "Mint, fennel, lemongrass",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8o9ZC-Pk4LIKh2pVnHVCoMcHW8SfcnndsRfkLWwSgxSuvsqPKmZYzTByswy1uIQAvM8aGhA8nsHik79E7DYmAEHLyd0odsMmqcjvvcrqAjfarRWe-aDwUVutyrVlIU8yO9UIXMV1B9XZ_L8gfT-a0E=w433-h577-s-no?authuser=0",
  },
  {
    name: "La Venenosa Raicilla Sierra de Occidental",
    style: "Joven",
    agave: "Maximilians",
    abv: 42,
    origin: "Mascota, Jalisco",
    aroma: "Lime zest, acetone, savory herbs, terracotta",
    pallet:
      "Unsweetened lemon and lime juice, minerals, fresh ground pepper, followed by apple cider vinegar",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_fkfXCIpyOhvpKBJMeHBdmmyXysvUYvSvjK2CpgHB7pnRe_2RjVO9ivcL2phxMo1PIu3qf4ubeT__UdEpdGkqjD3zFjM7kO2AIQyfHh-GDt2cGPixf3FBUfcjkjB0zeaf3ruahdwu63MPHoFYd6VSA=w433-h577-s-no?authuser=0",
  },
  {
    name: "La Venenosa Raicilla Tabernas",
    style: "Joven",
    agave: "Chico Aguilar",
    abv: 46,
    origin: "Jalisco",
    aroma: "Grapefruit, grape skins",
    pallet: "Sugary canilla that falls quickly, agave nectar, cheese",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc82kvev1ipsUp70tYRXgmNZkB3S-7R4oUCjbbqe9zQRsjB90WfZRushVrO9zmGNmzEbayYog6BKHbuhlHeeTu0-u1yrNlJaXY8LCpmQDj2CY7xP4g7wTlnFbAKumKoTSpO92l4gUWOOMB6xU1e_fpkW=w500-h500-s-no?authuser=0",
  },
  {
    name: "La Venenosa Sierra de Tigre",
    style: "Joven",
    agave: "Bruto",
    abv: 44.8,
    origin: "Manzanilla de la Paz, Jalisco",
    aroma: "Fruity, apricots, oranges, sour",
    pallet: "Light fruit, salt, cinnamon, funky",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_smUchkqUXpTm_-_oUTAIxvNrELu8wqfUyBM7TaU1zfmIAwMTapMPZABJ6ZVmYCN0yrkQJhKm_upfNz0lvzDWcPVLzT34-ViZU2eOYg6QnmXWqTxQA9plxrGtBBHS3fLnDs_TvgelH-twqcTvc4rZq=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcal Vago Espadin",
    style: "Joven",
    agave: "Espadin",
    abv: 50,
    origin: "Candelaria Yegole, Oaxaca",
    aroma: "Lilac, perfume, lavender",
    pallet: "Hot, mesquite and pine",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_vPKaDlsZ4bd_9pQc1Pp6j-CY_d0TyqMqP_AqwZwBwcitcgOn-u8nttO1-pbtIEdPuSLYTQdPCOLOCOc5ar-hPyhbRCLj7OMaAgBqrWXjEV36uqwEbzKWw9o6-2ZS25281syK61Z7h-H7AIgFnN6jy=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcal Vago Elote",
    style: "Joven",
    agave: "Angustifolia",
    abv: 50,
    origin: "Candelaria Yegole, Oaxaca",
    aroma: "Sweet notes, mint, candle wax",
    pallet: "Roasted sweet corn, caramel, cream",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8EWqz_uT9x9AATkx7B8yuTKw3KEXPARaOrhcN7zodg3F96ugyyis9pM0BX6OH3Eh3tJ6a3_OPfr9J-LsBwpB_HwwNXQ8gIuY5SruplfvA66yX1MnPdAPJmJAsUbxcsVk6QABT8uAsMfbP3HARc_7np=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcal Vago Ensamble",
    style: "Ensamble",
    agave: "Barril, Coyote, Espadin, Sierra Negra, Tepeztate, Tobala",
    abv: 50,
    origin: "Sola de Vega, Oaxaca",
    aroma: "Clay, earthy, pine needles",
    pallet: "Charred sinnamon, pumpkin, chestnuts",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9woNmr2s6izyr4EBVK13SVpdXERLItPjT60LeMqIql0nsi32tGVidBv4boswia6hJXOHpgzMJ7hKIJRl3lnmTlu7fPYgYl3Hw8FW0A5NNv40xvEtF38QF-O7RSL9yf4XEH_P3s20gXyJdXEYJFQqht=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcal Vago Madrecuixe",
    style: "Joven",
    agave: "Madrecuishe",
    abv: 50,
    origin: "Miahuatlan, Oaxaca",
    aroma: "Floral, earthy, fruity",
    pallet: "Minerals, orange, pepper",
  },
  {
    name: "Mezcales de Leyenda Guerrero",
    style: "Joven",
    agave: "Ancho",
    abv: 46,
    origin: "Mazatlan, Xochipala",
    aroma: "Citrus fruit, herbs, cheesy",
    pallet: "Citrus, papaya, black pepper",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-2lreJoRHZEBrwXRtfFeCSm5tJ00QNUkee1zgK_mR9Z-8P9MSsEBajKM8gm7oHeferFYaNh3C0krkxvlr96kiUPb0CsYgUXbSvi01yqb5iZYUDyk8hDQI2wJ8f6GZt2PYFrAMguMKm40iNLXtOA9mt=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcales de Leyenda Durango Cenizo",
    style: "Joven",
    agave: "Cenizo",
    abv: 47,
    origin: "Durango",
    aroma: "Floral, leather, wet clay, very light smoke",
    pallet:
      "Buttery, notes of coriander and fruit, finish is smooth and lingering like hard candy",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9db-vGFGJcBumMYTWA8O_eHxrYVbwlC6cnlVxacjGq12D3fJ5GMBl000jo6w_sK_1py4r9XWfPYQZxGHUCcARRcRJkplKOk7XiWgGpJ-7y884PD2dOpsAoNsLIjDenEotxdCHsqAeLftgTmQXjfdmj=w455-h549-s-no?authuser=0",
  },
  {
    name: "Mezcales de Leyenda Montana",
    style: "Joven",
    agave: "Montana",
    abv: 45,
    origin: "Tamaulipas",
    aroma:
      "Deep char, herbal (spearmint, earth, minerals, overall greeness), damp forrest",
    pallet:
      "Sweet mild palate, powerful and very long finish with sweet menthol",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc-nq_MKNpmu6727q4jcCSh32uSyA69QhlF4-9CrKEKoLQQr3M3B25wh2kutLCyay00DL3nC249Xz8gMPNm4LtDzfrVj0lwAI2VBXjZOGZvBuWTdQDSkOxtEoWDG2ujKw6aFP2AnaiKeeJfwB2nd4FQR=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcales de Leyenda Puebla",
    style: "Joven",
    agave: "Tobala",
    abv: 48,
    origin: "San Nicolas Huajuapan, Puebla",
    aroma: "Green, herby, mineral, various underripe fruits, slight saltiness",
    pallet:
      "Fruity up front with an almost brininess and spiciness on the finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc9AL9fTriBOKrfMrJntOFkq7i9NborNyylLkPF5sk4huyaPRI7-z_zdENwTr2RP2QTzjzb7tBmFRdtcLcxunKQMGc8U8HE4_Ug-z1eU_3TlQFvkVU7lvAJMkswUwp1fWCDAG5Re1eMgVc3pqTP5wqPR=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcales de Leyenda Potosi",
    style: "Joven",
    agave: "Salmiana",
    abv: 42,
    origin: "San Luis Potosi",
    aroma: "Smoky, floral, pepper",
    pallet: "Mild notes of elderflower, jalapeno, lemon",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc8cKCmZ4GyMQaBNHctdKjIuXctQ2AA3fnWLnsMcPTVavjunoTxuiCJZlEqUIjRI0lVFSNsIy_ALeYGwfpBFIyoFYCW6Z9EzgnMwu-kYCtbYruF8DB2yMgM5Gilhpyzq0obcJn1Rx2rvg4OFzgudgTq_=w500-h500-s-no?authuser=0",
  },
  {
    name: "Mezcales de Leyenda Solar",
    style: "Joven",
    agave: "Cenizo, Durangensis",
    abv: 45.9,
    origin: "Durango",
    aroma: "Herbal notes",
    pallet: "Lingers on palate, clean",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_n2sSIQtUVSx2awOsjKwbPT6NGXDhq3D78CpO5enfxVX4A7cIUdgnunXtSfWhUPK__wPBuKgDW7YeCEy8TfFHSFFMgGqs0uZw0mF-vFlAG_Yb2SfH_CokE2rngSmDb-Yj3fz4p9EbHMh4KXMNTc4z3=w433-h577-s-no?authuser=0",
  },
  {
    name: "Mezcalosfera Madrecuixe y Verde",
    style: "Joven, Ensamble",
    agave: "Madrecuixe, Verde",
    abv: 48.29,
    origin: "Miahuatlan",
    aroma: "Nutty, leather, spice",
    pallet: "Mildly sweet, lemon, lavender, mango, spicy finish",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_fag08Y7ASiMBMpHYldwgNYxnzg8k7ND5DAZpkYJ0ziVWbs_tlMpcE-q0cPYJTF6YaxWHilfoPe_XwPqBYqn5t_-yGYNUnyvr9fUeBsgR2NIqr6QISPk9LuuKWJT-SqCocsmnKaOpQ_VFmZOkQExsP=w408-h612-s-no?authuser=0",
  },
  {
    name: "Mina Real Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 45,
    origin: "Santa Catarina Minas, Oaxaca",
    aroma: "Smoky agave, roasted pineapple, tropical fruit, earthiness",
    pallet: "Citrus, tropical fruits, herbal undertones",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc_D_jdjkZcbtu2VHDf6O1C8BAfRfimME7arhkJcNnqbanLb8WFUfuhGm3jX7TFBauljwd6cJRNp0totGQYeAHKOs_mlEXUXeRywoCSRv7ByOikl-1zupJ0JLhZyE6ZeSvyL35lRqa1EnDLffwdXDP1K=w433-h577-s-no?authuser=0",
  },
  {
    name: "Montelobos Joven",
    style: "Joven",
    agave: "Espadin",
    abv: 43,
    origin: "Oaxaca",
    aroma: "Grilled pineapple, citrus zest, hints of herbs and smokiness",
    pallet: "Citrus, pepper, hot",
    image:
      "https://lh3.googleusercontent.com/pw/AIL4fc__Zrwm5BXWnjmt3q6Dj9kLyVD9gsVmPGll1YhpKYhvN3Wn4-Wjtl-7PnTo_8WMTliCPp8Eqy-ZBfciR7e2ZAGTUezvojQpRx234QTeHAQdHcN5lMgzVrPy1cywdr2bE5JTK_hNPktVhBgr3SoPbeAx=w433-h577-s-no?authuser=0",
  },
  {
    name: "Nuestra Soledad Ejutla",
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
    name: "Nuestra Soledad San Baltazar",
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
    name: "Nuestra Soledad San Luis Del Rio",
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
    name: "Nuestra Soledad Zoquitlan",
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
    name: "Ojo de Tigre",
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
    name: "Pierde Almas La Puritita",
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
    name: "Peloton Joven",
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
    name: "Por Siempre",
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
    name: "Real Minero Barril",
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
    name: "Rey Campero Espadin",
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
    name: "Rey Campero Jabali",
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
    name: "Rey Campero Tepextate",
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
    name: "Xicaru Pechuga Mole",
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
