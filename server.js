var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); 
var app = express();

app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, './client')));
app.get('/', function (req, res, next) {
  res.status(200).send('listening....')
})

app.listen(8080, function() {
  console.log('listening out on 8080');
});

