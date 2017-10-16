var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server.js');
var should = chai.should();

chai.use(chaiHttp);
var assert = require('assert');

describe('Escenario 1', function() {
  describe('Usuario ingresa una direccion existente "Torre BBVA" y presiona consultar.', function() {
    it('Debería devolver posicion de torre esperada (lat: "19.4227491",lng: "-99.1749373"', function() {
        chai.request(server)
        .get('/api/cord?address=Torre%20BBVA')
        .end(function(err, res){
          res.should.have.status(200);
          res.body.SUCCESS.should.be.a('object');
          res.body.SUCCESS.should.have.property('lat');
          res.body.SUCCESS.lat.should.equal('19.4227491');
          res.body.SUCCESS.lat.should.equal('-99.1749373');          
          done();
        });
    });
  });
});

describe('Escenario 2', function() {
    describe('Usuario ingresa ya consulto "Torre BBVA" y presiona guardar.', function() {
      it('Debería devolver 200 y, debería estar insertado en la BD el lugar guardado', function() {
        chai.request(server)
        .post('/api/lugares')
        .send({'lugar': 'Torre BBVA', "coord":{"lat":-34.5980009, "lng":-58.3702542}})
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          res.body.should.have.property('SUCCESS');
          res.body.SUCCESS.should.be.a('object');
          done();
        });
      });
    });
});

describe('Escenario 3', function() {
    describe('Usuario ingresa ya consulto "Ahaskdjasdqieuhhadlakjchhaskdjadsdasd" y presiona consultar.', function() {
      it('No debería devolver resultados', function() {
        chai.request(server)
        .get('/api/cord?address=Ahaskdjasdqieuhhadlakjchhaskdjadsdasd')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
      });
    });
});
describe('Escenario 4', function() {
    describe('Consultar sus direcciones guardadas como opcion en el menu.', function() {
      it('Deberíamos ver todas las direcciones guardadas (Get a /api/lugares deberia devolver 200)', function() {
        chai.request(server)
        .get('/api/lugares')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
      });
    });
});
