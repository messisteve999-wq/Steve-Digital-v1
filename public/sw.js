const CACHE_NAME = "steve-digital-v1.3";

const FILES = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/manifest.json",

  "/icon.svg",
  "/assets/logo.svg",
  "/assets/steve-digital-logo.png",
  "/assets/hero-stars.png",
  "/warrior-king-bg.png",

  "/assets/affiches.svg",
  "/assets/maintenance.svg",
  "/assets/serveurs.svg",
  "/assets/sites-web.svg",

  "/services/affiches.html",
  "/services/maintenance.html",
  "/services/serveurs.html",
  "/services/sites-web.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
