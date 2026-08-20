import React from 'react';

interface InputProps {
  id: string;
  label: string;
  type: 'text' | 'password' | 'select' | 'checkbox';
  placeholder?: string;
  value?: string;
  options?: { value: string; label: string }[];
  icon?: string;
  validationState?: 'error' | 'success';
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function Input({
  id,
  label,
  type,
  placeholder,
  value,
  options,
  icon,
  validationState,
  errorMessage,
  onChange,
}: InputProps) {
  const borderColor = validationState === 'error'
    ? 'border-error'
    : validationState === 'success'
    ? 'border-success'
    : 'border-surface-variant';

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={id}
            className={`w-full bg-white border-2 ${borderColor} rounded-[24px] px-6 py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors`}
            value={value}
            onChange={onChange}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              id={id}
              type="checkbox"
              className="h-5 w-5 text-primary focus:ring-primary border-surface-variant rounded"
              checked={value === 'true'}
              onChange={onChange}
            />
            <label htmlFor={id} className="ml-2 block font-label-bold text-label-bold text-on-surface">
              {label}
            </label>
          </div>
        );
      default:
        return (
          <div className="relative">
            {icon && (
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline" data-icon={icon}>
                  {icon}
                </span>
              </div>
            )}
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`w-full bg-white border-2 ${borderColor} rounded-[24px] ${icon ? 'pl-12' : 'px-6'} py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors`}
            />
          </div>
        );
    }
  };

  return (
    <div className="mb-4">
      {type !== 'checkbox' && (
        <label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      {renderInput()}
      {validationState === 'error' && errorMessage && (
        <p className="mt-2 text-error font-body-default text-body-default">{errorMessage}</p>
      )}
    </div>
  );
}
