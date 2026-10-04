const CACHE="cm-offline-v1";
const ASSETS=[
"./","./index.html","./manifest.json","./src/app.js","./src/styles.css",
"./assets/icons/cm.svg","./assets/sounds/good.wav","./assets/sounds/bad.wav",
"./assets/sounds/transfer.wav","./assets/sounds/injury.wav","./assets/sounds/legend.wav",
"./data/memes.json","./data/academies.json"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{
  const copy=x.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return x;
}).catch(()=>caches.match("./index.html")))));