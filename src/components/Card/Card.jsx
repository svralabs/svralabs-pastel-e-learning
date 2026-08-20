import React from 'react';

/**
 * Card component with various variants
 * @param {Object} props - Component props
 * @param {string} [props.variant='surface'] - Card variant: 'surface', 'primary', 'secondary', 'tertiary', 'error'
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional class names
 */
export default function Card({
  variant = 'surface',
  children,
  className = '',
}) {
  const baseClasses = 'rounded-xl p-cell-padding';
  const variantClasses = {
    surface: 'bg-surface-container',
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
    error: 'bg-error-container text-on-error-container',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
}
