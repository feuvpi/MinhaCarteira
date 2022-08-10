const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')


// authentication route
router.post('/authtenticate', async(req, res) => await auth.authtenticate())


module.exports = app => app.use('/auth', router);