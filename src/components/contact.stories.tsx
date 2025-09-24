import type {Meta, StoryObj} from '@storybook/react';

// Mock version of Contact component for Storybook
const ContactStory = () => {
  const mockSubmitHandler = async (formData: FormData) => {
    // Mock form submission for Storybook
    console.log('Mock form submission:', {
      email: formData.get('senderEmail'),
      name: formData.get('senderName'),
      message: formData.get('senderMessage')
    });

    // Simulate success after a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Mock: Message would be sent successfully!');
  };

  return (
    <section id="contact" style={{
      scrollMarginTop: '80px',
      marginBottom: '128px',
      maxWidth: '1536px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '24px',
      paddingRight: '24px',
      position: 'relative',
      background: 'var(--warm-white)',
      minHeight: '80vh'
    }}>
      {/* Workshop-style header */}
      <div style={{ position: 'relative', marginBottom: '60px' }}>
        <div style={{
          position: 'absolute',
          top: '-10px',
          left: '-20px',
          width: '40px',
          height: '40px',
          border: '2px solid var(--workshop-green)',
          borderRight: 'none',
          borderBottom: 'none'
        }}></div>
        <h2 style={{
          fontFamily: 'var(--syne), serif',
          fontSize: '2.25rem',
          color: 'var(--olive-dark)',
          fontWeight: 'normal',
          letterSpacing: '-1px',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>Let's Build Something</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--dust)' }}></div>
          <div style={{
            width: '12px',
            height: '12px',
            background: 'var(--workshop-green)',
            transform: 'rotate(45deg)'
          }}></div>
          <div style={{ flex: 1, height: '1px', background: 'var(--dust)' }}></div>
        </div>
      </div>

      {/* Workshop philosophy intro */}
      <div style={{ marginBottom: '60px', maxWidth: '896px' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'var(--moss)',
            color: 'var(--warm-white)',
            fontSize: '11px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            position: 'relative',
            marginBottom: '20px'
          }}>
            <div style={{
              position: 'absolute',
              left: '-25px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '12px',
              height: '12px',
              background: 'var(--workshop-green)',
              borderRadius: '50%',
              animation: 'pulse 2s infinite'
            }}></div>
            Currently Available for Projects
          </div>
        </div>

        <p style={{ color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '20px' }}>
          Ready to collaborate on meaningful projects. Direct contact: <a href="mailto:contact@meibee.dev" style={{
            color: 'var(--workshop-green)',
            fontWeight: '600',
            textDecoration: 'none',
            position: 'relative'
          }}>contact@meibee.dev</a>
        </p>

        <p style={{ color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '20px' }}>
          Or use the workshop communication form below—function over flash, but it gets the job done.
        </p>
      </div>

      {/* Workshop form */}
      <div style={{ position: 'relative', maxWidth: '800px' }}>
        <form
          style={{
            background: 'var(--dust)',
            padding: '40px',
            position: 'relative',
            border: '1px solid var(--dust)'
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            mockSubmitHandler(formData);
          }}
        >
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '30px',
            height: '30px',
            border: '2px solid var(--workshop-green)',
            borderRight: 'none',
            borderBottom: 'none',
            opacity: '0.3'
          }}></div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '30px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--olive-dark)'
              }}>
                <span style={{
                  width: '20px',
                  height: '20px',
                  background: 'var(--workshop-green)',
                  color: 'var(--warm-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  flexShrink: 0
                }}>◈</span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="senderEmail"
                required={true}
                autoComplete="email"
                placeholder="your.email@domain.com"
                style={{
                  padding: '15px 20px',
                  background: 'var(--warm-white)',
                  border: '2px solid var(--dust)',
                  fontFamily: 'var(--space-grotesk), sans-serif',
                  fontSize: '14px',
                  color: 'var(--charcoal)',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--olive-dark)'
              }}>
                <span style={{
                  width: '20px',
                  height: '20px',
                  background: 'var(--workshop-green)',
                  color: 'var(--warm-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  flexShrink: 0
                }}>◆</span>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="senderName"
                minLength={1}
                maxLength={100}
                required={true}
                autoComplete="name"
                placeholder="Your name"
                style={{
                  padding: '15px 20px',
                  background: 'var(--warm-white)',
                  border: '2px solid var(--dust)',
                  fontFamily: 'var(--space-grotesk), sans-serif',
                  fontSize: '14px',
                  color: 'var(--charcoal)',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="message" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--olive-dark)'
            }}>
              <span style={{
                width: '20px',
                height: '20px',
                background: 'var(--workshop-green)',
                color: 'var(--warm-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                flexShrink: 0
              }}>▶</span>
              Project Brief
            </label>
            <textarea
              name="senderMessage"
              id="message"
              rows={6}
              required={true}
              autoComplete="off"
              placeholder="Tell me about your project, challenges, or ideas. What are we building together?"
              style={{
                padding: '15px 20px',
                background: 'var(--warm-white)',
                border: '2px solid var(--dust)',
                fontFamily: 'var(--space-grotesk), sans-serif',
                fontSize: '14px',
                color: 'var(--charcoal)',
                transition: 'all 0.3s ease',
                resize: 'vertical',
                minHeight: '120px',
                lineHeight: '1.6'
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '40px'
          }}>
            <button
              type="submit"
              style={{
                background: 'var(--workshop-green)',
                color: 'var(--warm-white)',
                border: 'none',
                padding: '12px 30px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '12px',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                position: 'relative',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              Deploy Message
              <span style={{ fontSize: '10px', opacity: 0.8 }}>✈</span>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '12px',
                height: '12px',
                opacity: 0.6,
                border: '1px solid var(--warm-white)',
                borderRight: 'none',
                borderBottom: 'none'
              }}></div>
            </button>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11px',
              color: 'var(--steel-gray)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: 'var(--workshop-green)',
                borderRadius: '50%',
                display: 'inline-block'
              }}></span>
              Response within 24-48 hours
            </div>
          </div>
        </form>

        {/* Form accent elements */}
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {['01', '02', '03'].map(num => (
            <div key={num} style={{
              width: '30px',
              height: '30px',
              background: 'var(--rust-red)',
              color: 'var(--warm-white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              opacity: 0.6,
              transition: 'all 0.3s ease'
            }}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const meta: Meta<typeof ContactStory> = {
  title: 'Workshop/Contact',
  component: ContactStory,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};