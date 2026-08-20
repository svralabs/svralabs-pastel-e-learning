import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Loader from '../components/Loader';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const SmallLoader: Story = {
  args: {
    size: 'small',
  },
};

export const MediumLoader: Story = {
  args: {
    size: 'medium',
  },
};

export const LargeLoader: Story = {
  args: {
    size: 'large',
  },
};

export const CustomColorLoader: Story = {
  args: {
    size: 'medium',
    color: 'text-error',
  },
};
