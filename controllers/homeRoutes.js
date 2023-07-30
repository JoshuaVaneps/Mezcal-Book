const router = require("express").Router();
const { Mezcal, User } = require("../models");
const withAuth = require("../utlities/auth");

router.get("/", async (req, res) => {
  try {
    // Get all Mezcals and JOIN with user data
    const mezcalData = await Mezcal.findAll({
      // include: [
      //   {
      //     model: Mezcal,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const mezcals = mezcalData.map((mezcal) => mezcal.get({ plain: true }));

    // Pass serialized data and session flag into template

    res.render("homepage", {
      mezcals,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/Mezcal/:id", withAuth, async (req, res) => {
  try {
    const mezcalData = await Mezcal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const mezcal = mezcalData.get({ plain: true });

    res.render("mezcal", {
      ...mezcal,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Mezcal }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
