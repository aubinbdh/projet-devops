const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// GET user by username
router.get('/api/user/:username', (req, res) => {
  const username = req.params.username;
  const user = userController.getUserByUsername(username);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
