const mongoose = require('mongoose');

//Connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connected to database.");
  });

//Default
mongoose.Promise = global.Promise;


//Export
module.exports = mongoose;