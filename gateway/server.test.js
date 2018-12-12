const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return Hi from Gateway', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            msg: 'Hi from Gateway'
          });
        })
        .end(done);
    });
  });
});
