
const router = require("express").Router();
const actRoutes = require('./activities');
const destRoutes = require('./parks');

// Activity routes
router.use("/activities", actRoutes);

// Park routes
router.use("/parks", destRoutes);


module.exports = router;