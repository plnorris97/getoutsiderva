const router = require("express").Router();
const destinationsController = require("../../Controllers/destinationsController");

// Matches with "/api/parks"
router.route("/")
  .get(destinationsController.findAll)

// Matches with "/api/parks/:id"
router
  .route("/:name")
  .get(destinationsController.findByName)
  // .then(() => res.json({ success: true}))
  // .catch(err => res.status(404).json({ success: false}))

// Looks up the parks landing page 
router
  .route("/parks")
  .get(destinationsController.findByName)
  // .then(() => res.json({ success: true}))
  // .catch(err => res.status(404).json({ success: false}))

// Looks up the county parks landing page
router
  .route("/parks/county")
  .get(destinationsController.findAll)
  // .then(() => res.json({ success: true}))
  // .catch(err => res.status(404).json({ success: false}))

// Looks up the parks state page
router
  .route("/parks/state")
  .get(destinationsController.findAll)
  // .then(() => res.json({ success: true}))
  // .catch(err => res.status(404).json({ success: false}))

// Looks up the attractions landing page
router
  .route("/attractions")
  .get(destinationsController.findAll)  
  // .then(() => res.json({ success: true}))
  // .catch(err => res.status(404).json({ success: false}))

module.exports = router;