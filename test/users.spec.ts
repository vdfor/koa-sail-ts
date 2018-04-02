import * as request from 'supertest';
import baseUrl from './baseUrl';

describe('Get /users', () => {
  it('should respond with json', (done) => {
    request(baseUrl)
      .get('/users?type=admin')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
