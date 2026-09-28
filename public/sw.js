const CACHE_NAME="steve-digital-v2";
const FILES=["./","./index.html","./service.html","./style.css","./app.js","./manifest.json","./assets/steve-digital-logo.png","./assets/hero-stars.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request))));