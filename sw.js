importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-azure-pwa",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.09d84854e99325897b98.js",
    "revision": "482a4881596dc2c0c49a0cf83a31c9b8"
  },
  {
    "url": "/_nuxt/layouts/default.328d5bbd8e7d95de45bf.js",
    "revision": "1d7e80b19abe8ae1ba8020310688e80b"
  },
  {
    "url": "/_nuxt/manifest.dd757ec93c3a5b428cbd.js",
    "revision": "7180e7483603ef62a41c6d86c6752a23"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/index.e60dfcd84d161740e7b0.js",
    "revision": "45eca6c2ce2f5a7fe5e9bb76b3e632fe"
  },
  {
    "url": "/_nuxt/vendor.ab6c87eb6965386df614.js",
    "revision": "5661f0d37a1fd9597194c85ac11074e0"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

