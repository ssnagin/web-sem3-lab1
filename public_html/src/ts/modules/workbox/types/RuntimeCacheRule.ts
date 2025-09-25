export interface RuntimeCacheRule {
    urlPattern: RegExp | ((options: {url: URL, request: Request}) => boolean);
    handler: 'StaleWhileRevalidate' | 'CacheFirst' | 'NetworkFirst' | 'NetworkOnly';
    options?: {
        cacheName: string;
        expiration?: {
            maxEntries: number;
            maxAgeSeconds: number;
        };
        networkTimeoutSeconds?: number;
        cacheableResponse?: {
            statuses: number[];
        };
    };
}