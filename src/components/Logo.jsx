import React from 'react';

const Logo = ({ className = "", textColor = "white" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* RSS/Broadcast Icon */}
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orange rounded square background */}
          <rect width="48" height="48" rx="10" fill="#FF6B35"/>

          {/* RSS/Broadcast waves */}
          <g fill="white">
            {/* Small dot */}
            <circle cx="14" cy="34" r="3"/>

            {/* First arc */}
            <path d="M14 26C18.418 26 22 29.582 22 34" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>

            {/* Second arc */}
            <path d="M14 18C22.837 18 30 25.163 30 34" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>

            {/* Third arc */}
            <path d="M14 10C27.255 10 38 20.745 38 34" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </g>
        </svg>
      </div>

      {/* Text */}
      <div className="flex items-baseline gap-0">
        <span className={`font-bold text-3xl ${textColor === 'white' ? 'text-white' : 'text-gray-900'}`}>
          iptv
        </span>
        <span className="font-bold text-3xl text-primary-600">
          4K
        </span>
      </div>
    </div>
  );
};

export default Logo;
