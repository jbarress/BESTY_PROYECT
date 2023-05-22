const mongoose = require('mongoose');

// Definir el esquema para los gastos e ingresos
const transactionSchema = new mongoose.Schema({
  monto: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  categoria: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
});

// Crear un modelo para los gastos e ingresos
module.exports = mongoose.model('Transaccion', transactionSchema);
