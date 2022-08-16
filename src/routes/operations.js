const express = require("express");
const router = express.Router();
const Operation = require("../models/Operation");

//GET ALL OPERATIONS

router.get("/operations", async (user) => {
  console.log('route acessed.')
  try {
    const operations = await Operation.filterById(user);
    res.json(operations);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC OPERATION

router.get("/:operationId", async (req, res) => {
  try {
    //console.log(req.params.operationsId)
    const operation = await Operation.findById(req.params.operationId);
    res.json(operation);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/operation", async (req, res) => {
  console.log(req.body);
  //res.send('should post a new operation in database')
  const operation = new Operation({
    symbol: req.body.symbol,
    cost: req.body.cost,
    quantity: req.body.quantity,
    type: req.body.type,
    user: req.body.user
  });

  try {
    const savedOperation = await operation.save();
    res.json(savedOperation);
    console.log("Operation saved to MongoDB database!");
  } catch (err) {
    console.log("deu ruim: " + err);
    res.json({ message: err });
  }
});

//EDIT OPERATIONS
router.patch("/:operationId", async (req, res) => {
  try {
    const editedOperation = await Operation.updateOne(
      { _id: req.params.Id },
      { $set: { symbol: req.body.symbol } },
      { $set: { cost: req.body.cost } },
      { $set: { quantity: req.body.quantity } },
      { $set: { type: req.body.type} },
      { $set: { operationDate: req.body.operationDate } }
    );
    res.json(editedOperation);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/", (req, res) => {
  res.send("should modify a specific operation in database");
});

//DELETE OPERATION

router.delete("/:operationId", async (req, res) => {
  try {
    const deletedOperation = Post.remove({
      _id: req.params.operationId,
    });
    console.log("The operation was deleted.");
    res.json(deletedOperation);
  } catch (err) {
    res.json({ message: err });
  }
  res.send("should delete a specific operation in database");
});

module.exports = router;
