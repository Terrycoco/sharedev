var CACHE_NAME = 'sw-cache-v3';
var urlsToCache = [
                    '/images/moccasins.jpg',
                    '/images/right_arrow.png',
                    '/images/left_arrow.png',
                    '/images/menu_white.png'
                    ];

self.addEventListener("install", function(event) {
  console.log("sw installed");

  event.waitUntil(
    caches.open(CACHE_NAME)

      .then(function(cache) {
        fetch("/webpack-assets.json") //get latest hashed assets #
        .then(
          function(response) {
            response.json().then(function(assets) {
               //don't cache dev assets
               if (assets.app.js != "app_dev.js") {
                // urlsToCache.push(assets.app.js);
                //urlsToCache.push(assets.app.css);
               } 
               cache.addAll(urlsToCache)
            })
          }
        )
      })
  ) // end waituntil

});



self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        }))
      )
      .then(() => self.clients.claim())
  );
});



//look in cache first
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});