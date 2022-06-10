const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");


//Import ROUTES
const operationsRoute = require("./routes/operations");

//Initialize DB
const db = require('./database/index');


//Initialize express
const app = express();

//Initializing Middlewares
app.use(cors());
app.use(bodyParser.json());

//Setting up Routes
app.use("/operations", operationsRoute);


//Start listening to the server
app.listen(3000);

//APPLICATION ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

// -- /auth
require('./controllers/authController')(app);

/*

- Instalado a dependência bodyParser para ler dados em JSON passados pelo req.body

*/
