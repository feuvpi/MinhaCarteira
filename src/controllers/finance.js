const express = require('express');
const authMiddleWare = require('../middlewares/auth');


const finnhub = require('finnhub')

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = 'cd2bsmiad3i7m6can8hgcd2bsmiad3i7m6can8i0'


const finnhubClient = new finnhub.DefaultApi()

// -- requiring react router for routes setup
const router = express.Router();

router.use(authMiddleWare);


router.post('/quote', async (req, res) => {
    console.log('here')
    try {
        const response = await finnhubClient.quote('AAPL', (error, data, response) => {
            
        })
        res.json(response)
        console.log(response.res.text)
    } catch (error) {
        
    }
})


module.exports = app => app.use('/stock', router);