const mongoose = require("mongoose");

//Create schema
const OperationSchema = mongoose.Schema({
  ativo: {
    type: String,
    required: true,
  },
  unityCost: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  operationDate: {
    type: String,
  },
});

module.exports = mongoose.model("Operation", OperationSchema);
