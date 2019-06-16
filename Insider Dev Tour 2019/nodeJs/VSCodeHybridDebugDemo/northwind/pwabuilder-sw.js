// This is the "Offline page" service worker

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Cached offline page during install");

      if (offlineFallbackPage === "ToDo-replace-this-name.html") {
        return cache.add(new Response("TODO: Update the value of the offlineFallbackPage constant in the serviceworker."));
      }

      return cache.add(offlineFallbackPage);
    })
  );
});

// If any fetch fails, it will show the offline page.
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(function (error) {
      // The following validates that the request was for a navigation to a new document
      if (
        event.request.destination !== "document" ||
        event.request.mode !== "navigate"
      ) {
        return;
      }

      console.error("[PWA Builder] Network request Failed. Serving offline page " + error);
      return caches.open(CACHE).then(function (cache) {
        return cache.match(offlineFallbackPage);
      });
    })
  );
});

// This is an event that can be fired from your page to tell the SW to update the offline page
self.addEventListener("refreshOffline", function () {
  const offlinePageRequest = new Request(offlineFallbackPage);

  return fetch(offlineFallbackPage).then(function (response) {
    return caches.open(CACHE).then(function (cache) {
      console.log("[PWA Builder] Offline page updated from refreshOffline event: " + response.url);
      return cache.put(offlinePageRequest, response);
    });
  });
});

function handlePushEvent(event) {
  const DEFAULT_TAG = 'Northwind Chat App';
  return Promise.resolve()
    .then(() => {
      return event.data.json();
    })
    .then((data) => {
      const title = data.notification.title;
      const options = data.notification;
      if (!options.tag) {
        options.tag = DEFAULT_TAG;
      }
      return registration.showNotification(title, options);
    })
    .catch((err) => {
      console.error('Push event caused an error: ', err);

      const title = 'Message Received';
      const options = {
        body: event.data.text(),
        tag: DEFAULT_TAG
      };
      return registration.showNotification(title, options);
    });
}


//this is where we attach to the push event from the server
self.addEventListener('push', function (event) {
  event.waitUntil(handlePushEvent(event));
});

//Respond to the user clicking the toast notification
self.addEventListener('notificationclick', function (event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  const urlToOpen = new URL('/chat', self.location.origin).href;
  console.log(urlToOpen);

  // This looks to see if the current is already open and focuses it
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function (clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      console.log('client.url:' + client.url);

      if (client.url === urlToOpen && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/chat');
  }));
});
