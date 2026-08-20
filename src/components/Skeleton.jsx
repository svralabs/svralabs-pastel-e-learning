import styles from './Skeleton.module.css';

export default function Skeleton({ width, height }) {
  return (
    <div
      className={styles.skeleton}
      style={{ width, height }}
    ></div>
  );
}
