import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = ({ width = '100%', height = '24px', className = '' }) => {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default Skeleton;
