const router = require("express").Router();
const Mezcal = require("../../models/Mezcal");
const withAuth = require("../../utlities/auth");
const { User } = require("../../models/User");

router.post("/addMezcal", withAuth, async (req, res) => {
  try {
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
      const upDateMezcal = await Mezcal.update(
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
      res.status(200).json(upDateMezcal);
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
        .json({ error: "You do not have permission to add a new Mezcal." });
    } else {
      const mezcalData = await Mezcal.destroy({
        where: {
          name: req.body.name,
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
