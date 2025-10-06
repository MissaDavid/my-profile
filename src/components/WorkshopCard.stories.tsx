import type {Meta, StoryObj} from '@storybook/react';
import WorkshopCard from './WorkshopCard';

const meta: Meta<typeof WorkshopCard> = {
  title: 'Workshop/Design System/Card',
  component: WorkshopCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    statusLight: {
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
    title: 'Project Card',
    children: (
      <p>
        Cards have a status indicator light, mimicking the power LEDs on
        workshop equipment. Borders are solid and functional.
      </p>
    ),
  },
};

export const WithoutTitle: Story = {
  args: {
    children: (
      <div>
        <p>A card component without a title.</p>
        <p>Still includes the status light indicator.</p>
      </div>
    ),
  },
};

export const NoStatusLight: Story = {
  args: {
    title: 'Inactive Module',
    statusLight: false,
    children: <p>This card has no status indicator light.</p>,
  },
};

export const LongContent: Story = {
  args: {
    title: 'Workshop Documentation',
    children: (
      <div>
        <p>
          Every element shows the patina of use - borders that look hand-carved,
          buttons with subtle tool marks, and a color scheme that evokes
          well-oiled wood and aged metal.
        </p>
        <p>
          The workshop aesthetic emphasizes utilitarian craftsmanship with a
          subtle rebellious edge over corporate polish.
        </p>
        <p>
          Function over flash: mechanical interactions, not flashy animations.
        </p>
      </div>
    ),
  },
};

export const LightTheme: Story = {
  args: {
    title: 'Project Card',
    theme: 'light',
    children: (
      <p>
        Light theme card with high contrast text on white background.
        Perfect for light backgrounds and reading comfort.
      </p>
    ),
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  args: {
    title: 'System Module',
    theme: 'dark',
    children: (
      <p>
        Dark theme card with warm parchment text on dark background.
        Maintains workshop aesthetic with excellent readability.
      </p>
    ),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
