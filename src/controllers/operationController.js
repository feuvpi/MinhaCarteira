const express = require('express');
const authMiddleWare = require('../middlewares/auth');

// -- importing models
const Operation = require('../models/Operation');

// -- requiring react router for routes setup
const router = express.Router();


router.use(authMiddleWare);

// -- get all operations
router.get('/', async (req, res) => {
    console.log('route acessed.')
    try {
        //console.log('route acessed.')
        const operations = await Operation.find().populate('user');
        return res.send({ operations })
        
    } catch (err) {
        return res.status(400).send({ error: 'Error loading operations. ' + err })
    }
})

// -- get specific operation
router.get('/:operationId', async (req, res) => {
    console.log('route acessed.')
    try {
        const operation = await Operation.findById(req.params.operationId).populate('user');
        return res.send({ operation })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading operation. ' + err })
    }
});

// -- create operation
router.post('/', async (req, res) => {
    console.log(req);
    try {
        const operation = await Operation.create({ ...req.body, user: req.userId })
        return res.send({ operation })
    } catch (err) {
        return res.status(400).send({ error: 'Error while creating new operation. ' + err })
        
    }
});

// - update specific operations
router.put('/operationId', async (req, res) => {
    try {
        const operation = await Operation.create(req.body)
        return res.send({ operation })
    } catch (err) {
        return res.status(400).send({ error: 'Error while creating new operation.' })
        
    }
});

// -- delete operation
router.delete('/:operationId', async (req, res) => {
    try {
        const operation = await Operation.findByIdAndRemove(req.params.operationId).populate('user');
        return res.send({ operation })
    } catch (error) {
        return res.status(400).send({ error: 'Error while deleting operation.' })
    }
});




module.exports = app => app.use('/operations', router);