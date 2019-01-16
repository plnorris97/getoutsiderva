
const router = require("express").Router();
const activityRoutes = require('./activities');
const destinationRoutes = require('./destinations');

// Activity routes
router.use("/activities", activityRoutes);

// Park routes
router.use("/destinations", destinationRoutes);
router.use("/destinations/parks", destinationRoutes);
router.use("/destinations/parks/county", destinationRoutes);
router.use("/destinations/parks/state", destinationRoutes);
router.use("/destinations/attractions", destinationRoutes);


module.exports = router;