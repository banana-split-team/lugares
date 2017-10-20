'use strict';
const http = require('http');
const url = require('url');
const qs = require('querystring');

// Google Maps API Client
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBdbawrCbKzWMLBFgUeGHI7dma_zyUNcow',
});

module.exports = function(server) {
  var router = server.loopback.Router();
  router.get('/cords', (req, res) => {
    console.log('entre');
    /**  GOOGLE MAPS API Geocode  **/
    var address = req.query['address'];
    if ("address" in req.query) {
      googleMapsClient.geocode({
        address: address
      }, (err, response) => {
        console.log('mapsClient.geocode');
        if (!err) {
          var rtaMap = {};
          rtaMap.nombreLargo  = response.json.results[0].address_components[0].long_name;
          rtaMap.nombreFormateado = JSON.stringify(response.json.results[0].formatted_address);
          rtaMap.lat = JSON.stringify(response.json.results[0].geometry.location.lat);
          rtaMap.lng = JSON.stringify(response.json.results[0].geometry.location.lng);
          res.end(JSON.stringify(rtaMap));
        }
      });
    }
    else {
      console.log('entre a blancos');
      res.writeHead(404);
      res.end('Content not found!');
    }
  });
  console.log('corriendo cords!');
  server.use(router);
};

