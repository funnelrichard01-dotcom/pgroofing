import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10',
  variant = 'color',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';
  const primaryTextColor = isLight ? '#FFFFFF' : '#0F172A';
  const subtitleColor = isLight ? '#E2E8F0' : '#475569';
  const redAccent = '#C5221F'; // Authentic P&G Crimson Red

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* P&G Vector Roofing Emblem */}
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 shrink-0"
        aria-label="P&G Roofing Logo Mark"
      >
        {/* Roof Gable Ridge - Dynamic Peak */}
        <path
          d="M32 4L6 26H14L32 10L50 26H58L32 4Z"
          fill={redAccent}
        />
        {/* Secondary Inner Ridge */}
        <path
          d="M32 13L16 27H22L32 18L42 27H48L32 13Z"
          fill={isLight ? '#FFFFFF' : '#1E293B'}
        />
        {/* P&G Foundation Base Blocks */}
        <path
          d="M10 32H28V58H10V32Z"
          fill={redAccent}
          rx="2"
        />
        <path
          d="M36 32H54V58H36V32Z"
          fill={isLight ? '#E2E8F0' : '#0F172A'}
          rx="2"
        />
        {/* Cutout Stylized Monogram */}
        <text
          x="19"
          y="50"
          fill="#FFFFFF"
          fontSize="15"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          P
        </text>
        <text
          x="32"
          y="48"
          fill={redAccent}
          fontSize="11"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          &
        </text>
        <text
          x="45"
          y="50"
          fill={isLight ? '#0F172A' : '#FFFFFF'}
          fontSize="15"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
          textAnchor="middle"
        >
          G
        </text>
      </svg>

      {/* Typography Column */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline tracking-tight">
          <span
            className="text-2xl font-black tracking-tight"
            style={{ color: redAccent }}
          >
            P&G
          </span>
          <span
            className="text-xl font-extrabold tracking-wider ml-1 uppercase"
            style={{ color: primaryTextColor }}
          >
            ROOFING
          </span>
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: subtitleColor }}
            >
              Contractors Corp
            </span>
            <span className="text-[10px] text-red-600 font-semibold">·</span>
            <span
              className="text-[9px] font-semibold tracking-wider"
              style={{ color: subtitleColor }}
            >
              CCC1329409
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
