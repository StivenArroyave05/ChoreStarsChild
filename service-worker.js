// service-worker.js

// 1) Cambia este VERSION cada vez que despliegues (p. ej. 'v2' → 'v3')
const VERSION        = 'v1.0.1';
const CACHE_STATIC   = `static-${VERSION}`;
const CACHE_RUNTIME  = 'runtime-v1';

const PRECACHE_URLS = [
  '/', 
  '/index.html',
  '/main.js',
  '/style.css',
  '/manifest.json',
  '/assets/logo.png'
];

self.addEventListener('install', event => {
  console.log('[SW] Install - version:', VERSION);
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => {
        return Promise.all(
          PRECACHE_URLS.map(url =>
            cache.add(url).catch(err => {
              console.warn(`[SW] Precaching falló en ${url}:`, err);
            })
          )
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  console.log('[SW] Activate - limpiando cachés antiguas');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_STATIC && key !== CACHE_RUNTIME)
          .map(oldKey => {
            console.log('[SW] Eliminando caché antigua:', oldKey);
            return caches.delete(oldKey);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// Permite al cliente enviar SKIP_WAITING
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('[SW] SKIP_WAITING recibido — activando nuevo SW');
    self.skipWaiting();
  }
});

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  // 2.a) Cache-first para recursos de este dominio
  if (requestURL.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request)
        .then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            return caches.open(CACHE_RUNTIME)
              .then(cache => {
                cache.put(event.request, response.clone());
                return response;
              });
          });
        })
    );
    return;
  }

  // 2.b) Network-first para Google Fonts
  if (
    requestURL.host === 'fonts.googleapis.com' ||
    requestURL.host === 'fonts.gstatic.com'
  ) {
    event.respondWith(
      fetch(event.request)
        .then(networkRes => {
          const clone = networkRes.clone();
          caches.open('fonts-cache').then(cache => cache.put(event.request, clone));
          return networkRes;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 2.c) Otros orígenes: network-only
  event.respondWith(fetch(event.request));
});
