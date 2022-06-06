const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Import ROUTES
const operationsRoute = require("./routes/operations");

//Initialize express
const app = express();

//Initializing Middlewares
app.use(cors());
app.use(bodyParser.json());

//Setting up Routes
app.use("/operations", operationsRoute);

//Connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to database.");
});

//Start listening to the server
app.listen(3000);

//APPLICATION ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

require('./controllers/authController')(app)

/*

- Instalado a dependência bodyParser para ler dados em JSON passados pelo req.body

*/
