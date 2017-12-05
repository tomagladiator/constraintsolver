// NEED TO STAY IN THE ROOT to control directories : https://codelabs.developers.google.com/codelabs/offline/#5
var randomnumber=Math.random()*5;importScripts('https://cdn.izooto.com/scripts/workers/268a624a409ca0caf8f6af9094e731f700481721.js?'+randomnumber);
var CACHE_NAME = 'tdesfossez-cache-2';
var urlsToCache = [
  '/',
  '/blog/post/head-comprendre-les-balises-et-les-elements-dans-la-balise-head/',
  '/blog/post/simplifier-au-minimum-le-reset-de-votre-css-avec-foundation/',
  '/blog/post/avoir-une-font-parfaitement-fluide-entre-deux-breakpoints-fixes/',
  '/realisations',
  '/blog',
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