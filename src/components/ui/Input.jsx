import React from 'react';

export default function Input({ type = 'text', placeholder, disabled = false, value, onChange }) {
  const baseClasses = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent';
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : '';

  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`${baseClasses} ${disabledClasses}`}
    />
  );
}
