import React from 'react';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'bar'],
    },
  },
};

function Loader({ size = 'md', variant = 'spinner', ...props }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (variant === 'spinner') {
    return (
      <div className={`animate-spin rounded-full border-2 border-blue-500 border-t-transparent ${sizeClasses[size]}`} {...props} />
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex space-x-2" {...props}>
        <div className={`w-2 h-2 rounded-full bg-blue-500 animate-bounce`} style={{ animationDelay: '0s' }} />
        <div className={`w-2 h-2 rounded-full bg-blue-500 animate-bounce`} style={{ animationDelay: '0.2s' }} />
        <div className={`w-2 h-2 rounded-full bg-blue-500 animate-bounce`} style={{ animationDelay: '0.4s' }} />
      </div>
    );
  }

  if (variant === 'bar') {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5" {...props}>
        <div className="bg-blue-600 h-2.5 rounded-full w-3/4 animate-pulse" />
      </div>
    );
  }

  return null;
}

const Template = (args) => <Loader {...args} />;

export const Spinner = Template.bind({});
Spinner.args = {
  variant: 'spinner',
};

export const Dots = Template.bind({});
Dots.args = {
  variant: 'dots',
};

export const Bar = Template.bind({});
Bar.args = {
  variant: 'bar',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
