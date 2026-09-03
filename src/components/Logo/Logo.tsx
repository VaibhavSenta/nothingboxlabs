'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Logo: React.FC<LogoProps> = ({
  size = 32,
  className = '',
  id,
  style,
}) => {
  return (
    <Image
      src="/logo.svg"
      alt="NothingBox Labs Logo"
      id={id}
      width={size}
      height={size}
      className={className}
      priority
      unoptimized
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style,
      }}
    />
  );
};
