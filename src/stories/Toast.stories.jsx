import React from 'react';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

function Toast({ variant = 'success', children, ...props }) {
  const baseClasses = 'p-4 rounded-lg shadow-lg flex items-center';
  const variantClasses = {
    success: 'bg-green-50 text-green-800',
    error: 'bg-red-50 text-red-800',
    warning: 'bg-yellow-50 text-yellow-800',
    info: 'bg-blue-50 text-blue-800',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      <span className="material-symbols-outlined mr-2">
        {variant === 'success' && 'check_circle'}
        {variant === 'error' && 'error'}
        {variant === 'warning' && 'warning'}
        {variant === 'info' && 'info'}
      </span>
      <div className="flex-1">{children}</div>
      <button className="ml-4 focus:outline-none">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}

const Template = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  children: 'This is a success message!',
  variant: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'This is an error message!',
  variant: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'This is a warning message!',
  variant: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  children: 'This is an info message!',
  variant: 'info',
};
