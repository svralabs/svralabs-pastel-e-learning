import React from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
}) => {
  const baseClasses = 'rounded-full font-label-bold text-label-bold';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container',
    secondary: 'bg-secondary-container text-on-secondary-container',
    tertiary: 'bg-tertiary-container text-on-tertiary-container',
    danger: 'bg-error-container text-on-error-container',
  };
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return <span className={classes}>{children}</span>;
};

export default Badge;
