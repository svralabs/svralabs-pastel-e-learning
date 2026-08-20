import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export default function Loader({ size = 'medium', color = 'text-primary' }: LoaderProps) {
  const sizeClass = size === 'small'
    ? 'w-8 h-8'
    : size === 'large'
    ? 'w-16 h-16'
    : 'w-12 h-12';

  return (
    <div className={`flex items-center justify-center ${sizeClass}`}>
      <div className={`animate-spin rounded-full h-full w-full border-4 border-t-transparent ${color} border-opacity-50`}></div>
    </div>
  );
}
