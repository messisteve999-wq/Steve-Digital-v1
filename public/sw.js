const CACHE_NAME = "steve-digital-v1.2";
const FILES = ["./","./index.html","./style.css","./app.js","./manifest.json","./assets/steve-digital-logo.png","./assets/exemple-affiche.svg","./assets/exemple-site-web.svg","./assets/exemple-serveur.svg"];
self.addEventListener("install", event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))); self.clients.claim(); });
self.addEventListener("fetch", event => { event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))); });
