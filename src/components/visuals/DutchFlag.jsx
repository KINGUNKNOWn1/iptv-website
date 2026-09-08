import React from 'react';

const DutchFlag = ({ className = "", animate = false }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#flagShadow)">
        {/* Flag Background */}
        <rect width="300" height="200" rx="12" fill="white"/>

        {/* Red Stripe */}
        <rect width="300" height="66.67" rx="12" fill="#AE2024">
          {animate && (
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
          )}
        </rect>

        {/* White Stripe */}
        <rect y="66.67" width="300" height="66.67" fill="#FFFFFF"/>

        {/* Blue Stripe */}
        <rect y="133.34" width="300" height="66.66" rx="12" fill="#0066CC">
          {animate && (
            <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1.5s"/>
          )}
        </rect>

        {/* Optional Orange Accent (House of Orange) */}
        <circle cx="150" cy="100" r="40" fill="#FF6B35" opacity="0.15"/>
      </g>

      <defs>
        <filter id="flagShadow">
          <feDropShadow dx="0" dy="2" stdDeviation="8" floodOpacity="0.2"/>
        </filter>
      </defs>
    </svg>
  );
};

export default DutchFlag;
