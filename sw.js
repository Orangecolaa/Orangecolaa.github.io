"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Orangecola"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"bd09d13836523487d2d07a9392d5cb86",url:"./2020/11/03/hello-world/index.html"},{revision:"9983b02693606096db69ab1740b87fa7",url:"./2020/11/03/我的第一篇博客/index.html"},{revision:"f6890085710c0326e363d1752479a8ec",url:"./404.html"},{revision:"1d2efc0f08b7ebe16db4b248ed3d39cf",url:"./archives/2020/11/index.html"},{revision:"9c6b984d2c5c0427ac59b632aec8cc5c",url:"./archives/2020/index.html"},{revision:"c68a8ad4a8d251aa854e3e11a106859a",url:"./archives/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"4ad004a35d2107fa5b4bccbc36124c1f",url:"./categories/index.html"},{revision:"66daae04ef00bddab840481698638100",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"db4fee1ed2800bf0d7ad22d8cfff6d21",url:"./gallery/index.html"},{revision:"53d35fdf75502425dc8d7c0e1372e431",url:"./images/pwaicons/README.html"},{revision:"a9b97355d502f0282e92cdf8c322faab",url:"./img/pwa/manifest.json"},{revision:"28747ac972e3df44dfb3555508453a70",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"8c22b85fff18ee5be6f62c33fca6eac6",url:"./link/index.html"},{revision:"874645286429750f049a8236448b3ff7",url:"./manifest.json"},{revision:"9e4fae55aed8426e8404a48c1e820491",url:"./movies/index.html"},{revision:"ba888e6158bde9e72485714ae73b2990",url:"./music/index.html"},{revision:"ad57d3ca0b2da3e32b76a580416dc840",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();