import styles from './Input.module.css';

export default function Input({ label, type = 'text', placeholder, value, onChange, disabled = false }) {
  return (
    <div className={styles.inputGroup}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
    </div>
  );
}
