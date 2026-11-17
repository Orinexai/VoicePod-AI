import React, { useState } from 'react';
import { SvgVoiceCoreIcon, SvgAcousticWaveform } from './ModernSvgVisuals';

interface MediaFrameProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  label?: string;
}

/**
 * Resilient media container ensuring referrerPolicy="no-referrer" and a styled SVG gradient
 * fallback container if any asset fails to load.
 */
export const MediaFrame: React.FC<MediaFrameProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  label
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-slate-950 ${className}`}>
      {!failed ? (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={handleError}
          className={imgClassName}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-[#0b1224] to-slate-950 flex flex-col items-center justify-center p-6 text-center gap-3">
          <SvgVoiceCoreIcon className="w-10 h-10" />
          <SvgAcousticWaveform className="w-36 h-8 opacity-75" />
          <span className="text-xs font-medium text-slate-300 max-w-xs truncate">
            {label || alt}
          </span>
        </div>
      )}
    </div>
  );
};
