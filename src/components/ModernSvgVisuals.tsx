import React from 'react';

interface SvgIconProps {
  className?: string;
}

/**
 * Custom VoicePod Acoustic Core SVG Icon
 */
export const SvgVoiceCoreIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="vp-cyan-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#2dd4bf" />
      </linearGradient>
    </defs>
    <rect x="2.5" y="2.5" width="27" height="27" rx="8" stroke="url(#vp-cyan-grad)" strokeOpacity="0.35" strokeWidth="1.5" />
    <path d="M9 16V16.01M12.5 11.5V20.5M16 8V24M19.5 11.5V20.5M23 14.5V17.5" stroke="url(#vp-cyan-grad)" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

/**
 * Custom Dual-Direction Telephony Pipeline SVG Icon
 */
export const SvgTelephonyNodeIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path
      d="M7 10.5C7 8.567 8.567 7 10.5 7H12.2C12.84 7 13.4 7.42 13.58 8.03L14.42 10.88C14.58 11.42 14.37 12.01 13.9 12.33L12.55 13.25C13.45 15.27 15.05 16.87 17.07 17.77L17.99 16.42C18.31 15.95 18.9 15.74 19.44 15.9L22.29 16.74C22.9 16.92 23.32 17.48 23.32 18.12V19.82C23.32 21.75 21.75 23.32 19.82 23.32H18.5C12.15 23.32 7 18.17 7 11.82V10.5Z"
      stroke="#22d3ee"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path d="M18 8.5H24.5M24.5 8.5L21.5 5.5M24.5 8.5L21.5 11.5" stroke="#2dd4bf" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Custom Global Multilingual Network SVG Icon
 */
export const SvgGlobalDialectIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <circle cx="16" cy="16" r="10.5" stroke="#22d3ee" strokeWidth="1.6" />
    <ellipse cx="16" cy="16" rx="4.8" ry="10.5" stroke="#2dd4bf" strokeWidth="1.4" />
    <path d="M6 12.5H26M6 19.5H26" stroke="#22d3ee" strokeOpacity="0.65" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="22.5" cy="9.5" r="2" fill="#22d3ee" />
  </svg>
);

/**
 * Custom CRM & Webhook Circuit Sync SVG Icon
 */
export const SvgNeuralSyncIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="5" y="5" width="8" height="8" rx="2.5" stroke="#22d3ee" strokeWidth="1.6" />
    <rect x="19" y="19" width="8" height="8" rx="2.5" stroke="#a78bfa" strokeWidth="1.6" />
    <path d="M13 9H21C22.1 9 23 9.9 23 11V19" stroke="#2dd4bf" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 13V21C9 22.1 9.9 23 11 23H19" stroke="#22d3ee" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="23" cy="9" r="1.75" fill="#2dd4bf" />
    <circle cx="9" cy="23" r="1.75" fill="#22d3ee" />
  </svg>
);

/**
 * Custom Automated Calendar & Booking SVG Icon
 */
export const SvgWorkflowCalendarIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <rect x="5.5" y="7.5" width="21" height="19" rx="3.5" stroke="#a78bfa" strokeWidth="1.6" />
    <path d="M10.5 5V9M21.5 5V9M5.5 13H26.5" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M11.5 19.2L14.5 22L20.5 16.5" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Custom Security & Reliability Shield SVG Icon
 */
export const SvgShieldGuardIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path
      d="M16 4.5L25.5 8.5V15.5C25.5 21.3 21.4 25.9 16 27.5C10.6 25.9 6.5 21.3 6.5 15.5V8.5L16 4.5Z"
      stroke="#22d3ee"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M12 16L14.8 18.8L20.2 13.2" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Custom Analytics & ROI Wave SVG Icon
 */
export const SvgAnalyticsPulseIcon: React.FC<SvgIconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
    <path d="M5 24.5H27" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 20L12.5 14L17 17.5L24.5 8.5" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.5 8.5H24.5V12.5" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12.5" cy="14" r="2" fill="#07090e" stroke="#22d3ee" strokeWidth="1.5" />
    <circle cx="17" cy="17.5" r="2" fill="#07090e" stroke="#2dd4bf" strokeWidth="1.5" />
  </svg>
);

/**
 * Ambient Concentric SVG Acoustic Wave Rings behind Hero Visual
 */
export const SvgHeroAcousticRings: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 520 520"
    fill="none"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="ring-fade" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
        <stop offset="60%" stopColor="#6366f1" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#07090e" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="260" cy="260" r="240" fill="url(#ring-fade)" />
    <circle cx="260" cy="260" r="230" stroke="#22d3ee" strokeOpacity="0.14" strokeDasharray="4 8" strokeWidth="1" />
    <circle cx="260" cy="260" r="192" stroke="#38bdf8" strokeOpacity="0.22" strokeWidth="1" />
    <circle cx="260" cy="260" r="154" stroke="#818cf8" strokeOpacity="0.2" strokeDasharray="10 6" strokeWidth="1" />
    <path
      d="M22 260H86M434 260H498M260 22V72M260 448V498"
      stroke="#22d3ee"
      strokeOpacity="0.2"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Clean Inline Acoustic Waveform SVG Graphic (for audio/call cards)
 */
export const SvgAcousticWaveform: React.FC<{ className?: string }> = ({ className = 'w-full h-10' }) => {
  const bars = [14, 24, 38, 22, 44, 30, 18, 40, 28, 46, 24, 36, 16, 32, 42, 20, 34, 26, 14, 22];
  return (
    <svg viewBox="0 0 240 52" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="wave-bar-grad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      {bars.map((height, idx) => {
        const x = 6 + idx * 11.8;
        const y = (52 - height) / 2;
        return (
          <rect
            key={idx}
            x={x}
            y={y}
            width="4.5"
            height={height}
            rx="2.25"
            fill="url(#wave-bar-grad)"
          />
        );
      })}
    </svg>
  );
};

/**
 * Editorial SVG Monogram Portrait Avatar for Verified Client Testimonials (zero external photo dependencies)
 */
export const SvgAvatarMonogram: React.FC<{
  name: string;
  accent?: 'cyan' | 'indigo' | 'teal';
  className?: string;
}> = ({ name, accent = 'cyan', className = 'w-12 h-12' }) => {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');

  const palette =
    accent === 'indigo'
      ? { stroke: '#818cf8', bg: '#1e1b4b', text: '#c7d2fe' }
      : accent === 'teal'
      ? { stroke: '#2dd4bf', bg: '#042f2e', text: '#99f6e4' }
      : { stroke: '#22d3ee', bg: '#083344', text: '#a5f3fc' };

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="1.5" y="1.5" width="45" height="45" rx="13.5" fill={palette.bg} stroke={palette.stroke} strokeOpacity="0.55" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="19" stroke={palette.stroke} strokeOpacity="0.2" strokeDasharray="3 3" strokeWidth="1" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill={palette.text}
        fontSize="14"
        fontWeight="700"
        fontFamily="Sora, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
};
