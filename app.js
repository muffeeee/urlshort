var express = require('express');
var app = express();
var web = require('./webSchema.js')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
        extended: true
}));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost:27017/urlshort');
app.get('/url', function(req, res) {
        res.render('index.ejs', {
        url: false });
});
app.get('/url/add', function(req, res) {
        res.redirect("http://muffe.no/url")
})

app.get('/url/:id', function(req, res) {
    web.findOne({ "_id": req.params.id }, 'url', function(err, url) {
      if (url) { res.redirect(url.url) }
      else { res.send('URL not found'); }
    })
})

app.post('/url/add', function(req, res) {
if (req.body.url) {
if (req.body.url.substring(0,7) != "http://" && req.body.url.substring(0,8) != "                                                                             https://") { req.body.url = "http://" + req.body.url }
  web.create({ url: req.body.url }, function(err, id) {
    if (err) { console.log(err) }
      res.render('index.ejs', {
      url: "http://muffe.no/url/" + id._id
    });
  })
}
else res.send("An unknown error occured.");
})

app.listen(3001);
