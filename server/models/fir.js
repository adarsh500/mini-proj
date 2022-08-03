const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: Number,
  description: String,
  type: String,
});

const FirDB = mongoose.model('firdb', schema);

module.exports = FirDB;
