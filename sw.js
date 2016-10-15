self.addEventListener('install', e => {
	e.waitUntil(
		caches.open('GRE').then(cache => {
			return cache.addAll([
				'./',
				'./index.html',
				'./css/style.css',
				'./js/words.js',
				'./js/script.js',
				'./assets/arrow.png',
				'./assets/paper2.png',
				'./assets/paper.png',
				])
			.then(() => self.skipWaiting());
		})
		)
});

self.addEventListener('activate',  event => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		})
		);
});