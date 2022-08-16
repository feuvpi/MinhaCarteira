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

// -- get all operations from specific user
router.post('/', async (req, res) => {
    console.log('route acessed.')
    console.log(req.body.user)
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



// -- get specific operation
router.get('/user/:operationId', async (req, res) => {
    console.log('route acessed.')
    try {
        const operation = await Operations.findById(req.params.operationId).populate('user');
        return res.send({ operation })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading operation. ' + err })
    }
});



// - update specific operations
router.put('/user/operationId', async (req, res) => {
    try {
        const operation = await Operations.create(req.body)
        //console.log(operation)
        //return res.send({ operation })
    } catch (err) {
        return res.status(400).send({ error: 'Error while creating new operation.' })
        
    }
});

// -- delete operation
router.delete('/user/:operationId', async (req, res) => {
    try {
        const operation = await Operations.findByIdAndRemove(req.params.operationId)
        return res.send({ message: 'operation deleted.' })
    } catch (error) {
        return res.status(400).send({ error: 'Error deleting operation.' })
    }
});




module.exports = app => app.use('/operations', router);