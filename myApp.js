var express = require('express');
var app = express();
require('dotenv').config()
var bodyParser = require('body-parser')

console.log("Hello World");

app.use('/', function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    bodyParser.urlencoded({extended: false})
    next();
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/public', express.static(__dirname + '/public'))

json = {"message": "Hello json"}
app.get('/json', function (req, res) {
    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"})
    } else{
        res.json({"message": "Hello json"})
    }
    
})

app.get('/now', function(req, res, next) {  
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.send({time: req.time});
});


app.get('/:word/echo', function (req, res) {
    res.json({"echo": req.params.word})
})

app.get('/name', function (req, res) {
    res.json({ "name": req.query.first + " " + req.query.last})
})



























 module.exports = app;
