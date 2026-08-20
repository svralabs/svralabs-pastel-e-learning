import React from 'react';

/**
 * Button component with various variants and sizes
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant: 'primary', 'secondary', 'tertiary', 'error'
 * @param {string} [props.size='medium'] - Button size: 'small', 'medium', 'large'
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {React.ReactNode} props.children - Button content
 * @param {function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional class names
 */
export default function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  className = '',
}) {
  const baseClasses = 'rounded-full font-label-bold text-label-bold transition-all duration-200';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container hover:scale-105',
    secondary: 'bg-secondary-fixed-dim text-on-secondary-fixed-variant hover:scale-105',
    tertiary: 'bg-tertiary-container text-on-tertiary-container hover:scale-105',
    error: 'bg-error-container text-on-error-container hover:scale-105',
  };
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
