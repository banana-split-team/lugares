'use strict';

const http = require('http');
const url = require('url');
const qs = require('querystring');
var configDB  = require('../datasources.json');
// Google Maps API Client
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBdbawrCbKzWMLBFgUeGHI7dma_zyUNcow',
});

module.exports = function(server) {
  var router = server.loopback.Router();
  router.get('/mongotest', (req, res) => {
    console.log('mongotest entre');
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://ds113795.mlab.com:13795/bananasplit';
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      db.authenticate('bananasplit', 'bsbbva2017', function(err, result) {
        if (err) throw err;
        db.collection('lugares').findOne({}, function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
    });
  });
  console.log('corriendo mongotest!');
  console.log(configDB.db.password);
  server.use(router);
};

