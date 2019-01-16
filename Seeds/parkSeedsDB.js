const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Activities collection and inserts the Activities below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/getoutsiderva"
);

const parkSeed = [
  {
    name: "Echo Lake Park",
    address: "5701 Springfield Rd., Glen Allen, VA 23060",
    county: "Henrico",
    description:
      "This scenic park features a large fishing lake, picnic shelter, play equipment, and a half-mile nature trail. Area joggers find this trail an easy, but scenic alternative to neighborhook streets.",
    activities: ["Exercise Trail", "Hiking", "Nature", "Running", "Biking", "Fishing", "Geocaching"],
    amenities: ["Parking Lot", "Playground", "Restrooms", "Shelter/Picnic Areas", "River/Lake"] 
  },
  {
    name: "Robious Landing Park",
    address: "3800 James River Rd., Midlothian, VA 23113",
    county: "Chesterfield",
    description:
      "Robious Landing Park provides easy access to the James River for kayaking, canoeing, rowing, and fishing. The 102-acre site also houses 3.4 miles of trails, playgrounds, picnic shelters, and sand volleyball.",
    activities: ["Exercise Trail", "Hiking", "Nature", "Running", "Biking", "Fishing", "Geocaching", "Birding/Wildlife"],
    amenities: ["Parking Lot", "Playground", "Restrooms", "Shelter/Picnic Areas", "River/Lake", "Boat Ramp",] 
  },
];

db.Park
  .remove({})
  .then(() => db.Park.collection.insertMany(parkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });