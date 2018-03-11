/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/bootstrap-grid.min.css",
    "revision": "6ba2de34dbaa851bb52c96c7bd33352e"
  },
  {
    "url": "css/font-awesome.min.css",
    "revision": "0831cba6a670e405168b84aa20798347"
  },
  {
    "url": "css/theme.css",
    "revision": "8fcf7ab384fcfde90a90822a6f9e1a74"
  },
  {
    "url": "fonts/fontawesome-webfont.eot",
    "revision": "45c73723862c6fc5eb3d6961db2d71fb"
  },
  {
    "url": "fonts/fontawesome-webfont.svg",
    "revision": "76a4f23c6be74fd309e0d0fd2c27a5de"
  },
  {
    "url": "fonts/fontawesome-webfont.ttf",
    "revision": "7c87870ab40d63cfb8870c1f183f9939"
  },
  {
    "url": "fonts/fontawesome-webfont.woff",
    "revision": "dfb02f8f6d0cedc009ee5887cc68f1f3"
  },
  {
    "url": "fonts/fontawesome-webfont.woff2",
    "revision": "4b5a84aaf1c9485e060c503a0ff8cadb"
  },
  {
    "url": "fonts/FontAwesome.otf",
    "revision": "668743fe7258676f8ef8f9b47d2a623e"
  },
  {
    "url": "github-lighthouse-report.html",
    "revision": "6ac2507626ccd36dd9d578ab8a6e0455"
  },
  {
    "url": "img/app-shell-2.png",
    "revision": "4422de3d7879022d6023ce67cd8964c9"
  },
  {
    "url": "img/app-shell.png",
    "revision": "cb397d2940101497563b9369bcb502a6"
  },
  {
    "url": "img/baby-car.gif",
    "revision": "0cbfe7a0703272e2ed93f0c5df4a0bbe"
  },
  {
    "url": "img/caniuse-service-workers.png",
    "revision": "43ed9bdafa44d06a7dff2bc5cd231399"
  },
  {
    "url": "img/capability-reachability-1.png",
    "revision": "7e7b392bb95efa368287772c9db88d72"
  },
  {
    "url": "img/capability-reachability-2.png",
    "revision": "d61dba7d61a89dc10e2404e04f8e9c11"
  },
  {
    "url": "img/comscore-audience.png",
    "revision": "1069c7c111872dcb20cb87038173ab51"
  },
  {
    "url": "img/emojis/broken-heart.png",
    "revision": "2e1833d7f86e7082b9fbcb71597f9ff3"
  },
  {
    "url": "img/emojis/check.png",
    "revision": "274d2bab614dfc2be3f848244d3a428e"
  },
  {
    "url": "img/emojis/disappointed.png",
    "revision": "86b45d45a0ccf6cc0096635182789780"
  },
  {
    "url": "img/emojis/haha.png",
    "revision": "49b443e5a212005aaa097163986c4383"
  },
  {
    "url": "img/emojis/high-voltage.png",
    "revision": "02048ab3cf9e435c1c195bb996027bee"
  },
  {
    "url": "img/emojis/lift.png",
    "revision": "002da36389f9be1048c024d7d5c1e05f"
  },
  {
    "url": "img/emojis/lock.png",
    "revision": "771d11961c9f844325494016c23e14f6"
  },
  {
    "url": "img/emojis/running.png",
    "revision": "768643384e10630f7f1f0f42dd062800"
  },
  {
    "url": "img/emojis/sad.png",
    "revision": "4fd8017a82899ff4a4bdb6abd95554c2"
  },
  {
    "url": "img/emojis/scientist.png",
    "revision": "2c76f9151ec9050b314e0bf50eb8a5ee"
  },
  {
    "url": "img/emojis/target.png",
    "revision": "96d279d7dd5ed89357325817480ebf47"
  },
  {
    "url": "img/emojis/think-face.png",
    "revision": "b38646f7343687c9b1dbff0033949b73"
  },
  {
    "url": "img/emojis/thumbs-up.png",
    "revision": "68fc8b6139cb0cc575faaacaa07d01bf"
  },
  {
    "url": "img/emojis/warning.png",
    "revision": "98d861d3d600bf0ae46b70ae33ba2f5a"
  },
  {
    "url": "img/emojis/wave.png",
    "revision": "2b98b058f37e31c6c5292e5b09f6d91c"
  },
  {
    "url": "img/emojis/wave2.png",
    "revision": "673495583a03239aa54a6936573bc7b5"
  },
  {
    "url": "img/facebook-mobile-stats.png",
    "revision": "3ef25ac99339e09e2d931c2c45c55217"
  },
  {
    "url": "img/forbes.png",
    "revision": "3c13f473580498716b6933a48f3c6287"
  },
  {
    "url": "img/hamster-preach.jpg",
    "revision": "0af78b4a91ddfdcc8265788b4bfb1492"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "0e329504599108ffe8cfb285a8275fab"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "5fa9109dfcd32bfc3b5afe4ae419ba89"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "80c12504d19217e4603ff305b61dcb55"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "5b49292ca25edb2500c3a5118ae1f22d"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "efdaebd18eb6e0bf21e37c939af3c1f5"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "b889b73e40946b28c925d24173aa0720"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "7b24cca0b2d7511ae40d15abb8865af2"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "6a90e80d2f5e4dfeaaa1967138c34209"
  },
  {
    "url": "img/icons/logo-pwa-square.png",
    "revision": "d7df455162fc1779a01e7ae04fef08f8"
  },
  {
    "url": "img/impact-calculator.png",
    "revision": "3e47320ad1c4f10c4a891a3e9a6d032a"
  },
  {
    "url": "img/install-1.png",
    "revision": "596f5fe6825bfc6c1cf7b14064f48b24"
  },
  {
    "url": "img/install-2.png",
    "revision": "c491cff3a2d2935c004d204539959da3"
  },
  {
    "url": "img/install-3.png",
    "revision": "b676279f170240845e9977eb1ffc5104"
  },
  {
    "url": "img/install.png",
    "revision": "3c09c469cc08688f2a461c9e562f01a1"
  },
  {
    "url": "img/letsencrypt-sponsors.png",
    "revision": "52e8263fce4c10dbbab62c33c6eff791"
  },
  {
    "url": "img/lighthouse.png",
    "revision": "514596bfb7c60cc8c2272f6d3c622331"
  },
  {
    "url": "img/logo-pwa.png",
    "revision": "3fe817cfb5029f26b36501e1cb8dc0a5"
  },
  {
    "url": "img/manifest.png",
    "revision": "af55c744de01625e004165a50f9d2e8f"
  },
  {
    "url": "img/no-workbox.png",
    "revision": "e78b70d54fd35cf26a4d33e392133d7f"
  },
  {
    "url": "img/ohmygod.gif",
    "revision": "020909d56f4dbc9d107757ce3253e49a"
  },
  {
    "url": "img/payment-request.png",
    "revision": "6bc4392ebd900364085acf2be0b260a7"
  },
  {
    "url": "img/phone-app-list.jpg",
    "revision": "780b87096ab66da3f11dba93443effc5"
  },
  {
    "url": "img/problem-native-app.png",
    "revision": "b1e3017a1bbf69816926bec6e6c295d1"
  },
  {
    "url": "img/push-notifications.gif",
    "revision": "ee496839687895ec22ce175d24b8d2a6"
  },
  {
    "url": "img/pwa-builder.png",
    "revision": "033d1b61d4eed20ef0ee8aa195cd4497"
  },
  {
    "url": "img/redbull-tire-change.jpg",
    "revision": "5e76e044606500772976ab09ba3bf7d8"
  },
  {
    "url": "img/responsive.png",
    "revision": "da63d7a33371db3cefa13084c35478a7"
  },
  {
    "url": "img/service-worker-0.png",
    "revision": "9e19440b65b68ffa6e108c95bebb77d4"
  },
  {
    "url": "img/service-worker.png",
    "revision": "c81f5a6294903c34282def6744ab145e"
  },
  {
    "url": "img/shema.pptx",
    "revision": "1a3a45e21f77489bbaf4f40bb3fd009e"
  },
  {
    "url": "img/step-loose-20-users.png",
    "revision": "cdb7dcd40cf7d5e1254dba4199897395"
  },
  {
    "url": "img/strategy-cache-falling-back-to-network.png",
    "revision": "365b5845abfcf3cb8a94f0ddef091464"
  },
  {
    "url": "img/strategy-cache-then-network.png",
    "revision": "1c987635e75daa7ccdf6e2ba956fd3e4"
  },
  {
    "url": "img/strategy-network-falling-back-to-cache.png",
    "revision": "a84f1c569a73218801fd5aafd13a34c1"
  },
  {
    "url": "img/strategy-stale-while-revalidate.png",
    "revision": "807c783b4def2f66da64c1cb26fb6090"
  },
  {
    "url": "img/t-rex-offline.png",
    "revision": "e0d327730d97d50da5ae4775c0ccf553"
  },
  {
    "url": "img/tw-lite-pwa.png",
    "revision": "f8ba37e225838bf628bb7a7b456e2e8c"
  },
  {
    "url": "img/update-app.jpg",
    "revision": "ceafc6d8c7831e0b3c059b3dac332151"
  },
  {
    "url": "img/user-retention.png",
    "revision": "f7955e0492d7e16b3315d9c23bf3aa84"
  },
  {
    "url": "img/whatwebcandotoday.png",
    "revision": "0ff3608305b2227fed15830f71c989a0"
  },
  {
    "url": "img/windows-store.jpg",
    "revision": "8cceeeb09f6f2146062af9dd5decd019"
  },
  {
    "url": "img/workbox-1.png",
    "revision": "dc1daa51e8e00bde9ee3348366b186b2"
  },
  {
    "url": "img/workbox-2.png",
    "revision": "82f3c003f6cecf69ac918c8e64602bdd"
  },
  {
    "url": "img/worldmap-connectivity.png",
    "revision": "487279dfab413e85dd731fcf87b9d28e"
  },
  {
    "url": "img/xbox-update.png",
    "revision": "d9d0dc9ddce3b91597ce72ce028c4e14"
  },
  {
    "url": "index.html",
    "revision": "39bc6e4073338e839e6cc36b12aa6b19"
  },
  {
    "url": "js/notification.js",
    "revision": "569857faada97f138e834f8bf36d4d0e"
  },
  {
    "url": "js/payment.js",
    "revision": "4e965831ba8d5b5d398dc0bb6ae29906"
  },
  {
    "url": "localhost_2018-03-09_14-56-22.report.html",
    "revision": "61cb6d2ff23af3ed84c4d8878152422b"
  },
  {
    "url": "manifest.json",
    "revision": "7dd4fc4f5337e20a430f5280419052b7"
  },
  {
    "url": "README.md",
    "revision": "24aa594eefddf7fc1f5b776d3c5022f5"
  },
  {
    "url": "reveal.js/bower.json",
    "revision": "e49fcc42dba841bfc4bf3e75d01d8a1c"
  },
  {
    "url": "reveal.js/CONTRIBUTING.md",
    "revision": "a73fd345fa0d7f72e7b91c756a548c45"
  },
  {
    "url": "reveal.js/css/print/paper.css",
    "revision": "e0099451ed09800b0fc64e1d797d1813"
  },
  {
    "url": "reveal.js/css/print/pdf.css",
    "revision": "b512476228735191f96708576b98ccfd"
  },
  {
    "url": "reveal.js/css/reveal.css",
    "revision": "16f1e0d27b8b868db463fd83fca7e408"
  },
  {
    "url": "reveal.js/css/reveal.scss",
    "revision": "984385ebd103446d48675869bd6a1e7b"
  },
  {
    "url": "reveal.js/css/theme/beige.css",
    "revision": "d4486bdbc493a0e7cc9d3934e69c3ca8"
  },
  {
    "url": "reveal.js/css/theme/black.css",
    "revision": "2215f0456bdf84c9c21095baef354bc0"
  },
  {
    "url": "reveal.js/css/theme/blood.css",
    "revision": "ab99e388e5c56f0cde4fcebe308b58f5"
  },
  {
    "url": "reveal.js/css/theme/league.css",
    "revision": "11d318c74bd7719a3f9c80b48f59eae8"
  },
  {
    "url": "reveal.js/css/theme/moon.css",
    "revision": "97e9d62d8f9b5a69613538f50a57e222"
  },
  {
    "url": "reveal.js/css/theme/night.css",
    "revision": "f01fff7a3514b5f6381df7e575a06b7b"
  },
  {
    "url": "reveal.js/css/theme/README.md",
    "revision": "4a3f493780c743d31cd06b614f87ab49"
  },
  {
    "url": "reveal.js/css/theme/serif.css",
    "revision": "7f9093806952fc3f7c7735409ebc1e02"
  },
  {
    "url": "reveal.js/css/theme/simple.css",
    "revision": "454eb054a3b42060fb9d48a9d1b41f66"
  },
  {
    "url": "reveal.js/css/theme/sky.css",
    "revision": "4c3004931d338df8b3805932e29886ec"
  },
  {
    "url": "reveal.js/css/theme/solarized.css",
    "revision": "bd2cc590947fde7aadc4eb58cde4ff03"
  },
  {
    "url": "reveal.js/css/theme/source/beige.scss",
    "revision": "a32f9ac5df15dacfd07ece09824cf182"
  },
  {
    "url": "reveal.js/css/theme/source/black.scss",
    "revision": "01c1eb14868db36f169b190e010e59f3"
  },
  {
    "url": "reveal.js/css/theme/source/blood.scss",
    "revision": "c31f122367b0240b2c6b9d78f8f2bc5e"
  },
  {
    "url": "reveal.js/css/theme/source/league.scss",
    "revision": "2a3ebcaf638710cd670472606130c48e"
  },
  {
    "url": "reveal.js/css/theme/source/moon.scss",
    "revision": "9085f162bcfd4b79f6c4c9528b60df36"
  },
  {
    "url": "reveal.js/css/theme/source/night.scss",
    "revision": "d7bba339086d0ba40c46f323bb602395"
  },
  {
    "url": "reveal.js/css/theme/source/serif.scss",
    "revision": "dc93d2af4997cf983cd1bf08e5535ec8"
  },
  {
    "url": "reveal.js/css/theme/source/simple.scss",
    "revision": "6cc6d041272f04e0ef342955e545f0d8"
  },
  {
    "url": "reveal.js/css/theme/source/sky.scss",
    "revision": "1c452acf6dfe32cbcca2431957f57ec6"
  },
  {
    "url": "reveal.js/css/theme/source/solarized.scss",
    "revision": "2a736e600961b165e972dcccd8be6abc"
  },
  {
    "url": "reveal.js/css/theme/source/white.scss",
    "revision": "a63787a137737281efeaf0b7d5bfdf93"
  },
  {
    "url": "reveal.js/css/theme/template/mixins.scss",
    "revision": "c0d5ce12cefe6ceb3691aa8c979d1454"
  },
  {
    "url": "reveal.js/css/theme/template/settings.scss",
    "revision": "067fa9fea81d24eafc365de48dc327c0"
  },
  {
    "url": "reveal.js/css/theme/template/theme.scss",
    "revision": "f5eeb152f269c804cf9bca3d705aec7b"
  },
  {
    "url": "reveal.js/css/theme/white.css",
    "revision": "efa7ad010a441d5836f66e96aa0a90b9"
  },
  {
    "url": "reveal.js/demo.html",
    "revision": "a7ad058744d4c4c91a12aec8308c0ed5"
  },
  {
    "url": "reveal.js/Gruntfile.js",
    "revision": "b091b659b720036e05959abed1b1c454"
  },
  {
    "url": "reveal.js/index.html",
    "revision": "af3dd90ef84f4895f62cfc9c3313e38c"
  },
  {
    "url": "reveal.js/js/reveal.js",
    "revision": "47b54f23f2b915a4fd74d51d5b2d26c0"
  },
  {
    "url": "reveal.js/lib/css/zenburn.css",
    "revision": "28d5b9497037a12cb5a15644fea2f1c3"
  },
  {
    "url": "reveal.js/lib/font/league-gothic/league-gothic.css",
    "revision": "e6633e92d60a05952ee0ac403a364699"
  },
  {
    "url": "reveal.js/lib/font/league-gothic/league-gothic.eot",
    "revision": "9900a4643cc63c5d8f969d2196f72572"
  },
  {
    "url": "reveal.js/lib/font/league-gothic/league-gothic.ttf",
    "revision": "91295fa87df918411b49b7531da5d558"
  },
  {
    "url": "reveal.js/lib/font/league-gothic/league-gothic.woff",
    "revision": "cd382dc8a9d6317864b5810a320effc5"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.eot",
    "revision": "72217712eb8d28872e7069322f3fda23"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.ttf",
    "revision": "8256cfd7e4017a7690814879409212cd"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-italic.woff",
    "revision": "e74f0128884561828ce8c9cf5c284ab8"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.eot",
    "revision": "1d71438462d532b62b05cdd7e6d7197d"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.ttf",
    "revision": "2da39ecf9246383937da11b44b7bd9b4"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-regular.woff",
    "revision": "e7acc589bb558fe58936a853f570193c"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.eot",
    "revision": "0f3da1edf1b5c6a94a6ad948a7664451"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.ttf",
    "revision": "f3565095e6c9158140444970f5a2c5ed"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-semibold.woff",
    "revision": "1cb8e94f1185f1131a0c895165998f2b"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.eot",
    "revision": "58153ac7194e141d1e73ea88c6b63861"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.ttf",
    "revision": "c7e698a4d0956f4a939f42a05685bbf5"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro-semibolditalic.woff",
    "revision": "6b058fc2634b01d837c3432316c3141f"
  },
  {
    "url": "reveal.js/lib/font/source-sans-pro/source-sans-pro.css",
    "revision": "50bd311455fff1130be7d191108d9f27"
  },
  {
    "url": "reveal.js/lib/js/classList.js",
    "revision": "daeaae1afb79c4577c26fc099228cb44"
  },
  {
    "url": "reveal.js/lib/js/head.min.js",
    "revision": "cda51f90890bc6411432994f00ec49c5"
  },
  {
    "url": "reveal.js/lib/js/html5shiv.js",
    "revision": "ff0e20a524223e4c3972e0d907e0877b"
  },
  {
    "url": "reveal.js/package.json",
    "revision": "ca3b9aa352b0b4b0e196bcec12f59767"
  },
  {
    "url": "reveal.js/plugin/highlight/highlight.js",
    "revision": "82155bdb62c21ac2067d17e438e07476"
  },
  {
    "url": "reveal.js/plugin/markdown/example.html",
    "revision": "f8b152d0510b5a1027c013b15c4f8c07"
  },
  {
    "url": "reveal.js/plugin/markdown/example.md",
    "revision": "05b773ba19f19fe85d2b8a0481e1636b"
  },
  {
    "url": "reveal.js/plugin/markdown/markdown.js",
    "revision": "586c0b9c03621d05238c2352be94358d"
  },
  {
    "url": "reveal.js/plugin/markdown/marked.js",
    "revision": "c2a88705e206d71dc21fdc4445349127"
  },
  {
    "url": "reveal.js/plugin/math/math.js",
    "revision": "a389810e5f83473f6d45612404f77118"
  },
  {
    "url": "reveal.js/plugin/multiplex/client.js",
    "revision": "c80cfcc066962bd50dbcf0f0e53d10f0"
  },
  {
    "url": "reveal.js/plugin/multiplex/index.js",
    "revision": "459b7b22a45cdcaa87fc00d4e1d6192f"
  },
  {
    "url": "reveal.js/plugin/multiplex/master.js",
    "revision": "83d61011c2e6f34c526b8529cbfd7572"
  },
  {
    "url": "reveal.js/plugin/multiplex/package.json",
    "revision": "d141d2a7d11fa32c64ffbe4d9909af6d"
  },
  {
    "url": "reveal.js/plugin/notes-server/client.js",
    "revision": "e6c881ce44aa8872b26d1a4fba48b987"
  },
  {
    "url": "reveal.js/plugin/notes-server/index.js",
    "revision": "3c74e5208fdb9f3dc65532921b8cb9e2"
  },
  {
    "url": "reveal.js/plugin/notes-server/notes.html",
    "revision": "2dbd31ff2a8b3f64d757d9b3482b13d4"
  },
  {
    "url": "reveal.js/plugin/notes/notes.html",
    "revision": "c21242f487436a1b486ebcc0b6c857b6"
  },
  {
    "url": "reveal.js/plugin/notes/notes.js",
    "revision": "1d0e8037a6f049f48bacf9eba2c82e20"
  },
  {
    "url": "reveal.js/plugin/print-pdf/print-pdf.js",
    "revision": "5240a61efa87e3ae66fb8c8d0fe1d1f0"
  },
  {
    "url": "reveal.js/plugin/search/search.js",
    "revision": "7022c7fbd53a27d38923b169a8981407"
  },
  {
    "url": "reveal.js/plugin/zoom-js/zoom.js",
    "revision": "8184a86abc89f1ddabc40ed44978ff2a"
  },
  {
    "url": "reveal.js/README.md",
    "revision": "29c0196e5c65012323ebbdfcbb5e831e"
  },
  {
    "url": "reveal.js/test/examples/assets/image1.png",
    "revision": "15b6c4165b7276f055414e82d1c0cd43"
  },
  {
    "url": "reveal.js/test/examples/assets/image2.png",
    "revision": "2e7b118b2d6804aff4e3f6331af4bd78"
  },
  {
    "url": "reveal.js/test/examples/barebones.html",
    "revision": "c921a08ada1b44b97bead2385f384915"
  },
  {
    "url": "reveal.js/test/examples/embedded-media.html",
    "revision": "ffc37743725ffe2dbf6be6a4d3b8cb1e"
  },
  {
    "url": "reveal.js/test/examples/math.html",
    "revision": "9c488e022061a6168ac4d7beb97ac4cb"
  },
  {
    "url": "reveal.js/test/examples/slide-backgrounds.html",
    "revision": "47f5e536cbf92763737079d54c797500"
  },
  {
    "url": "reveal.js/test/examples/slide-transitions.html",
    "revision": "e55b07b1d8fbdc17f30ff2d885ddf590"
  },
  {
    "url": "reveal.js/test/qunit-1.12.0.css",
    "revision": "7209d607e23e1950f6a343ec17cdfab3"
  },
  {
    "url": "reveal.js/test/qunit-1.12.0.js",
    "revision": "4ce92080c78ec5ae603c7065a94132b3"
  },
  {
    "url": "reveal.js/test/simple.md",
    "revision": "3035e048deeec9e3577e63a9e3ff6fac"
  },
  {
    "url": "reveal.js/test/test-markdown-element-attributes.html",
    "revision": "b9536819a68b8da17159672afca23924"
  },
  {
    "url": "reveal.js/test/test-markdown-element-attributes.js",
    "revision": "17bb571afda11a0cc2e21f15c0c75431"
  },
  {
    "url": "reveal.js/test/test-markdown-external.html",
    "revision": "e8f18941a27766ff26b4a2bf265b19c3"
  },
  {
    "url": "reveal.js/test/test-markdown-external.js",
    "revision": "0e36b6e0336941ea349128c93b153c9f"
  },
  {
    "url": "reveal.js/test/test-markdown-options.html",
    "revision": "949e45c717ba678a110a287f68879096"
  },
  {
    "url": "reveal.js/test/test-markdown-options.js",
    "revision": "781c46d98bb12b1a2da593ba9f70288c"
  },
  {
    "url": "reveal.js/test/test-markdown-slide-attributes.html",
    "revision": "7162db741cad843812b82c79f2f4fa27"
  },
  {
    "url": "reveal.js/test/test-markdown-slide-attributes.js",
    "revision": "0ac7b1b36fcf31b21bb585c719f6b3a6"
  },
  {
    "url": "reveal.js/test/test-markdown.html",
    "revision": "9ad045a72b99b558cdd4eb9517e14c69"
  },
  {
    "url": "reveal.js/test/test-markdown.js",
    "revision": "a6234924cb5cbf74dd2d6b38ffc19666"
  },
  {
    "url": "reveal.js/test/test-pdf.html",
    "revision": "cd7031f034786086e49fb712777971ef"
  },
  {
    "url": "reveal.js/test/test-pdf.js",
    "revision": "fa1269a8ba3d70f75a6c6cc147fdc481"
  },
  {
    "url": "reveal.js/test/test.html",
    "revision": "1fc99b82085c54d3e678b9e9801a152f"
  },
  {
    "url": "reveal.js/test/test.js",
    "revision": "f311c8540bb1687f2c293d76be9d2538"
  },
  {
    "url": "workbox-config.js",
    "revision": "58b630d662e58c2c20a0277c6077c24a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/www.google-analytics.com\/analytics.js /, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
