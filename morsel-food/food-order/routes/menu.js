'use strict';
const express = require('express');
const router = express.Router();

const { findUserById, createOrder, getOrdersByUser } = require('../data/store');
const menuItems = require('../data/menu');
const { menuPage, cartPage, ordersPage } = require('../views/templates');
const { requireAuth } = require('../middleware/auth');

// GET /menu
router.get('/menu', requireAuth, (req, res) => {
  const user = findUserById(req.session.userId);
  res.send(menuPage(user, menuItems));
});

// GET /cart
router.get('/cart', requireAuth, (req, res) => {
  const user = findUserById(req.session.userId);
  res.send(cartPage(user));
});

// GET /orders
router.get('/orders', requireAuth, (req, res) => {
  const user = findUserById(req.session.userId);
  const orders = getOrdersByUser(user.id);
  const justPlaced = req.query.placed === '1';
  res.send(ordersPage(user, orders, justPlaced));
});

// POST /orders  (JSON API — called from cart page JS)
router.post('/orders', requireAuth, express.json(), (req, res) => {
  const { items } = req.body;
  if (!items || !items.length) {
    return res.status(400).json({ error: 'Cart is empty.' });
  }

  // Validate & sanitise items
  const sanitised = items.map(i => ({
    id: String(i.id),
    name: String(i.name),
    price: parseFloat(i.price) || 0,
    emoji: String(i.emoji),
    qty: Math.max(1, parseInt(i.qty, 10) || 1),
  }));

  const user = findUserById(req.session.userId);
  const order = createOrder(user.id, sanitised);
  res.json({ ok: true, orderId: order.id });
});

module.exports = router;
