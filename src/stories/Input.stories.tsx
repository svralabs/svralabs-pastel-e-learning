import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'select', 'checkbox'],
    },
    validationState: {
      control: { type: 'select' },
      options: ['error', 'success', undefined],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    id: 'text-input',
    label: 'First Name',
    type: 'text',
    placeholder: 'e.g. Jane',
  },
};

export const PasswordInput: Story = {
  args: {
    id: 'password-input',
    label: 'Password',
    type: 'password',
    value: 'supersecret',
    icon: 'visibility',
  },
};

export const SelectInput: Story = {
  args: {
    id: 'select-input',
    label: 'Country',
    type: 'select',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
    ],
  },
};

export const CheckboxInput: Story = {
  args: {
    id: 'checkbox-input',
    label: 'I agree to the terms and conditions',
    type: 'checkbox',
    value: 'false',
  },
};

export const ErrorInput: Story = {
  args: {
    id: 'error-input',
    label: 'Email',
    type: 'text',
    placeholder: 'Enter your email',
    validationState: 'error',
    errorMessage: 'Please enter a valid email address',
  },
};

export const SuccessInput: Story = {
  args: {
    id: 'success-input',
    label: 'Username',
    type: 'text',
    value: 'janedoe',
    validationState: 'success',
  },
};
