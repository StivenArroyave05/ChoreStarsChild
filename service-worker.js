// service-worker.js

const CACHE_STATIC  = 'static-v1';
const CACHE_RUNTIME = 'runtime-v1';

const PRECACHE_URLS = [
  '/', 
  '/index.html',
  '/main.js',
  '/style.css',
  '/manifest.json',
  '/assets/logo.png'
];

// 1) Precaching de recursos locales
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_STATIC)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// 2) Limpieza de cachés antiguas y toma de control inmediato
self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_STATIC && key !== CACHE_RUNTIME)
            .map(oldKey => caches.delete(oldKey))
        )
      )
      .then(() => self.clients.claim())
  );
});

// 3) Listener para mensajes de la página (ej. SKIP_WAITING)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 4) Estrategias de fetch
self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  // 4.a) Recursos de este dominio: Cache-first, luego Network + cache runtime
  if (requestURL.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          return caches.open(CACHE_RUNTIME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  // 4.b) Google Fonts: Network-first, luego fallback a cache
  if (
    requestURL.host === 'fonts.googleapis.com' ||
    requestURL.host === 'fonts.gstatic.com'
  ) {
    event.respondWith(
      fetch(event.request)
        .then(networkResponse => {
          // opcional: cachear la respuesta opaca
          const clone = networkResponse.clone();
          caches.open('fonts-cache').then(cache => cache.put(event.request, clone));
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 4.c) Otros orígenes de terceros: network-only
  event.respondWith(fetch(event.request));
});
