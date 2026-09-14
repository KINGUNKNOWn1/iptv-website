import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { initWebVitals } from './utils/webVitals';
import './utils/exportLeads'; // Make lead export functions available in console

// After a new deploy, old chunk URLs disappear; reload instead of showing a blank page
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  window.location.reload();
});

// Initialize Web Vitals monitoring
initWebVitals();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
