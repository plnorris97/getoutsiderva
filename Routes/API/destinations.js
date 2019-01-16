const router = require("express").Router();
const destinationsController = require("../../Controllers/destinationsController");

// Matches with "/api/parks"
router.route("/")
  .get(destinationsController.findAll)
  // .post(destinationsController.create);

// Matches with "/api/parks/:id"
router
  .route("/:id")
  .get(destinationsController.findById)
  // .put(destinationsController.update)
  // .delete(destinationsController.remove);

module.exports = router;