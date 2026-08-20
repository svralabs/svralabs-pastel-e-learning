import styles from './Badge.module.css';

export default function Badge({ children, variant = 'primary', size = 'medium' }) {
  const badgeClass = `${styles.badge} ${styles[variant]} ${styles[size]}`;

  return (
    <span className={badgeClass}>
      {children}
    </span>
  );
}
