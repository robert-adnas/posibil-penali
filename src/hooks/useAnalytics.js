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
