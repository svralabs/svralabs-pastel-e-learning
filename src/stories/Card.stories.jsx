import React from 'react';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
  },
};

function Card({ variant = 'default', children, ...props }) {
  const baseClasses = 'rounded-lg overflow-hidden';
  const variantClasses = {
    default: 'bg-white shadow',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-gray-200',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </div>
  );
}

function CardHeader({ children, ...props }) {
  return (
    <div className="px-4 py-5 sm:px-6" {...props}>
      {children}
    </div>
  );
}

function CardContent({ children, ...props }) {
  return (
    <div className="px-4 py-5 sm:p-6" {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, ...props }) {
  return (
    <div className="px-4 py-4 sm:px-6" {...props}>
      {children}
    </div>
  );
}

const Template = (args) => (
  <Card {...args}>
    <CardHeader>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Card Title</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Card subtitle</p>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
      </p>
    </CardContent>
    <CardFooter>
      <Button variant="primary">Action</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Elevated = Template.bind({});
Elevated.args = {
  variant: 'elevated',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};
