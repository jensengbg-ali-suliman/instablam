self.addEventListener('instal', (e) => {
  e.waitUntil(caches.open('v1').then((cache) => cache.addAll(['offline.html'])))
  self.skipWaiting()
  console.log('SW has been installed at: ', new Date().toLocaleTimeString())
})

self.addEventListener('activate', (e) => {
  self.skipWaiting()
  console.log('SW has been activated at: ', new Date().toLocaleTimeString())
})

self.addEventListener('fetch', (e) => {
  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then((res) => {
        if (res) {
          return res
        } else {
          return caches.match(new Request('offline.html'))
        }
      })
    )
  } else {
    upploadDataToCache(e.request)
  }
})

async function upploadDataToCache(req) {
  const res = await fetch(req)
  const cache = await caches.open('v1')
  const data = await cache.put(req, res.clone())
  return res
}
