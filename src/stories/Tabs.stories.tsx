import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Tabs, { Tab } from '../components/Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab label="Tab 1">
      <div className="p-4 bg-surface rounded-xl">Content for Tab 1</div>
    </Tab>
    <Tab label="Tab 2">
      <div className="p-4 bg-surface rounded-xl">Content for Tab 2</div>
    </Tab>
    <Tab label="Tab 3">
      <div className="p-4 bg-surface rounded-xl">Content for Tab 3</div>
    </Tab>
  </Tabs>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};
