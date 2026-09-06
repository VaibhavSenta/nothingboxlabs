'use client';

import React from 'react';
import styles from './GlassBlobCard.module.css';
import { ChevronRight } from 'lucide-react';

export type GlassCardVariant = 'blue' | 'emerald' | 'purple' | 'amber';

export interface GlassBlobCardProps {
  id: string;
  title: string;
  badge: string;
  subdomain?: string;
  icon: React.ReactNode;
  onClick: () => void;
  rotation?: string;
  variant?: GlassCardVariant;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onActionClick?: (e: React.MouseEvent) => void;
}

export const GlassBlobCard: React.FC<GlassBlobCardProps> = ({
  id,
  title,
  badge,
  subdomain,
  icon,
  onClick,
  rotation = '-2deg',
  variant = 'blue',
  ariaLabel,
  className = '',
  style = {},
  tabIndex,
  onActionClick,
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'emerald':
        return styles.variantEmerald;
      case 'purple':
        return styles.variantPurple;
      case 'amber':
        return styles.variantAmber;
      case 'blue':
      default:
        return styles.variantBlue;
    }
  };

  return (
    <button
      id={`blob-card-${id}`}
      className={`${styles.card} ${getVariantClass()} ${className}`}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel || `Open ${title}`}
      style={{
        '--card-rotation': rotation,
        ...style,
      } as React.CSSProperties}
    >
      <div className={styles.cardContent}>
        {/* Top Badge */}
        <div className={styles.topRow}>
          <span className={styles.badgePill}>
            <span className={styles.badgeDot} />
            {badge}
          </span>
        </div>

        {/* Center Icon */}
        <div className={styles.iconFrame}>
          {icon}
        </div>

        {/* Bottom Metadata & Action */}
        <div className={styles.textStack}>
          <span className={styles.title}>{title}</span>
          {subdomain && <span className={styles.subdomain}>{subdomain}</span>}
          <div
            className={styles.actionPill}
            role={onActionClick ? 'button' : undefined}
            onClick={(e) => {
              if (onActionClick) {
                e.stopPropagation();
                onActionClick(e);
              }
            }}
          >
            <span>Explore</span>
            <ChevronRight size={13} className={styles.actionChevron} />
          </div>
        </div>
      </div>

      {/* Ambient Theme-Harmonized Frosted Blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob2}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob3}`} aria-hidden="true" />
      <div className={`${styles.blob} ${styles.blob4}`} aria-hidden="true" />
    </button>
  );
};
