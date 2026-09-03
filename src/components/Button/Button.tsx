import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  id,
  ...rest
}) => {
  const variantClass = styles[`variant_${variant}`] || styles.variant_primary;
  const sizeClass = styles[`size_${size}`] || styles.size_md;

  return (
    <button
      id={id}
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      {...rest}
    >
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  );
};
