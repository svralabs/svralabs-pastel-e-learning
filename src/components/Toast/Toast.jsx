import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function Toast({ type = 'info', message, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-success-container text-on-success-container';
      case 'error':
        return 'bg-error-container text-on-error-container';
      case 'warning':
        return 'bg-warning-container text-on-warning-container';
      default:
        return 'bg-info-container text-on-info-container';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-[24px] shadow-lg ${getTypeStyles()}`}>
      <span className="material-symbols-outlined mr-3" data-icon={getIcon()}>
        {getIcon()}
      </span>
      <p className="font-body-default text-body-default">{message}</p>
      <button
        onClick={() => {
          setVisible(false);
          onClose();
        }}
        className="ml-4 text-inherit hover:text-opacity-70 transition-opacity"
      >
        <X size={20} />
      </button>
    </div>
  );
}
