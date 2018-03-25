import * as request from 'supertest';

const baseUrl = 'http://localhost:3000/api/v0';

describe('Get /test', () => {
  it('should respond with json', (done) => {
    request(baseUrl)
      .get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect({
        title: 'Hello, Test!'
      })
      .expect(200, done);
  });
});
