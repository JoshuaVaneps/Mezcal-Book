const router = require("express").Router();

const userRoutes = require("./userRoutes");
const mezcalRoutes = require("./mezcalRoutes");

router.use("/user", userRoutes);
router.use("/api/mezcal", mezcalRoutes);

module.exports = router;
