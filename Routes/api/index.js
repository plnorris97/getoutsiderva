
const router = require("express").Router();
const actRoutes = require('./activities');
const destRoutes = require('./destinations');

// Activity routes
router.use("/activities", actRoutes);

// Park routes
router.use("/destinations", destRoutes);


module.exports = router;