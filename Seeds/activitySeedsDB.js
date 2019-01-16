const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Activities collection and inserts the Activities below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/getoutsiderva"
);

const activitySeed = [
  {
    name: "Paddle Sports",
    description:
      "Paddle sports are watersports that require a paddle to propel and steer a vessel through and across the water. Canoeing and kayaking are the original proverbial paddle sports, however, other sports have now joined the category. River rafting, white water rafting, and stand up paddleboarding are also paddle sports Richmonders love to do.",
      parks: ["Dutch Gap Conservation Area", "Pocahontas State Park", "Presquile National Widlelife Refuge", "Robious Landing Park", "Osbourne Park & Boat Landing", "Tredegar Street Put-in", "14th Street Take-out", "Belle Isle"] 
  },
  {
    name: "Disc Golf",
    description:
      "Disc golf (also called Frisbee Golf) is a flying disc sport in which players throw a disc at a target. It is played using rules similar to golf. It is often played on a course of 9 or 18 holes. Players complete a hole by throwing a disc from a tee area toward a target, throwing again from the landing position of the disc until the target is reached",
      parks: ["Dorey Park & Recreation Center", "Dunncroft/Castle Point Park", "Bryan Park"]
  },
];

db.Activity
  .remove({})
  .then(() => db.Activity.collection.insertMany(activitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });