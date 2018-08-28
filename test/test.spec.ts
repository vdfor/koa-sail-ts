import * as request from 'supertest';
import baseUrl from './baseUrl';

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
