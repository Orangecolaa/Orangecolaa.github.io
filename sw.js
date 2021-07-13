"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Orangecola"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"ae569fd9ec6c47be16497e8c8db7760a",url:"./404.html"},{revision:"a32286e0401c185a5cb6471f1629fca0",url:"./about/index.html"},{revision:"49b86be233ac154ae9ede6b79b367b20",url:"./archives/2020/11/index.html"},{revision:"341a224fdbeae0a5c57d95c547978608",url:"./archives/2020/index.html"},{revision:"2fdef6c5f7a78fae105000f0dd9536a7",url:"./archives/2021/07/index.html"},{revision:"1c63cb00380a2cf9f4572b83979b196c",url:"./archives/2021/index.html"},{revision:"8fe2596e15ca3df7ca94b36a401ade27",url:"./archives/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"b03a76a323aa302c6e3c4b579f173b74",url:"./categories/index.html"},{revision:"753d1a11982e7dfad441c3091bed159a",url:"./categories/爬虫/index.html"},{revision:"f59d9267dac5aa3b00d305c470a42d68",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"036d3f2fcb7db1028915aad431db0c8c",url:"./gallery/index.html"},{revision:"bef5f4168f57db72bdf4ab18bbcc5cd9",url:"./gallery/jiyuanmei/index.html"},{revision:"74aa7659654c5dcec7d16b488dc3baf3",url:"./gallery/labixiaoxin/index.html"},{revision:"72c3c56ef4b050e40e563a522f953328",url:"./gallery/marvel/index.html"},{revision:"9dd97a2054b1d560fd1c5fe48539a920",url:"./gallery/photo/index.html"},{revision:"84a12497d07aa4aa3a1b9503780ac857",url:"./gallery/spiderman/index.html"},{revision:"dbfd0aaa168d8df7d38e7a6a3a485d32",url:"./gallery/wallpaper/index.html"},{revision:"3290bb948ddbe53eb3feaced2d4e87cb",url:"./images/pwaicons/README.html"},{revision:"a9b97355d502f0282e92cdf8c322faab",url:"./img/pwa/manifest.json"},{revision:"8b2ce6f2489873918807662ff52ba5f0",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"daac6f9f27819b87a44a849dbd301ff9",url:"./js/wow_init.js"},{revision:"3b0852932c03759bdf0185c8ee76e6a8",url:"./link/index.html"},{revision:"7c38ca1021b2bb0328919fa2a90f2ad1",url:"./manifest.json"},{revision:"794511da0d8be5b1f7802690c4a4f2a0",url:"./movies/index.html"},{revision:"e75d23ba2d223345dc7cd717d2e4090c",url:"./music/index.html"},{revision:"357d40fb5a4a902f3e9054f3aa84409d",url:"./posts/4a17b156/index.html"},{revision:"832d639364275c11469ce25e447ce93e",url:"./posts/a53e5350/index.html"},{revision:"10602ada4c70ea762626380e0b15b402",url:"./posts/d95d7e09/index.html"},{revision:"c32e024f2f6dc47f97c7073778b604c7",url:"./tags/index.html"},{revision:"9f2ab92ec867bc097d62d2a5c98626bf",url:"./tags/博客/index.html"},{revision:"7add610322c7ffa99e64954f37f3e758",url:"./tags/爬虫-urllib/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();