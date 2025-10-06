import type {Meta, StoryObj} from '@storybook/react';
import Navigation from './navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Workshop/Pages/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};