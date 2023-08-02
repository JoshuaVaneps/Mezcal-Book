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

// JV: I dont think we need this route
// router.get("/mezcal/:id", withAuth, async (req, res) => {
//   try {
//     const mezcalData = await Mezcal.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["name"],
//         },
//       ],
//     });

//     const mezcal = mezcalData.get({ plain: true });

//     res.render("mezcal", {
//       ...mezcal,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// JV: I dont think we need this route
// Use withAuth middleware to prevent access to route
// router.get("/profile", withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//       include: [{ model: Mezcal }],
//     });

//     const user = userData.get({ plain: true });

//     res.render("profile", {
//       ...user,
//       loggedIn: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

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

module.exports = router;
