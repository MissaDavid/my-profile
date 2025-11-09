# Portfolio Content Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement holistic portfolio content redesign with Workshop craftsperson aesthetic across all sections (Hero, About, Skills, Contact)

**Architecture:** Content-focused refactoring using existing Workshop design system components (WorkshopCard, WorkshopButton, WorkshopInput). Restructure About section with 3 craft phase cards, reorganize Skills into 4 workshop station cards, update Hero messaging and Contact collaboration tone.

**Tech Stack:** Next.js 14, TypeScript, React, Tailwind CSS, CSS Modules, Framer Motion

**Design Document:** `/Users/mel/ws/my-profile/docs/plans/2025-11-09-portfolio-content-redesign.md`

**Git Commit Standards:** Follow Conventional Commits (reference: `git_commit_standards` memory)

---

## Task 1: Update Hero/Intro Section

**Goal:** Replace generic tagline with curiosity hook, update tech stack pills, refine CTAs

**Files:**
- Modify: `src/components/intro.tsx`
- Modify: `src/components/intro.module.css` (if needed for styling)

### Step 1: Update hero messaging and tagline

Edit `src/components/intro.tsx` lines 17-29:

**Current:**
```tsx
<span className={styles.heroLabel}>Full-Stack Craftsperson</span>
<h1 className={styles.heroTitle}>Melissa</h1>
<p className={styles.heroSubtitle}>Software Developer</p>
<p className={styles.heroDescription}>
  Building robust digital solutions with care and precision. Based in Ottawa, Canada,
  I approach each project as a maker who believes in doing things right.
</p>
```

**Replace with:**
```tsx
<p className={styles.heroHook}>
  "From translation work to building backend systems—precision work takes many forms."
</p>
<h1 className={styles.heroTitle}>Melissa Tamplin</h1>
<p className={styles.heroSubtitle}>Full-Stack Craftsperson | Backend-Focused</p>
<p className={styles.heroLocation}>Based in Ottawa, Canada</p>
<p className={styles.heroDescription}>
  I build robust digital solutions with the same care and precision required for translation:
  attention to detail, understanding what lies underneath, and function over flash.
</p>
```

### Step 2: Update CSS for new messaging structure

Add to `src/components/intro.module.css`:

```css
.heroHook {
    font-style: italic;
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--workshop-brass);
    margin-bottom: 1.5rem;
    font-family: var(--syne), serif;
}

.heroLocation {
    font-size: 1rem;
    color: var(--steel-gray);
    margin-bottom: 1.5rem;
    font-family: var(--space-grotesk), sans-serif;
}
```

Update `.heroTitle` if needed to accommodate full name "Melissa Tamplin".

### Step 3: Update tech stack pills

Edit `src/components/intro.tsx` lines 32-39:

**Current:**
```tsx
<div className={styles.heroSkills}>
  <span className={styles.skillTag}>Python</span>
  <span className={styles.skillTag}>FastAPI</span>
  <span className={styles.skillTag}>TypeScript</span>
  <span className={styles.skillTag}>React</span>
  <span className={styles.skillTag}>Next.js</span>
  <span className={styles.skillTag}>PostgreSQL</span>
</div>
```

**Replace with:**
```tsx
<div className={styles.heroSkills}>
  <span className={styles.skillTag}>Python</span>
  <span className={styles.skillTag}>.NET/C#</span>
  <span className={styles.skillTag}>TypeScript</span>
  <span className={styles.skillTag}>PostgreSQL</span>
  <span className={styles.skillTag}>Docker</span>
</div>
```

### Step 4: Update CTA buttons

Edit `src/components/intro.tsx` lines 42-70 (approximate):

**Change primary button text:**
```tsx
<Link href="#contact">
  <WorkshopButton variant="primary" theme="dark">
    Start a Project
  </WorkshopButton>
</Link>
```

**Change secondary button text:**
Find the button that currently says "Contact Me" or similar scroll-to-skills button, update to:
```tsx
<Link href="#skills">
  <WorkshopButton variant="secondary" theme="dark">
    View Toolkit
  </WorkshopButton>
</Link>
```

Keep CV, LinkedIn, GitHub buttons unchanged.

### Step 5: Test in browser

**Run:**
```bash
# Dev server should already be running on port 3001
# Navigate to http://localhost:3001
```

**Verify:**
- [ ] Hero hook displays with italic styling
- [ ] "Melissa Tamplin" full name shows in title
- [ ] Subtitle shows "Full-Stack Craftsperson | Backend-Focused"
- [ ] Location line displays
- [ ] Updated tagline shows correctly
- [ ] Tech stack shows: Python, .NET/C#, TypeScript, PostgreSQL, Docker
- [ ] Primary button says "Start a Project"
- [ ] Secondary button says "View Toolkit" and links to #skills
- [ ] No console errors

### Step 6: Commit

```bash
git add src/components/intro.tsx src/components/intro.module.css
git commit -m "feat: update hero section with curiosity hook and refined messaging

- Add opening hook about translation to backend systems
- Update to full name 'Melissa Tamplin'
- Refine tagline emphasizing precision and understanding what lies underneath
- Update tech stack pills to reflect core tools (Python, .NET/C#, TypeScript, PostgreSQL, Docker)
- Update CTAs: 'Start a Project' and 'View Toolkit'

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 2: Create Enhanced WorkshopCard Component

**Goal:** Extend WorkshopCard to support workshop markers, skill badges, and About/Skills section needs

**Files:**
- Modify: `src/components/WorkshopCard.tsx`
- Modify: `src/components/WorkshopCard.module.css`

### Step 1: Extend WorkshopCard props

Edit `src/components/WorkshopCard.tsx`:

**Current interface (lines 4-12):**
```tsx
export interface WorkshopCardProps {
  children: React.ReactNode;
  title?: string;
  statusLight?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
  role?: string;
}
```

**Replace with:**
```tsx
export interface WorkshopCardProps {
  children: React.ReactNode;
  title?: string;
  statusLight?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
  ariaLabel?: string;
  role?: string;
  marker?: string; // Workshop marker like "01", "◈", etc.
  skillBadge?: string; // Skill badge text like "Attention to Detail"
}
```

### Step 2: Update WorkshopCard component JSX

Edit `src/components/WorkshopCard.tsx` component body:

**Current (lines 14-34):**
```tsx
export default function WorkshopCard({
  children,
  title,
  statusLight = true,
  className = '',
  theme = 'dark',
  ariaLabel,
  role,
}: WorkshopCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[theme]} ${className}`}
      aria-label={ariaLabel}
      role={role}
    >
      {statusLight && <div className={styles.statusLight} aria-hidden="true" />}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
```

**Replace with:**
```tsx
export default function WorkshopCard({
  children,
  title,
  statusLight = true,
  className = '',
  theme = 'dark',
  ariaLabel,
  role,
  marker,
  skillBadge,
}: WorkshopCardProps) {
  return (
    <div
      className={`${styles.card} ${styles[theme]} ${className}`}
      aria-label={ariaLabel}
      role={role}
    >
      {statusLight && <div className={styles.statusLight} aria-hidden="true" />}
      {marker && <div className={styles.marker} aria-hidden="true">{marker}</div>}
      {skillBadge && <div className={styles.skillBadge}>{skillBadge}</div>}
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
```

### Step 3: Add CSS for marker and skill badge

Add to `src/components/WorkshopCard.module.css`:

```css
.marker {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--workshop-green);
    opacity: 0.3;
    font-family: var(--jetbrains-mono), monospace;
    line-height: 1;
}

.skillBadge {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 6px 12px;
    background: var(--moss);
    color: var(--warm-white);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 2px;
}
```

### Step 4: Test WorkshopCard enhancements

Create a temporary test in Storybook or directly in a component:

**Verify:**
- [ ] WorkshopCard accepts marker prop (displays top-left)
- [ ] WorkshopCard accepts skillBadge prop (displays top-right)
- [ ] Existing props still work (title, statusLight, theme)
- [ ] No TypeScript errors
- [ ] Styling doesn't conflict with existing cards

### Step 5: Commit

```bash
git add src/components/WorkshopCard.tsx src/components/WorkshopCard.module.css
git commit -m "feat: extend WorkshopCard with marker and skill badge support

- Add marker prop for workshop phase numbers or station symbols
- Add skillBadge prop for skill acquisition badges
- Style marker as large workshop-green text in top-left
- Style skillBadge as small workshop badge in top-right
- Maintains backward compatibility with existing WorkshopCard usage

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 3: Redesign About Section - Structure

**Goal:** Replace current timeline with 3 WorkshopCard craft phases and "Beyond the Keyboard" section

**Files:**
- Modify: `src/components/about.tsx`
- Modify: `src/components/about.module.css`

### Step 1: Update section header

Edit `src/components/about.tsx`:

**Find and update section title** (around line 62 based on audit):
```tsx
<h2 className={styles.title}>Building the Toolbox</h2>
```

### Step 2: Replace journey items with WorkshopCard phases

**Import WorkshopCard at top of file:**
```tsx
import WorkshopCard from "@/components/WorkshopCard";
```

**Find the journey items section** (currently has .journeyItem with markers 01-04).

**Replace entire journey section with:**
```tsx
<div className={styles.craftPhases}>
  {/* Phase 1: Translation Craft */}
  <WorkshopCard
    theme="light"
    marker="01"
    skillBadge="Attention to Detail"
    className={styles.phaseCard}
  >
    <h3 className={styles.phaseTitle}>Language & Precision</h3>
    <p className={styles.phaseContent}>
      Started as a translator specializing in Korean language—literature,
      cinema, traditional arts. Turns out translating a 400-page novel teaches
      you a lot about precision: every word carries weight, context shapes
      meaning, and quality lives in the details most people never see.
    </p>
  </WorkshopCard>

  {/* Phase 2: Software Craft */}
  <WorkshopCard
    theme="light"
    marker="02"
    skillBadge="Problem Solving"
    className={styles.phaseCard}
  >
    <h3 className={styles.phaseTitle}>Building Systems</h3>
    <p className={styles.phaseContent}>
      Intensive bootcamp in Paris revealed that spoken languages and programming
      languages aren't so different—both need structure, syntax, and an
      understanding of how pieces connect. First full-stack role in Melbourne's
      caffeinated chaos: learning to build systems from start to finish, at
      every layer.
    </p>
  </WorkshopCard>

  {/* Phase 3: Systems Craft */}
  <WorkshopCard
    theme="light"
    marker="03"
    skillBadge="System Design"
    className={styles.phaseCard}
  >
    <h3 className={styles.phaseTitle}>What Lies Beneath</h3>
    <p className={styles.phaseContent}>
      Deliberately dove into backend work—the foundation that makes everything
      else possible. Python, .NET, databases, APIs. There's something satisfying
      about building the engine room. Now as a consultant, I get the best of
      both worlds: variety in projects, depth in systems.
    </p>
  </WorkshopCard>
</div>
```

### Step 3: Update "Beyond the Keyboard" section

**Find the current interests/philosophy section**, replace with:
```tsx
<div className={styles.beyondCode}>
  <h3 className={styles.beyondTitle}>Beyond the Keyboard</h3>
  <p className={styles.beyondContent}>
    Off-duty, you'll find me playing video games, crocheting, soldering retro
    consoles, playing music, throwing pottery, or managing two very opinionated
    cats.
  </p>
</div>
```

### Step 4: Remove old "Workshop Philosophy" section

**Delete or comment out** the current philosophy callout section (the one with "WORKSHOP PHILOSOPHY" header).

### Step 5: Commit structure changes

```bash
git add src/components/about.tsx
git commit -m "refactor: restructure about section with 3 craft phases

- Replace timeline with WorkshopCard components for each phase
- Phase 1: Translation Craft (Language & Precision)
- Phase 2: Software Craft (Building Systems)
- Phase 3: Systems Craft (What Lies Beneath)
- Add 'Beyond the Keyboard' section with maker interests
- Remove old workshop philosophy callout

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 4: Style About Section Craft Phases

**Goal:** Update CSS to properly style the new craft phases layout

**Files:**
- Modify: `src/components/about.module.css`

### Step 1: Add craft phases container styles

Add to `src/components/about.module.css`:

```css
.craftPhases {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
}

.phaseCard {
    position: relative;
    width: 100%;
}

.phaseTitle {
    font-family: var(--syne), serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--olive-dark);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
}

.phaseContent {
    font-family: var(--space-grotesk), sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--charcoal);
}
```

### Step 2: Add "Beyond the Keyboard" styles

Add to `src/components/about.module.css`:

```css
.beyondCode {
    background: var(--dust);
    padding: 30px;
    border-left: 4px solid var(--workshop-green);
    margin-top: 40px;
}

.beyondTitle {
    font-family: var(--syne), serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--olive-dark);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
}

.beyondContent {
    font-family: var(--space-grotesk), sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--charcoal);
}
```

### Step 3: Remove or comment out old styles

**Comment out or remove** styles for:
- `.journeyItem`
- `.marker` (the numbered circles - now handled by WorkshopCard)
- `.journeyContent`
- `.journeyTitle`
- Old philosophy section styles

### Step 4: Test in browser

**Navigate to:** `http://localhost:3001/#about`

**Verify:**
- [ ] "Building the Toolbox" header displays
- [ ] 3 WorkshopCard phases display vertically
- [ ] Each card shows marker (01, 02, 03) in top-left
- [ ] Each card shows skill badge in top-right
- [ ] Phase titles are properly styled
- [ ] Content is readable and well-spaced
- [ ] "Beyond the Keyboard" section displays with left border accent
- [ ] Responsive: Cards stack properly on mobile
- [ ] No console errors

### Step 5: Commit styling

```bash
git add src/components/about.module.css
git commit -m "style: update about section styles for craft phases

- Add craftPhases container with vertical layout
- Style phaseCard, phaseTitle, phaseContent for WorkshopCard usage
- Add beyondCode section styles with workshop green accent border
- Remove old timeline/journey styles
- Maintain responsive behavior

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 5: Redesign Skills Section - Data Structure

**Goal:** Reorganize skills data into 4 workshop stations with proper categorization

**Files:**
- Modify: `src/data/content.ts`

### Step 1: Add station category mappings

At the end of `src/data/content.ts`, add:

```typescript
export type WorkshopStation = {
  id: string;
  name: string;
  marker: string;
  description: string;
  skillIds: string[];
};

export const workshopStations: WorkshopStation[] = [
  {
    id: "backend",
    name: "Backend Station",
    marker: "◈",
    description: "Primary workshop area",
    skillIds: [
      "python",     // Python
      "django",     // Django
      "fastapi",    // FastAPI
      "flask",      // Flask
      "drf",        // DRF
      "c#",         // C#
      "dotnet",     // .NET
      "postgresql", // PostgreSQL
    ],
  },
  {
    id: "frontend",
    name: "Frontend Station",
    marker: "◆",
    description: "Supporting capabilities",
    skillIds: [
      "typescript",  // TypeScript
      "javascript",  // JavaScript
      "react",       // React
      "nextjs",      // Next.js
      "html",        // HTML
      "css",         // CSS
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure Station",
    marker: "▶",
    description: "DevOps & deployment",
    skillIds: [
      "docker",  // Docker
      "aws",     // AWS
      "gcp",     // GCP
      "git",     // Git
    ],
  },
  {
    id: "communication",
    name: "Communication Station",
    marker: "●",
    description: "Unique differentiator",
    skillIds: [
      "english",  // English
      "french",   // French
      "korean",   // Korean
    ],
  },
];

// Helper function to get skills by station
export function getSkillsByStation(stationId: string): Skill[] {
  const station = workshopStations.find(s => s.id === stationId);
  if (!station) return [];

  return station.skillIds
    .map(id => skills.find(skill => skill.id === id))
    .filter((skill): skill is Skill => skill !== undefined);
}
```

### Step 2: Add Azure and GitHub Actions skills

**Insert into skills array** before the closing bracket:

```typescript
{
  id: "azure",
  category: "tools",
  name: "Azure",
  level: 2,
  logo: TbCloud(), // Reuse cloud icon
},
{
  id: "github-actions",
  category: "tools",
  name: "GitHub Actions",
  level: 2,
  logo: TbBrandGit(), // Use Git icon for now
},
```

### Step 3: Add Vue framework skill

**Insert into skills array:**

```typescript
{
  id: "vue",
  category: "frameworks",
  name: "Vue",
  level: 2,
  logo: TbBrandReact(), // Reuse React icon or find Vue icon from react-icons
},
```

### Step 4: Update infrastructure station to include new tools

Update the infrastructure station in `workshopStations`:

```typescript
{
  id: "infrastructure",
  name: "Infrastructure Station",
  marker: "▶",
  description: "DevOps & deployment",
  skillIds: [
    "docker",         // Docker
    "aws",            // AWS
    "gcp",            // GCP
    "azure",          // Azure
    "git",            // Git
    "github-actions", // GitHub Actions
  ],
},
```

### Step 5: Update frontend station to include Vue

Update the frontend station:

```typescript
{
  id: "frontend",
  name: "Frontend Station",
  marker: "◆",
  description: "Supporting capabilities",
  skillIds: [
    "typescript",  // TypeScript
    "javascript",  // JavaScript
    "react",       // React
    "nextjs",      // Next.js
    "vue",         // Vue
    "html",        // HTML
    "css",         // CSS
  ],
},
```

### Step 6: Test data structure

**Create a temporary test file** or use Node REPL:

```bash
node -e "const { workshopStations, getSkillsByStation } = require('./src/data/content.ts'); console.log(workshopStations); console.log(getSkillsByStation('backend'));"
```

**Or test in component:** Import and log the data to verify structure.

**Verify:**
- [ ] workshopStations exports correctly
- [ ] All 4 stations defined with correct markers
- [ ] getSkillsByStation helper function works
- [ ] New skills (Azure, GitHub Actions, Vue) included
- [ ] No TypeScript errors

### Step 7: Commit data structure

```bash
git add src/data/content.ts
git commit -m "feat: reorganize skills into workshop stations data structure

- Add workshopStations array with 4 stations (Backend, Frontend, Infrastructure, Communication)
- Add station markers (◈ ◆ ▶ ●) and descriptions
- Add getSkillsByStation helper function
- Add Azure, GitHub Actions, Vue skills
- Map existing skills to appropriate stations

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 6: Redesign Skills Section - Component Structure

**Goal:** Rebuild skills section to display 4 workshop stations using WorkshopCard

**Files:**
- Modify: `src/components/skills.tsx`

### Step 1: Update imports and data references

Edit `src/components/skills.tsx`:

**Update imports:**
```tsx
import React from "react";
import styles from "./skills.module.css";
import { workshopStations, getSkillsByStation } from "@/data/content";
import WorkshopCard from "@/components/WorkshopCard";
```

### Step 2: Update section header and philosophy

**Find section title**, update to:
```tsx
<h2 className={styles.title}>Workshop Toolkit</h2>
```

**Find philosophy text**, update to:
```tsx
<div className={styles.philosophy}>
  <p>
    Backend-focused craftsperson comfortable across the full stack.
    Building software since 2019, from startup MVPs to enterprise systems.
    Give me a new language or framework—I&apos;ll figure it out.
  </p>
</div>
```

### Step 3: Replace skills arsenal with station cards

**Replace the current skills rendering code** with:

```tsx
<div className={styles.stationsGrid}>
  {workshopStations.map((station) => {
    const stationSkills = getSkillsByStation(station.id);

    return (
      <WorkshopCard
        key={station.id}
        theme="light"
        marker={station.marker}
        className={styles.stationCard}
        statusLight={false}
      >
        <h3 className={styles.stationName}>{station.name}</h3>
        <p className={styles.stationDescription}>{station.description}</p>

        <div className={styles.stationTools}>
          {stationSkills.map((skill) => (
            <div key={skill.id} className={styles.toolItem}>
              <div className={styles.toolIcon} aria-hidden="true">
                {skill.logo}
              </div>
              <span className={styles.toolName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </WorkshopCard>
    );
  })}
</div>
```

### Step 4: Remove old skills rendering code

**Delete or comment out:**
- Old skills category sections
- Skill level dots rendering
- Old category markers
- Any code referencing the old `skills.filter(...)` approach

### Step 5: Test component rendering

**Navigate to:** `http://localhost:3001/#skills`

**Verify:**
- [ ] "Workshop Toolkit" header displays
- [ ] Updated philosophy text shows "since 2019"
- [ ] 4 WorkshopCard stations render
- [ ] Each card shows correct marker (◈ ◆ ▶ ●)
- [ ] Station names and descriptions display
- [ ] Tools list correctly per station
- [ ] No TypeScript errors
- [ ] No console errors

### Step 6: Commit component structure

```bash
git add src/components/skills.tsx
git commit -m "refactor: redesign skills section with workshop stations

- Update section title to 'Workshop Toolkit'
- Update philosophy text with 'since 2019' and refined messaging
- Replace category-based skills with 4 workshop station cards
- Map skills to stations: Backend, Frontend, Infrastructure, Communication
- Display tools within each station WorkshopCard
- Remove old skills arsenal rendering

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 7: Style Skills Section Workshop Stations

**Goal:** Style the 4 workshop station cards in responsive grid layout

**Files:**
- Modify: `src/components/skills.module.css`

### Step 1: Add stations grid layout

Add to `src/components/skills.module.css`:

```css
.stationsGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 40px;
}

@media (max-width: 768px) {
    .stationsGrid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

.stationCard {
    position: relative;
    min-height: 300px;
}
```

### Step 2: Style station headers

Add to `src/components/skills.module.css`:

```css
.stationName {
    font-family: var(--syne), serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--olive-dark);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
    margin-top: 40px; /* Space for marker */
}

.stationDescription {
    font-family: var(--space-grotesk), sans-serif;
    font-size: 0.875rem;
    color: var(--steel-gray);
    font-style: italic;
    margin-bottom: 20px;
}
```

### Step 3: Style tools list

Add to `src/components/skills.module.css`:

```css
.stationTools {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.toolItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 80px;
}

.toolIcon {
    font-size: 2.5rem;
    color: var(--workshop-green);
    transition: transform 0.2s ease, color 0.2s ease;
}

.toolItem:hover .toolIcon {
    transform: translateY(-3px);
    color: var(--moss);
}

.toolName {
    font-family: var(--space-grotesk), sans-serif;
    font-size: 0.875rem;
    color: var(--charcoal);
    text-align: center;
    font-weight: 500;
}
```

### Step 4: Update philosophy section styles

Update existing `.philosophy` styles:

```css
.philosophy {
    max-width: 800px;
    margin: 0 auto 40px;
    text-align: center;
}

.philosophy p {
    font-family: var(--space-grotesk), sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--charcoal);
}
```

### Step 5: Remove old skill styles

**Comment out or remove:**
- `.skillsArsenal`
- Old category marker styles
- Skill level dot styles
- Old skill card styles
- Any styles referencing old structure

### Step 6: Test styling in browser

**Navigate to:** `http://localhost:3001/#skills`

**Verify:**
- [ ] 2x2 grid on desktop (Backend/Frontend in row 1, Infrastructure/Communication in row 2)
- [ ] Cards have proper spacing and minimum height
- [ ] Station markers display in top-left of each card
- [ ] Station names and descriptions properly styled
- [ ] Tools display in flexible grid within each card
- [ ] Tool icons are properly sized and colored workshop green
- [ ] Hover effects work on tool icons
- [ ] Mobile: Grid becomes 1 column, cards stack vertically
- [ ] Philosophy text is centered and readable
- [ ] No styling conflicts or overlaps

### Step 7: Commit styling

```bash
git add src/components/skills.module.css
git commit -m "style: add workshop stations grid layout and tool styling

- Create 2x2 responsive grid for 4 workshop stations
- Style station cards with proper spacing and min-height
- Style station headers with workshop typography
- Add tool icons and labels with hover effects
- Update philosophy section centering
- Remove old skill category styles
- Mobile responsive: stack stations vertically

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 8: Update Contact Section Messaging

**Goal:** Update contact section header and messaging to collaborative "Let's Build Together" tone

**Files:**
- Modify: `src/components/contact.tsx`
- Modify: `src/components/contact.module.css`

### Step 1: Update section title

Edit `src/components/contact.tsx`:

**Find the title** (around line 45):
```tsx
<h2 className={styles.title}>Let&apos;s Build Together</h2>
```

### Step 2: Update intro message

**Find the intro section** (around lines 54-68), replace with:

```tsx
<div className={styles.intro}>
  <p className={styles.introText}>
    Available for consulting projects and collaborative builds.
    Whether you need backend architecture, full-stack development,
    or someone who can bridge technical and human communication—
    let&apos;s talk.
  </p>
  <p className={styles.introText}>
    Direct contact: <a href="mailto:contact@meibee.dev" className={styles.emailLink}>contact@meibee.dev</a>
  </p>
  <p className={styles.introText}>
    Or use the form below.
  </p>
</div>
```

### Step 3: Remove status badge section

**Delete or comment out** the `statusSection` and `statusBadge` div (around lines 55-60 in current file).

### Step 4: Update submit button text

**Find the SubmitButtonWrapper component** (around line 12-36), update button text:

```tsx
{pending ? (
  <>
    <div
      className="animate-spin h-4 w-4 rounded-full border-2 border-t-transparent"
      style={{ borderColor: "var(--warm-white)" }}
    />
    Sending...
  </>
) : (
  <>
    Start the Conversation
    <FaPaperPlane style={{ opacity: 0.8 }} />
  </>
)}
```

### Step 5: Remove response note

**Find and delete** the `responseNote` div (around line 137-140):
```tsx
{/* DELETE THIS:
<div className={styles.responseNote}>
  <span className={styles.responseIcon}>●</span>
  Response within 24-48 hours
</div>
*/}
```

### Step 6: Update form field placeholder for Project Brief

**Find the textarea** (around line 124-132), update placeholder:

```tsx
<textarea
  name="senderMessage"
  id="message"
  rows={6}
  required={true}
  autoComplete="off"
  className={styles.fieldTextarea}
  placeholder="Tell me about your project, the challenges you're facing, or what you're hoping to build."
/>
```

### Step 7: Test contact form

**Navigate to:** `http://localhost:3001/#contact`

**Verify:**
- [ ] Section title shows "Let's Build Together"
- [ ] New intro message displays (3 paragraphs)
- [ ] No status badge present
- [ ] Email link works
- [ ] Form fields render correctly
- [ ] Submit button says "Start the Conversation"
- [ ] Loading state says "Sending..."
- [ ] No response note at bottom
- [ ] Updated placeholder in Project Brief textarea
- [ ] No console errors

### Step 8: Commit messaging updates

```bash
git add src/components/contact.tsx
git commit -m "feat: update contact section with collaborative messaging

- Change title to 'Let's Build Together'
- Update intro to emphasize consulting availability and collaboration
- Remove 'Currently Available' pulsing status badge
- Update submit button text to 'Start the Conversation'
- Remove response time promise note
- Update Project Brief placeholder with refined messaging

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 9: Clean Up Contact Section Styles

**Goal:** Remove CSS for deleted elements (status badge, response note, service markers)

**Files:**
- Modify: `src/components/contact.module.css`

### Step 1: Remove status section styles

**Comment out or delete** from `src/components/contact.module.css`:

```css
/* DELETE:
.statusSection { ... }
.statusBadge { ... }
.pulse { ... }
@keyframes pulse { ... }
*/
```

### Step 2: Remove response note styles

**Comment out or delete:**

```css
/* DELETE:
.responseNote { ... }
.responseIcon { ... }
*/
```

### Step 3: Remove form accent service markers

**Comment out or delete:**

```css
/* DELETE:
.formAccents { ... }
.serviceMarker { ... }
*/
```

Also delete the `formAccents` div rendering in JSX if still present (around line 145-149).

### Step 4: Adjust submitSection layout

**Update `.submitSection`** to accommodate removed elements:

```css
.submitSection {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 40px;
}
```

### Step 5: Test styling

**Navigate to:** `http://localhost:3001/#contact`

**Verify:**
- [ ] No status badge displays
- [ ] No response note displays
- [ ] No service markers (01, 02, 03) on right side
- [ ] Submit button properly positioned
- [ ] Form layout remains clean and functional
- [ ] Responsive behavior intact
- [ ] No broken CSS references in console

### Step 6: Commit style cleanup

```bash
git add src/components/contact.module.css
git commit -m "style: remove status badge and accent elements from contact

- Remove statusBadge, statusSection, pulse animation styles
- Remove responseNote and responseIcon styles
- Remove formAccents and serviceMarker styles
- Simplify submitSection layout
- Maintain clean workshop aesthetic without removed elements

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 10: Comprehensive Browser Testing

**Goal:** Test all redesigned sections across desktop, tablet, and mobile viewports

**Files:**
- No file changes, testing only

### Step 1: Test Hero/Intro section

**Navigate to:** `http://localhost:3001/`

**Desktop (1920x1080):**
- [ ] Hero hook displays correctly
- [ ] Full name "Melissa Tamplin" shows
- [ ] Tagline emphasizes precision and "what lies underneath"
- [ ] Tech stack shows updated 5 pills
- [ ] "Start a Project" and "View Toolkit" buttons work
- [ ] Click "Start a Project" → scrolls to #contact
- [ ] Click "View Toolkit" → scrolls to #skills

**Tablet (768x1024):**
- [ ] Hero layout adapts responsively
- [ ] Text remains readable
- [ ] Buttons maintain proper sizing

**Mobile (375x812):**
- [ ] Hero stacks vertically
- [ ] All text readable
- [ ] Buttons full-width or properly sized

### Step 2: Test About section

**Navigate to:** `http://localhost:3001/#about`

**Desktop (1920x1080):**
- [ ] "Building the Toolbox" header displays
- [ ] 3 WorkshopCard phases render vertically
- [ ] Each phase shows marker (01, 02, 03)
- [ ] Each phase shows skill badge (Attention to Detail, Problem Solving, System Design)
- [ ] Phase titles and content readable
- [ ] "Beyond the Keyboard" section displays with left border
- [ ] Content reads naturally with personality

**Tablet (768x1024):**
- [ ] Cards maintain full width
- [ ] Spacing appropriate

**Mobile (375x812):**
- [ ] Cards stack properly
- [ ] Markers and badges remain visible
- [ ] Content remains readable

### Step 3: Test Skills section

**Navigate to:** `http://localhost:3001/#skills`

**Desktop (1920x1080):**
- [ ] "Workshop Toolkit" header displays
- [ ] Philosophy text centered and readable
- [ ] 4 station cards in 2x2 grid
- [ ] Each card shows marker (◈ ◆ ▶ ●)
- [ ] Station names and descriptions display
- [ ] Tools render with icons and labels
- [ ] Hover effects work on tool icons
- [ ] Backend station shows: Python, Django, FastAPI, Flask, DRF, C#, .NET, PostgreSQL
- [ ] Frontend station shows: TypeScript, JavaScript, React, Next.js, Vue, HTML, CSS
- [ ] Infrastructure station shows: Docker, AWS, GCP, Azure, Git, GitHub Actions
- [ ] Communication station shows: English, French, Korean

**Tablet (768x1024):**
- [ ] 2x2 grid maintains or becomes 1 column
- [ ] Cards readable

**Mobile (375x812):**
- [ ] Cards stack in single column
- [ ] Tool icons properly sized
- [ ] No horizontal overflow

### Step 4: Test Contact section

**Navigate to:** `http://localhost:3001/#contact`

**Desktop (1920x1080):**
- [ ] "Let's Build Together" header displays
- [ ] Intro message emphasizes collaboration
- [ ] Email link works
- [ ] No status badge present
- [ ] Form renders with WorkshopInput fields
- [ ] Textarea for Project Brief has updated placeholder
- [ ] Submit button says "Start the Conversation"
- [ ] No response note present
- [ ] No service markers on right side

**Tablet (768x1024):**
- [ ] Form layout adapts

**Mobile (375x812):**
- [ ] Form fields stack vertically
- [ ] Submit button full-width

### Step 5: Check console for errors

**Open browser console:**
- [ ] No React errors
- [ ] No TypeScript errors
- [ ] No missing import warnings
- [ ] No CSS warnings

### Step 6: Test interactions

**Full workflow:**
1. [ ] Navigate through all sections via nav links
2. [ ] Click all CTA buttons
3. [ ] Hover over interactive elements
4. [ ] Fill out contact form (don't submit unless testing email)
5. [ ] Scroll through entire page smoothly

### Step 7: Document test results

Create: `docs/workshop-content-testing-results.md`

```markdown
# Workshop Content Redesign - Testing Results
**Date:** [Current Date]
**Browser:** [Browser used]
**Viewports Tested:** Desktop (1920x1080), Tablet (768x1024), Mobile (375x812)

## Test Summary
[Summarize overall results]

## Hero/Intro Section
- Status: [PASS/FAIL]
- Issues: [List any issues found]

## About Section
- Status: [PASS/FAIL]
- Issues: [List any issues found]

## Skills Section
- Status: [PASS/FAIL]
- Issues: [List any issues found]

## Contact Section
- Status: [PASS/FAIL]
- Issues: [List any issues found]

## Console Errors
- [List any errors or note "None found"]

## Recommendations
- [Any suggested improvements]
```

### Step 8: Commit test documentation

```bash
git add docs/workshop-content-testing-results.md
git commit -m "docs: comprehensive testing results for content redesign

- Tested all sections across desktop, tablet, mobile viewports
- Verified all interactions and navigation
- Checked console for errors
- Documented findings and recommendations

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 11: Production Build Verification

**Goal:** Ensure redesigned content builds successfully for production

**Files:**
- No file changes, verification only

### Step 1: Stop dev server

```bash
# Kill any running dev servers
pkill -f "next"
```

### Step 2: Run production build

```bash
npm run build
```

**Expected output:**
- ✓ Compiled successfully
- ✓ Linting and checking validity of types
- ✓ Collecting page data
- ✓ Generating static pages
- No ESLint errors
- No TypeScript errors

### Step 3: Address any build errors

**If ESLint errors occur:**
- Fix unescaped quotes in JSX (use `&apos;`, `&ldquo;`, `&rdquo;`)
- Fix any missing dependencies
- Fix any TypeScript type errors

**Common issues:**
- Unescaped apostrophes in content (use `&apos;`)
- Missing imports
- Type mismatches

### Step 4: Start production server

```bash
PORT=3001 npm run start
```

**Verify starts successfully:**
- ✓ Starting...
- ✓ Ready in [time]
- Local: http://localhost:3001

### Step 5: Smoke test production build

**Navigate to:** `http://localhost:3001/`

**Quick checks:**
- [ ] Homepage loads
- [ ] All sections render
- [ ] Navigation works
- [ ] No console errors
- [ ] Styles applied correctly

### Step 6: Stop production server

```bash
pkill -f "next"
```

### Step 7: Commit any build fixes

```bash
# Only if fixes were needed
git add [files with fixes]
git commit -m "fix: resolve production build errors

- [List specific fixes made]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Task 12: Final Documentation and Cleanup

**Goal:** Update documentation, clean up any temporary files, finalize branch

**Files:**
- Update: `CLAUDE.md` (if needed)
- Update: `docs/workshop-audit-findings.md`
- Create: `docs/workshop-content-redesign-summary.md`

### Step 1: Create redesign summary document

Create: `docs/workshop-content-redesign-summary.md`

```markdown
# Workshop Content Redesign - Implementation Summary

**Date:** [Current Date]
**Branch:** feat/redesign
**Status:** Complete

## Overview

Successfully implemented holistic portfolio content redesign with Workshop craftsperson aesthetic. All sections updated with refined messaging, WorkshopCard integration, and streamlined content.

## Changes Implemented

### Hero/Intro Section
- Added curiosity hook: "From translation work to building backend systems—precision work takes many forms"
- Updated to full name "Melissa Tamplin"
- Refined tagline emphasizing precision and "what lies underneath"
- Updated tech stack pills: Python, .NET/C#, TypeScript, PostgreSQL, Docker
- Updated CTAs: "Start a Project" and "View Toolkit"

### About Section: "Building the Toolbox"
- Restructured with 3 WorkshopCard craft phases:
  - Translation Craft (Language & Precision) - Skill: Attention to Detail
  - Software Craft (Building Systems) - Skill: Problem Solving
  - Systems Craft (What Lies Beneath) - Skill: System Design
- Added "Beyond the Keyboard" section with maker interests
- Removed old timeline and philosophy callout

### Skills Section: "Workshop Toolkit"
- Reorganized into 4 workshop stations using WorkshopCard:
  - Backend Station (◈) - Primary area
  - Frontend Station (◆) - Supporting capabilities
  - Infrastructure Station (▶) - DevOps & deployment
  - Communication Station (●) - Unique differentiator
- Updated philosophy: "Building software since 2019"
- Added Azure, GitHub Actions, Vue to skills data

### Contact Section: "Let's Build Together"
- Updated collaborative messaging
- Removed status badge
- Updated submit button: "Start the Conversation"
- Removed response time promise
- Simplified form layout

## Technical Changes

### Components Modified
- `src/components/intro.tsx` - Hero messaging and CTAs
- `src/components/about.tsx` - 3 craft phases with WorkshopCard
- `src/components/skills.tsx` - 4 workshop stations with WorkshopCard
- `src/components/contact.tsx` - Collaborative messaging
- `src/components/WorkshopCard.tsx` - Added marker and skillBadge props

### Data Structure
- `src/data/content.ts` - Added workshopStations array and helper function

### Styling
- `src/components/intro.module.css` - Hero hook and location styles
- `src/components/about.module.css` - Craft phases and beyond code styles
- `src/components/skills.module.css` - Stations grid and tool styling
- `src/components/contact.module.css` - Removed status badge and accent styles
- `src/components/WorkshopCard.module.css` - Marker and skill badge styles

## Testing

- ✅ Desktop testing (1920x1080) - All sections functional
- ✅ Tablet testing (768x1024) - Responsive layout working
- ✅ Mobile testing (375x812) - Proper stacking and readability
- ✅ Console errors - None found
- ✅ Production build - Successful compilation
- ✅ All interactions tested - Navigation, buttons, forms working

## Commits

[List all commits from this implementation]

## Next Steps

1. Deploy to production
2. Monitor analytics for engagement metrics
3. Consider A/B testing curiosity hook vs immediate clarity
4. Potential future enhancements:
   - Add more hobby/maker projects to "Beyond the Keyboard"
   - Expand workshop stations concept to include non-code skills
   - Add case studies or project highlights

## Success Metrics

✅ Professional appearance maintained
✅ Personality and humor retained
✅ Workshop aesthetic cohesive throughout
✅ Content streamlined and focused
✅ WorkshopCard visual consistency achieved
✅ Mobile responsive behavior verified
```

### Step 2: Update workshop audit findings

Update `docs/workshop-audit-findings.md` with final status:

```markdown
# FINAL UPDATE - Implementation Complete

All enhancement opportunities have been implemented:

✅ **About Section**: Replaced timeline with 3 WorkshopCard craft phases
✅ **Skills Section**: Reorganized into 4 workshop station WorkshopCards
✅ **Intro Section**: Updated messaging with curiosity hook
✅ **Contact Section**: Updated to collaborative "Let's Build Together" tone

Workshop design system integration is 100% complete.
```

### Step 3: Check git status

```bash
git status
```

**Verify:**
- [ ] All changes committed
- [ ] No untracked files (except .playwright-mcp/, workshop-*.html if present)
- [ ] Branch is clean

### Step 4: Review all commits

```bash
git log --oneline origin/feat/redesign..HEAD
```

**Verify commit message quality:**
- [ ] All follow Conventional Commits format
- [ ] Each has clear description
- [ ] Include co-author attribution

### Step 5: Commit final documentation

```bash
git add docs/workshop-content-redesign-summary.md docs/workshop-audit-findings.md
git commit -m "docs: final summary and completion status for content redesign

- Add comprehensive implementation summary
- Update audit findings with completion status
- Document all changes, testing, and technical details
- List next steps and success metrics

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Completion Checklist

Before marking implementation complete, verify:

### Content Changes
- [ ] Hero section has curiosity hook and updated messaging
- [ ] About section uses 3 WorkshopCard craft phases
- [ ] Skills section organized into 4 workshop stations
- [ ] Contact section has collaborative "Let's Build Together" tone

### Technical Implementation
- [ ] WorkshopCard component extended with marker and skillBadge props
- [ ] workshopStations data structure created in content.ts
- [ ] All components properly typed with TypeScript
- [ ] All imports correct and unused code removed

### Styling
- [ ] All sections properly styled with workshop aesthetic
- [ ] Responsive behavior verified (desktop, tablet, mobile)
- [ ] No style conflicts or broken layouts
- [ ] Workshop color palette consistently applied

### Testing
- [ ] All sections tested in browser
- [ ] All interactions verified
- [ ] Console errors checked (none present)
- [ ] Production build successful
- [ ] Test results documented

### Documentation
- [ ] Testing results documented
- [ ] Implementation summary created
- [ ] Audit findings updated
- [ ] CLAUDE.md updated if needed

### Git
- [ ] All changes committed with proper messages
- [ ] No uncommitted changes
- [ ] Branch clean and ready for merge/PR

---

## Implementation Complete!

The portfolio content redesign is now complete with Workshop craftsperson aesthetic applied holistically across all sections. The redesign successfully:

✅ Tells a cohesive story from translation to systems craft
✅ Integrates WorkshopCard components throughout
✅ Streamlines content while maintaining personality
✅ Achieves professional appearance with authentic voice
✅ Maintains full responsiveness across all devices

Next: Use **@superpowers:finishing-a-development-branch** to decide how to integrate this work (merge, PR, or cleanup).
