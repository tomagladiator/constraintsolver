(function () {
    // Check for browser support of service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/OneSignalSDKWorker.js')
        .then(function (registration) {
            // Successful registration
        }).catch(function (err) {
            // Failed registration, service worker won’t be installed
            console.log('Whoops. Service worker registration failed, error:', error);
        });
    }
})();
