import type {Meta, StoryObj} from '@storybook/react';
import WorkshopInput from './WorkshopInput';

const meta: Meta<typeof WorkshopInput> = {
  title: 'Workshop/Design System/Input',
  component: WorkshopInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email address',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    type: 'text',
    value: 'Pre-filled value',
  },
};

export const Required: Story = {
  args: {
    type: 'text',
    placeholder: 'Required field',
    required: true,
  },
};

export const LightTheme: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const LightEmail: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email address',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter command',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkPassword: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
