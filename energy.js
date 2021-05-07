const mongoose = require('mongoose');

const energySchema = mongoose.Schema({
  name: String,
  production: Number,
  turbine1: Number,
  turbine2: Number
}, { strict: false });

module.exports =  mongoose.model('energy', energySchema);