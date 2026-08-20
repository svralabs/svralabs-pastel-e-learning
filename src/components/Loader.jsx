import React from 'react';
import styles from './Loader.module.css';

const Loader = ({ type = 'spinner', progress = 0 }) => {
  if (type === 'spinner') {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  } else if (type === 'progress') {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    );
  }

  return null;
};

export default Loader;
