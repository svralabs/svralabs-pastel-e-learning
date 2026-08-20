import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'info'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    message: 'Your changes have been saved successfully!',
    type: 'success',
    onClose: () => {},
  },
};

export const ErrorToast: Story = {
  args: {
    message: 'An error occurred while saving your changes.',
    type: 'error',
    onClose: () => {},
  },
};

export const InfoToast: Story = {
  args: {
    message: 'This is an informational message.',
    type: 'info',
    onClose: () => {},
  },
};
