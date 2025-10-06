import type {Preview} from "@storybook/nextjs-vite";
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1a1815',
        },
        {
          name: 'light',
          value: '#faf8f5',
        },
        {
          name: 'workshop-dark',
          value: '#2a2622',
        },
        {
          name: 'workshop-surface',
          value: '#232018',
        },
      ],
    },

    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;
