const path = require('path');

module.exports = {
    swDest: path.resolve(__dirname, './public_html/service-worker.js'),
    clientsClaim: true,
    skipWaiting: true,
    
    runtimeCaching: 
    [
        {
            urlPattern: /\.(?:js|css|html|json)$/,
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'static-resources',
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day 
                },
            },
        },
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
                cacheName: 'images',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day 
                },
            },
        },
        {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
                cacheName: 'pages',
                networkTimeoutSeconds: 3,
                expiration: {
                    maxEntries: 20,
                    maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
                },
            },
        }
    ],

    navigateFallback: '/',
    navigateFallbackAllowlist: [/^\/$/],
    additionalManifestEntries: [
        { url: '/', revision: '1.0.0' },
    ],

    sourcemap: false,
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}