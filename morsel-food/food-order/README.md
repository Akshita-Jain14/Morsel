# 🍽 Morsel — Food Ordering System

A clean, full-featured food ordering web app built with **pure Node.js** — zero external dependencies. All HTML and CSS are generated from JavaScript template functions.

---

## Quick Start

```bash
node index.js
# Open http://localhost:3000
```

That's it. No `npm install` needed.

---

## Pages

| Page | Route | Auth |
|------|-------|------|
| Landing | `/` | Public |
| Sign up | `/signup` | Public |
| Sign in | `/login` | Public |
| Menu | `/menu` | Required |
| Cart | `/cart` | Required |
| My Orders | `/orders` | Required |

---

## Features

- **Zero dependencies** — only Node.js built-ins (`http`, `crypto`, `url`)
- **Session auth** — cookie-based sessions with PBKDF2 password hashing
- **Menu browsing** — 14 items across 4 categories with filtering
- **Cart** — stored in `localStorage`, persists across pages
- **Order placement** — JSON API, orders auto-progress: `pending → preparing → delivered`
- **Flash messages** — error/success feedback on forms
- All **HTML + CSS in JS files** — no `.ejs`, no template engine

---

## Project Structure

```
morsel/
├── index.js              ← Server (routing, sessions, auth)
├── views/
│   └── templates.js      ← ALL HTML + CSS (pure JS functions)
├── data/
│   ├── menu.js           ← Menu items
│   └── store.js          ← In-memory users & orders
├── middleware/
│   └── auth.js           ← Auth helpers (reference)
├── routes/
│   ├── auth.js           ← Auth routes (reference)
│   └── menu.js           ← Menu/order routes (reference)
└── package.json
```

---

## Adding Menu Items

Edit `data/menu.js`:

```js
{ id: randomUUID(), name: 'Avocado Toast', category: 'Starters',
  price: 10.50, emoji: '🥑', description: 'Your description here.' }
```

Categories: `Starters` | `Mains` | `Desserts` | `Drinks`
