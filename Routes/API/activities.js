const router = require("express").Router();
const activityController = require("../../Controllers/activitiesController");

// Matches with "/api/books"
router.route("/")
  .get(activityController.findAll)
  // .post(activityController.create);

// Matches with "/api/books/:id"
router
  .route("/:name")
  .get(activityController.findByName)
  // .put(activityController.update)
  // .delete(activityController.remove);

module.exports = router;