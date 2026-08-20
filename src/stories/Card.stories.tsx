import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'filled', 'outlined'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: (
      <div className="p-4">
        <h3 className="font-headline-md text-headline-md mb-2">Elevated Card</h3>
        <p className="font-body-default text-body-default text-on-surface-variant">
          This is an elevated card with subtle shadow.
        </p>
      </div>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: (
      <div className="p-4">
        <h3 className="font-headline-md text-headline-md mb-2">Filled Card</h3>
        <p className="font-body-default text-body-default text-on-surface-variant">
          This is a filled card with solid background.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <div className="p-4">
        <h3 className="font-headline-md text-headline-md mb-2">Outlined Card</h3>
        <p className="font-body-default text-body-default text-on-surface-variant">
          This is an outlined card with border.
        </p>
      </div>
    ),
  },
};
