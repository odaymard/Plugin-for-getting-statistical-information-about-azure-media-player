var http = require('https');
var express = require('express');
var app = express();
var fs = require('fs');
var url = require('url');
var bodyParser = require('body-parser');
var pathName;
var query;
var qs = require('querystring');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.post('/', function (req, res) {
  console.log("post");
  console.log(req.body);
  fs.appendFile("statisticuser"+ new Date().getDate(), JSON.stringify(req.body) + '\n', function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
  res.end();

})
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})