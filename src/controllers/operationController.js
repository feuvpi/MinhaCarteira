const express = require('express');
const authMiddleWare = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleWare);

//get all operations
router.get('/', (req, res) => {
    res.send({ message: 'ok get it', user: req.userId });
})

module.exports = app => app.use('/operations', router);