const router = require("express").Router();
const activityController = require("../../Controllers/activitiesController");

// Matches with "/api/activities"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create)

// Matches with "/api/activities/:name"
router
  .route("/:name")
  .get(activityController.findByName)
  .put(activityController.update)

router
  .route("/activities")
  .get(activityController.findAll)

module.exports = router;