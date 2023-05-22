const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Record', recordSchema);