import * as request from 'supertest';

const baseUrl = 'http://localhost:3000/api/v0';

describe('Get /users', () => {
  it('should respond with json', (done) => {
    request(baseUrl)
      .get('/users?type=admin')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
