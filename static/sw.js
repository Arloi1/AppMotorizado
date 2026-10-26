self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Permite que la app funcione y gestione peticiones de red
  e.respondWith(fetch(e.request));
});
