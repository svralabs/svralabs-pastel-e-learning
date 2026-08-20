import React from 'react';

export default function Tab({ children, active = false, onClick }) {
  const baseClasses = 'px-4 py-2 text-sm font-medium rounded-t-lg cursor-pointer';
  const activeClasses = active ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50';

  return (
    <button
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
