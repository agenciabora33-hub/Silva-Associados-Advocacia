declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Capture UTM and Ad Click parameters from current URL
 */
export function getTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const tracking: Record<string, string> = {};

  const keys = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',      // Google Ads Click ID
    'fbclid',     // Meta Ads Click ID
    'gad_source'  // Google Ads source tag
  ];

  keys.forEach((key) => {
    const val = params.get(key);
    if (val) tracking[key] = val;
  });

  return tracking;
}

/**
 * Fires Meta Ads (Facebook/Instagram) and Google Ads conversion events safely
 */
export function trackAdConversion(
  eventName: 'Lead' | 'Contact' | 'Schedule' | 'InitiateTriage' | 'ViewContent',
  details?: Record<string, any>
): void {
  try {
    const tracking = getTrackingParams();
    const payload = { ...details, ...tracking, timestamp: new Date().toISOString() };

    // Meta Pixel (fbq)
    if (typeof window.fbq === 'function') {
      window.fbq('track', eventName, payload);
    }

    // Google Tag / Ads (gtag)
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        event_category: 'Engajamento Jurídico',
        event_label: details?.label || eventName,
        ...payload
      });
    }

    // Custom dataLayer event for Google Tag Manager (GTM)
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: `adv_${eventName.toLowerCase()}`,
        ...payload
      });
    }
  } catch {
    // Fail silently without disrupting user experience
  }
}
