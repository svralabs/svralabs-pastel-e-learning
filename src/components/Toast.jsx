import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css';

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

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
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className={`material-symbols-outlined ${styles.toastIcon}`}>{getIcon()}</span>
      <span className={styles.toastMessage}>{message}</span>
      <span className={`material-symbols-outlined ${styles.toastClose}`} onClick={() => { setVisible(false); onClose && onClose(); }}>close</span>
    </div>
  );
};

export default Toast;
