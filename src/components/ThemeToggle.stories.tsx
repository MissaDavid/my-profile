import type {Meta, StoryObj} from '@storybook/react';
import ThemeToggle from './ThemeToggle';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Workshop/Design System/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightMode: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  render: () => (
    <div style={{ minHeight: '400px', padding: '2rem', position: 'relative' }}>
      <ThemeToggle />
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '4rem' }}>
        <h2 style={{ color: 'var(--workshop-heading)' }}>Light Theme Preview</h2>
        <p style={{ color: 'var(--workshop-text)' }}>
          Click the theme toggle button in the top-right corner to switch themes.
          The button shows "Dark Mode" when the current theme is light.
        </p>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div style={{ minHeight: '400px', padding: '2rem', position: 'relative' }}>
      <ThemeToggle />
      <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '4rem' }}>
        <h2 style={{ color: 'var(--workshop-heading)' }}>Dark Theme Preview</h2>
        <p style={{ color: 'var(--workshop-text)' }}>
          Click the theme toggle button in the top-right corner to switch themes.
          The button shows "Light Mode" when the current theme is dark.
        </p>
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div style={{
      minHeight: '600px',
      padding: '2rem',
      position: 'relative',
      background: 'var(--workshop-bg)',
      color: 'var(--workshop-text)',
    }}>
      <ThemeToggle />
      <div style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '4rem' }}>
        <h1 style={{
          color: 'var(--workshop-heading)',
          fontFamily: "'Courier New', monospace",
          fontSize: '2.5rem',
          marginBottom: '1rem',
        }}>
          Theme Toggle Demo
        </h1>
        <p style={{ marginBottom: '1rem' }}>
          The theme toggle button is fixed in the top-right corner and persists
          across page navigation. It saves your preference to localStorage.
        </p>
        <div style={{
          background: 'var(--workshop-surface)',
          border: '2px solid var(--workshop-border)',
          padding: '1.5rem',
          marginTop: '2rem',
        }}>
          <h3 style={{ color: 'var(--workshop-heading)', marginBottom: '0.5rem' }}>
            Features
          </h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Detects system color scheme preference</li>
            <li>Saves theme selection to localStorage</li>
            <li>Smooth transitions between themes</li>
            <li>Accessible with keyboard navigation</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
