import React from 'react';

/**
 * Badge component with various variants
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Badge variant: 'primary', 'secondary', 'tertiary', 'error'
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} [props.className] - Additional class names
 */
export default function Badge({
  variant = 'primary',
  children,
  className = '',
}) {
  const baseClasses = 'rounded-full px-3 py-1 text-xs font-label-bold text-label-bold';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
    error: 'bg-error-container text-on-error-container',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
}
