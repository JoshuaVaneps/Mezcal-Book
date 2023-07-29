const router = require('express').Router();

const userRoutes = require('./userRoutes');
const mezcalRoutes = require('./mezcalRoutes');

router.use('/api', userRoutes);
router.use('/mezcal', mezcalRoutes);

module.exports = router;
