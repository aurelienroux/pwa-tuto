const staticCacheName = 'site-static'
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
})

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt)
})