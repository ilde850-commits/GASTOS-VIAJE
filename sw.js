self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("gastos-cache").then(cache=>{
      return cache.addAll(["Gastos3.html"]);
    })
  );
});