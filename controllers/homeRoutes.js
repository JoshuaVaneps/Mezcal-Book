const router = require("express").Router();
const { Mezcal, User } = require("../models");
const Tequila = require("../models/Tequila");
const withAuth = require("../utlities/auth");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    // Get all Mezcals and JOIN with user data
    const mezcalData = await Mezcal.findAll({});

    // Serialize data so the template can read it
    const mezcals = mezcalData.map((mezcal) => mezcal.get({ plain: true }));

    res.render("homepage", {
      mezcals,
      loggedIn: req.session.loggedIn,
      isManager: req.session.isManager,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/add-mezcal", async (req, res) => {
  try {
    res.render("addMezcal", {
      loggedIn: req.session.loggedIn,
      isManager: req.session.isManager,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/edit-mezcal/:id", async (req, res) => {
  try {
    const mezcalData = await Mezcal.findByPk(req.params.id);
    if (!mezcalData) {
      res.status(404).json({ message: "No mezcal found with this id" });
      return;
    }
    const mezcal = mezcalData.get({ plain: true });
    res.render("editMezcal", {
      ...mezcal,
      loggedIn: req.session.loggedIn,
      isManager: req.session.isManager,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/tequila", async (req, res) => {
  try {
    // Get all Tequila and JOIN with user data
    const tequilaData = await Tequila.findAll({});

    // Serialize data so the template can read it
    const tequilas = tequilaData.map((tequila) => tequila.get({ plain: true }));

    res.render("tequila", {
      tequilas,
      loggedIn: req.session.loggedIn,
      isManager: req.session.isManager,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/cocktail", async (req, res) => {
  res.render("under_construction");
});

router.get("/mezcal", async (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/image-upload", (req, res) => {
  res.render("image-upload");
});

router.get("/views", async (req, res) => {
  try {
    const userSearch = req.query.search;
    const mezcalData = await Mezcal.findAll({
      where: {
        [Op.or]: [
          { brand: { [Op.like]: `%${userSearch}%` } },
          { name: { [Op.like]: `%${userSearch}%` } },
          { agave: { [Op.like]: `%${userSearch}` } },
          { style: { [Op.like]: `%${userSearch}%` } },
        ],
      },
    });

    const tequilaData = await Tequila.findAll({
      where: {
        [Op.or]: [
          { brand: { [Op.like]: `%${userSearch}%` } },
          { name: { [Op.like]: `%${userSearch}%` } },
          { agave: { [Op.like]: `%${userSearch}%` } },
          { style: { [Op.like]: `%${userSearch}%` } },
        ],
      },
    });

    console.log("Data to be rendered:", {
      userSearch,
      searchResults: [...mezcalData, ...tequilaData].map(
        (item) => item.dataValues
      ),
      loggedIn: req.session.loggedIn,
      isManager: req.session.isManager,
    });

    res.render("search", {
      userSearch,
      searchResults: [...mezcalData, ...tequilaData].map(
        (item) => item.dataValues
      ),
      mezcalData,
      tequilaData,
      loggedIn: req.session.loggedIn,
      isManager: req.session.isManager,
    });
  } catch (err) {
    console.error("An error occured:", err);
    res.status(500).json(err);
  }
});

module.exports = router;
