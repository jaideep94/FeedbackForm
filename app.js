var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var serverName = '192.168.43.9/';
var portNumber = 8629;
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/home', function(req, res) {
    res.sendFile(__dirname + "/public/views/index.html")
});

app.listen(portNumber, function() {
    console.log('server listening at ' + portNumber);
});
app.post("/response", function(req, res) {
    var t = req.body;
    console.log("data has been stored in database") ;
    MongoClient.connect("mongodb://localhost:27017/feedback", function(err, db) {
        var collection = db.collection('details')
        collection.save(t, function(err, items) {
            console.log("data has been stored in database");
            db.close();
        });
    });
});
