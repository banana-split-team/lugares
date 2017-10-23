'use strict';

module.exports = function(Prueba) {
    /**
     * Hace una prueba
     * @param {number} nivel Nivel de la prueba
     * @param {Function(Error, string)} callback
     */

    Prueba.prototype.hacerPrueba = function(nivel, callback) {
        var estado;
        // TODO
        callback(null, estado);
    };  
};


