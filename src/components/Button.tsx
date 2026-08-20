import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  ...props
}) => {
  const baseClasses = 'rounded-full font-label-bold text-label-bold transition-all duration-200';
  const variantClasses = {
    primary: 'bg-primary-container text-on-primary-container hover:bg-primary-container-hover',
    secondary: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container-hover',
    tertiary: 'bg-tertiary-container text-on-tertiary-container hover:bg-tertiary-container-hover',
    danger: 'bg-error-container text-on-error-container hover:bg-error-container-hover',
  };
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? disabledClasses : ''}`;

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
