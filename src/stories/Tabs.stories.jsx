import React, { useState } from 'react';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'pills', 'underline'],
    },
  },
};

function Tabs({ variant = 'default', children, ...props }) {
  const [activeTab, setActiveTab] = useState(0);

  const baseClasses = 'flex';
  const variantClasses = {
    default: '',
    pills: '',
    underline: '',
  };

  return (
    <div {...props}>
      <div className={`${baseClasses} ${variantClasses[variant]}`}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              active: index === activeTab,
              onClick: () => setActiveTab(index),
              variant,
            });
          }
          return child;
        })}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && index === activeTab) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
}

function Tab({ active, onClick, variant, children, ...props }) {
  const baseClasses = 'px-4 py-2 text-sm font-medium rounded-t-lg cursor-pointer';
  const variantClasses = {
    default: active ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50',
    pills: active ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-700',
    underline: active ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

const Template = (args) => (
  <Tabs {...args}>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Pills = Template.bind({});
Pills.args = {
  variant: 'pills',
};

export const Underline = Template.bind({});
Underline.args = {
  variant: 'underline',
};
