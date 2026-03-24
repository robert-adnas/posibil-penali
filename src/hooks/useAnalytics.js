/**
 * Thin wrapper around GoatCounter Analytics.
 *
 * GoatCounter is loaded via a <script> tag in index.html.
 * It automatically tracks page views on every route change (History API).
 * Use `track()` for custom events.
 *
 * Setup:
 *  1. Sign up (free) at https://www.goatcounter.com
 *  2. Create a site and note your site code
 *  3. Replace YOUR_CODE in index.html with your actual site code
 */
export function useAnalytics() {
  function track(eventName, props) {
    if (typeof window === 'undefined' || typeof window.goatcounter?.count !== 'function') return;
    const title = props
      ? `${eventName}: ${Object.values(props).join(' / ')}`
      : eventName;
    window.goatcounter.count({ path: eventName, title, event: true });
  }

  return { track };
}
