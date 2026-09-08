import React from 'react';

const PhoneMockup = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 300 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Phone Frame */}
      <g filter="url(#phoneShadow)">
        <rect x="20" y="20" width="260" height="560" rx="30" fill="#1e293b"/>
        <rect x="30" y="30" width="240" height="540" rx="25" fill="#000000"/>

        {/* Notch */}
        <rect x="100" y="30" width="100" height="25" rx="12" fill="#1e293b"/>

        {/* Screen Content */}
        <g clipPath="url(#phoneClip)">
          {/* Background */}
          <rect x="30" y="55" width="240" height="515" fill="url(#phoneGradient)"/>

          {/* Header Bar - Dutch Colors */}
          <rect x="30" y="55" width="240" height="60" fill="#FF6B35"/>
          <text x="150" y="90" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle">Holland IPTV</text>

          {/* Video Player */}
          <rect x="45" y="135" width="210" height="140" rx="12" fill="#000000"/>
          <rect x="45" y="135" width="210" height="140" rx="12" fill="url(#videoGradient)" opacity="0.3"/>

          {/* Play Button */}
          <circle cx="150" cy="205" r="30" fill="#FF6B35" opacity="0.9"/>
          <polygon points="145,195 145,215 165,205" fill="white"/>

          {/* Channel List */}
          <g transform="translate(45, 295)">
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(0, ${i * 60})`}>
                <rect width="210" height="50" rx="8" fill="#1e293b" opacity="0.5"/>
                <rect x="10" y="10" width="40" height="30" rx="4" fill={i % 2 === 0 ? "#FF6B35" : "#0066CC"}/>
                <text x="60" y="25" fill="white" fontSize="14" fontWeight="500">
                  {i === 0 ? "NPO 1" : i === 1 ? "RTL 4" : i === 2 ? "SBS 6" : "SPORT"}
                </text>
                <text x="60" y="40" fill="#94a3b8" fontSize="10">HD • Live</text>
              </g>
            ))}
          </g>
        </g>
      </g>

      {/* Definitions */}
      <defs>
        <filter id="phoneShadow">
          <feDropShadow dx="0" dy="5" stdDeviation="15" floodOpacity="0.3"/>
        </filter>

        <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a"/>
          <stop offset="100%" stopColor="#1e293b"/>
        </linearGradient>

        <linearGradient id="videoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35"/>
          <stop offset="100%" stopColor="#0066CC"/>
        </linearGradient>

        <clipPath id="phoneClip">
          <rect x="30" y="55" width="240" height="515" rx="20"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneMockup;
