const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  img: {type: String, required: true},
  title: {type: String, required: true, index: 1},
  password: {type: String, required: true},
});


module.exports = photoSchema;
