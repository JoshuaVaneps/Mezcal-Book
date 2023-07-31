const router = require("express").Router();

const userRoutes = require("./userRoutes");
const mezcalRoutes = require("./mezcalRoutes");

router.use("/user", userRoutes);
router.use("/mezcal", mezcalRoutes);

module.exports = router;
