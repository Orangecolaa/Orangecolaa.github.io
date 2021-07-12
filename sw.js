"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Orangecola"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c239ebef00de0f362cbb5901aa29e9dd",url:"./404.html"},{revision:"4e13d372a9fc5ab53b3389240a0154e9",url:"./about/index.html"},{revision:"b7540e1aec65371f044683f37bf2ee39",url:"./archives/2020/11/index.html"},{revision:"24fd41f305e761cd87215a718eccc000",url:"./archives/2020/index.html"},{revision:"3a1f3befcc9e9b2b209a084c8869fa47",url:"./archives/2021/07/index.html"},{revision:"2f51ed9770eeec42523351854047bd19",url:"./archives/2021/index.html"},{revision:"3bd0753d0492a9c1a849dca3496bd351",url:"./archives/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"4fc319b2cc3afc63dfc87d9306d28460",url:"./categories/index.html"},{revision:"36bd5e169a127241675660af8d8db52b",url:"./categories/爬虫/index.html"},{revision:"f59d9267dac5aa3b00d305c470a42d68",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"9507125c4454b3f3afac51d6416eeea0",url:"./gallery/index.html"},{revision:"05e81a9938bb6233ca0a8bd927d56627",url:"./gallery/jiyuanmei/index.html"},{revision:"553db123d279f20fd687aca4d232bfe4",url:"./gallery/labixiaoxin/index.html"},{revision:"7fbc05aa8b94405185cf24eb3d6c0b08",url:"./gallery/marvel/index.html"},{revision:"be91f630af1b6c061a1b4409041c1b70",url:"./gallery/photo/index.html"},{revision:"e0f377d769371e2818fb241a56a76193",url:"./gallery/wallpaper/index.html"},{revision:"b68c7134a7fb71a3aa76a9a82578d24e",url:"./images/pwaicons/README.html"},{revision:"a9b97355d502f0282e92cdf8c322faab",url:"./img/pwa/manifest.json"},{revision:"49bf6e5b0b322ff3f4e7ff62f4b8042d",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"ce839fae8b34f854bae09a6eb24ac30c",url:"./link/index.html"},{revision:"7c38ca1021b2bb0328919fa2a90f2ad1",url:"./manifest.json"},{revision:"d75f1230c3e40a248731a751f23982d5",url:"./movies/index.html"},{revision:"11bc3ce1694463a335842d6e49c3b97a",url:"./music/index.html"},{revision:"670775ae6f2a6db26c808e85bebf12b0",url:"./posts/4a17b156/index.html"},{revision:"13d8b111ca906e8546d92e783abcd633",url:"./posts/a53e5350/index.html"},{revision:"c7606b6092677e16cce904cf5eb17a65",url:"./posts/d95d7e09/index.html"},{revision:"5ec7a773573635ef5c6df4bc4d438445",url:"./tags/index.html"},{revision:"2d12b570087d32cfabfd7621040ae70d",url:"./tags/博客/index.html"},{revision:"a8ea3050e63ab9de09455a6b5006afd1",url:"./tags/爬虫-urllib/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();