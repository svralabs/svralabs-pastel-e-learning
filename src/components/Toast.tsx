import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export default function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success'
    ? 'bg-success-container'
    : type === 'error'
    ? 'bg-error-container'
    : 'bg-info-container';

  const textColor = type === 'success'
    ? 'text-on-success-container'
    : type === 'error'
    ? 'text-on-error-container'
    : 'text-on-info-container';

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${bgColor} ${textColor} flex items-center`}>
      <span className="material-symbols-outlined mr-2" data-icon={type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}>
        {type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
      </span>
      <span className="font-body-default text-body-default">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-inherit hover:text-opacity-70 transition-opacity"
      >
        <span className="material-symbols-outlined" data-icon="close">close</span>
      </button>
    </div>
  );
}
