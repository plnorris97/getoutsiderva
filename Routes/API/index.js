
const router = require("express").Router();
const actRoutes = require('./activities');
const destRoutes = require('./destinations');

// Activity routes
router.use("/activities", actRoutes);

// Park routes
router.use("/destinations", destRoutes);
router.use("/destinations/parks", destRoutes);
router.use("/destinations/parks/county", destRoutes);
router.use("/destinations/parks/state", destRoutes);
router.use("/destinations/attractions", destRoutes);


module.exports = router;