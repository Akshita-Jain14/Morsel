'use strict';

function requireAuth(req, res, next) {
  if (req.session && req.session.userId) return next();
  res.redirect('/login');
}

function redirectIfAuth(req, res, next) {
  if (req.session && req.session.userId) return res.redirect('/menu');
  next();
}

module.exports = { requireAuth, redirectIfAuth };
