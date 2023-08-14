const router = require("express").Router();

const userRoutes = require("./userRoutes");
const tequilaRoutes = require("./tequilaRoutes");
const mezcalRoutes = require("./mezcalRoutes");

router.use("/user", userRoutes);
router.use("/tequila", tequilaRoutes);
router.use("/mezcal", mezcalRoutes);

module.exports = router;
