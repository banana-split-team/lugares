'use strict';

var crypto = require('./util/crypto');
var datasources = require('./datasources.production.json');
datasources.db.password = crypto.decrypt(datasources.db.password);

module.exports = datasources;
