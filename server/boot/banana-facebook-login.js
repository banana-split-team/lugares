'use strict'
const loginFacebook = require('../../providers.json');
module.exports = function(server) {
    // Install a `/` route that returns server status
    const https = require('https');
    var router = server.loopback.Router();
    router.get('/login-facebook', function(req, res) {
        let prueba = { "code": req.query["codigo"]};
        res.end(JSON.stringify(prueba));        
    });
    server.use(router);
};