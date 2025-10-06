import type {Meta, StoryObj} from '@storybook/react';
import WorkshopButton from './WorkshopButton';

const meta: Meta<typeof WorkshopButton> = {
  title: 'Workshop/Design System/Button',
  component: WorkshopButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'View Project',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: 'Deploy to Production',
    variant: 'primary',
  },
};

export const LightTheme: Story = {
  args: {
    children: 'View Project',
    variant: 'primary',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const LightSecondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    children: 'View Project',
    variant: 'primary',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkSecondary: Story = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
