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
app.use(cors());
app.use(bodyParser.json());

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


/*

- Instalado a dependência bodyParser para ler dados em JSON passados pelo req.body

*/
