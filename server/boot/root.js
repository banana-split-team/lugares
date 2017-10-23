'use strict';
/*
module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/*', function(req, res) {
    res.type('html')
    res.sendFile(server.get('indexFile'));
  });
  server.use(router);
};
*/
var path    = require('path');

module.exports = function(app) {
  app.get('/v*', function(req, res) {
    res.sendFile(pt(app.get('indexFile')));
  });
  app.get('/view2', function(req, res) {
    res.sendFile(pt(app.get('indexFile')));
  });
  app.get('/view3', function(req, res) {
    res.sendFile(pt(app.get('indexFile')));
  });
  app.get('/', function(req, res) {
    res.sendFile(pt(app.get('indexFile')));
  });
};

function pt(relative) {
  //return path.resolve(__dirname, '../..', relative);
  return relative;
}
