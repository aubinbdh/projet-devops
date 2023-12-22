const assert = require('assert');
const request = require('supertest');
const app = require('../src/index');

describe('User API', () => {
  it('should successfully get user', (done) => {
    const username = 'john_doe';
    request(app)
      .get(`/api/user/${username}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body;
        assert.strictEqual(user.username, username);
        done();
      });
  });

  it('should return 404 when user does not exist', (done) => {
    const nonExistentUsername = 'nonexistent_user';
    request(app)
      .get(`/api/user/${nonExistentUsername}`)
      .expect(404)
      .end(done);
  });
});
