var mongoose = require("mongoose");
var shortid = require('shortid');
var Schema = mongoose.Schema;

var charset = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]

function gen(len) {
        var gen = "";
        for (i=0; i<len; i++) {
                char = Math.floor(Math.random()*52);
                gen += charset[char];
        }
        console.log(gen);
        return gen;
}


var webSchema = new Schema({
  _id: {
    type: String,
    'default': function() { return gen(4) }
  },
  url: String,
})

var web = mongoose.model('web', webSchema);
module.exports = web;
