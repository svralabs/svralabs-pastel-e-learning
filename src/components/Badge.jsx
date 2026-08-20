import React from 'react';
import styles from './Badge.module.css';

/**
 * Badge component with multiple variants and sizes
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Badge variant (primary, secondary, outline)
 * @param {string} [props.size='medium'] - Badge size (small, medium, large)
 * @param {React.ReactNode} props.children - Badge content
 */
export default function Badge({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) {
  const badgeClasses = [
    styles.badge,
    styles[variant],
    styles[size],
  ].join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
}
