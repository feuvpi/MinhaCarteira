const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Set server PORT
const PORT = process.env.PORT || 3000;


//Import ROUTES
const operationsRoute = require("./routes/operations");

//Initialize DB
const db = require('./database/index');

//Initialize express
const app = express();

//Initializing Middlewares

//app.use(cors())
// app.use(cors({
//   origin: '*',
//   credentials: true,
//   optionSuccessStatus: 200,
// }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
app.use(cors({
  'allowedHeaders': ['Content-Type'], // headers that React is sending to the API
  'exposedHeaders': ['Content-Type'], // headers that you are sending back to React
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
*/

app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(express.urlencoded())

//Start listening to the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//APPLICATION ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

// -- /auth
require('./controllers/index.js')(app);

app.locals.layout = false;


/*

- Instalado a dependência bodyParser para ler dados em JSON passados pelo req.body

*/
