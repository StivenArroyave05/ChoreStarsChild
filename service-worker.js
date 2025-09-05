const CACHE_STATIC   = 'static-v1';
const CACHE_RUNTIME  = 'runtime-v1';

const PRECACHE_URLS = [
  '/', 
  '/index.html',
  'main.js',
  'style.css',
  'manifest.json',
  '/assets/logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_STATIC && key !== CACHE_RUNTIME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);

  // 1) Same-origin → cache-first then network, populate runtime cache
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

  // 2) Google Fonts (CSS y fuentes) → network-first then cache fallback
  if (
    requestURL.host === 'fonts.googleapis.com' ||
    requestURL.host === 'fonts.gstatic.com'
  ) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // opcional: cachear la respuesta opaca
          const clone = response.clone();
          caches.open('fonts-cache').then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // 3) Otros terceros → network-only (sin caching) o puedes añadir otro fallback
  event.respondWith(fetch(event.request));
});

// Al recibir un mensaje desde la página
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    // Fuerza al SW a activarse y reemplazar al actual
    self.skipWaiting();
  }
});

// En tu 'activate', asegúrate de reclamar clientes
self.addEventListener('activate', event => {
  event.waitUntil(
    // Limpia cachés antiguas si hace falta…
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_STATIC && key !== CACHE_RUNTIME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())  // Toma control inmediato de las páginas
  );
});
