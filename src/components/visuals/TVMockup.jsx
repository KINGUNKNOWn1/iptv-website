import React from 'react';

const TVMockup = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TV Frame */}
      <g filter="url(#shadow)">
        <rect x="20" y="20" width="760" height="430" rx="20" fill="#1e293b"/>
        <rect x="35" y="35" width="730" height="400" rx="8" fill="#000000"/>

        {/* Screen Content - IPTV Interface */}
        <g clipPath="url(#screenClip)">
          {/* Background Gradient */}
          <rect x="35" y="35" width="730" height="400" fill="url(#screenGradient)"/>

          {/* Dutch Flag Accent */}
          <rect x="35" y="35" width="10" height="400" fill="#AE2024"/>
          <rect x="45" y="35" width="10" height="400" fill="#FFFFFF"/>
          <rect x="55" y="35" width="10" height="400" fill="#0066CC"/>

          {/* Channel Grid */}
          <g transform="translate(100, 80)">
            {/* Channel 1 */}
            <rect width="150" height="100" rx="8" fill="#FF6B35" opacity="0.9"/>
            <text x="75" y="55" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">NPO 1</text>

            {/* Channel 2 */}
            <rect x="170" width="150" height="100" rx="8" fill="#0066CC" opacity="0.9"/>
            <text x="245" y="55" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">RTL 4</text>

            {/* Channel 3 */}
            <rect x="340" width="150" height="100" rx="8" fill="#FF6B35" opacity="0.9"/>
            <text x="415" y="55" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">SBS 6</text>

            {/* Channel 4 */}
            <rect x="510" width="150" height="100" rx="8" fill="#0066CC" opacity="0.9"/>
            <text x="585" y="55" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">SPORT</text>
          </g>

          {/* Live Badge */}
          <g transform="translate(100, 220)">
            <rect width="80" height="30" rx="15" fill="#dc2626"/>
            <circle cx="20" cy="15" r="5" fill="white" opacity="0.9">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <text x="45" y="20" fill="white" fontSize="14" fontWeight="bold">LIVE</text>
          </g>

          {/* Info Bar */}
          <rect x="100" y="370" width="600" height="50" rx="8" fill="#1e293b" opacity="0.8"/>
          <text x="120" y="398" fill="white" fontSize="16" fontWeight="600">Holland IPTV</text>
          <text x="120" y="415" fill="#94a3b8" fontSize="12">30.500+ Kanalen • HD Kwaliteit</text>
        </g>
      </g>

      {/* TV Stand */}
      <rect x="350" y="460" width="100" height="20" rx="10" fill="#475569"/>
      <rect x="330" y="480" width="140" height="15" rx="7" fill="#64748b"/>

      {/* Definitions */}
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.3"/>
        </filter>

        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="100%" stopColor="#1e293b"/>
        </linearGradient>

        <clipPath id="screenClip">
          <rect x="35" y="35" width="730" height="400" rx="8"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default TVMockup;
