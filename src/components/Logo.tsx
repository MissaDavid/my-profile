import React from 'react';

export interface LogoProps {
  size?: number;
  variant?: 'original' | 'inverted' | 'rust-accent' | 'full-rust' | 'brass' | 'two-tone';
  className?: string;
  ariaLabel?: string;
}

export default function Logo({
  size = 40,
  variant = 'original',
  className = '',
  ariaLabel = "Mel's maker mark",
}: LogoProps) {
  // Color definitions based on workshop design system
  const colors = {
    original: {
      body: '#2a2622',
      bodyStroke: '#2a2622',
      wings: '#2a2622',
    },
    inverted: {
      body: '#faf8f5',
      bodyStroke: '#faf8f5',
      wings: '#faf8f5',
    },
    'rust-accent': {
      body: '#8b4a3c',
      bodyStroke: '#8b4a3c',
      wings: '#2a2622',
    },
    'full-rust': {
      body: '#8b4a3c',
      bodyStroke: '#8b4a3c',
      wings: '#8b4a3c',
    },
    brass: {
      body: '#c4a572',
      bodyStroke: '#c4a572',
      wings: '#c4a572',
    },
    'two-tone': {
      body: '#2a2622',
      bodyStroke: '#2a2622',
      wings: '#8b4a3c',
    },
  };

  const selectedColors = colors[variant];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={ariaLabel}
      role="img"
    >
      {/* Center hexagon (body) - filled */}
      <polygon
        points="100,60 130,77.5 130,112.5 100,130 70,112.5 70,77.5"
        fill={selectedColors.body}
        stroke={selectedColors.bodyStroke}
        strokeWidth="2.5"
      />
      {/* Left hexagon (wing) - outlined */}
      <polygon
        points="70,42.5 100,60 100,95 70,112.5 40,95 40,60"
        fill="none"
        stroke={selectedColors.wings}
        strokeWidth="2.5"
      />
      {/* Right hexagon (wing) - outlined */}
      <polygon
        points="130,42.5 160,60 160,95 130,112.5 100,95 100,60"
        fill="none"
        stroke={selectedColors.wings}
        strokeWidth="2.5"
      />
    </svg>
  );
}