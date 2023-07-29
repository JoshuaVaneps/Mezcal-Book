const router = require('express').Router();
const { Mezcal } = require('../../models');
const withAuth = require('../../utlities/auth');

router.post('/addMezcal', withAuth, async (req, res) => {
  try {
    const newMezcal = await Mezcal.create({
      name: req.body.name,
      agave: req.body.agave,
      abv: req.body.abv,
      isManager: req.body.isManager,
    });

    res.status(200).json(newMezcal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const mezcalData = await Mezcal.destroy({
      where: {
        name: req.body.name,
      },
    });

    if (!mezcalData) {
      res.status(404).json({ message: 'No Mezcal found with this id!' });
      return;
    }

    res.status(200).json(mezcalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
