import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", textColor = "white", size = "md" }) => {
  const isDark = textColor === 'white';

  // Size variants
  const sizes = {
    sm: { circle: 40, text: '20px', icon: 16 },
    md: { circle: 56, text: '28px', icon: 24 },
    lg: { circle: 72, text: '36px', icon: 32 }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <Link
      to="/"
      className={`flex items-center gap-3 ${className} cursor-pointer transition-opacity hover:opacity-80`}
      aria-label="Ga naar home pagina"
    >
      {/* Play button icon in black circle */}
      <div
        className="rounded-full bg-black flex items-center justify-center"
        style={{
          width: `${currentSize.circle}px`,
          height: `${currentSize.circle}px`,
          flexShrink: 0
        }}
      >
        {/* Orange play triangle */}
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginLeft: '2px' }}
        >
          <path
            d="M8 5v14l11-7L8 5z"
            fill="#FF6B2C"
          />
        </svg>
      </div>

      {/* streamholland text (all one weight, all lowercase) */}
      <span
        className={isDark ? 'text-white' : 'text-black'}
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: currentSize.text,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1
        }}
      >
        streamholland
      </span>
    </Link>
  );
};

export default Logo;
