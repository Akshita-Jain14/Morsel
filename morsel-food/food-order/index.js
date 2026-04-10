'use strict';

const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const { landingPage, loginPage, signupPage, menuPage, cartPage, ordersPage, favoritesPage, profilePage } = require('./views/templates');
const { findUserByEmail, findUserById, createUser, createOrder, getOrdersByUser } = require('./data/store');
const menuItems = require('./data/menu');

const PORT = process.env.PORT || 3000;
const sessions = new Map();

const STATIC_DIR = path.join(__dirname, 'public');
const MIME = { '.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.webp':'image/webp','.css':'text/css','.js':'application/javascript','.ico':'image/x-icon' };

function serveStatic(res, urlPath) {
  const fp = path.join(STATIC_DIR, urlPath);
  if (!fp.startsWith(STATIC_DIR)) { res.writeHead(403); res.end('Forbidden'); return true; }
  if (!fs.existsSync(fp)) return false;
  const ext = path.extname(fp).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME[ext]||'application/octet-stream', 'Cache-Control':'public,max-age=3600' });
  res.end(fs.readFileSync(fp));
  return true;
}

function getSid(req) { const m=(req.headers.cookie||'').match(/morsel_sid=([^;]+)/); return m?m[1]:null; }
function getSession(req) { const sid=getSid(req); if(!sid) return {_sid:null}; return sessions.get(sid)?{...sessions.get(sid)}:{_sid:sid}; }
function saveSession(res, sess) {
  let sid=sess._sid;
  if(!sid){ sid=crypto.randomUUID(); sess._sid=sid; res.setHeader('Set-Cookie',`morsel_sid=${sid}; Path=/; HttpOnly; SameSite=Lax`); }
  sessions.set(sid,{...sess});
}
function destroySession(req,res) { const sid=getSid(req); if(sid) sessions.delete(sid); res.setHeader('Set-Cookie','morsel_sid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'); }

function hashPw(pw) { const salt=crypto.randomBytes(16).toString('hex'); return salt+':'+crypto.pbkdf2Sync(pw,salt,100000,64,'sha512').toString('hex'); }
function verifyPw(pw,stored) { const [salt,hash]=stored.split(':'); return crypto.pbkdf2Sync(pw,salt,100000,64,'sha512').toString('hex')===hash; }

function parseBody(req) {
  return new Promise((res,rej)=>{
    let d='';
    req.on('data',c=>{d+=c;});
    req.on('end',()=>{
      const ct=req.headers['content-type']||'';
      if(ct.includes('application/json')){ try{res(JSON.parse(d));}catch{res({});} }
      else{ const p=new URLSearchParams(d),o={}; for(const[k,v] of p) o[k]=v; res(o); }
    });
    req.on('error',rej);
  });
}

function send(res,html,sess,status=200){ if(sess) saveSession(res,sess); res.writeHead(status,{'Content-Type':'text/html;charset=utf-8'}); res.end(html); }
function redir(res,loc,sess){ if(sess) saveSession(res,sess); res.writeHead(302,{Location:loc}); res.end(); }
function json(res,data,status=200){ res.writeHead(status,{'Content-Type':'application/json'}); res.end(JSON.stringify(data)); }

async function handler(req, res) {
  const pu = new URL(req.url, `http://localhost:${PORT}`);
  const p = pu.pathname, m = req.method.toUpperCase();

  if (m==='GET' && p.startsWith('/images/')) { if(serveStatic(res,p)) return; }

  const sess = getSession(req);

  if (m==='GET'  && p==='/') { if(sess.userId) return redir(res,'/menu',sess); return send(res,landingPage(),sess); }
  if (m==='GET'  && p==='/login') { if(sess.userId) return redir(res,'/menu',sess); const f=sess.flash;delete sess.flash; return send(res,loginPage(f),sess); }
  if (m==='POST' && p==='/login') {
    if(sess.userId) return redir(res,'/menu',sess);
    const b=await parseBody(req);
    if(!b.email||!b.password){sess.flash={type:'error',msg:'Please fill in all fields.'};return redir(res,'/login',sess);}
    const u=findUserByEmail(b.email);
    if(!u||!verifyPw(b.password,u.passwordHash)){sess.flash={type:'error',msg:'Incorrect email or password.'};return redir(res,'/login',sess);}
    sess.userId=u.id; return redir(res,'/menu',sess);
  }
  if (m==='GET'  && p==='/signup') { if(sess.userId) return redir(res,'/menu',sess); const f=sess.flash;delete sess.flash; return send(res,signupPage(f),sess); }
  if (m==='POST' && p==='/signup') {
    if(sess.userId) return redir(res,'/menu',sess);
    const b=await parseBody(req);
    if(!b.firstName||!b.lastName||!b.email||!b.password){sess.flash={type:'error',msg:'Please fill in all required fields.'};return redir(res,'/signup',sess);}
    if(b.password.length<6){sess.flash={type:'error',msg:'Password must be at least 6 characters.'};return redir(res,'/signup',sess);}
    if(findUserByEmail(b.email)){sess.flash={type:'error',msg:'An account with that email already exists.'};return redir(res,'/signup',sess);}
    const u=createUser({firstName:b.firstName,lastName:b.lastName,email:b.email,phone:b.phone,passwordHash:hashPw(b.password)});
    sess.userId=u.id; return redir(res,'/menu',sess);
  }
  if (m==='POST' && p==='/logout') { destroySession(req,res); res.writeHead(302,{Location:'/'}); res.end(); return; }

  // auth guard
  if(!sess.userId) return redir(res,'/login',sess);
  const user=findUserById(sess.userId);
  if(!user){destroySession(req,res);return redir(res,'/login',null);}

  if (m==='GET'  && p==='/menu')      return send(res,menuPage(user,menuItems),sess);
  if (m==='GET'  && p==='/cart')      return send(res,cartPage(user),sess);
  if (m==='GET'  && p==='/favorites') return send(res,favoritesPage(user),sess);
  if (m==='GET'  && p==='/profile')   return send(res,profilePage(user,getOrdersByUser(user.id).length),sess);
  if (m==='GET'  && p==='/orders')    { const orders=getOrdersByUser(user.id); return send(res,ordersPage(user,orders,pu.searchParams.get('placed')==='1'),sess); }
  if (m==='POST' && p==='/orders') {
    const b=await parseBody(req);
    if(!b.items||!b.items.length) return json(res,{error:'Cart is empty.'},400);
    const items=b.items.map(i=>({id:String(i.id),name:String(i.name),price:parseFloat(i.price)||0,emoji:String(i.emoji),image:String(i.image||''),qty:Math.max(1,parseInt(i.qty,10)||1)}));
    const order=createOrder(user.id,items);
    return json(res,{ok:true,orderId:order.id});
  }

  send(res,`<!DOCTYPE html><html><head><style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fff0f6;flex-direction:column;gap:12px}h1{font-size:48px;color:#be185d}p{color:#9d7a8a}a{color:#db2777;font-weight:600}</style></head><body><h1>404 🌸</h1><p>Page not found.</p><a href="/">Go home</a></body></html>`,sess,404);
}

const server=http.createServer((req,res)=>{
  handler(req,res).catch(err=>{console.error('Error:',err);res.writeHead(500,{'Content-Type':'text/plain'});res.end('Internal Server Error');});
});

server.listen(PORT,()=>{
  console.log('\n🌸 Morsel (Pink Edition) running at http://localhost:'+PORT+'\n');
  console.log('  /          → Landing');
  console.log('  /signup    → Sign up');
  console.log('  /login     → Sign in');
  console.log('  /menu      → Menu + Search + Favourites');
  console.log('  /cart      → Cart + Promo codes');
  console.log('  /favorites → Saved items');
  console.log('  /orders    → Order history');
  console.log('  /profile   → Profile + Badges\n');
});

module.exports = server;
