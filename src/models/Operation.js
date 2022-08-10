const mongoose = require("mongoose");

//Create schema
const OperationSchema = mongoose.Schema({
  ativo: {
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

module.exports = mongoose.model("Operation", OperationSchema);
