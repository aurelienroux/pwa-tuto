const staticCacheName = 'site-static-v1'
const assets = [
  "/",
  "/index.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/js/app.js",
  "/js/materialize.min.js",
  "/js/ui.js",
  "/css/materialize.min.css",
  "/css/styles.css",
  "/img/dish.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.gstatic.com/s/materialicons/v52/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
];

// install service worker
self.addEventListener('install', evt => {
  // console.log('service worker has been installed')
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})

// activate event 
self.addEventListener('activate', evt => {
  // console.log('service worker has been activated')
  caches.keys().then(keys => {
    return Promise.all(keys
      .filter(key => key !== staticCacheName)
    .map(key => caches.delete(key))
    )
  })
})

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt)
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request)
    })
  )
})