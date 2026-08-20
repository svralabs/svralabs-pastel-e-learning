import styles from './Loader.module.css';

export default function Loader({ size = 'medium' }) {
  const loaderClass = `${styles.loader} ${styles[size]}`;

  return (
    <div className={loaderClass}>
      <div className={styles.spinner}></div>
    </div>
  );
}
