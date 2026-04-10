'use strict';
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const { findUserByEmail, createUser } = require('../data/store');
const { loginPage, signupPage } = require('../views/templates');
const { redirectIfAuth } = require('../middleware/auth');

// GET /login
router.get('/login', redirectIfAuth, (req, res) => {
  const flash = req.session.flash;
  delete req.session.flash;
  res.send(loginPage(flash));
});

// POST /login
router.post('/login', redirectIfAuth, async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.session.flash = { type: 'error', msg: 'Please fill in all fields.' };
    return res.redirect('/login');
  }

  const user = findUserByEmail(email);
  if (!user) {
    req.session.flash = { type: 'error', msg: 'No account found with that email.' };
    return res.redirect('/login');
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    req.session.flash = { type: 'error', msg: 'Incorrect password.' };
    return res.redirect('/login');
  }

  req.session.userId = user.id;
  res.redirect('/menu');
});

// GET /signup
router.get('/signup', redirectIfAuth, (req, res) => {
  const flash = req.session.flash;
  delete req.session.flash;
  res.send(signupPage(flash));
});

// POST /signup
router.post('/signup', redirectIfAuth, async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    req.session.flash = { type: 'error', msg: 'Please fill in all required fields.' };
    return res.redirect('/signup');
  }

  if (password.length < 6) {
    req.session.flash = { type: 'error', msg: 'Password must be at least 6 characters.' };
    return res.redirect('/signup');
  }

  const existing = findUserByEmail(email);
  if (existing) {
    req.session.flash = { type: 'error', msg: 'An account with that email already exists.' };
    return res.redirect('/signup');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ firstName, lastName, email, phone, passwordHash });
  req.session.userId = user.id;
  res.redirect('/menu');
});

// POST /logout
router.post('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

module.exports = router;
