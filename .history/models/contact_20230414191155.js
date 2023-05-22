const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: Date,
    required: true
  },
  numero: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);