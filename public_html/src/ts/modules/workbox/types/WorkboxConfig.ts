import { RuntimeCacheRule } from "./RuntimeCacheRule";

export interface WorkboxConfig {
    swDest: string;
    clientsClaim: boolean;
    skipWaiting: boolean;
    runtimeCaching: RuntimeCacheRule[];
    navigateFallback?: string;
    navigateFallbackAllowlist?: RegExp[];
    additionalManifestEntries?: Array<{url: string, revision: string}>;
    sourcemap?: boolean;
    mode?: 'production' | 'development';
}