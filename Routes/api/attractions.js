const router = require("express").Router();
const attractionsController = require("../../Controllers/attractionsController");

// Matches with "/api/destinations/attractions"
router.route("/")
  .get(attractionsController.findAll)
  .post(attractionsController.create);

// Matches with "/api/destinations/attractions/:id" Make ID name ie. "Richmond Zoo"
router
  .route("/:id")
  .get(attractionsController.findById)
  .put(attractionsController.update)
  .delete(attractionsController.remove);

module.exports = router;