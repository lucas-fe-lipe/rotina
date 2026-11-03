// Arquivo Service Worker - sw.js
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
  let dados = { title: 'Notificação', body: 'Você tem um lembrete na sua rotina.' };
  if (event.data) {
    try {
      dados = event.data.json();
    } catch (e) {
      dados.body = event.data.text();
    }
  }
  event.waitUntil(
    self.registration.showNotification(dados.title, {
      body: dados.body,
      icon: 'icon.png'
    })
  );
});
