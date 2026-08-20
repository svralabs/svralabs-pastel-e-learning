import { useState } from 'react';

export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  icon,
  iconPosition = 'leading',
  error,
  success,
  options,
  checked,
  id
}) {
  const [showPassword, setShowPassword] = useState(false);

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={id}
            className={`w-full bg-white border-2 ${error ? 'border-error' : success ? 'border-success' : 'border-surface-variant'} rounded-[24px] px-6 py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors`}
            value={value}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
      case 'radio':
        return (
          <div className="flex items-center gap-4">
            <input
              type={type}
              id={id}
              checked={checked}
              onChange={onChange}
              className="h-5 w-5 text-primary focus:ring-primary border-surface-variant rounded"
            />
            <label htmlFor={id} className="font-body-default text-body-default text-on-surface">
              {label}
            </label>
          </div>
        );
      default:
        return (
          <div className="relative">
            {icon && iconPosition === 'leading' && (
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline" data-icon={icon}>
                  {icon}
                </span>
              </div>
            )}
            <input
              type={type === 'password' && showPassword ? 'text' : type}
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className={`w-full bg-white border-2 ${error ? 'border-error' : success ? 'border-success' : 'border-surface-variant'} rounded-[24px] ${icon && iconPosition === 'leading' ? 'pl-12' : 'pl-6'} ${icon && iconPosition === 'trailing' ? 'pr-12' : 'pr-6'} py-4 font-body-default text-body-default text-on-surface focus:outline-none focus:border-primary focus:ring-0 transition-colors`}
            />
            {icon && iconPosition === 'trailing' && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                {type === 'password' ? (
                  <span
                    className="material-symbols-outlined text-outline hover:text-primary transition-colors"
                    data-icon={showPassword ? 'visibility_off' : 'visibility'}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                ) : (
                  <span className="material-symbols-outlined text-outline" data-icon={icon}>
                    {icon}
                  </span>
                )}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="mb-4">
      {type !== 'checkbox' && type !== 'radio' && (
        <label className="block font-label-bold text-label-bold text-on-surface mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      {renderInput()}
      {error && (
        <p className="mt-2 text-error font-body-default text-body-default">
          {error}
        </p>
      )}
    </div>
  );
}
