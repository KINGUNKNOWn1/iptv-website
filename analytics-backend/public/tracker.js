(function() {
  'use strict';

  const ANALYTICS_URL = 'http://localhost:3002';

  // Get or create visitor ID
  function getVisitorId() {
    let visitorId = localStorage.getItem('analytics_visitor_id');
    if (!visitorId) {
      visitorId = 'v_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      localStorage.setItem('analytics_visitor_id', visitorId);
    }
    return visitorId;
  }

  // Track page view
  function trackPageView() {
    const data = {
      visitorId: getVisitorId(),
      pageUrl: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      country: null // Can be detected server-side by IP
    };

    fetch(`${ANALYTICS_URL}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(err => console.error('Analytics tracking failed:', err));
  }

  // Track custom event
  function trackEvent(eventName, eventData = {}) {
    const data = {
      visitorId: getVisitorId(),
      eventName,
      eventData
    };

    fetch(`${ANALYTICS_URL}/api/event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).catch(err => console.error('Event tracking failed:', err));
  }

  // Track page view on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackPageView);
  } else {
    trackPageView();
  }

  // Track button clicks
  document.addEventListener('click', function(e) {
    const button = e.target.closest('button, a');
    if (button) {
      const buttonText = button.textContent.trim() || button.getAttribute('aria-label') || 'Unknown';
      trackEvent('button_click', {
        text: buttonText,
        href: button.getAttribute('href') || null
      });
    }
  });

  // Track form submissions
  document.addEventListener('submit', function(e) {
    const form = e.target;
    if (form.tagName === 'FORM') {
      trackEvent('form_submit', {
        action: form.getAttribute('action') || 'Unknown'
      });
    }
  });

  // Expose tracking function globally
  window.trackAnalytics = trackEvent;
})();
