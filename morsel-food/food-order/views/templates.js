'use strict';

const baseStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --pink-50: #fff0f6;
    --pink-100: #ffe0ef;
    --pink-200: #ffc2df;
    --pink-400: #f472b6;
    --pink-500: #ec4899;
    --pink-600: #db2777;
    --pink-700: #be185d;
    --rose-50: #fff1f2;
    --rose-400: #fb7185;
    --peach: #ffecd2;
    --blush: #ffd6e7;
    --white: #ffffff;
    --off-white: #fffbfd;
    --dark: #1a0a12;
    --dark-2: #2d1120;
    --muted: #9d7a8a;
    --border: #f9c8de;
    --border-soft: #fce7f3;
    --shadow-pink: 0 4px 24px rgba(236,72,153,0.12);
    --shadow-lg: 0 12px 48px rgba(236,72,153,0.18);
    --radius: 20px;
    --radius-sm: 12px;
    --radius-pill: 999px;
  }
  html { font-size: 16px; scroll-behavior: smooth; }
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: var(--off-white);
    color: var(--dark);
    min-height: 100vh;
    line-height: 1.6;
  }
  h1,h2,h3,h4 { font-family: 'Fraunces', serif; line-height: 1.15; }
  a { text-decoration: none; color: inherit; }
  input, textarea, select {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 15px; width: 100%;
    padding: 13px 18px;
    border: 1.5px solid var(--border);
    border-radius: var(--radius-sm);
    background: var(--white);
    color: var(--dark);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  input:focus, textarea:focus {
    border-color: var(--pink-500);
    box-shadow: 0 0 0 4px rgba(236,72,153,0.1);
  }
  button { font-family: 'Plus Jakarta Sans', sans-serif; cursor: pointer; border: none; outline: none; transition: all 0.2s; }
  .btn-primary {
    background: var(--pink-500);
    color: white;
    font-weight: 600;
    font-size: 15px;
    padding: 14px 28px;
    border-radius: var(--radius-pill);
    width: 100%;
    letter-spacing: 0.01em;
  }
  .btn-primary:hover {
    background: var(--pink-600);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(236,72,153,0.38);
  }
  .btn-primary:active { transform: translateY(0); }
  .flash { padding: 13px 18px; border-radius: var(--radius-sm); margin-bottom: 20px; font-size: 14px; font-weight: 500; }
  .flash-error { background: #fff0f0; color: #c0392b; border: 1.5px solid #ffc5c5; }
  .flash-success { background: #f0faf4; color: #1a7a4a; border: 1.5px solid #b8eacc; }

  /* NAV */
  nav {
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1.5px solid var(--border-soft);
    padding: 0 36px;
    display: flex; align-items: center;
    justify-content: space-between;
    height: 68px;
    position: sticky; top: 0; z-index: 100;
  }
  .nav-logo {
    font-family: 'Fraunces', serif;
    font-size: 24px; font-weight: 700;
    color: var(--dark-2);
    display: flex; align-items: center; gap: 10px;
  }
  .nav-logo .dot { color: var(--pink-500); }
  .nav-logo .logo-pill {
    background: var(--pink-100);
    color: var(--pink-600);
    font-size: 18px;
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
  }
  .nav-links { display: flex; align-items: center; gap: 6px; }
  .nav-link {
    font-size: 14px; font-weight: 500;
    color: var(--muted);
    padding: 8px 16px;
    border-radius: var(--radius-pill);
    transition: all 0.18s;
    background: transparent; border: none;
  }
  .nav-link:hover { color: var(--dark); background: var(--pink-50); }
  .nav-link.active { color: var(--pink-600); background: var(--pink-100); }
  .nav-cart-btn {
    background: var(--pink-500);
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 9px 20px;
    border-radius: var(--radius-pill);
    display: flex; align-items: center; gap: 8px;
    border: none; cursor: pointer; transition: all 0.18s;
  }
  .nav-cart-btn:hover { background: var(--pink-600); transform: translateY(-1px); box-shadow: var(--shadow-pink); }
  .cart-badge {
    background: white;
    color: var(--pink-600);
    border-radius: 50%;
    width: 20px; height: 20px;
    display: inline-flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700;
  }
`;

function navHTML(user, activePage='') {
  if (!user) return `
    <nav>
      <a class="nav-logo" href="/">
        <div class="logo-pill">🌸</div>
        Morsel<span class="dot">.</span>
      </a>
      <div class="nav-links">
        <a class="nav-link ${activePage==='login'?'active':''}" href="/login">Sign in</a>
        <a href="/signup" style="background:var(--pink-500);color:white;font-weight:600;font-size:14px;padding:9px 22px;border-radius:var(--radius-pill);transition:all 0.18s">Get started ✨</a>
      </div>
    </nav>`;
  return `
    <nav>
      <a class="nav-logo" href="/menu">
        <div class="logo-pill">🌸</div>
        Morsel<span class="dot">.</span>
      </a>
      <div class="nav-links">
        <a class="nav-link ${activePage==='menu'?'active':''}" href="/menu">Menu</a>
        <a class="nav-link ${activePage==='favorites'?'active':''}" href="/favorites">💖 Saved</a>
        <a class="nav-link ${activePage==='orders'?'active':''}" href="/orders">Orders</a>
        <a class="nav-link ${activePage==='profile'?'active':''}" href="/profile">Profile</a>
        <a href="/cart">
          <button class="nav-cart-btn">
            🛒 Cart <span class="cart-badge" id="cart-count">0</span>
          </button>
        </a>
        <form method="POST" action="/logout" style="margin:0">
          <button class="nav-link" type="submit">Sign out</button>
        </form>
      </div>
    </nav>`;
}

function page(title, body, user=null, activePage='') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${title} — Morsel 🌸</title>
  <style>${baseStyles}</style>
</head>
<body>
  ${navHTML(user, activePage)}
  ${body}
  <script>
    function updateCartCount(){
      const cart=JSON.parse(localStorage.getItem('morsel_cart')||'[]');
      const t=cart.reduce((s,i)=>s+i.qty,0);
      const el=document.getElementById('cart-count');
      if(el) el.textContent=t;
    }
    updateCartCount();
    window.addEventListener('storage',updateCartCount);
  </script>
</body>
</html>`;
}

/* ── LANDING ───────────────────────────────────────────────────────────────── */
function landingPage() {
  const body = `
  <style>
    .hero {
      min-height: calc(100vh - 68px);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center;
      padding: 60px 24px 80px;
      background:
        radial-gradient(ellipse 80% 60% at 50% -10%, rgba(236,72,153,0.14) 0%, transparent 65%),
        radial-gradient(ellipse 50% 40% at 90% 80%, rgba(251,113,133,0.10) 0%, transparent 60%),
        var(--off-white);
      position: relative; overflow: hidden;
    }
    .hero-blobs {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
    }
    .blob {
      position: absolute; border-radius: 50%;
      filter: blur(60px); opacity: 0.35;
    }
    .blob-1 { width:360px;height:360px;background:#ffc2df;top:-80px;left:-60px; }
    .blob-2 { width:280px;height:280px;background:#ffd6e7;bottom:80px;right:-40px; }
    .blob-3 { width:200px;height:200px;background:#fbcfe8;top:40%;left:60%; }
    .hero-inner { position:relative;z-index:1;max-width:720px; }
    .hero-tag {
      display:inline-flex;align-items:center;gap:8px;
      background:var(--pink-100);color:var(--pink-700);
      font-size:13px;font-weight:600;
      padding:6px 18px;border-radius:var(--radius-pill);
      margin-bottom:28px;border:1px solid var(--pink-200);
    }
    .hero h1 {
      font-size: clamp(44px,8vw,80px);
      color: var(--dark-2);
      margin-bottom: 22px;
      line-height: 1.05;
    }
    .hero h1 em { font-style:italic; color:var(--pink-500); }
    .hero p {
      font-size: 18px; color: var(--muted);
      max-width: 520px; margin: 0 auto 40px;
      line-height: 1.75;
    }
    .hero-cta { display:flex;gap:14px;justify-content:center;flex-wrap:wrap; }
    .btn-hero-p {
      background:var(--pink-500);color:white;font-weight:700;
      font-size:16px;padding:16px 36px;border-radius:var(--radius-pill);
      border:none;cursor:pointer;transition:all 0.2s;display:inline-block;
    }
    .btn-hero-p:hover { background:var(--pink-600);transform:translateY(-3px);box-shadow:0 10px 28px rgba(236,72,153,0.38); }
    .btn-hero-s {
      background:white;color:var(--dark-2);font-weight:600;
      font-size:16px;padding:16px 36px;border-radius:var(--radius-pill);
      border:1.5px solid var(--border);cursor:pointer;transition:all 0.2s;display:inline-block;
    }
    .btn-hero-s:hover { border-color:var(--pink-400);transform:translateY(-3px); }

    .floating-cards {
      display:flex;gap:16px;justify-content:center;
      margin-top:56px;flex-wrap:wrap;
    }
    .f-card {
      background:white;border:1.5px solid var(--border-soft);
      border-radius:20px;padding:16px 20px;
      display:flex;align-items:center;gap:12px;
      box-shadow:0 4px 20px rgba(236,72,153,0.08);
      animation: floatUp 0.6s ease both;
    }
    .f-card:nth-child(2){animation-delay:0.1s}
    .f-card:nth-child(3){animation-delay:0.2s}
    @keyframes floatUp {
      from{opacity:0;transform:translateY(20px)}
      to{opacity:1;transform:translateY(0)}
    }
    .f-card img { width:44px;height:44px;border-radius:10px;object-fit:contain;background:var(--pink-50);padding:4px; }
    .f-card-name { font-weight:600;font-size:14px;color:var(--dark-2); }
    .f-card-price { font-size:13px;color:var(--pink-500);font-weight:600; }

    .features {
      padding:88px 24px;
      max-width:1080px;margin:0 auto;
    }
    .features-header { text-align:center;margin-bottom:52px; }
    .features-header h2 { font-size:40px;color:var(--dark-2);margin-bottom:12px; }
    .features-header p { color:var(--muted);font-size:16px; }
    .features-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px; }
    .feat-card {
      background:white;border:1.5px solid var(--border-soft);
      border-radius:var(--radius);padding:32px 28px;
      transition:transform 0.2s,box-shadow 0.2s;
    }
    .feat-card:hover { transform:translateY(-6px);box-shadow:var(--shadow-pink); }
    .feat-icon {
      width:56px;height:56px;border-radius:16px;
      background:var(--pink-100);
      display:flex;align-items:center;justify-content:center;
      font-size:26px;margin-bottom:18px;
    }
    .feat-card h3 { font-size:20px;color:var(--dark-2);margin-bottom:10px; }
    .feat-card p { color:var(--muted);font-size:14px;line-height:1.65; }

    .offers-strip {
      background:linear-gradient(135deg,var(--pink-500),var(--rose-400));
      padding:48px 40px;text-align:center;margin:0;
    }
    .offers-strip h2 { font-size:32px;color:white;margin-bottom:10px; }
    .offers-strip p { color:rgba(255,255,255,0.85);font-size:16px;margin-bottom:24px; }
    .strip-btn {
      display:inline-block;background:white;color:var(--pink-600);
      font-weight:700;font-size:15px;padding:13px 32px;
      border-radius:var(--radius-pill);transition:all 0.2s;
    }
    .strip-btn:hover { transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,0,0,0.15); }
  </style>

  <section class="hero">
    <div class="hero-blobs">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>
    </div>
    <div class="hero-inner">
      <div class="hero-tag">🌸 Fresh · Cute · Delicious</div>
      <h1>Food that makes<br>you <em>smile</em> ♡</h1>
      <p>Order from our handcrafted menu of fresh, beautiful dishes — delivered to your door with love.</p>
      <div class="hero-cta">
        <a class="btn-hero-p" href="/signup">Start ordering ✨</a>
        <a class="btn-hero-s" href="/login">Sign in</a>
      </div>
    </div>
    <div class="floating-cards">
      <div class="f-card">
        <img src="/images/burger.svg" alt="">
        <div><div class="f-card-name">Smash Burger</div><div class="f-card-price">$14.99</div></div>
      </div>
      <div class="f-card">
        <img src="/images/tart.svg" alt="">
        <div><div class="f-card-name">Fruit Tart</div><div class="f-card-price">$6.99</div></div>
      </div>
      <div class="f-card">
        <img src="/images/smoothie.svg" alt="">
        <div><div class="f-card-name">Berry Smoothie</div><div class="f-card-price">$5.50</div></div>
      </div>
    </div>
  </section>

  <section class="features">
    <div class="features-header">
      <h2>Why you'll love Morsel 🌷</h2>
      <p>Every detail designed to make ordering delightful</p>
    </div>
    <div class="features-grid">
      <div class="feat-card">
        <div class="feat-icon">🌿</div>
        <h3>Fresh ingredients</h3>
        <p>Every dish uses seasonal, locally sourced ingredients for maximum freshness and flavour.</p>
      </div>
      <div class="feat-card">
        <div class="feat-icon">⚡</div>
        <h3>Fast delivery</h3>
        <p>Ready in 30 minutes or less — we'll give you a discount if we're late.</p>
      </div>
      <div class="feat-card">
        <div class="feat-icon">💖</div>
        <h3>Save favourites</h3>
        <p>Heart your favourite dishes and reorder them in one tap anytime you want.</p>
      </div>
      <div class="feat-card">
        <div class="feat-icon">🎁</div>
        <h3>Special offers</h3>
        <p>Daily deals and seasonal specials — there's always something new to discover.</p>
      </div>
    </div>
  </section>

  <section class="offers-strip">
    <h2>🎀 Today's Special — 20% off all Desserts</h2>
    <p>Use code <strong>SWEETDAY</strong> at checkout. Limited time only!</p>
    <a class="strip-btn" href="/signup">Grab the deal →</a>
  </section>`;
  return page('Home', body, null, 'home');
}

/* ── LOGIN ─────────────────────────────────────────────────────────────────── */
function loginPage(flash=null) {
  const flashHTML = flash ? `<div class="flash flash-${flash.type}">${flash.msg}</div>` : '';
  const body = `
  <style>
    .auth-wrap {
      min-height:calc(100vh - 68px);
      display:flex;align-items:stretch;
    }
    .auth-left {
      flex:1;
      background:linear-gradient(145deg,var(--pink-100) 0%,var(--blush) 50%,var(--peach) 100%);
      display:flex;align-items:center;justify-content:center;
      padding:60px 40px;position:relative;overflow:hidden;
    }
    .auth-left::before {
      content:'';position:absolute;
      width:400px;height:400px;border-radius:50%;
      background:rgba(236,72,153,0.12);
      top:-100px;right:-100px;
    }
    .auth-food-grid {
      display:grid;grid-template-columns:1fr 1fr;gap:16px;
      position:relative;z-index:1;
    }
    .auth-food-card {
      background:white;border-radius:20px;overflow:hidden;
      box-shadow:0 8px 24px rgba(236,72,153,0.12);
      transform:translateY(0);transition:transform 0.3s;
      width:148px;
    }
    .auth-food-card:hover{transform:translateY(-6px);}
    .auth-food-card:nth-child(2){margin-top:28px;}
    .auth-food-card:nth-child(4){margin-top:-28px;}
    .auth-food-card img {
      width:100%;height:110px;object-fit:contain;
      background:var(--pink-50);display:block;padding:10px;
    }
    .auth-food-label {
      padding:10px 12px;font-size:12px;font-weight:600;
      color:var(--dark-2);border-top:1px solid var(--border-soft);
    }
    @media(max-width:768px){.auth-left{display:none}}
    .auth-right {
      width:480px;flex-shrink:0;
      display:flex;align-items:center;justify-content:center;
      padding:48px 40px;background:var(--off-white);
    }
    .auth-card{width:100%;max-width:380px;}
    .auth-top{margin-bottom:36px;}
    .auth-top .emo{font-size:40px;margin-bottom:14px;}
    .auth-top h2{font-size:32px;color:var(--dark-2);margin-bottom:6px;}
    .auth-top p{color:var(--muted);font-size:15px;}
    .form-group{margin-bottom:18px;}
    .form-label{display:block;font-size:13px;font-weight:600;color:var(--dark-2);margin-bottom:8px;letter-spacing:0.02em;}
    .auth-footer{text-align:center;margin-top:22px;font-size:14px;color:var(--muted);}
    .auth-footer a{color:var(--pink-600);font-weight:600;}
    .divider{display:flex;align-items:center;gap:12px;margin:20px 0;color:var(--muted);font-size:13px;}
    .divider::before,.divider::after{content:'';flex:1;height:1px;background:var(--border);}
  </style>
  <div class="auth-wrap">
    <div class="auth-left">
      <div class="auth-food-grid">
        <div class="auth-food-card"><img src="/images/pizza.svg" alt=""><div class="auth-food-label">Margherita Pizza</div></div>
        <div class="auth-food-card"><img src="/images/brulee.svg" alt=""><div class="auth-food-label">Crème Brûlée</div></div>
        <div class="auth-food-card"><img src="/images/salmon.svg" alt=""><div class="auth-food-label">Grilled Salmon</div></div>
        <div class="auth-food-card"><img src="/images/matcha.svg" alt=""><div class="auth-food-label">Iced Matcha</div></div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-card">
        <div class="auth-top">
          <div class="emo">🌸</div>
          <h2>Welcome back</h2>
          <p>Sign in to continue ordering</p>
        </div>
        ${flashHTML}
        <form method="POST" action="/login">
          <div class="form-group">
            <label class="form-label" for="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required autocomplete="email">
          </div>
          <div class="form-group">
            <label class="form-label" for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="••••••••" required>
          </div>
          <button class="btn-primary" type="submit">Sign in →</button>
        </form>
        <div class="auth-footer">Don't have an account? <a href="/signup">Create one free</a></div>
      </div>
    </div>
  </div>`;
  return page('Sign in', body, null, 'login');
}

/* ── SIGNUP ────────────────────────────────────────────────────────────────── */
function signupPage(flash=null) {
  const flashHTML = flash ? `<div class="flash flash-${flash.type}">${flash.msg}</div>` : '';
  const body = `
  <style>
    .auth-wrap{min-height:calc(100vh - 68px);display:flex;align-items:stretch;}
    .auth-left {
      flex:1;
      background:linear-gradient(160deg,#fce7f3 0%,#ffd6e7 40%,#ffe4e6 100%);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      padding:60px 40px;position:relative;overflow:hidden;gap:20px;
    }
    .showcase-row{display:flex;gap:14px;}
    .sc-item{background:white;border-radius:18px;overflow:hidden;box-shadow:0 6px 20px rgba(236,72,153,0.1);width:124px;flex-shrink:0;}
    .sc-item img{width:100%;height:88px;object-fit:contain;background:var(--pink-50);display:block;padding:8px;}
    .sc-item span{display:block;padding:8px 10px;font-size:11px;font-weight:600;color:var(--dark-2);}
    @media(max-width:768px){.auth-left{display:none}}
    .auth-right{width:500px;flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:40px;background:var(--off-white);}
    .auth-card{width:100%;max-width:400px;}
    .auth-top{margin-bottom:28px;}
    .auth-top .emo{font-size:40px;margin-bottom:14px;}
    .auth-top h2{font-size:30px;color:var(--dark-2);margin-bottom:6px;}
    .auth-top p{color:var(--muted);font-size:15px;}
    .form-group{margin-bottom:14px;}
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .form-label{display:block;font-size:13px;font-weight:600;color:var(--dark-2);margin-bottom:7px;}
    .terms{font-size:12px;color:var(--muted);text-align:center;margin-top:12px;line-height:1.6;}
    .auth-footer{text-align:center;margin-top:18px;font-size:14px;color:var(--muted);}
    .auth-footer a{color:var(--pink-600);font-weight:600;}
  </style>
  <div class="auth-wrap">
    <div class="auth-left">
      <div class="showcase-row">
        <div class="sc-item"><img src="/images/tikka.svg" alt=""><span>Chicken Tikka</span></div>
        <div class="sc-item"><img src="/images/risotto.svg" alt=""><span>Mushroom Risotto</span></div>
        <div class="sc-item"><img src="/images/fondant.svg" alt=""><span>Choc Fondant</span></div>
      </div>
      <div class="showcase-row" style="padding-left:32px">
        <div class="sc-item"><img src="/images/tart.svg" alt=""><span>Fruit Tart</span></div>
        <div class="sc-item"><img src="/images/smoothie.svg" alt=""><span>Berry Smoothie</span></div>
        <div class="sc-item"><img src="/images/arancini.svg" alt=""><span>Arancini</span></div>
      </div>
    </div>
    <div class="auth-right">
      <div class="auth-card">
        <div class="auth-top">
          <div class="emo">✨</div>
          <h2>Create account</h2>
          <p>Start ordering in seconds — it's free</p>
        </div>
        ${flashHTML}
        <form method="POST" action="/signup">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">First name</label>
              <input type="text" name="firstName" placeholder="Jane" required>
            </div>
            <div class="form-group">
              <label class="form-label">Last name</label>
              <input type="text" name="lastName" placeholder="Doe" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Email address</label>
            <input type="email" name="email" placeholder="you@example.com" required>
          </div>
          <div class="form-group">
            <label class="form-label">Phone number</label>
            <input type="tel" name="phone" placeholder="+1 555 000 0000">
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" name="password" placeholder="Min. 6 characters" required minlength="6">
          </div>
          <button class="btn-primary" type="submit">Create account →</button>
          <p class="terms">By signing up you agree to our Terms of Service</p>
        </form>
        <div class="auth-footer">Already have an account? <a href="/login">Sign in</a></div>
      </div>
    </div>
  </div>`;
  return page('Sign up', body, null, 'signup');
}

/* ── MENU ──────────────────────────────────────────────────────────────────── */
function menuPage(user, menuItems, flash=null) {
  const categories = [...new Set(menuItems.map(i=>i.category))];
  const flashHTML = flash ? `<div class="flash flash-${flash.type}" style="max-width:1120px;margin:16px auto 0;padding:12px 24px">${flash.msg}</div>` : '';

  const catTabs = categories.map(c =>
    `<button class="cat-tab" data-cat="${c}" onclick="filterCat('${c}')">${c}</button>`
  ).join('');

  const cards = menuItems.map(item => `
    <div class="menu-card" data-cat="${item.category}" data-id="${item.id}">
      <div class="menu-img-wrap">
        <img class="menu-img" src="${item.image}" alt="${item.name}" loading="lazy">
        <button class="fav-btn" onclick="toggleFav('${item.id}','${item.name}','${item.image}')" id="fav-${item.id}" title="Save to favourites">♡</button>
        <span class="menu-cat-pill">${item.category}</span>
      </div>
      <div class="menu-body">
        <h3 class="menu-name">${item.name}</h3>
        <p class="menu-desc">${item.description}</p>
        <div class="menu-foot">
          <span class="menu-price">$${item.price.toFixed(2)}</span>
          <button class="add-btn" onclick="addToCart('${item.id}','${item.name}',${item.price},'${item.emoji}','${item.image}')">
            <span>+</span> Add
          </button>
        </div>
      </div>
    </div>`).join('');

  const body = `
  <style>
    .offers-banner {
      background:linear-gradient(90deg,var(--pink-500),var(--rose-400));
      color:white;text-align:center;padding:12px 24px;
      font-size:14px;font-weight:500;letter-spacing:0.02em;
    }
    .offers-banner strong{font-weight:700;}
    .menu-page{max-width:1120px;margin:0 auto;padding:40px 24px;}
    .menu-top{margin-bottom:32px;}
    .menu-top h1{font-size:40px;color:var(--dark-2);margin-bottom:6px;}
    .menu-top p{color:var(--muted);font-size:15px;}
    .menu-controls{display:flex;align-items:center;gap:12px;margin-bottom:28px;flex-wrap:wrap;}
    .search-wrap{position:relative;flex:1;min-width:220px;}
    .search-wrap input{padding-left:40px;border-radius:var(--radius-pill);background:white;}
    .search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:16px;pointer-events:none;}
    .cats{display:flex;gap:8px;flex-wrap:wrap;}
    .cat-tab{
      padding:8px 20px;border-radius:var(--radius-pill);
      border:1.5px solid var(--border);background:white;
      font-size:14px;font-weight:500;color:var(--muted);
      cursor:pointer;transition:all 0.18s;
    }
    .cat-tab:hover,.cat-tab.active{background:var(--pink-500);border-color:var(--pink-500);color:white;font-weight:600;}
    .menu-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:22px;}
    .menu-card{
      background:white;border:1.5px solid var(--border-soft);
      border-radius:var(--radius);overflow:hidden;
      transition:transform 0.22s,box-shadow 0.22s;
    }
    .menu-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(236,72,153,0.14);}
    .menu-card.hidden{display:none;}
    .menu-img-wrap{position:relative;height:190px;overflow:hidden;background:var(--pink-50);}
    .menu-img{width:100%;height:100%;object-fit:contain;padding:14px;transition:transform 0.3s;}
    .menu-card:hover .menu-img{transform:scale(1.06);}
    .fav-btn{
      position:absolute;top:12px;right:12px;
      width:36px;height:36px;border-radius:50%;
      background:white;border:1.5px solid var(--border);
      font-size:18px;display:flex;align-items:center;justify-content:center;
      cursor:pointer;transition:all 0.18s;color:var(--muted);
    }
    .fav-btn:hover{border-color:var(--pink-400);color:var(--pink-500);}
    .fav-btn.active{background:var(--pink-50);border-color:var(--pink-400);color:var(--pink-500);}
    .menu-cat-pill{
      position:absolute;top:12px;left:12px;
      background:rgba(255,255,255,0.92);
      color:var(--pink-700);font-size:11px;font-weight:700;
      letter-spacing:0.07em;text-transform:uppercase;
      padding:4px 12px;border-radius:var(--radius-pill);
      border:1px solid var(--pink-200);
    }
    .menu-body{padding:18px 20px 20px;}
    .menu-name{font-size:18px;color:var(--dark-2);margin-bottom:6px;}
    .menu-desc{font-size:13px;color:var(--muted);margin-bottom:16px;line-height:1.55;}
    .menu-foot{display:flex;align-items:center;justify-content:space-between;}
    .menu-price{font-size:22px;font-weight:700;color:var(--pink-600);font-family:'Fraunces',serif;}
    .add-btn{
      background:var(--pink-500);color:white;font-weight:700;
      font-size:14px;padding:10px 22px;border-radius:var(--radius-pill);
      border:none;cursor:pointer;transition:all 0.18s;
      display:flex;align-items:center;gap:6px;
    }
    .add-btn:hover{background:var(--pink-600);transform:scale(1.05);}
    .toast{
      position:fixed;bottom:28px;right:28px;
      background:var(--dark-2);color:white;
      padding:14px 20px;border-radius:16px;
      font-size:14px;font-weight:500;z-index:999;
      display:flex;align-items:center;gap:12px;
      transform:translateY(100px);opacity:0;
      transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
      border:1px solid rgba(255,255,255,0.1);
    }
    .toast img{width:34px;height:34px;border-radius:8px;object-fit:contain;background:var(--pink-50);}
    .toast.show{transform:translateY(0);opacity:1;}
    .empty-state{text-align:center;padding:80px 24px;color:var(--muted);}
    .empty-state .es-icon{font-size:52px;margin-bottom:14px;}
    .empty-state h3{font-size:22px;color:var(--dark-2);margin-bottom:6px;}
  </style>

  <div class="offers-banner">
    🎀 Today's special: <strong>20% off all Desserts</strong> — Use code <strong>SWEETDAY</strong>
  </div>

  ${flashHTML}
  <div class="menu-page">
    <div class="menu-top">
      <h1>Our Menu 🌸</h1>
      <p>Fresh, handcrafted dishes made to order.</p>
    </div>
    <div class="menu-controls">
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" id="searchInput" placeholder="Search dishes..." oninput="searchMenu(this.value)">
      </div>
    </div>
    <div class="cats" style="margin-bottom:28px">
      <button class="cat-tab active" data-cat="all" onclick="filterCat('all')">All</button>
      ${catTabs}
    </div>
    <div class="menu-grid" id="menuGrid">${cards}</div>
    <div class="empty-state" id="emptyState" style="display:none">
      <div class="es-icon">🌸</div>
      <h3>No dishes found</h3>
      <p>Try a different search or category.</p>
    </div>
  </div>

  <div class="toast" id="toast">
    <img id="toast-img" src="" alt="">
    <span id="toast-msg"></span>
  </div>

  <script>
    function loadFavs(){return JSON.parse(localStorage.getItem('morsel_favs')||'[]');}
    function renderFavBtns(){
      const favs=loadFavs();
      document.querySelectorAll('.fav-btn').forEach(btn=>{
        const card=btn.closest('.menu-card');
        if(card&&favs.find(f=>f.id===card.dataset.id)){
          btn.classList.add('active');btn.textContent='♥';
        } else {
          btn.classList.remove('active');btn.textContent='♡';
        }
      });
    }
    renderFavBtns();

    function toggleFav(id,name,image){
      let favs=loadFavs();
      const idx=favs.findIndex(f=>f.id===id);
      if(idx>-1){favs.splice(idx,1);showToast('Removed from saved',image);}
      else{favs.push({id,name,image});showToast('Saved to favourites 💖',image);}
      localStorage.setItem('morsel_favs',JSON.stringify(favs));
      renderFavBtns();
    }

    function filterCat(cat){
      document.querySelectorAll('.cat-tab').forEach(t=>t.classList.toggle('active',t.dataset.cat===cat));
      document.querySelectorAll('.menu-card').forEach(c=>{
        c.classList.toggle('hidden',cat!=='all'&&c.dataset.cat!==cat);
      });
      checkEmpty();
    }

    function searchMenu(q){
      q=q.toLowerCase().trim();
      document.querySelectorAll('.menu-card').forEach(c=>{
        const name=c.querySelector('.menu-name').textContent.toLowerCase();
        const desc=c.querySelector('.menu-desc').textContent.toLowerCase();
        c.classList.toggle('hidden',q&&!name.includes(q)&&!desc.includes(q));
      });
      document.querySelectorAll('.cat-tab').forEach(t=>t.classList.toggle('active',t.dataset.cat==='all'));
      checkEmpty();
    }

    function checkEmpty(){
      const visible=[...document.querySelectorAll('.menu-card')].filter(c=>!c.classList.contains('hidden'));
      document.getElementById('emptyState').style.display=visible.length?'none':'block';
    }

    function addToCart(id,name,price,emoji,image){
      let cart=JSON.parse(localStorage.getItem('morsel_cart')||'[]');
      const ex=cart.find(i=>i.id===id);
      if(ex)ex.qty++;else cart.push({id,name,price,emoji,image,qty:1});
      localStorage.setItem('morsel_cart',JSON.stringify(cart));
      updateCartCount();
      showToast('Added: '+name,image);
    }

    function showToast(msg,image){
      const t=document.getElementById('toast');
      document.getElementById('toast-img').src=image||'';
      document.getElementById('toast-msg').textContent=msg;
      t.classList.add('show');
      setTimeout(()=>t.classList.remove('show'),2500);
    }
  </script>`;
  return page('Menu', body, user, 'menu');
}

/* ── CART ──────────────────────────────────────────────────────────────────── */
function cartPage(user) {
  const body = `
  <style>
    .cart-page{max-width:860px;margin:0 auto;padding:40px 24px;}
    .cart-page h1{font-size:38px;color:var(--dark-2);margin-bottom:28px;}
    .cart-empty{text-align:center;padding:80px 24px;color:var(--muted);}
    .cart-empty .ce-icon{font-size:56px;margin-bottom:16px;}
    .cart-empty h3{font-size:22px;color:var(--dark-2);margin-bottom:8px;}
    .cart-empty a{display:inline-block;margin-top:20px;background:var(--pink-500);color:white;font-weight:600;padding:13px 30px;border-radius:var(--radius-pill);}
    .cart-item{
      display:flex;align-items:center;gap:16px;
      background:white;border:1.5px solid var(--border-soft);
      border-radius:18px;padding:16px 20px;margin-bottom:12px;
      transition:box-shadow 0.2s;
    }
    .cart-item:hover{box-shadow:0 4px 20px rgba(236,72,153,0.08);}
    .cart-img{width:72px;height:72px;border-radius:14px;object-fit:contain;background:var(--pink-50);flex-shrink:0;padding:6px;}
    .cart-info{flex:1;}
    .cart-info h4{font-size:16px;color:var(--dark-2);margin-bottom:3px;}
    .cart-info .unit{font-size:13px;color:var(--muted);}
    .qty-ctrl{display:flex;align-items:center;gap:10px;}
    .qty-btn{
      width:32px;height:32px;border-radius:50%;
      border:1.5px solid var(--border);background:white;
      font-size:17px;display:flex;align-items:center;justify-content:center;
      cursor:pointer;transition:all 0.15s;color:var(--dark);
    }
    .qty-btn:hover{border-color:var(--pink-400);background:var(--pink-50);}
    .qty-num{font-weight:700;font-size:16px;min-width:22px;text-align:center;color:var(--dark-2);}
    .item-total{font-weight:700;font-size:18px;color:var(--pink-600);font-family:'Fraunces',serif;min-width:60px;text-align:right;}
    .remove-btn{background:none;border:none;color:var(--muted);font-size:18px;cursor:pointer;padding:4px;transition:color 0.15s;}
    .remove-btn:hover{color:#e53e3e;}
    .cart-summary{background:white;border:1.5px solid var(--border-soft);border-radius:20px;padding:26px 30px;margin-top:24px;}
    .promo-row{display:flex;gap:10px;margin-bottom:18px;}
    .promo-row input{border-radius:var(--radius-pill)!important;font-size:14px!important;padding:10px 16px!important;}
    .promo-btn{background:var(--pink-100);color:var(--pink-700);font-weight:600;font-size:14px;padding:10px 20px;border-radius:var(--radius-pill);border:none;cursor:pointer;white-space:nowrap;transition:all 0.18s;flex-shrink:0;}
    .promo-btn:hover{background:var(--pink-200);}
    .promo-success{font-size:13px;color:#1a7a4a;font-weight:500;margin-bottom:14px;padding:8px 14px;background:#f0faf4;border-radius:8px;}
    .summary-row{display:flex;justify-content:space-between;font-size:15px;color:var(--muted);margin-bottom:10px;}
    .summary-row.total{font-size:21px;font-weight:700;color:var(--dark-2);padding-top:14px;border-top:1.5px solid var(--border-soft);margin-top:14px;margin-bottom:22px;font-family:'Fraunces',serif;}
    .summary-row.discount{color:#1a7a4a;font-weight:500;}
  </style>
  <div class="cart-page">
    <h1>Your Cart 🛒</h1>
    <div id="cartContent"></div>
  </div>
  <script>
    let promoApplied=false;
    function renderCart(){
      const cart=JSON.parse(localStorage.getItem('morsel_cart')||'[]');
      const el=document.getElementById('cartContent');
      if(!cart.length){
        el.innerHTML='<div class="cart-empty"><div class="ce-icon">🛒</div><h3>Your cart is empty</h3><p>Looks like you have not added anything yet.</p><a href="/menu">Browse the menu</a></div>';
        return;
      }
      const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0);
      const delivery=2.99;
      const discount=promoApplied?subtotal*0.2:0;
      const total=subtotal+delivery-discount;
      let html=cart.map((item,idx)=>\`
        <div class="cart-item">
          <img class="cart-img" src="\${item.image||''}" alt="\${item.name}" onerror="this.style.display='none'">
          <div class="cart-info"><h4>\${item.name}</h4><div class="unit">$\${item.price.toFixed(2)} each</div></div>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(\${idx},-1)">−</button>
            <span class="qty-num">\${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(\${idx},1)">+</button>
          </div>
          <div class="item-total">$\${(item.price*item.qty).toFixed(2)}</div>
          <button class="remove-btn" onclick="removeItem(\${idx})">✕</button>
        </div>\`).join('');

      html+=\`<div class="cart-summary">
        <div class="promo-row">
          <input type="text" id="promoInput" placeholder="Promo code (try SWEETDAY)">
          <button class="promo-btn" onclick="applyPromo()">Apply</button>
        </div>
        \${promoApplied?'<div class="promo-success">✓ 20% discount applied!</div>':''}
        <div class="summary-row"><span>Subtotal</span><span>$\${subtotal.toFixed(2)}</span></div>
        \${promoApplied?'<div class="summary-row discount"><span>Promo (SWEETDAY)</span><span>−$\${discount.toFixed(2)}</span></div>':''}
        <div class="summary-row"><span>Delivery fee</span><span>$\${delivery.toFixed(2)}</span></div>
        <div class="summary-row total"><span>Total</span><span>$\${total.toFixed(2)}</span></div>
        <button id="placeOrderBtn" class="btn-primary" style="font-size:16px;border-radius:var(--radius-pill)" onclick="placeOrder()">Place order →</button>
      </div>\`;
      el.innerHTML=html;
    }
    function applyPromo(){
      const code=document.getElementById('promoInput').value.trim().toUpperCase();
      if(code==='SWEETDAY'){promoApplied=true;renderCart();}
      else{alert('Invalid promo code. Try SWEETDAY!');}
    }
    function changeQty(idx,delta){
      let cart=JSON.parse(localStorage.getItem('morsel_cart')||'[]');
      cart[idx].qty+=delta;
      if(cart[idx].qty<=0)cart.splice(idx,1);
      localStorage.setItem('morsel_cart',JSON.stringify(cart));
      updateCartCount();renderCart();
    }
    function removeItem(idx){
      let cart=JSON.parse(localStorage.getItem('morsel_cart')||'[]');
      cart.splice(idx,1);
      localStorage.setItem('morsel_cart',JSON.stringify(cart));
      updateCartCount();renderCart();
    }
    async function placeOrder(){
      const cart=JSON.parse(localStorage.getItem('morsel_cart')||'[]');
      if(!cart.length)return;
      const btn=document.getElementById('placeOrderBtn');
      btn.textContent='Placing order... 🌸';btn.disabled=true;
      try{
        const res=await fetch('/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({items:cart})});
        const data=await res.json();
        if(res.ok){localStorage.removeItem('morsel_cart');updateCartCount();window.location.href='/orders?placed=1';}
        else{alert(data.error||'Something went wrong');btn.textContent='Place order →';btn.disabled=false;}
      }catch(e){alert('Network error');btn.textContent='Place order →';btn.disabled=false;}
    }
    renderCart();
  </script>`;
  return page('Cart', body, user, 'cart');
}

/* ── ORDERS ────────────────────────────────────────────────────────────────── */
function ordersPage(user, orders, justPlaced=false) {
  const flashHTML = justPlaced
    ? `<div class="flash flash-success" style="max-width:860px;margin:16px auto 0;padding:13px 24px">🎉 Your order has been placed! We will have it ready soon.</div>` : '';

  const statusInfo = {
    pending:   {color:'#b45309',bg:'#fef3c7',icon:'⏳'},
    preparing: {color:'#6d28d9',bg:'#ede9fe',icon:'👨‍🍳'},
    delivered: {color:'#065f46',bg:'#d1fae5',icon:'✅'},
    cancelled: {color:'#991b1b',bg:'#fee2e2',icon:'❌'}
  };

  const ordersHTML = !orders.length
    ? `<div style="text-align:center;padding:80px 24px;color:var(--muted)">
        <div style="font-size:52px;margin-bottom:14px">🌸</div>
        <h3 style="font-size:22px;color:var(--dark-2);margin-bottom:8px">No orders yet</h3>
        <a href="/menu" style="display:inline-block;margin-top:16px;background:var(--pink-500);color:white;font-weight:600;padding:12px 28px;border-radius:var(--radius-pill)">Order now</a>
      </div>`
    : orders.map(order => {
        const si = statusInfo[order.status] || statusInfo.pending;
        const total = order.items.reduce((s,i)=>s+i.price*i.qty,0)+2.99;
        const date = new Date(order.createdAt).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
        const imgs = order.items.map(i=>`
          <div style="display:flex;align-items:center;gap:8px;background:var(--pink-50);border:1px solid var(--border-soft);border-radius:12px;padding:7px 12px">
            <img src="${i.image||''}" style="width:30px;height:30px;border-radius:8px;object-fit:contain;background:white" onerror="this.style.display='none'" alt="">
            <span style="font-size:13px;color:var(--dark-2)">${i.name} <span style="color:var(--muted)">×${i.qty}</span></span>
          </div>`).join('');
        return `
        <div style="background:white;border:1.5px solid var(--border-soft);border-radius:20px;padding:22px 24px;margin-bottom:14px;transition:box-shadow 0.2s" onmouseenter="this.style.boxShadow='0 4px 20px rgba(236,72,153,0.08)'" onmouseleave="this.style.boxShadow=''">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
            <div>
              <div style="font-size:12px;color:var(--muted);margin-bottom:3px">${date}</div>
              <div style="font-size:11px;color:var(--muted);font-family:monospace">Order #${order.id.slice(-8).toUpperCase()}</div>
            </div>
            <div style="display:flex;align-items:center;gap:8px;background:${si.bg};color:${si.color};padding:6px 14px;border-radius:var(--radius-pill);font-size:13px;font-weight:600">
              ${si.icon} ${order.status.charAt(0).toUpperCase()+order.status.slice(1)}
            </div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${imgs}</div>
          <div style="display:flex;justify-content:flex-end;font-weight:700;font-size:18px;font-family:'Fraunces',serif;color:var(--pink-600)">Total: $${total.toFixed(2)}</div>
        </div>`;
      }).join('');

  const body = `
  ${flashHTML}
  <div style="max-width:860px;margin:0 auto;padding:40px 24px">
    <h1 style="font-size:38px;color:var(--dark-2);margin-bottom:8px">My Orders 📋</h1>
    <p style="color:var(--muted);margin-bottom:28px">Track all your past and current orders.</p>
    ${ordersHTML}
  </div>`;
  return page('My Orders', body, user, 'orders');
}

/* ── FAVOURITES ────────────────────────────────────────────────────────────── */
function favoritesPage(user) {
  const body = `
  <style>
    .favs-page{max-width:1120px;margin:0 auto;padding:40px 24px;}
    .favs-page h1{font-size:38px;color:var(--dark-2);margin-bottom:8px;}
    .favs-page .subtitle{color:var(--muted);margin-bottom:32px;font-size:15px;}
    .favs-empty{text-align:center;padding:80px 24px;color:var(--muted);}
    .favs-empty .fe-icon{font-size:52px;margin-bottom:14px;}
    .favs-empty h3{font-size:22px;color:var(--dark-2);margin-bottom:8px;}
    .favs-empty a{display:inline-block;margin-top:16px;background:var(--pink-500);color:white;font-weight:600;padding:12px 28px;border-radius:var(--radius-pill);}
    .favs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:18px;}
    .fav-card{
      background:white;border:1.5px solid var(--border-soft);
      border-radius:18px;overflow:hidden;
      transition:transform 0.2s,box-shadow 0.2s;
      text-align:center;
    }
    .fav-card:hover{transform:translateY(-5px);box-shadow:0 10px 32px rgba(236,72,153,0.12);}
    .fav-card img{width:100%;height:140px;object-fit:contain;background:var(--pink-50);padding:12px;display:block;}
    .fav-card-body{padding:14px 16px 18px;}
    .fav-card-name{font-size:16px;font-family:'Fraunces',serif;color:var(--dark-2);margin-bottom:12px;}
    .fav-remove{
      font-size:12px;color:var(--muted);background:var(--pink-50);
      border:1px solid var(--border);border-radius:var(--radius-pill);
      padding:6px 14px;cursor:pointer;transition:all 0.18s;
    }
    .fav-remove:hover{background:var(--pink-100);color:var(--pink-600);border-color:var(--pink-300);}
  </style>
  <div class="favs-page">
    <h1>Saved Items 💖</h1>
    <p class="subtitle">Your favourite dishes, all in one place.</p>
    <div id="favsContent"></div>
  </div>
  <script>
    function renderFavs(){
      const favs=JSON.parse(localStorage.getItem('morsel_favs')||'[]');
      const el=document.getElementById('favsContent');
      if(!favs.length){
        el.innerHTML='<div class="favs-empty"><div class="fe-icon">💖</div><h3>No saved items yet</h3><p>Heart your favourite dishes from the menu.</p><a href="/menu">Browse menu</a></div>';
        return;
      }
      el.innerHTML='<div class="favs-grid">'+favs.map(f=>\`
        <div class="fav-card">
          <img src="\${f.image}" alt="\${f.name}" onerror="this.style.background='var(--pink-50)'">
          <div class="fav-card-body">
            <div class="fav-card-name">\${f.name}</div>
            <button class="fav-remove" onclick="removeFav('\${f.id}')">✕ Remove</button>
          </div>
        </div>\`).join('')+'</div>';
    }
    function removeFav(id){
      let favs=JSON.parse(localStorage.getItem('morsel_favs')||'[]');
      favs=favs.filter(f=>f.id!==id);
      localStorage.setItem('morsel_favs',JSON.stringify(favs));
      renderFavs();
    }
    renderFavs();
  </script>`;
  return page('Saved Items', body, user, 'favorites');
}

/* ── PROFILE ───────────────────────────────────────────────────────────────── */
function profilePage(user, orderCount) {
  const initials = user.name.split(' ').map(n=>n[0]).join('').toUpperCase().slice(0,2);
  const body = `
  <style>
    .profile-page{max-width:760px;margin:0 auto;padding:40px 24px;}
    .profile-header{
      background:linear-gradient(135deg,var(--pink-500),var(--rose-400));
      border-radius:24px;padding:36px 36px;
      display:flex;align-items:center;gap:24px;
      margin-bottom:28px;color:white;
    }
    .avatar{
      width:80px;height:80px;border-radius:50%;
      background:rgba(255,255,255,0.25);
      display:flex;align-items:center;justify-content:center;
      font-size:28px;font-weight:700;font-family:'Fraunces',serif;
      border:3px solid rgba(255,255,255,0.4);flex-shrink:0;
    }
    .profile-header h2{font-size:28px;margin-bottom:4px;}
    .profile-header p{opacity:0.85;font-size:15px;}
    .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:28px;}
    .stat-card{
      background:white;border:1.5px solid var(--border-soft);
      border-radius:18px;padding:22px 20px;text-align:center;
    }
    .stat-val{font-size:30px;font-weight:700;color:var(--pink-600);font-family:'Fraunces',serif;margin-bottom:4px;}
    .stat-label{font-size:13px;color:var(--muted);}
    .profile-card{background:white;border:1.5px solid var(--border-soft);border-radius:20px;padding:28px 28px;margin-bottom:20px;}
    .profile-card h3{font-size:20px;color:var(--dark-2);margin-bottom:18px;padding-bottom:14px;border-bottom:1.5px solid var(--border-soft);}
    .info-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--border-soft);font-size:15px;}
    .info-row:last-child{border-bottom:none;}
    .info-label{color:var(--muted);font-size:13px;}
    .info-val{color:var(--dark-2);font-weight:500;}
    .badge-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:16px;}
    .badge{background:var(--pink-50);color:var(--pink-700);border:1px solid var(--pink-200);font-size:13px;font-weight:600;padding:6px 16px;border-radius:var(--radius-pill);}
  </style>
  <div class="profile-page">
    <div class="profile-header">
      <div class="avatar">${initials}</div>
      <div>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-val">${orderCount}</div>
        <div class="stat-label">Total orders</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">🌸</div>
        <div class="stat-label">Member status</div>
      </div>
      <div class="stat-card">
        <div class="stat-val" id="favCount">0</div>
        <div class="stat-label">Saved items</div>
      </div>
    </div>

    <div class="profile-card">
      <h3>Account details</h3>
      <div class="info-row">
        <span class="info-label">Full name</span>
        <span class="info-val">${user.name}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Email</span>
        <span class="info-val">${user.email}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Phone</span>
        <span class="info-val">${user.phone || 'Not added'}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Member since</span>
        <span class="info-val">${new Date(user.createdAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</span>
      </div>
    </div>

    <div class="profile-card">
      <h3>Your badges</h3>
      <div class="badge-row">
        <span class="badge">🌸 Morsel Member</span>
        ${orderCount>0?'<span class="badge">🛒 First Order</span>':''}
        ${orderCount>=5?'<span class="badge">⭐ Regular Customer</span>':''}
        ${orderCount>=10?'<span class="badge">👑 VIP Customer</span>':''}
      </div>
    </div>

    <form method="POST" action="/logout" style="margin-top:8px">
      <button type="submit" style="background:var(--pink-50);color:var(--pink-700);border:1.5px solid var(--pink-200);font-weight:600;font-size:15px;padding:13px 28px;border-radius:var(--radius-pill);cursor:pointer;transition:all 0.2s;width:100%" onmouseover="this.style.background='var(--pink-100)'" onmouseout="this.style.background='var(--pink-50)'">Sign out</button>
    </form>
  </div>
  <script>
    const favs=JSON.parse(localStorage.getItem('morsel_favs')||'[]');
    document.getElementById('favCount').textContent=favs.length;
  </script>`;
  return page('Profile', body, user, 'profile');
}

module.exports = { landingPage, loginPage, signupPage, menuPage, cartPage, ordersPage, favoritesPage, profilePage };
