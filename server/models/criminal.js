const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  cid: {
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

const CriminalDB = mongoose.model('criminaldb', schema);

module.exports = CriminalDB;
