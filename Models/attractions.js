const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attractionSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  address: {
    type: String,
    required: true
  },
  description: { 
    type: String, 
    required: true 
  }
});

const Attraction = mongoose.model("Attraction", attractionSchema);

module.exports = Attraction;