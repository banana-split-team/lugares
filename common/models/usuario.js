'use strict';

module.exports = function(Usuario) {
/**
 * GET de usuarios
 * @param {string} accessCode Access code.
 * @param {Function(Error)} callback
 */

  Usuario.getusuarios = function(accessCode, callback) {
    console.log(">>>accessCode: '"+ accessCode + "'");
    // TODO
    callback(null);
  };
  
};
