# Portfolio Content Redesign - Workshop Aesthetic
**Date:** November 9, 2025
**Status:** Design Complete - Ready for Implementation

## Design Goals

Transform the portfolio from playful/bee aesthetic to professional Workshop craftsperson theme while:
1. **Stronger storytelling** - Cohesive narrative from translation to backend systems
2. **Better WorkshopCard integration** - Visual consistency with design system
3. **Simplified content** - Streamlined messaging, focus on what matters
4. **Maintain personality** - Professional but authentic, with humor and maker mindset

## Narrative Thread

**Core Identity:** Craftsperson who values precision and practical solutions

**Key Themes:**
- Precision work across domains (translation → code)
- Understanding what lies beneath the surface
- Function over flash
- Continuous learning and workshop expansion
- Reliable delivery with curiosity

## Section-by-Section Design

### 1. Hero/Intro Section

**Strategy:** Open with curiosity hook, then provide clarity

**Hero Message:**
```
"From translation work to building backend systems—
precision work takes many forms."

Melissa Tamplin
Full-Stack Craftsperson | Backend-Focused

Based in Ottawa, Canada
```

**Tagline:**
```
I build robust digital solutions with the same care and precision
required for translation: attention to detail, understanding what lies
underneath, and function over flash.
```

**Tech Stack Pills:**
- Python • .NET/C# • TypeScript • PostgreSQL • Docker

**Call-to-Actions (WorkshopButton):**
- Primary: "Start a Project" → #contact
- Secondary: "View Toolkit" → #skills
- Tertiary: View CV, LinkedIn, GitHub (icon buttons in row)

**Visual Elements:**
- Dark workshop background with geometric grid pattern (keep current)
- Logo/maker's mark
- **Remove:** Personal photos, status badge
- **Keep:** Tech stack pills with corner bracket styling

---

### 2. About Section: "Building the Toolbox"

**Strategy:** Three workshop expansion phases showing progressive mastery, using WorkshopCard components

**Section Header:**
```
Building the Toolbox
```

**Three Phases (WorkshopCard for each):**

#### Phase 1: Translation Craft
**Workshop Marker:** 01
**Title:** Language & Precision
**Skill Badge:** Attention to Detail

**Content:**
```
Started as a translator specializing in Korean language—literature,
cinema, traditional arts. Turns out translating a 400-page novel teaches
you a lot about precision: every word carries weight, context shapes
meaning, and quality lives in the details most people never see.
```

#### Phase 2: Software Craft
**Workshop Marker:** 02
**Title:** Building Systems
**Skill Badge:** Problem Solving

**Content:**
```
Intensive bootcamp in Paris revealed that spoken languages and programming
languages aren't so different—both need structure, syntax, and an
understanding of how pieces connect. First full-stack role in Melbourne's
caffeinated chaos: learning to build systems from start to finish, at
every layer.
```

#### Phase 3: Systems Craft
**Workshop Marker:** 03
**Title:** What Lies Beneath
**Skill Badge:** System Design

**Content:**
```
Deliberately dove into backend work—the foundation that makes everything
else possible. Python, .NET, databases, APIs. There's something satisfying
about building the engine room. Now as a consultant, I get the best of
both worlds: variety in projects, depth in systems.
```

**Beyond the Keyboard Section:**

**Title:** Beyond the Keyboard

**Content:**
```
Off-duty, you'll find me playing video games, crocheting, soldering retro
consoles, playing music, throwing pottery, or managing two very opinionated
cats.
```

**Visual Treatment:**
- Simple paragraph or tag list
- Minimal workshop styling
- Shows maker mindset extends beyond code

---

### 3. Skills Section: "Workshop Toolkit"

**Section Header:**
```
Workshop Toolkit
```

**Opening Philosophy:**
```
Backend-focused craftsperson comfortable across the full stack.
Building software since 2019, from startup MVPs to enterprise systems.
Give me a new language or framework—I'll figure it out.
```

**Four Workshop Stations (WorkshopCard for each):**

#### Station 1: Backend Station
**Marker:** ◈ (workshop green accent)
**Description:** Primary workshop area

**Core Tools:**
- Python (Django, FastAPI, Flask)
- .NET/C#
- PostgreSQL
- REST APIs

#### Station 2: Frontend Station
**Marker:** ◆
**Description:** Supporting capabilities

**Core Tools:**
- TypeScript/JavaScript
- React, Next.js
- HTML/CSS
- Vue

#### Station 3: Infrastructure Station
**Marker:** ▶
**Description:** DevOps & deployment

**Core Tools:**
- Docker
- AWS, GCP, Azure
- Git, GitHub Actions
- CI/CD pipelines

#### Station 4: Communication Station
**Marker:** ●
**Description:** Unique differentiator

**Languages:**
- English (native)
- French (native)
- Korean (professional)

**Visual Treatment:**
- Each station as WorkshopCard with marker icon
- Tools listed with icon badges (from react-icons)
- Consistent spacing and hierarchy
- Optional: Skill level dots (keep if they add value, remove if cluttered)

---

### 4. Contact Section: "Let's Build Together"

**Section Header:**
```
Let's Build Together
```

**Opening Message:**
```
Available for consulting projects and collaborative builds.
Whether you need backend architecture, full-stack development,
or someone who can bridge technical and human communication—
let's talk.

Direct contact: contact@meibee.dev
Or use the form below.
```

**Form Fields (WorkshopInput):**

1. **Email Address**
   - Marker: ◈
   - Label: "Email Address"
   - Placeholder: "your.email@domain.com"

2. **Name**
   - Marker: ◆
   - Label: "Name"
   - Placeholder: "Your name"

3. **Project Brief** (textarea - custom styled)
   - Marker: ▶
   - Label: "Project Brief"
   - Placeholder: "Tell me about your project, the challenges you're facing, or what you're hoping to build."

**Submit Button (WorkshopButton):**
- Text: "Start the Conversation"
- Primary variant
- Corner bracket accent

**Remove:**
- "Currently Available" pulsing status badge
- "Response within 24-48 hours" note
- Form accent service markers (01, 02, 03) on side
- "Deploy Message" cute button text

**Keep:**
- Workshop form styling with geometric corner bracket
- Background geometric elements (orbit circles, mesh grid)
- Email link styling

---

## Visual Design System Integration

### WorkshopCard Component Usage

**About Section (3 cards):**
- Full-width cards with workshop markers (01, 02, 03)
- Skill badge/icon in top corner
- Title + body content
- Corner bracket accents

**Skills Section (4 cards):**
- Grid layout (2x2 on desktop, 1 column on mobile)
- Station marker icons (◈ ◆ ▶ ●)
- Tool lists with icon badges
- Hover states showing workshop green

### Typography Hierarchy

**Headers:**
- Section titles: Syne font, workshop styling
- Card titles: Space Grotesk, medium weight
- Body: Space Grotesk, regular weight

**Emphasis:**
- Workshop green for links and accents
- Bold for skill badges
- Geometric markers for visual interest

### Workshop Aesthetic Elements

**Maintain Throughout:**
- Corner brackets on cards and buttons
- Geometric background patterns (subtle)
- Workshop color palette (green, rust, earth tones)
- Service markers as visual punctuation
- Utilitarian spacing and alignment

---

## Content Principles

### Voice & Tone

**Professional but Authentic:**
- Use personality and humor where natural
- Avoid overly corporate language
- Show maker mindset and curiosity
- Demonstrate reliability through specific outcomes

**Examples:**
- ✅ "Turns out translating a 400-page novel teaches you a lot about precision"
- ✅ "Melbourne's caffeinated chaos"
- ✅ "There's something satisfying about building the engine room"
- ❌ "Leveraged synergies across multiple domains"
- ❌ "Passion for creating innovative solutions"

### Messaging Strategy

**Hook → Clarify → Evidence:**
1. Open with something intriguing (translation → backend)
2. Explain what you do clearly (backend-focused, full-stack capable)
3. Show evidence (since 2019, specific tech stack, consulting variety)

**YAGNI Ruthlessly:**
- Remove unnecessary features/content
- Every section serves a purpose
- No fluff or buzzwords
- Focus on what potential clients/employers need to know

---

## Implementation Notes

### Content Changes Required

**Files to Update:**
1. `src/components/intro.tsx` - Hero message, tagline, CTAs, tech stack
2. `src/components/about.tsx` - Complete restructure with 3 WorkshopCards
3. `src/components/skills.tsx` - Reorganize into 4 station WorkshopCards
4. `src/components/contact.tsx` - Update header, opening message, form labels, button text

### Technical Considerations

**WorkshopCard Integration:**
- Ensure WorkshopCard component exists in design system
- Props needed: title, marker, children, theme variant
- Responsive grid layouts for Skills section
- Consistent spacing between cards

**Responsive Behavior:**
- About section: Stack cards vertically on mobile
- Skills section: 2x2 grid → 1 column on mobile
- Form: Maintain current responsive behavior (2 columns → 1 column)

**Accessibility:**
- Maintain ARIA labels on form inputs
- Ensure marker icons have appropriate alt text or aria-hidden
- Keyboard navigation for all interactive elements
- Color contrast for workshop green on various backgrounds

### Assets Needed

**Icons/Markers:**
- Skill badges for About section (existing geometric shapes OK)
- Station markers (◈ ◆ ▶ ●) - ensure these render correctly
- Tool/tech logos (already have from react-icons)

**Copy Assets:**
- All content provided in this document
- No additional copywriting needed

---

## Success Criteria

**The redesign succeeds if:**

1. ✅ Visitor immediately understands: backend-focused full-stack developer
2. ✅ Story flows logically: translation precision → software craft → systems mastery
3. ✅ Professional appearance with personality intact
4. ✅ WorkshopCard visual consistency throughout
5. ✅ Content is streamlined (no unnecessary information)
6. ✅ Workshop aesthetic feels cohesive from hero through contact
7. ✅ Mobile experience is clean and readable

**Red Flags (avoid these):**
- ❌ Too corporate/buzzword-heavy
- ❌ Lost personality/humor
- ❌ Unclear value proposition
- ❌ Inconsistent design system usage
- ❌ Information overload

---

## Next Steps

1. **Review Design Document** - Validate all content and structure
2. **Create Implementation Plan** - Break down into specific code tasks
3. **Set Up Isolated Workspace** - Use git worktrees for clean development
4. **Implement Section by Section** - Test as you go
5. **Browser Testing** - Verify responsive behavior and interactions
6. **Production Build** - Ensure everything compiles and deploys

---

## Appendix: Key Design Decisions

### Why Three Phases (Not Four)?
- Odd numbers create visual balance
- Three phases tell complete story without overwhelming
- Maps to: Foundation → Growth → Mastery arc

### Why "Building the Toolbox" vs "Workshop Arsenal"?
- "Toolbox" = maker/craftsperson (positive)
- "Arsenal" = weaponry (aggressive, wrong tone)

### Why Remove Status Badge?
- Redundant with contact section messaging
- Less professional than stating availability directly
- Reduces visual clutter

### Why Workshop Stations for Skills?
- Allows future expansion (pottery, soldering, etc.)
- More interesting than traditional skill categories
- Reinforces maker/craftsperson identity
- Shows you as multi-dimensional

### Why Keep "Beyond the Keyboard"?
- Humanizes you
- Shows maker mindset extends beyond code
- Gives talking points for culture fit conversations
- Differentiates you from purely technical resumes
