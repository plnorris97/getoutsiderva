const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  address: {
      type: String,
      required: true
  },
  county: {
      type: String,
      required: true
  },
  description: { 
    type: String, 
    required: true 
  },
  activities: {
    type: Array,
    required: true
  },
  amenities: {
    type: Array,
    required: true
  }
  
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;