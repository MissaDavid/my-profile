import type {Meta, StoryObj} from '@storybook/react';
import Footer from './footer';
import Logo from './Logo';

const meta: Meta<typeof Footer> = {
  title: 'Workshop/Pages/Footer',
  component: Footer,
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

export const WithMakersMark: Story = {
  render: () => (
    <footer
      style={{
        marginTop: '2rem',
        padding: '3rem 1.5rem 5rem',
        background: 'var(--workshop-subtle, #f5f2ed)',
        borderTop: '2px solid var(--workshop-border, #d4c5b9)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Workshop Built signature with maker's mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          <Logo variant="two-tone" size={36} />
          <div style={{ textAlign: 'left' }}>
            <div
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--workshop-heading, #6b3a2c)',
                fontWeight: 'bold',
              }}
            >
              Workshop Built
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: 'var(--workshop-secondary, #4a453e)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Maker's Mark
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--workshop-secondary, #4a453e)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          &copy; 2025 Melissa Tamplin
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ color: 'var(--workshop-secondary, #4a453e)' }}>
            Crafted with:
          </span>
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Storybook', 'Resend'].map(
            (tech, index, arr) => (
              <span key={tech}>
                <span
                  style={{
                    color: 'var(--workshop-accent, #8b4a3c)',
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </span>
                {index < arr.length - 1 && (
                  <span style={{ color: 'var(--workshop-border, #d4c5b9)', margin: '0 0.25rem' }}>
                    •
                  </span>
                )}
              </span>
            )
          )}
        </div>

        {/* Philosophy */}
        <div
          style={{
            fontSize: '0.7rem',
            color: 'var(--workshop-secondary, #4a453e)',
            fontStyle: 'italic',
          }}
        >
          Deployed on Vercel • Function over flash, always.
        </div>
      </div>
    </footer>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const DarkTheme: Story = {
  render: () => (
    <footer
      style={{
        marginTop: '2rem',
        padding: '3rem 1.5rem 5rem',
        background: '#2a2622',
        borderTop: '2px solid #3a3530',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Workshop Built signature with maker's mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          <Logo variant="brass" size={36} />
          <div style={{ textAlign: 'left' }}>
            <div
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#c4a572',
                fontWeight: 'bold',
              }}
            >
              Workshop Built
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                color: '#b8956a',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Maker's Mark
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            fontSize: '0.75rem',
            color: '#b8956a',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          &copy; 2025 Melissa Tamplin
        </div>

        {/* Tech stack */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <span style={{ color: '#b8956a' }}>Crafted with:</span>
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Storybook', 'Resend'].map(
            (tech, index, arr) => (
              <span key={tech}>
                <span
                  style={{
                    color: '#8b4a3c',
                    fontWeight: 600,
                  }}
                >
                  {tech}
                </span>
                {index < arr.length - 1 && (
                  <span style={{ color: '#3a3530', margin: '0 0.25rem' }}>•</span>
                )}
              </span>
            )
          )}
        </div>

        {/* Philosophy */}
        <div
          style={{
            fontSize: '0.7rem',
            color: '#b8956a',
            fontStyle: 'italic',
          }}
        >
          Deployed on Vercel • Function over flash, always.
        </div>
      </div>
    </footer>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};