import type {Meta, StoryObj} from '@storybook/react';
import Contact from './contact';

const meta: Meta<typeof Contact> = {
  title: 'Workshop/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};