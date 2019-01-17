const router = require("express").Router();
const activityController = require("../../Controllers/activitiesController");

// Matches with "/api/activities"
router.route("/")
  .get(activityController.findAll)

// Matches with "/api/activities/:name"
router
  .route("/:name")
  .get(activityController.findByName)

module.exports = router;