import * as request from 'supertest';
import baseUrl from './baseUrl';

describe('Get /user', () => {
  it('should respond with json', (done) => {
    request(baseUrl)
      .get('/user?role=admin')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
