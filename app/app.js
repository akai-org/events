const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var findDocuments = function(db, callback) {
  var collection = db.collection('events');
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};

let events = {};
let eventsList = {};

// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/events', function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  findDocuments(db, function (data) {
    data.forEach( (e) => {
      events[e.title] = e;
      //delete e.components;
      //eventsList[e.title] = e;
    } )
  });
  db.close();
});

app.use('/assets', express.static('node_modules/akai-onepage/build/assets'));
app.use('/img', express.static('node_modules/akai-assets'));

app.get('/:event', function (req, res) {
  if(!events[req.params.event]) {
    res.send('404');
  } else {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Webpack App</title>
      <link href="assets/main.css" rel="stylesheet"></head>
      <body>
      <script>
        window.config = ${JSON.stringify( events[req.params.event] )};
      </script>
      <script type="text/javascript" src="assets/bundle.js"></script></body>
    </html>
  `);
  }
});

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Webpack App</title>
      <link href="assets/main.css" rel="stylesheet"></head>
      <body>
      <script>
      </script>
      <script type="text/javascript" src="assets/bundle.js"></script></body>
    </html>
  `);
});

app.listen(3003, function () {
  console.log('Example app listening on port 3000!')
});