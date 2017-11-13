const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const Database = require('./database');

class MongoDatabase extends Database {
  constructor(url = 'mongodb://localhost:27017/local') {
    super();
    this._mongo = {};
    this._mongo.url = url;
  }

  select(collection = 'events', query = {}) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this._mongo.url)
        .then((db) => {
          db.collection(collection)
            .find(query)
            .toArray((err, result) => {
              if (err) reject(err);
              resolve(result);
              db.close();
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  insert(collection = 'events', document = {}) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this._mongo.url)
        .then((db) => {
          db.collection(collection)
            .insertOne(document, (err, record) => {
              if(err) reject(err);
              resolve(record._id);
              db.close();
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  update(collection = 'events', query = {}, document = {}) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this._mongo.url)
        .then((db) => {
          db.collection(collection)
            .updateOne(query, document, (err, records) => {
              resolve(record._id);
              db.close();
            });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = MongoDatabase;
