const mongoose = require('mongoose');

var schema = new mongoose.Schema({
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
