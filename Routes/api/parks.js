const router = require("express").Router();
const destinationsController = require("../../Controllers/destinationsController");

// Matches with "/api/parks"
router.route("/")
  .get((req, res) => {
    destinationsController.findAll(req, res)
  });

// Matches with "/api/parks/:name"
router
  .route("/:name")
  .get((req, res) => {
    destinationsController.findName(req, res)
  });
 
// Looks up the parks landing page; displays all counties
// router
//   .route("/parks/:county")
//   .get ((req, res) => {
//     destinationsController.findCounty(req, res)
// });

// get all county parks using the category data field
// router
//   .route("/county-parks")
//   .get((req, res) => {
//     destinationsController.findCategory(req, res)
//   })

// finds a specific park
// router
//   .route("/parks/county/:name")
//   .get((req, res) => {
//     destinationsController.findName(req, res)
//   });

module.exports = router;