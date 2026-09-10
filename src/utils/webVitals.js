import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

/**
 * Web Vitals Performance Monitoring
 *
 * Tracks Core Web Vitals:
 * - LCP (Largest Contentful Paint) - Loading performance
 * - INP (Interaction to Next Paint) - Responsiveness (replaces FID)
 * - CLS (Cumulative Layout Shift) - Visual stability
 * - FCP (First Contentful Paint) - Perceived load speed
 * - TTFB (Time to First Byte) - Server response time
 */

// Send metrics to analytics endpoint
const sendToAnalytics = (metric) => {
  const body = JSON.stringify(metric);

  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value.toFixed(2), getThreshold(metric));
  }

  // Send to analytics in production
  if (import.meta.env.PROD) {
    // TODO: Send to Google Analytics or custom endpoint
    // Example with Google Analytics:
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //     event_category: 'Web Vitals',
    //     event_label: metric.id,
    //     non_interaction: true,
    //   });
    // }

    // Example with custom endpoint:
    // navigator.sendBeacon('/api/analytics', body);
  }
};

// Get performance threshold (good/needs improvement/poor)
const getThreshold = (metric) => {
  const thresholds = {
    LCP: { good: 2500, poor: 4000 },
    CLS: { good: 0.1, poor: 0.25 },
    FCP: { good: 1800, poor: 3000 },
    TTFB: { good: 800, poor: 1800 },
    INP: { good: 200, poor: 500 }
  };

  const threshold = thresholds[metric.name];
  if (!threshold) return 'unknown';

  if (metric.value <= threshold.good) return '✅ Good';
  if (metric.value <= threshold.poor) return '⚠️ Needs Improvement';
  return '❌ Poor';
};

// Initialize Web Vitals tracking
export const initWebVitals = () => {
  // Track all Core Web Vitals
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
  onINP(sendToAnalytics);

  // Log initialization
  if (import.meta.env.DEV) {
    console.log('📊 Web Vitals monitoring initialized');
  }
};

// Export for manual usage
export { onCLS, onFCP, onLCP, onTTFB, onINP };
