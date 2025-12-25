const CACHE_NAME = 'deen-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/three@0.160.0/build/three.module.js',
  'https://d3js.org/d3.v7.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
