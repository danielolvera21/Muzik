const { Schema, model } = require("mongoose");

const MuzikSchema = new Schema({
  muzikName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  size: {
    type: String,
    default: "Large",
  },
  artist: [],
});

// create Muzik model using MuzikSchema
const Muzik = model('Muzik', MuzikSchema);

// Export the Muzik Model
module.exports = Muzik;
