import type {Meta, StoryObj} from '@storybook/react';
import WorkshopNavItem from './WorkshopNavItem';

const meta: Meta<typeof WorkshopNavItem> = {
  title: 'Workshop/Design System/NavItem',
  component: WorkshopNavItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Workshop',
  },
};

export const Active: Story = {
  args: {
    children: 'Projects',
    active: true,
  },
};

export const WithLink: Story = {
  args: {
    children: 'Tools',
    href: '#tools',
  },
};

export const AsButton: Story = {
  args: {
    children: 'Contact',
    onClick: () => alert('Navigation clicked!'),
  },
};

export const NavigationGroup: Story = {
  render: () => (
    <nav style={{ display: 'flex', gap: '2rem', padding: '1rem', background: '#1a1815' }}>
      <WorkshopNavItem active>Workshop</WorkshopNavItem>
      <WorkshopNavItem>Projects</WorkshopNavItem>
      <WorkshopNavItem>Tools</WorkshopNavItem>
      <WorkshopNavItem>Contact</WorkshopNavItem>
    </nav>
  ),
};

export const LightTheme: Story = {
  args: {
    children: 'Workshop',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const LightActive: Story = {
  args: {
    children: 'Projects',
    active: true,
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    children: 'Tools',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DarkActive: Story = {
  args: {
    children: 'Contact',
    active: true,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const LightNavigationGroup: Story = {
  render: () => (
    <nav style={{ display: 'flex', gap: '2rem', padding: '1rem', background: '#faf8f5' }}>
      <WorkshopNavItem active theme="light">Workshop</WorkshopNavItem>
      <WorkshopNavItem theme="light">Projects</WorkshopNavItem>
      <WorkshopNavItem theme="light">Tools</WorkshopNavItem>
      <WorkshopNavItem theme="light">Contact</WorkshopNavItem>
    </nav>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkNavigationGroup: Story = {
  render: () => (
    <nav style={{ display: 'flex', gap: '2rem', padding: '1rem', background: '#1a1815' }}>
      <WorkshopNavItem active theme="dark">Workshop</WorkshopNavItem>
      <WorkshopNavItem theme="dark">Projects</WorkshopNavItem>
      <WorkshopNavItem theme="dark">Tools</WorkshopNavItem>
      <WorkshopNavItem theme="dark">Contact</WorkshopNavItem>
    </nav>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
