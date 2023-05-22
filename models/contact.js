const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  email: {
    type: String,
  },
  telefono: {
    type: String,
  }
});

module.exports = mongoose.model('Contact', contactSchema);