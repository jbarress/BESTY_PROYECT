const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  email: {
    type: Date,
  },
  telefono: {
    type: Date,
  }
});

module.exports = mongoose.model('Contact', contactSchema);