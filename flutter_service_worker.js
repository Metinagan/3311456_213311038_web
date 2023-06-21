'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a5cc31dbdd15205e9d1e117bdc71b3c2",
"assets/AssetManifest.json": "101a58a7e9e970d09fbc4f9985ef8068",
"assets/assets/images/back.jpg": "b35922ec762d709fa0a284fc6c45b053",
"assets/assets/images/back1.jpg": "83689bdef57067b6e5982cfa0d189dca",
"assets/assets/images/bot/1.jpg": "eb261c54662bba636e54c7b75c62ef64",
"assets/assets/images/bot/2.jpg": "f89b7d6991b4bf585944a03037cbe358",
"assets/assets/images/bot/3.jpg": "400dafd9678067c9c30751838756372d",
"assets/assets/images/bot/4.jpg": "02dfb934e15620750559f020bf43d70d",
"assets/assets/images/cloud.jpg": "6631339b3cfc2ab2582cf5024a9ee445",
"assets/assets/images/jean/1.jpg": "834d2f1e018ed570db9dd1668f51792d",
"assets/assets/images/jean/2.jpg": "674528bc2cb2ce9718df48e8f9ff65bc",
"assets/assets/images/jean/3.jpg": "728a70c97f70fea56cfa5a9e1415639f",
"assets/assets/images/jean/4.jpg": "d77a6e2b58219244e352a3d547226747",
"assets/assets/images/jean/5.jpg": "100c8b896e389367141839fdff415435",
"assets/assets/images/jean/6.jpg": "a9e82aa25364f1a67acbb832d3adaef7",
"assets/assets/images/jean/bigjean.jpg": "5d751432ce5e941c683925a282ded9d3",
"assets/assets/images/jean/bigjean1.jpg": "c2385a69edde6b169993b8f4d089260d",
"assets/assets/images/jean/bigjean2.jpg": "621d671d270a1d73f5668bf4df7005e4",
"assets/assets/images/jean/bigjean3.jpg": "5e73d330c61e574f574507ff0f564ee3",
"assets/assets/images/jean/bigjean4.jpg": "5dea28be7ae22d69deeef2d3f576e20c",
"assets/assets/images/jean/bigjean5.jpg": "52d63acee70c96ed8aa0673cfd070c6f",
"assets/assets/images/jean/jean.jpg": "cf52d0ea32de1b0206a011ebe0757b9b",
"assets/assets/images/monitor.jpg": "eabc149ce735548c33b753a323ab1920",
"assets/assets/images/monitors/1.jpg": "ed14d015806637e13b07f669bee56452",
"assets/assets/images/monitors/2.jpg": "86642f4b63756db56f2b334d09696de6",
"assets/assets/images/monitors/3.jpg": "ad118ac445bba69594745cc8a4e8957e",
"assets/assets/images/monitors/4.jpg": "cf1b43f9607784d678bd592a092a212a",
"assets/assets/images/monitors/5.jpg": "644835edef4429e01fd0bdfe6aaab232",
"assets/assets/images/monitors/r1.png": "37b40512a2583be11fb9226615c72912",
"assets/assets/images/monitors/r1big.png": "7406ae1314d25911fae63b9fe8bc931c",
"assets/assets/images/monitors/r2.png": "d450d78ff983b0b6992f395a27c750f4",
"assets/assets/images/monitors/r3.png": "a18a9d3e8f76b3e116b39d35bd698c63",
"assets/assets/images/monitors/r4.png": "8fe2c21f6ad7a5cd2ce1a89d85fa13d8",
"assets/assets/images/night.jpg": "40cb127ae211fa05026d89f462e0d1d4",
"assets/assets/images/palto/1.jpeg": "e7dbbd0decf1f33f3523b0bfde15febd",
"assets/assets/images/palto/2.jpeg": "77e17d01f89fce8cd6ad6678849bedf3",
"assets/assets/images/palto/3.jpeg": "3c939cc811e9dedacc2c23276be27432",
"assets/assets/images/palto/4.jpeg": "45b95b7fd7ebb78153182e6cc503a43b",
"assets/assets/images/palto/5.jpeg": "88c72352ba564eb220ecf46e96588aa1",
"assets/assets/images/phone/1.png": "d433f0142aa1d85a0af3a84ee2b6bbb6",
"assets/assets/images/phone/2.png": "ad1570fa5b2389300524a43fc1b5d2ac",
"assets/assets/images/phone/3.png": "fbdeb7fdebf7e11ea0714fdbfc269f42",
"assets/assets/images/phone/4.png": "7eb5aa6d63b10da329673b8a40cd0785",
"assets/assets/images/phone/r1.png": "37cec38e2c9316c6eb5631f3e0de4def",
"assets/assets/images/phone/r2.png": "06441d0f82e8cc405566e96f1d05285f",
"assets/assets/images/phone/r3.png": "9fd1db8b1195e066a9991301d29e68bd",
"assets/assets/images/phone/r4.png": "bdcab0078b1049c61a84a3c78bd8efcf",
"assets/assets/images/phone/r5.png": "ca026a6011c17d9fe7ef1e316d919af5",
"assets/assets/images/phone/r6.png": "53f6f70a4aeaad0502a85658e64fbfa0",
"assets/assets/images/phone/r7.png": "ec4fe2653e0ddadfff87af0d8849bc7a",
"assets/assets/images/phone/r8.png": "bbbde370d2283c82696222222fc35bbb",
"assets/assets/images/phone/r9.png": "1fcc92e43dd7e26ee3a5c327bf442063",
"assets/assets/images/rainy.jpg": "1460448b5b8937b5b5d808bb80909fac",
"assets/assets/images/smartphone.jpg": "84cded48688c5a24ba9fb768f5c8c7a0",
"assets/assets/images/snowy.jpg": "7dbc888cc692e9ff62065cbfcd1a142d",
"assets/assets/images/speaker.png": "0b5eb210141696e90a4dc1a66047b273",
"assets/assets/images/sunny.jpg": "74c93dcdb854ade0d5b99917445087b2",
"assets/assets/images/sweat/1.jpg": "7110835e042a4a64d1f8ff4338e31130",
"assets/assets/images/sweat/2.jpg": "4b75babf53719dda93c427ac2d2e71e1",
"assets/assets/images/sweat/3.jpg": "6340b9c93520288e59f77897d6a9adaf",
"assets/assets/images/sweat/3_org_zoom.webp": "b4dfe36dc8b65791984c8bade36d0cba",
"assets/assets/images/sweat/4.jpg": "fd9d0eeeaa325296366f315644aaaa4c",
"assets/assets/images/sweat/5.jpg": "03ff2994186d7080018ffda30327ebbe",
"assets/assets/images/sweat/6.jpg": "0e5d45f454ef30a8a6cf317997c599d8",
"assets/assets/images/sweat/bigsweat.jpg": "dba954afb4714e93d2204574e87f0272",
"assets/assets/images/sweat/sweat.jpg": "bc9e9014845c95bf06a0d977dc944889",
"assets/assets/images/weather/bululu.jpeg": "efddc0015759e04c94043fd453b8b230",
"assets/assets/images/weather/gece.jpg": "daea29062b6d865c068534b9e4387f76",
"assets/assets/images/weather/gece2.jpg": "b0cce3a90489f3a631aa2671950ee149",
"assets/assets/images/weather/kar.jpg": "03a827efd82cfc713b4747654c9a8c90",
"assets/assets/images/weather/yagmur.jpg": "8227f75eb07002bf8d21578fd381da74",
"assets/assets/images/weicon.png": "ddb56102c04b1ff3507795555c640c7e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7d353994d91aa5c4371fc8777620601a",
"assets/NOTICES": "4543623fef0df44a4a685c2e82a026aa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddf4bf57d9f13f22e3e9046580a290e7",
"/": "ddf4bf57d9f13f22e3e9046580a290e7",
"main.dart.js": "6f998f14c320838d6c98eff099565348",
"manifest.json": "b8bee282383e1841f4cbf64c15d80137",
"version.json": "cce54873d2640905251c7ffe5731d727"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
