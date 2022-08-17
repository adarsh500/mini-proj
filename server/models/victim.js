const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  vid: {
    type: Number,
    required: true,
  },
  id: Number,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  adhaar: Number,
  address: String,
});

const VictimDB = mongoose.model('victimdb', schema);

module.exports = VictimDB;
