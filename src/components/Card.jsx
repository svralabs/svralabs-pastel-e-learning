import styles from './Card.module.css';

export default function Card({ children, title, footer }) {
  return (
    <div className={styles.card}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
