"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Orangecola"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"223223c9b75148f3c337187461586bf2",url:"./404.html"},{revision:"3d4e360d2d328aa4b4718b45fc06d208",url:"./about/index.html"},{revision:"e206f86473f9178cdedea9209f28368f",url:"./archives/2021/09/index.html"},{revision:"dd80f9ae26ee83bcfdfb2a2da8981d4c",url:"./archives/2021/10/index.html"},{revision:"d86d6315d23a0bbcd5784a05a2c3674c",url:"./archives/2021/index.html"},{revision:"718d51745e6f7afeec3e3e5ab577f77a",url:"./archives/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"694aee8e6e7f76f9b68f0f2a95d8c95e",url:"./categories/Django/index.html"},{revision:"fdbdd5594dd5db22c6babf1f3dce8f74",url:"./categories/Github/index.html"},{revision:"720e4ee782765a7918703cd66b404b49",url:"./categories/Hadoop/index.html"},{revision:"a06da273eeb2b309deada8fcc6f8ac09",url:"./categories/Hexo博客/index.html"},{revision:"015583f5cdae9c4cc88cbd262b5e557b",url:"./categories/index.html"},{revision:"93ba1d00fbf4be3091dee51eb8ef9adf",url:"./categories/Python/index.html"},{revision:"eee6f43857dbbb602077fe05794b23aa",url:"./categories/Python/Matplotlib/index.html"},{revision:"834ef374c995513e37b12478a32803f2",url:"./categories/Python/数据库/index.html"},{revision:"77d41f8d54a47968ba7d90e93de891ec",url:"./categories/TCP/index.html"},{revision:"c94b453d024b805b464c3982cb43907d",url:"./categories/TCP/网络基础/index.html"},{revision:"ebd7d9bf4b21a1d5bc58bf22902b559b",url:"./categories/网络通信/index.html"},{revision:"7dd1b016938bfcf66cae042978ab8e98",url:"./categories/网络通信/IP/index.html"},{revision:"f59d9267dac5aa3b00d305c470a42d68",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"ea56925ed6ba728e430114a76ddb10f0",url:"./gallery/index.html"},{revision:"41317eae129706f8bcaeb5df4ab5b8e2",url:"./gallery/jiyuanmei/index.html"},{revision:"bb5de370c0b61a89de65def1a4183206",url:"./gallery/labixiaoxin/index.html"},{revision:"967e64540ad1f893620234e62962cf84",url:"./gallery/marvel/index.html"},{revision:"cda8d0b424b048e73be4e8c78c8d4056",url:"./gallery/photo/index.html"},{revision:"781f303f82f1f17cc71a21993d516fb2",url:"./gallery/spiderman/index.html"},{revision:"43157351a090c191669cf8f4335e61ae",url:"./gallery/wallpaper/index.html"},{revision:"dac58f50bca86361561ae2e17965bd7e",url:"./images/pwaicons/README.html"},{revision:"a9b97355d502f0282e92cdf8c322faab",url:"./img/pwa/manifest.json"},{revision:"4041745a6aab69d59843b56a58400db4",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"daac6f9f27819b87a44a849dbd301ff9",url:"./js/wow_init.js"},{revision:"07a394d2975c63942c6ef2bb5b8183c7",url:"./link/index.html"},{revision:"7c38ca1021b2bb0328919fa2a90f2ad1",url:"./manifest.json"},{revision:"c4e590a7ad3d5163380e2f38c2d3c799",url:"./movies/index.html"},{revision:"7925b909abbf0c93f6c6512a672b0dea",url:"./music/index.html"},{revision:"3b27f8b198ae7aaf7b5be7470778f582",url:"./posts/5888fee2/index.html"},{revision:"676b41c2b6fda1ba230bb37afdd0d544",url:"./posts/6fd05540/index.html"},{revision:"8c863ec3774058ff749f32c42834f687",url:"./posts/7bcbd7d7/index.html"},{revision:"4ad93c878fd6671dc34de560232be3a9",url:"./posts/a250e24a/index.html"},{revision:"c312d82b9f23cd9d95bfe70acb8d4a88",url:"./posts/a2ba319e/index.html"},{revision:"b9325d0a5056b73dd1ba3db4defa2a5d",url:"./posts/ad99f8c1/index.html"},{revision:"60fcc42f34a950019f509292a949aaa4",url:"./posts/aedc73f1/index.html"},{revision:"43ec46fb366b35705e71aa5bd4681675",url:"./posts/e7d5b071/index.html"},{revision:"0cddaff3b90ce70d779b879f1c2f38c8",url:"./posts/f4309140/index.html"},{revision:"f352c88da75e15a58c1895c660d33711",url:"./tags/Django/index.html"},{revision:"24141eab366fed98d1665fdaa20531ec",url:"./tags/Github/index.html"},{revision:"4faecae4234bc5e50b530f1b6c817952",url:"./tags/Hadoop/index.html"},{revision:"a99af8cca903e2e0e07566f908970284",url:"./tags/Hexo/index.html"},{revision:"7c17acd4239e522b122b1013dcc5a08e",url:"./tags/index.html"},{revision:"bac0076a902c600bc3452b4f05ad17e7",url:"./tags/IP/index.html"},{revision:"53d77bca0ee5bdbf0694e9756c2cc1e3",url:"./tags/Matplotlib/index.html"},{revision:"7ea90d0f4a3039529f25ba9cac39cab6",url:"./tags/Mysql/index.html"},{revision:"02611e1f8a98b3a390a4dac2e782b3d6",url:"./tags/Python/index.html"},{revision:"182198af28223aa0a2af3a3ff41f36de",url:"./tags/SQLite3/index.html"},{revision:"bb00a5c75f211979926e93c61c97afdd",url:"./tags/TCP/index.html"},{revision:"72c0a76b9d54774bd404c6c9a377a9cf",url:"./tags/网络基础/index.html"},{revision:"ae1e64b1c899bee5b687990c7fbe1e85",url:"./tags/网络通信/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();