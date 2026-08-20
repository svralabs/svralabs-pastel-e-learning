import React from 'react';

type CardVariant = 'elevated' | 'filled' | 'outlined';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  children,
  className = '',
}) => {
  const baseClasses = 'rounded-xl p-cell-padding';
  const variantClasses = {
    elevated: 'bg-surface-container-low shadow-sm',
    filled: 'bg-surface-container',
    outlined: 'bg-surface-container border border-outline-variant',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
