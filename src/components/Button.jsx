import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', size = 'medium', disabled = false, onClick }) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
