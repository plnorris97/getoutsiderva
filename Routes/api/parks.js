const router = require("express").Router();
const destinationsController = require("../../Controllers/destinationsController");

// Matches with "/api/destinations"
router.route("/")
  .get((req, res) => {
    destinationsController.findAll(req, res)
    // .then((results) => {
    //   console.log(results);
    //   res.json(results);
    // })
    // .catch((err)=> res.status(404).json(err))
  });

// Matches with "/api/parks/:name"
router
  .route("/:name")
  .get((req, res) => {
    destinationsController.findName(req, res)
  });
  // .then(() => res.json({ success: true}))
  // .catch(err => res.status(404).json({ success: false}))

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