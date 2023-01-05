
const secret = process.env.SECRET || 'cd2bsmiad3i7m6can8j0'

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key']
api_key.apiKey = process.env.APIKEY || 'cd2bsmiad3i7m6can8hgcd2bsmiad3i7m6can8i0'


const finnhubClient = new finnhub.DefaultApi()

module.exports = finnhubClient

