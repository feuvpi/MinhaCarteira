const express = require('express');
const authMiddleWare = require('../middlewares/auth');
const mongoose = require('mongoose');

// -- importing models
const Operations = require('../models/Operation');

// -- requiring react router for routes setup
const router = express.Router();

router.use(authMiddleWare);

// -- create operation
router.post('/operation', async (req, res) => {
    //console.log(req.body)
    try {
        //console.log(req.body)
        //console.log(req.userId)
        const operation = await Operations.create({ ...req.body, user: req.userId })
        console.log("here")
        res.json(operation)
    } catch (err) {
        res.json({ error: err.message || err.toString() });
        
    }
});

// -- update specific operations
router.put('/operation', async (req, res) => {
    console.log("tentando atualizar uma operação")
    try {
        const operation = await Operations.findById(req.body._id)
        operation.cost = req.body.cost
        operation.quantity = req.body.quantity
        operation.type =  req.body.type
        operation.symbol = req.body.symbol
        console.log(operation)
        await operation.save()
        res.json(operation)
    } catch (error) {
        console.log(error)
        res.json({ error: err.message || err.toString() });
    }
})

// -- get all operations from specific user
router.post('/', async (req, res) => {
    console.log('route acessed.')
    console.log(req.body)
    try {
        //console.log('route acessed.')
        const result = await Operations.aggregate([
            {
                $match: {
                    user: mongoose.Types.ObjectId(req.body.user)
                }
            }
        ])
        console.log("the result is: --------")
        console.log(result)

        //const operations = await Operations.findById(user).populate('user');
        return res.send(result)
        
    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }
})

// -- delete operation
router.delete('/operation/:id', async (req, res) => {
    try {
        console.log("ativei")
        console.log(req.params.id)
        const operation = await Operations.findByIdAndRemove(req.params.id)
        console.log(operation)
        return res.send({ message: 'operation deleted.' })
    } catch (error) {
        return res.status(400).send({ error: 'Error deleting operation.' })
    }
});




module.exports = app => app.use('/operations', router);