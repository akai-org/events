const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const findDocuments = function (db, callback) {
  const collection = db.collection('events');
  collection.find({}).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
};

const getEvents = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect('mongodb://localhost:27017/local', function (err, db) {
      if (err) {
        reject();
      }
      assert.equal(null, err);

      console.log("Connected successfully to server");

      let events = {};
      findDocuments(db, function (data) {
        data.forEach((e) => {
          events[e.title] = e;
        })
      });
      resolve(events);

      db.close();
    });
  });
};

module.exports = {
  get: getEvents
};