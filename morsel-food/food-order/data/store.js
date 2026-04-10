'use strict';
const { randomUUID: uuid } = require('crypto');

// Simple in-memory stores (no database needed for demo)
const users = [];
const orders = [];

function findUserByEmail(email) {
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}

function findUserById(id) {
  return users.find(u => u.id === id) || null;
}

function createUser({ firstName, lastName, email, phone, passwordHash }) {
  const user = {
    id: uuid(),
    name: `${firstName} ${lastName}`,
    email,
    phone: phone || '',
    passwordHash,
    createdAt: new Date().toISOString()
  };
  users.push(user);
  return user;
}

function createOrder(userId, items) {
  const order = {
    id: uuid(),
    userId,
    items,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  orders.push(order);

  // Simulate status progression
  setTimeout(() => {
    order.status = 'preparing';
    setTimeout(() => {
      order.status = 'delivered';
    }, 30000); // 30s → delivered
  }, 10000); // 10s → preparing

  return order;
}

function getOrdersByUser(userId) {
  return orders
    .filter(o => o.userId === userId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

module.exports = { findUserByEmail, findUserById, createUser, createOrder, getOrdersByUser };
