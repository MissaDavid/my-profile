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

export const WithMarker: Story = {
  args: {
    title: 'Phase One',
    theme: 'light',
    marker: '01',
    children: (
      <p>
        Card with a workshop marker in the top-left corner. Markers can be
        numbers or symbols like ◈, ◆, ▶, ●.
      </p>
    ),
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const WithSkillBadge: Story = {
  args: {
    title: 'Translation Craft',
    theme: 'light',
    skillBadge: 'Attention to Detail',
    children: (
      <p>
        Card with a skill badge in the top-right corner. Badges highlight
        key skills or attributes developed in this phase.
      </p>
    ),
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const WithMarkerAndBadge: Story = {
  args: {
    title: 'Language & Precision',
    theme: 'light',
    marker: '01',
    skillBadge: 'Attention to Detail',
    children: (
      <p>
        Started as a translator specializing in Korean language—literature,
        cinema, traditional arts. Turns out translating a 400-page novel teaches
        you a lot about precision: every word carries weight, context shapes
        meaning, and quality lives in the details most people never see.
      </p>
    ),
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const StationCard: Story = {
  args: {
    title: 'Backend Station',
    theme: 'light',
    marker: '◈',
    statusLight: false,
    children: (
      <div>
        <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>Primary workshop area</p>
        <p>
          Python • Django • FastAPI • Flask • C# • .NET • PostgreSQL
        </p>
      </div>
    ),
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};
