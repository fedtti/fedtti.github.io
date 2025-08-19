const cacheVersion: string = '1.0.0';
const cacheAllowedVersionsList: string[] = [
  '1.0.0',
  'current'
];

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .open(cacheVersion)
      .then((cache: Cache) => {
        return cache.addAll([
          '/assets/css/style.css',
          '/assets/img/apple-touch-icon-76x76.png',
          '/assets/img/apple-touch-icon-120x120.png',
          '/assets/img/apple-touch-icon-152x152.png',
          '/assets/img/apple-touch-icon-180x180.png',
          '/assets/img/favicon-16x16.png',
          '/assets/img/favicon-32x32.png',
          '/assets/img/favicon-48x48.png',
          '/assets/img/federico-moretti_2x.webp',
          '/assets/img/federico-moretti_3x.webp',
          '/assets/img/federico-moretti.jpg',
          '/assets/img/federico-moretti.webp',
          '/assets/img/icon-192x192.png',
          '/assets/img/icon-384x384.png',
          '/assets/img/icon-512x512.png',
          '/assets/js/app.js',
          '/index.html'
        ]);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (!cacheAllowedVersionsList.includes(key)) {
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches
        .match(event.request)
        .then(cachedResponse => {
          if (!!cachedResponse) {
            return cachedResponse;
          }

          return caches
                   .open('current')
                   .then(cache => {
                     return fetch(event.request)
                              .then(response => {
                                return cache
                                         .put(event.request, response.clone())
                                         .then(() =>  response);
                              });
                   });
        })
    );
  }
});
