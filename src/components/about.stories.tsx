import type {Meta, StoryObj} from '@storybook/react';
import About from './about';

const meta: Meta<typeof About> = {
  title: 'Workshop/About',
  component: About,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};