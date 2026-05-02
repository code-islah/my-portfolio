const getNavigatorMeta = () => ({
  language: navigator.language || "unknown",
  viewport: `${window.innerWidth}x${window.innerHeight}`,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown"
});

const postAnalyticsEvent = async (baseUrl, payload) => {
  try {
    await fetch(`${baseUrl}/api/analytics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      keepalive: true,
      body: JSON.stringify({
        ...payload,
        path: window.location.pathname,
        meta: {
          ...payload.meta,
          ...getNavigatorMeta()
        }
      })
    });
  } catch (error) {
    console.warn("Analytics request failed:", error);
  }
};

export { postAnalyticsEvent };

