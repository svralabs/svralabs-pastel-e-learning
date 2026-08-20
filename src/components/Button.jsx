import React from 'react';
import styles from './Button.module.css';

/**
 * Button component with multiple variants and sizes
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline, text)
 * @param {string} [props.size='medium'] - Button size (small, medium, large)
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {React.ReactNode} props.children - Button content
 * @param {function} [props.onClick] - Click handler
 */
export default function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  ...props
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
  ].join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
