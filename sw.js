"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"Orangecola"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"accaeb1a63ce38d3f4be4d2f483cfd71",url:"./404.html"},{revision:"1b51cf53654a42d84a6b1784bf7a08db",url:"./about/index.html"},{revision:"12d35e254e47b2a5915f623a018191a2",url:"./archives/2021/09/index.html"},{revision:"b10ff756a650f7e0667b02ddf74f33a5",url:"./archives/2021/10/index.html"},{revision:"082410c2e5b82f53dd34d421895e974f",url:"./archives/2021/index.html"},{revision:"243b4b306fa2174c7e478e0d14410980",url:"./archives/2021/page/2/index.html"},{revision:"3b91a051131b8ad95b216b3da73adf4f",url:"./archives/index.html"},{revision:"2d66c226939001a2fccccff0f32d414f",url:"./archives/page/2/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"07d1182fee442470742dc4c1b6ff6a3f",url:"./categories/Django/index.html"},{revision:"bea3ebdb5a87193188f5b55a70a6d775",url:"./categories/Github/index.html"},{revision:"2bbb6a3fb5bda04feafdeae963d91c6d",url:"./categories/Hadoop/index.html"},{revision:"a9ebd309ff9a9c54f370967cf9dfc5bd",url:"./categories/Hexo博客/index.html"},{revision:"4e9530fde467dad83c0454833b0c4639",url:"./categories/HTML/index.html"},{revision:"05c5222ac5da4bb1c377d742d2f31b49",url:"./categories/index.html"},{revision:"b9d9a8fb47c28414ca242817da5654a5",url:"./categories/Python/index.html"},{revision:"815a48cda3730b377d992c6747a36a6a",url:"./categories/Python/Matplotlib/index.html"},{revision:"5a5885ea98bb410aa2eba45fdf55ec5b",url:"./categories/Python/数据库/index.html"},{revision:"ad3b0812397677f94852a1445d250ff6",url:"./categories/TCP/index.html"},{revision:"3ffcd0bb27c0fc93b0d644424586da06",url:"./categories/TCP/网络基础/index.html"},{revision:"e507b1719734e7ab3f57116a23101074",url:"./categories/网络通信/index.html"},{revision:"0467900ffd6ec70cb201a6dfd4798b25",url:"./categories/网络通信/IP/index.html"},{revision:"f59d9267dac5aa3b00d305c470a42d68",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"7daeb16e4bcb65eefbf0c6e475be5cfb",url:"./gallery/index.html"},{revision:"2167f243eff8dc3f9a77bc8846e0ef9d",url:"./gallery/jiyuanmei/index.html"},{revision:"1438e771995361063b6a96eae9140c2e",url:"./gallery/labixiaoxin/index.html"},{revision:"4e30f764ddbcd6eba9d7a96d1fbcd2ed",url:"./gallery/marvel/index.html"},{revision:"11fdd88e8404fac5c48ae4a2fc6ac144",url:"./gallery/photo/index.html"},{revision:"3c0cc1bf2bb397f16d1eaf1bf970a4bf",url:"./gallery/spiderman/index.html"},{revision:"26f193954e728de88391f75289276d7a",url:"./gallery/wallpaper/index.html"},{revision:"f876bd7341c182fa08fbc36a20738d60",url:"./images/pwaicons/README.html"},{revision:"a9b97355d502f0282e92cdf8c322faab",url:"./img/pwa/manifest.json"},{revision:"4270c0da83ffafb3edf996f7be35e727",url:"./index.html"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"daac6f9f27819b87a44a849dbd301ff9",url:"./js/wow_init.js"},{revision:"bb3f38c24ba05a68af27dce4070263fc",url:"./link/index.html"},{revision:"7c38ca1021b2bb0328919fa2a90f2ad1",url:"./manifest.json"},{revision:"11f01ad7599930438ff0ef0d2c624540",url:"./movies/index.html"},{revision:"1a3fb46917f2ee59336f65d2dc1a17d0",url:"./music/index.html"},{revision:"cdf8d70d79bdb51c917cc8eee857167a",url:"./page/2/index.html"},{revision:"60388d342389d516c982f31b294a83c9",url:"./posts/533f3e14/index.html"},{revision:"58f48e5f559302c284d8aedc4d947120",url:"./posts/5888fee2/index.html"},{revision:"77a636b10d890f53a1fe83b75ae8843f",url:"./posts/6fd05540/index.html"},{revision:"fa58bfe0eb21644c4034bedcae17821a",url:"./posts/7bcbd7d7/index.html"},{revision:"b03fd408c2c132cc6d8cf5b1d0456286",url:"./posts/98f3a6d9/index.html"},{revision:"787f5497adff7e2359c6663dbacfd29d",url:"./posts/a250e24a/index.html"},{revision:"98d997988430b3aebbb621ad890239a8",url:"./posts/a2ba319e/index.html"},{revision:"da7a56569a15133657338be6327d9b25",url:"./posts/ad99f8c1/index.html"},{revision:"ce584b89d83c8d07d50a9eecddda832d",url:"./posts/aedc73f1/index.html"},{revision:"b4a407e50287c552b4a8c78e4626e000",url:"./posts/e7d5b071/index.html"},{revision:"49f0f82c40728cf5ed2f2ca0e8743255",url:"./posts/f4309140/index.html"},{revision:"ec6e5ea3d9461cb4ec152fce9a2fe9af",url:"./tags/Django/index.html"},{revision:"7f7871c0183fdbbf32e63b3f28112ed1",url:"./tags/Github/index.html"},{revision:"fe2490be89f2d50c6992339d5e3a75f7",url:"./tags/Hadoop/index.html"},{revision:"ad82f9cc5c5ffea6c3aea0db538b866a",url:"./tags/Hexo/index.html"},{revision:"f6934d0da87d082580efe1bf04a8a752",url:"./tags/HTML/index.html"},{revision:"143113673d4d2acc32eda00547de909c",url:"./tags/index.html"},{revision:"9d3aecf51d01fa9869fec7c332e4cabe",url:"./tags/IP/index.html"},{revision:"a45eee0e6dd94c57ec2472609f3d3b74",url:"./tags/Matplotlib/index.html"},{revision:"14a4e482184c616ae3d9e9075fc4b6b0",url:"./tags/Mysql/index.html"},{revision:"a6c25488fd038232cbba7b478fb48cee",url:"./tags/Python/index.html"},{revision:"96153e1a32072f8277040b9d50bb6330",url:"./tags/SQLite3/index.html"},{revision:"902bebf2522eac77d325bb67bd59da39",url:"./tags/TCP/index.html"},{revision:"03247e88636cab35a8d8c2ff54b99544",url:"./tags/网络基础/index.html"},{revision:"b8ac7ac3f35801d88160b2c5106a5807",url:"./tags/网络通信/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();