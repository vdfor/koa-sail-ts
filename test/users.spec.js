// const assert = require('assert');
const request = require('supertest');

const baseUrl = 'http://localhost:3000/api/v0';

describe('users test', () => {
  it('get users', (done) => {
    request(baseUrl)
      .get('/users?type=admin')
      .expect(200, done);
  });
});
