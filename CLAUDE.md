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
See Design System in Storybook

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
```

### Configuration Notes

- **Path Mapping:** Uses `@/*` alias for `./src/*` imports
- **Workshop Colors:** CSS variables defined in `globals.css`, extended in `tailwind.config.ts`
- **Fonts:** Custom CSS variables (`--space-grotesk`, `--syne`) with workshop hierarchy
- **Environment:** Requires `.env.local` for email functionality (Resend API key)
- **Analytics:** Vercel Speed Insights and Analytics integrated in layout
- **Storybook:** All components have isolated stories for development

### Workshop Design Principles
1. **Utilitarian:** Every element serves a purpose
2. **Rebellion:** Subtle non-conformist edge over corporate polish
3. **Craftsmanship:** Attention to detail in geometric elements
4. **Function over Flash:** Mechanical interactions, not flashy animations
5. **Accessibility First:** Space Grotesk font maintained for readability