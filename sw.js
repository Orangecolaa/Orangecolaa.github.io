"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Orangecola"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"e9a3316c97bd626498c1708403cc277a",url:"./404.html"},{revision:"e6d0f20a0b577edf289c0779209df846",url:"./about/index.html"},{revision:"ea1613a85ebdcf9681563d3fb5a371e5",url:"./archives/2020/11/index.html"},{revision:"78d53854ba97998eb67f6ad61e9f973e",url:"./archives/2020/index.html"},{revision:"58272de603bd4add1979b9a8f798e236",url:"./archives/2021/07/index.html"},{revision:"cdaaf91db4e9a23fe74fa3b338f0239a",url:"./archives/2021/index.html"},{revision:"cd2b34a8a8e7d3b28acb71db949fd129",url:"./archives/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"1cd5c0d5e755f6722879edd34ba36e56",url:"./categories/index.html"},{revision:"18a28d8f2948279a3347aa0c93a4a778",url:"./categories/爬虫/index.html"},{revision:"f59d9267dac5aa3b00d305c470a42d68",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"c0a958ea96ee278473a4831bddf62b6a",url:"./gallery/index.html"},{revision:"3678a9003277b82ea07d82e19e406a44",url:"./gallery/jiyuanmei/index.html"},{revision:"c6da5139378b8579750ea76dcbc3a0f9",url:"./gallery/labixiaoxin/index.html"},{revision:"a070654a8f0d5c664d4c4ef9fe22e599",url:"./gallery/marvel/index.html"},{revision:"69c7dd74ded1d7dc32357ef4b233c668",url:"./gallery/photo/index.html"},{revision:"a2f6894117bc53daab2750f379156fa3",url:"./gallery/spiderman/index.html"},{revision:"f0872acd32b3cf37aeb96be4cd782741",url:"./gallery/wallpaper/index.html"},{revision:"c5c3f8d487540f3c506679aaf0e51aa2",url:"./images/pwaicons/README.html"},{revision:"a9b97355d502f0282e92cdf8c322faab",url:"./img/pwa/manifest.json"},{revision:"7179ee1aea108295e6a41146bb17e83f",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"daac6f9f27819b87a44a849dbd301ff9",url:"./js/wow_init.js"},{revision:"8dc03aee1359767d34e9478a4e3c78ae",url:"./link/index.html"},{revision:"7c38ca1021b2bb0328919fa2a90f2ad1",url:"./manifest.json"},{revision:"22e5aba367e591093a59e1ca954eb726",url:"./movies/index.html"},{revision:"6258595be32679e27eb61f587f8cca90",url:"./music/index.html"},{revision:"c17020ef6c379a5f7514242ede0a734b",url:"./posts/4a17b156/index.html"},{revision:"875f29dba8197ec064342f450c390f3f",url:"./posts/a53e5350/index.html"},{revision:"f89da92f10aa160f630a6cd48bd5d196",url:"./posts/d95d7e09/index.html"},{revision:"d3bf4ab15be749795dbbb6570dc54edc",url:"./tags/index.html"},{revision:"04cf16fe8e3b638f5ec3be10561eb9ec",url:"./tags/博客/index.html"},{revision:"7a6d46cb77355e969e252c20a5bb29a3",url:"./tags/爬虫-urllib/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();