'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/cords', server.loopback.status());
  console.log('corriendo cords!');
  server.use(router);
};

