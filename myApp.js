var express = require('express');
var app = express();
require('dotenv').config()

console.log("Hello World");

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



























 module.exports = app;
