# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/profile website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The site features a single-page application showcasing personal information, skills, and contact functionality with email integration via Resend.

**IMPORTANT: This site has been completely rebranded with a "Workshop" aesthetic inspired by Bix Caleen from Star Wars Andor. The design emphasizes utilitarian craftsmanship, rebellion, and function over flash.**

## Development Commands

**Start development server:**
```bash
npm run dev
```

**Start Storybook (component development):**
```bash
npm run storybook
```

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm run start
```

**Run linting:**
```bash
npm run lint
```

## Workshop Design System

### Visual Identity
- **Philosophy:** Function over flash, utilitarian craftsmanship with subtle rebellion
- **Color Palette:** Earthy workshop tones replacing previous blue/yellow scheme
- **Typography:** Space Grotesk (accessibility) and Syne fonts with workshop hierarchy
- **Geometric Elements:** Corner brackets, diamonds, orbit circles, service markers throughout
- **No Personal Photos:** Complete removal of personal imagery for privacy/rebellion aesthetic

### Workshop Color Palette
```css
:root {
    /* Primary Palette */
    --workshop-green: #6B7F4A;
    --olive-dark: #4A5A3A;
    --moss: #8FA65D;

    /* Earth Tones */
    --rust-red: #B85C4E;
    --rust-brown: #8B4513;
    --clay: #A0522D;
    --tan-light: #D2B48C;
    --worn-canvas: #C5B59B;

    /* Neutrals */
    --steel-gray: #787571;
    --warm-white: #F5F2ED;
    --charcoal: #2C2825;
    --dust: #E8E2D5;

    /* Accent */
    --signal-orange: #D97638;
}
```

## Project Architecture

### Tech Stack
- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS with CSS modules + Workshop CSS variables
- **Component Development:** Storybook for isolated component development
- **Animations:** Framer Motion with mechanical workshop interactions
- **Email:** Resend for contact form functionality
- **Analytics:** Vercel Analytics and Speed Insights
- **Icons:** React Icons (geometric workshop symbols)
- **Fonts:** Space Grotesk (sans) and Syne (serif) via Google Fonts

### Directory Structure
```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with workshop background colors
│   ├── page.tsx      # Homepage with all workshop sections
│   └── globals.css   # Global styles + workshop CSS variables
├── components/       # Workshop-styled UI components
│   ├── intro.tsx     # Workshop hero with status badges & geometric elements
│   ├── about.tsx     # Journey timeline with service markers
│   ├── skills.tsx    # "Workshop Arsenal" with skill level indicators
│   ├── contact.tsx   # "Let's Build Something" form with workshop styling
│   ├── navigation.tsx # Workshop nav with corner brackets
│   ├── footer.tsx    # "Workshop Built" signature
│   ├── *.module.css  # Component-specific workshop styles
│   └── *.stories.tsx # Storybook stories for all components
├── actions/          # Server actions
│   └── sendEmail.tsx # Email sending with workshop success messages
├── hooks/            # Custom React hooks
│   └── useScrollPosition.ts # Scroll position tracking
└── data/             # Static content and configuration
    └── content.ts    # Skills data with workshop categorization
.storybook/           # Storybook configuration
branding.html         # Original workshop design system reference
```

### Workshop Components Architecture

**Navigation:** Canvas background with geometric corner brackets, diamond separators, workshop green hover states

**Intro Section:** "Currently Available" pulsing status badge, geometric background elements (orbit circles, diamonds), service markers, rebellious typography hierarchy

**About Section:** Journey timeline with numbered service markers, workshop philosophy callout, interactive skill tags, geometric background accents

**Skills Section:** "Workshop Arsenal" layout with:
- Service markers for categories (◈ ◆ ▶ ● ▲ ■)
- Skill level indicators (1-3 dots)
- Workshop color-coded hover states
- Background mesh patterns

**Contact Form:** "Let's Build Something" with:
- Workshop form styling with geometric field markers
- "Deploy Message" button with corner bracket accent
- Status indicators and response timing
- Workshop background geometry

**Footer:** "Workshop Built" signature with corner brackets, tech stack showcase, workshop philosophy tagline

### Workshop Interactive Elements

**Mechanical Animations:**
- Hover lift effects (translateY(-2px))
- Pulsing status indicators
- Corner bracket accents on buttons
- Service marker hover interactions

**Geometric Accents:**
- Corner brackets (workshop signature element)
- Diamond separators and backgrounds
- Orbit circles with inner elements
- Mesh and dot patterns for texture

**Workshop Button System:**
- Primary: workshop-green background
- Secondary: outlined workshop-green
- Accent: rust-red for emphasis
- All with corner bracket accents and mechanical hover

### Configuration Notes

- **Path Mapping:** Uses `@/*` alias for `./src/*` imports
- **Workshop Colors:** CSS variables defined in `globals.css`, extended in `tailwind.config.ts`
- **Fonts:** Custom CSS variables (`--space-grotesk`, `--syne`) with workshop hierarchy
- **Environment:** Requires `.env.local` for email functionality (Resend API key)
- **Analytics:** Vercel Speed Insights and Analytics integrated in layout
- **Storybook:** All components have isolated stories for development

### Content Management

All site content (skills, navigation) is centralized in `src/data/content.ts`. Skills include:
- Workshop categorization with geometric icons
- Skill levels (1-3) with visual dot indicators
- React component logos from react-icons
- Workshop-themed category titles (e.g., "COMMUNICATION" for speech)

### Workshop Design Principles
1. **Utilitarian:** Every element serves a purpose
2. **Rebellion:** Subtle non-conformist edge over corporate polish
3. **Craftsmanship:** Attention to detail in geometric elements
4. **Function over Flash:** Mechanical interactions, not flashy animations
5. **Accessibility First:** Space Grotesk font maintained for readability