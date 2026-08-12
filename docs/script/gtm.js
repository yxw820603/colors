/**
 * Local Google Tag Manager (GTM) stub.
 *
 * The original remote container at
 *   https://www.googletagmanager.com/gtm.js?id=GTM-PHKMP9R
 * is no longer available (HTTP 404), so the container script is self-hosted
 * here as a no-op replacement. The page's inline snippet already sets up
 * `window.dataLayer` and pushes the initial `gtm.start` event; this file
 * simply ensures the `<script src="...gtm.js">` request resolves locally
 * instead of hitting a broken remote URL, and keeps `dataLayer.push()`
 * working safely for any code that still calls it. No external requests
 * are made.
 */
(function (window) {
  'use strict';

  // Ensure dataLayer exists so any later dataLayer.push() calls are safe.
  window.dataLayer = window.dataLayer || [];

  // Minimal gtag() shim so direct gtag() calls do not throw.
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
})(typeof window !== 'undefined' ? window : this);
