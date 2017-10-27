// NEED TO STAY IN THE ROOT to control directories : https://codelabs.developers.google.com/codelabs/offline/#5

var CACHE_NAME = 'tdesfossez-cache';
var urlsToCache = [
  '/',
  '/index.html',
  '/react-static-routes.js',
  '/app.js',
  '/css/bulma.css'
];


self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});