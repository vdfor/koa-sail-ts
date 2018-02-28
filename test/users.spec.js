const assert = require('assert');
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';

describe('users test', () => {
  it('users/', (done) => {
    axios.get('/api/v0/users').then(res => {
      assert.deepStrictEqual(200, res.status);
      assert.deepStrictEqual(true, res.data instanceof Array);
      done();
    });
  });
});
