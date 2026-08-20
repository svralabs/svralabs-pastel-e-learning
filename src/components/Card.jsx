import React from 'react';
import styles from './Card.module.css';

/**
 * Card component with multiple variants and padding options
 * @param {Object} props - Component props
 * @param {string} [props.variant='surface'] - Card variant (surface, surfaceContainer, surfaceContainerLow)
 * @param {string} [props.padding='padding'] - Padding size (paddingSmall, padding, paddingLarge)
 * @param {boolean} [props.dotPattern=false] - Apply dot pattern background
 * @param {React.ReactNode} props.children - Card content
 */
export default function Card({
  variant = 'surface',
  padding = 'padding',
  dotPattern = false,
  children,
  ...props
}) {
  const cardClasses = [
    styles.card,
    styles[variant],
    styles[padding],
    dotPattern ? styles.dotPattern : '',
  ].join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}
