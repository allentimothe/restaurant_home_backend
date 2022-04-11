const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clockinSchema = new Schema({
  name: String,
  time: String,

}, { timestamps: true});


module.exports = mongoose.model('Clockin', clockinSchema);