import React from 'react';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

function Input({ variant = 'default', size = 'md', disabled = false, ...props }) {
  const baseClasses = 'w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    default: 'border border-gray-300 focus:ring-blue-500',
    filled: 'bg-gray-50 border border-gray-300 focus:ring-blue-500',
    outlined: 'border-2 border-gray-300 focus:ring-blue-500',
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <input
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      disabled={disabled}
      {...props}
    />
  );
}

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Default Input',
  variant: 'default',
};

export const Filled = Template.bind({});
Filled.args = {
  placeholder: 'Filled Input',
  variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  placeholder: 'Outlined Input',
  variant: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
  placeholder: 'Small Input',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Large Input',
  size: 'lg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled Input',
  disabled: true,
};
