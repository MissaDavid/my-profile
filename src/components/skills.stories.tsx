import type {Meta, StoryObj} from '@storybook/react';
import Skills from './skills';

const meta: Meta<typeof Skills> = {
  title: 'Workshop/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};