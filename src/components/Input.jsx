import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = ({ label, type = 'text', placeholder, iconLeading, iconTrailing, value, onChange, error, success }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={styles.inputContainer}>
      {label && <label className={styles.inputLabel}>{label}</label>}
      <div className={styles.inputWrapper}>
        {iconLeading && (
          <div className={`${styles.inputIconContainer} ${styles.inputIconLeading}`}>
            <span className="material-symbols-outlined">{iconLeading}</span>
          </div>
        )}
        <input
          type={inputType}
          className={`${styles.inputField} ${error ? styles.error : ''} ${success ? styles.success : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {iconTrailing && (
          <div className={`${styles.inputIconContainer} ${styles.inputIconTrailing}`} onClick={togglePasswordVisibility}>
            <span className="material-symbols-outlined">{iconTrailing}</span>
          </div>
        )}
        {success && (
          <span className={`material-symbols-outlined ${styles.inputSuccessIcon}`}>check_circle</span>
        )}
      </div>
      {error && <p className={styles.inputErrorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
