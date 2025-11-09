import type {Meta, StoryObj} from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Workshop/Design System/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['original', 'inverted', 'rust-accent', 'full-rust', 'brass', 'two-tone'],
      description: 'Color variant of the logo',
    },
    size: {
      control: { type: 'range', min: 20, max: 200, step: 10 },
      description: 'Size of the logo in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Original: Story = {
  args: {
    variant: 'original',
    size: 80,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Inverted: Story = {
  args: {
    variant: 'inverted',
    size: 80,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const RustAccent: Story = {
  args: {
    variant: 'rust-accent',
    size: 80,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const FullRust: Story = {
  args: {
    variant: 'full-rust',
    size: 80,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Brass: Story = {
  args: {
    variant: 'brass',
    size: 80,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const TwoTone: Story = {
  args: {
    variant: 'two-tone',
    size: 80,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

// Size demonstrations
export const Small: Story = {
  args: {
    variant: 'original',
    size: 24,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const NavigationSize: Story = {
  args: {
    variant: 'original',
    size: 40,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const Large: Story = {
  args: {
    variant: 'original',
    size: 120,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

// Theme comparisons
export const AllVariantsLight: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="original" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b3a2c' }}>
          Original
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="rust-accent" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b3a2c' }}>
          Rust Accent
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full-rust" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b3a2c' }}>
          Full Rust
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="two-tone" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#6b3a2c' }}>
          Two-Tone
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const AllVariantsDark: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="inverted" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#c4a572' }}>
          Inverted
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="brass" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#c4a572' }}>
          Brass
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="rust-accent" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#c4a572' }}>
          Rust Accent
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Logo variant="full-rust" size={60} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#c4a572' }}>
          Full Rust
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Usage in context
export const InNavigation: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--workshop-surface, #ffffff)',
        border: '2px solid var(--workshop-border, #d4c5b9)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Logo variant="original" size={40} />
      <span
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'var(--workshop-brass, #c4a572)',
        }}
      >
        meibee.dev
      </span>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const InFooter: Story = {
  render: () => (
    <div
      style={{
        background: 'var(--workshop-subtle, #f5f2ed)',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderTop: '2px solid var(--workshop-border, #d4c5b9)',
      }}
    >
      <Logo variant="two-tone" size={32} />
      <div>
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--workshop-heading, #6b3a2c)',
          }}
        >
          Workshop Built
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--workshop-secondary, #4a453e)' }}>
          Maker's Mark
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};
