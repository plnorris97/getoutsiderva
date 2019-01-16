const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  parks: {
    type: Array,
    required: true
  }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;