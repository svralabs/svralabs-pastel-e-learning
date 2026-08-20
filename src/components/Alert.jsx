import styles from './Alert.module.css';

export default function Alert({ children, type = 'info', onClose }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <div className={styles.content}>{children}</div>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </div>
  );
}
