import type {Meta, StoryObj} from '@storybook/react';
import Intro from './intro';

const meta: Meta<typeof Intro> = {
  title: 'Workshop/Pages/Intro',
  component: Intro,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};