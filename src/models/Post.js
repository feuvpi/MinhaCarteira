const mongoose = require("mongoose");

//Create schema
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  listPrice: {
    type: Number,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  },
  postDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Post", PostSchema);
