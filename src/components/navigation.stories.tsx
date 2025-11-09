import type {Meta, StoryObj} from '@storybook/react';
import Navigation from './navigation';
import Logo from './Logo';

const meta: Meta<typeof Navigation> = {
  title: 'Workshop/Pages/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Current: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const WithLogoAndThemeToggle: Story = {
  render: () => (
    <div style={{ minHeight: '400px', background: 'var(--workshop-bg, #faf8f5)' }}>
      <header className="z-[999] relative">
        <div
          className="fixed top-0 w-full h-16 shadow-lg backdrop-blur-[0.5rem]"
          style={{
            backgroundColor: 'var(--workshop-surface, #ffffff)',
            borderBottom: '3px solid var(--workshop-border, #d4c5b9)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        />
        <nav className="flex fixed top-[0.25rem] left-1/2 h-14 -translate-x-1/2 py-3 px-4 w-full max-w-7xl">
          <div className="flex items-center justify-between w-full">
            {/* Logo and brand */}
            <div className="flex items-end gap-1.5">
              <Logo variant="original" size={32} />
              <span
                className="font-bold text-base sm:text-lg"
                style={{
                  fontFamily: 'var(--jetbrains-mono, monospace)',
                  color: 'var(--workshop-brass, #c4a572)',
                  letterSpacing: '-0.02em',
                }}
              >
                meibee.dev
              </span>
            </div>

            {/* Navigation links */}
            <ul className="flex items-center justify-center gap-x-2 sm:gap-x-4 text-[0.65rem] sm:text-[0.9rem] font-medium uppercase tracking-wider">
              <li className="flex items-center justify-center h-full relative">
                <a className="nav-link px-2 sm:px-4 py-2 relative" href="#home">
                  Home
                </a>
              </li>
              <li className="flex items-center justify-center h-full relative">
                <a className="nav-link px-2 sm:px-4 py-2 relative" href="#about">
                  About
                </a>
              </li>
              <li className="flex items-center justify-center h-full relative">
                <a className="nav-link px-2 sm:px-4 py-2 relative active" href="#skills">
                  Skills
                </a>
              </li>
              <li className="flex items-center justify-center h-full relative">
                <a className="nav-link px-2 sm:px-4 py-2 relative" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* Theme toggle placeholder */}
            <div
              style={{
                width: '100px',
                textAlign: 'right',
                fontFamily: "'Courier New', monospace",
                fontSize: '0.75rem',
                color: 'var(--workshop-accent, #8b4a3c)',
              }}
            >
              THEME
            </div>
          </div>
        </nav>
      </header>
      <div style={{ paddingTop: '6rem', padding: '6rem 2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--workshop-heading, #6b3a2c)', marginBottom: '1rem' }}>
          Navigation with Maker's Mark
        </h1>
        <p style={{ color: 'var(--workshop-text, #2a2622)' }}>
          This navigation features the hexagonal logo (maker's mark) on the left with the meibee.dev branding.
          The theme toggle will appear on the right side. Corner brackets removed for cleaner look with logo.
        </p>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  render: () => (
    <div style={{ minHeight: '400px', background: '#1a1815' }}>
      <header className="z-[999] relative">
        <div
          className="fixed top-0 w-full h-16 shadow-lg backdrop-blur-[0.5rem]"
          style={{
            backgroundColor: '#232018',
            borderBottom: '3px solid #3a3530',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        />
        <nav className="flex fixed top-[0.25rem] left-1/2 h-14 -translate-x-1/2 py-3 px-4 w-full max-w-7xl">
          <div className="flex items-center justify-between w-full">
            {/* Logo and brand */}
            <div className="flex items-end gap-1.5">
              <Logo variant="brass" size={32} />
              <span
                className="font-bold text-base sm:text-lg"
                style={{
                  fontFamily: 'var(--jetbrains-mono, monospace)',
                  color: '#d4c5b9',
                  letterSpacing: '-0.02em',
                }}
              >
                meibee.dev
              </span>
            </div>

            {/* Navigation links */}
            <ul className="flex items-center justify-center gap-x-2 sm:gap-x-4 text-[0.65rem] sm:text-[0.9rem] font-medium uppercase tracking-wider">
              <li className="flex items-center justify-center h-full relative">
                <a
                  className="px-2 sm:px-4 py-2 relative"
                  href="#home"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#b8956a',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </a>
              </li>
              <li className="flex items-center justify-center h-full relative">
                <a
                  className="px-2 sm:px-4 py-2 relative"
                  href="#about"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#b8956a',
                    textDecoration: 'none',
                  }}
                >
                  About
                </a>
              </li>
              <li className="flex items-center justify-center h-full relative">
                <a
                  className="px-2 sm:px-4 py-2 relative"
                  href="#skills"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#c4a572',
                    textDecoration: 'none',
                  }}
                >
                  Skills
                </a>
              </li>
              <li className="flex items-center justify-center h-full relative">
                <a
                  className="px-2 sm:px-4 py-2 relative"
                  href="#contact"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#b8956a',
                    textDecoration: 'none',
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Theme toggle placeholder */}
            <div
              style={{
                width: '100px',
                textAlign: 'right',
                fontFamily: "'Courier New', monospace",
                fontSize: '0.75rem',
                color: '#8b4a3c',
              }}
            >
              THEME
            </div>
          </div>
        </nav>
      </header>
      <div style={{ paddingTop: '6rem', padding: '6rem 2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#c4a572', marginBottom: '1rem' }}>
          Dark Theme Navigation
        </h1>
        <p style={{ color: '#e8dcc8' }}>
          Dark theme uses the brass logo variant for better contrast against the dark surface.
        </p>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};