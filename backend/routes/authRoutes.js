const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');

// POST /signup - Create a new user
router.post('/signup', signup);

// POST /login - Login and return a JWT token
router.post('/login', login);

module.exports = router;
