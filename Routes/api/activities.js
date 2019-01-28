const router = require("express").Router();
const activityController = require("../../Controllers/activitiesController");

// Matches with "/api/activities"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create)

// Matches with "/api/activities/:name"
router
  .route("/:name")
  .put(activityController.update)
  .get(activityController.findByName)

router
  .route("/activities")
  .get(activityController.findAll)

module.exports = router;