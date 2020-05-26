self.addEventListener('instal', (e) => {
  self.skipWaiting()
  console.log('SW has been installed at: ', new Date().toLocaleTimeString())
})

self.addEventListener('activate', (e) => {
  self.skipWaiting()
  console.log('SW has been activated at: ', new Date().toLocaleTimeString())
})

self.addEventListener('fetch', (e) => {
  console.log(e.request)
})
