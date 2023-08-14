const router = require("express").Router();
const Tequila = require("../../models/Tequila");
const withAuth = require("../../utlities/auth");
const { User } = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const allTequilas = await Tequila.findAll();
    console.log(allTequilas);
    res.json(allTequilas);
  } catch {
    console.log("Error fetching tequila data:", error);
    res.status(500).json({ error: "Failed to fetch tequila data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tequilaData = await Tequila.findByPk(req.params.id);
    console.log(tequilaData);
    res.json(tequilaData);
  } catch {
    console.log("Error fetching tequila data:", error);
    res.status(500).json({ error: "Failed to fetch tequila data" });
  }
});

router.post("/addTequila", async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.isManager) {
      return res
        .status(403)
        .json({ error: "You do not have permission to add a new Tequila." });
    } else {
      const newTequila = await Tequila.create({
        brand: req.body.brand,
        name: req.body.name,
        style: req.body.style,
        appearance: req.body.appearance,
        abv: req.body.abv,
        origin: req.body.origin,
        aroma: req.body.aroma,
        pallet: req.body.pallet,
      });

      res.status(200).json(newTequila);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    if (!req.body.isManager) {
      return res
        .status(403)
        .json({ error: "You do not have permission to add a new Tequila." });
    } else {
      const updateTequila = await Tequila.update(
        {
          brand: req.body.brand,
          name: req.body.name,
          style: req.body.style,
          appearance: req.body.appearance,
          abv: req.body.abv,
          origin: req.body.origin,
          aroma: req.body.aroma,
          pallet: req.body.pallet,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(updateTequila);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    if (!req.body.isManager) {
      return res
        .status(403)
        .json({ error: "You do not have permission to delete a Tequila." });
    } else {
      const tequilaData = await Tequila.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(tequilaData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
