//solicitando a database
const mongoose = require('../database');

//Create schema
const OperationSchema = mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  operationDate: {
    type: Date,
    default: Date.now,
  },
});

const Operation = mongoose.model("Operation", OperationSchema);

module.exports = Operation;


