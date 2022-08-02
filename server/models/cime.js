const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  type: String,
  location: String,
  date: String,
  adhaar: { type: Number, require: true },
  address: String,
});

const CrimeDB = mongoose.model('crimedb', schema);

module.exports = CrimeDB;
