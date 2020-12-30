// cache name 
const CACHE_NAME = "mobc-cache-" + Date.now();

// Add list of files to cache here.
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./main.css",
  "./main.js",
  "./components.css",
  "./manifest.json",
  "./assets/favicon.ico",
  "./assets/android-chrome-192x192.png",
  "./assets/favicon-16x16.png",
  "./assets/favicon-32x32.png",
  "https://fonts.googleapis.com/css?family=Oswald|Roboto&display=swap",
 
];

// ServiceWorker is installed ...
self.addEventListener("install", (evt) => {

  // set cache
  evt.waitUntil(
      caches.open(CACHE_NAME).then( (cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();
});

//  ServiceWorker is activate
self.addEventListener("activate", (evt) => {

  /*
  // Add fetch event handler here.
  if (evt.request.mode !== 'navigate') {
  // Not a page navigation, bail.
  return;
  }

  */
  // Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then( (cacheNames) => {
        return Promise.all( cacheNames.map( (thisCacheName) => {
          if (thisCacheName !== CACHE_NAME) {
            return caches.delete(thisCacheName);
          }
        }));
      })
  );

  //
  self.clients.claim();
});

// something fetched ()
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    (async () => {
      const response = await caches.match(evt.request);
      //return response || fetch(evt.request);
      return fetch(evt.request) || response;
    })()
  );
});