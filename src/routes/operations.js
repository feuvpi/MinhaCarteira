const express = require("express");
const router = express.Router();
const Operation = require("../models/Operation");

//GET ALL OPERATIONS

router.get("/", async (req, res) => {
  try {
    const operations = await Operation.find();
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

router.post("/", async (req, res) => {
  //res.send('should post a new operation in database')
  const operation = new Operation({
    ativo: req.body.ativo,
    unityCost: req.body.unityCost,
    quantity: req.body.quantity,
    totalCost: req.body.totalCost,
    operationDate: req.body.operationDate,
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
      { $set: { unityCost: req.body.unityCost } }
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
