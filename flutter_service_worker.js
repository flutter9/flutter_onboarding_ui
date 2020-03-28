'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/onboarding1.png": "bbb74d46c7879bd14c809cb917ddb08e",
"/assets/assets/images/onboarding2.png": "b2428bfb68d5a758e950c3d8c975739a",
"/assets/assets/images/onboarding0.png": "2df33040c11b48d80e0a8b91716c3f1a",
"/assets/assets/fonts/cm_sans_serif_2012.ttf": "b2c533d45ade59514b04062247d96aaa",
"/assets/FontManifest.json": "3f6496ecb020dcd553e5a5f2f8f63b3a",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "e774435925ced60185b1d2767e96bb80",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "a545ad62109a9fcb484ec08011dad03b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
