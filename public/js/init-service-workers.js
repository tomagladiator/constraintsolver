// Check for browser support of service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/OneSignalSDKWorker.js')
    .then(() => {
      // Successful registration
    }).catch(() => {
      // Failed registration, service worker won’t be installed
      console.log('Whoops. Service worker registration failed, error:')
    })
}
