var mongoose = require("mongoose");
var shortid = require('shortid');
var Schema = mongoose.Schema;

var webSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  url: String,
})

var web = mongoose.model('web', webSchema);
module.exports = web;
