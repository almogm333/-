self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lock-game-cache").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./lock-icon-192.png",
        "./lock-icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
