import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'purple' | 'orange' | 'green' | 'subtle';
  id?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'subtle',
  id,
}) => {
  const variantClass = styles[`variant_${variant}`] || styles.variant_subtle;

  return (
    <span id={id} className={`${styles.badge} ${variantClass}`}>
      {children}
    </span>
  );
};
