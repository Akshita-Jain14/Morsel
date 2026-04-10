'use strict';
const { randomUUID: uuid } = require('crypto');

const menuItems = [
  // Starters
  { id: uuid(), name: 'Truffle Arancini',   category: 'Starters', price: 9.99,  emoji: '🍙', image: '/images/arancini.svg', description: 'Crispy risotto balls filled with wild mushroom and truffle, served with aioli.' },
  { id: uuid(), name: 'Burrata Salad',      category: 'Starters', price: 11.50, emoji: '🥗', image: '/images/burrata.svg',  description: 'Creamy burrata on heirloom tomatoes, fresh basil and balsamic glaze.' },
  { id: uuid(), name: 'Spiced Soup',        category: 'Starters', price: 7.99,  emoji: '🍲', image: '/images/soup.svg',     description: 'Rich roasted tomato soup with smoked paprika and crusty sourdough.' },
  // Mains
  { id: uuid(), name: 'Grilled Salmon',     category: 'Mains',    price: 22.00, emoji: '🐟', image: '/images/salmon.svg',   description: 'Atlantic salmon with lemon butter, capers and seasonal greens.' },
  { id: uuid(), name: 'Mushroom Risotto',   category: 'Mains',    price: 16.50, emoji: '🍄', image: '/images/risotto.svg',  description: 'Slow-cooked arborio with porcini mushrooms, parmesan and fresh thyme.' },
  { id: uuid(), name: 'Smash Burger',       category: 'Mains',    price: 14.99, emoji: '🍔', image: '/images/burger.svg',   description: 'Double smashed beef patty, cheddar, pickles and house special sauce on brioche.' },
  { id: uuid(), name: 'Margherita Pizza',   category: 'Mains',    price: 13.50, emoji: '🍕', image: '/images/pizza.svg',    description: 'Neapolitan-style with San Marzano tomatoes, fior di latte and fresh basil.' },
  { id: uuid(), name: 'Chicken Tikka',      category: 'Mains',    price: 17.00, emoji: '🍛', image: '/images/tikka.svg',    description: 'Tender marinated chicken in a velvety spiced tomato cream sauce, with naan.' },
  // Desserts
  { id: uuid(), name: 'Chocolate Fondant',  category: 'Desserts', price: 8.50,  emoji: '🍫', image: '/images/fondant.svg',  description: 'Warm dark chocolate lava cake with vanilla bean ice cream.' },
  { id: uuid(), name: 'Crème Brûlée',       category: 'Desserts', price: 7.50,  emoji: '🍮', image: '/images/brulee.svg',   description: 'Classic vanilla custard with a perfectly caramelised sugar crust.' },
  { id: uuid(), name: 'Fruit Tart',         category: 'Desserts', price: 6.99,  emoji: '🥧', image: '/images/tart.svg',     description: 'Crisp pastry shell with crème patissière and seasonal fresh fruit.' },
  // Drinks
  { id: uuid(), name: 'Fresh Lemonade',     category: 'Drinks',   price: 3.99,  emoji: '🍋', image: '/images/lemonade.svg', description: 'Hand-squeezed lemonade with a hint of mint and a pinch of sea salt.' },
  { id: uuid(), name: 'Iced Matcha',        category: 'Drinks',   price: 4.50,  emoji: '🍵', image: '/images/matcha.svg',   description: 'Ceremonial grade matcha over ice with oat milk and light honey.' },
  { id: uuid(), name: 'Berry Smoothie',     category: 'Drinks',   price: 5.50,  emoji: '🫐', image: '/images/smoothie.svg', description: 'Blended mixed berries, banana, Greek yoghurt and a drizzle of honey.' },
];

module.exports = menuItems;
