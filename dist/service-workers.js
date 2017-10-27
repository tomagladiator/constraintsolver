// NEED TO STAY IN THE ROOT to control directories : https://codelabs.developers.google.com/codelabs/offline/#5

var CACHE_NAME = 'tdesfossez-cache';
var urlsToCache = [
  '/',
  '/index.html',
  '/react-static-routes.js',
  '/app.js',
  '/css/bulma.css'
];

console.log('In service-workers');

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log("Request URL: " + event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log("response:");
      console.log(response);
      return response || fetch(event.request);
    })
  );
});