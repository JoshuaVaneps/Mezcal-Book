const router = require("express").Router();
const Mezcal = require("../../models/Mezcal");
const withAuth = require("../../utlities/auth");
const { User } = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const allMezcals = await Mezcal.findAll();
    console.log(allMezcals);
    res.json(allMezcals);
  } catch {
    console.log("Error fetching mezcal data:", error);
    res.status(500).json({ error: "Failed to fetch mezcal data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mezcalData = await Mezcal.findByPk(req.params.id);
    console.log(mezcalData);
    res.json(mezcalData);
  } catch {
    console.log("Error fetching mezcal data:", error);
    res.status(500).json({ error: "Failed to fetch mezcal data" });
  }
});

router.post("/addMezcal", async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.isManager) {
      return res
        .status(403)
        .json({ error: "You do not have permission to add a new Mezcal." });
    } else {
      const newMezcal = await Mezcal.create({
        name: req.body.name,
        style: req.body.style,
        agave: req.body.agave,
        abv: req.body.abv,
        origin: req.body.origin,
        aroma: req.body.aroma,
        pallet: req.body.pallet,
      });

      res.status(200).json(newMezcal);
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
        .json({ error: "You do not have permission to add a new Mezcal." });
    } else {
      const updateMezcal = await Mezcal.update(
        {
          name: req.body.name,
          style: req.body.style,
          agave: req.body.agave,
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
      res.status(200).json(updateMezcal);
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
        .json({ error: "You do not have permission to delete a Mezcal." });
    } else {
      const mezcalData = await Mezcal.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!mezcalData) {
        res.status(404).json({ message: "No Mezcal found with this id!" });
        return;
      }

      res.status(200).json(mezcalData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
