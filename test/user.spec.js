const assert = require('assert');
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:3000';

describe('user test', () => {
  it('user/', (done) => {
    axios.get('/api/v0/user/1').then(res => {
      assert.deepStrictEqual(200, res.status);
      assert.deepStrictEqual(true, res.data instanceof Object);
      done();
    });
  });
});
