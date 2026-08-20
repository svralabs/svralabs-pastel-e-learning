import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from '../components/Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Active' },
  { id: 6, name: 'Diana Miller', email: 'diana@example.com', status: 'Inactive' },
  { id: 7, name: 'Ethan Davis', email: 'ethan@example.com', status: 'Active' },
];

const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

export const Default = Template.bind({});
Default.args = {
  data: mockData,
  columns: columns,
};

export const CustomItemsPerPage = Template.bind({});
CustomItemsPerPage.args = {
  data: mockData,
  columns: columns,
  itemsPerPage: 3,
};
