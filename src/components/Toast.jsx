import { useState, useEffect } from 'react';
import styles from './Toast.module.css';

export default function Toast({ message, type = 'info', duration = 3000, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button className={styles.closeButton} onClick={() => setVisible(false)}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}
