const assert = require('assert');
const userController = require('../src/controllers/user');

describe('User Controller', () => {
  it('should get a user by username', () => {
    const username = 'john_doe';
    const user = userController.getUserByUsername(username);
    assert.strictEqual(user.username, username);
  });

  it('should not get a user when it does not exist', () => {
    const nonExistentUsername = 'nonexistent_user';
    const user = userController.getUserByUsername(nonExistentUsername);
    assert.strictEqual(user, null);
  });
});
