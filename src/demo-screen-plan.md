# ═══════════════════════════════════════════════════════════════════════════
# DEMO SCREEN INTERFACE - COMPLETE PROMPT PLAN
# ═══════════════════════════════════════════════════════════════════════════
# 
# Project: High-Fidelity AI Coding Interface Panel
# Quality Standard: 50+ orchestrated elements with 5-layer atomic fidelity
# Token Budget: 150k-200k tokens across 8-10 prompts
# Tech Stack: React 19, TypeScript, Tailwind CSS, Lucide Icons, Motion/React
#
# ═══════════════════════════════════════════════════════════════════════════

---

## PHASE 1: FULL REASONING + ARCHITECTURAL PLAN (NO CODE)
**Estimated: 20k-25k tokens**

---

### 1. FOUNDATION ANALYSIS

#### Brand Identity & Visual Language
- **Primary Brand**: Advanced AI coding platform (Raisk AI positioning)
- **Vibe**: Professional, cutting-edge, bio-digital organism aesthetic
- **Style**: Glass morphism meets bio-inspired connectivity patterns
- **Color Scheme**:
  - Primary: Yellow/Orange gradients (#FFD700 → #FF8C00)
  - Secondary: Deep blues (#4A90E2), Purples (#A855F7), Greens (#22C55E)
  - Background: Dark navy/black gradients (rgba(26, 26, 46) → rgba(10, 10, 11))
  - Accent: Semi-transparent overlays with 0.1-0.3 opacity ranges
  - Border system: Yellow/orange at 0.15-0.3 opacity for hierarchy

#### Typography System
- **Headers**: 11-14px uppercase with 0.5px letter-spacing, weight 600
- **Body**: 12-13px regular, rgba(255, 255, 255, 0.9)
- **Labels**: 10-11px, rgba(255, 255, 255, 0.5-0.7)
- **Metrics**: 16px bold for primary values, 11px for units
- **Code**: Monospace with syntax highlighting palette (Material Theme)

#### Spatial System
- **Container padding**: 12-20px depending on hierarchy
- **Gap systems**: 4px, 6px, 8px, 12px, 16px, 24px (Fibonacci-inspired)
- **Border radius**: 6px (micro), 8px (standard), 12px (cards), 16px (panels)
- **Grid system**: CSS Grid for main layout, Flexbox for components

---

### 2. CRO/PSYCHOLOGY FLOW - THE "WHY"

#### Funnel Context
This section exists in the **Awareness → Interest** transition zone of the funnel.
- **User State**: Just learned about the product (hero headline consumed)
- **Mental Question**: "What does this actually look like in action?"
- **Goal**: Transform abstract promise into tangible proof

#### Section Goal (Primary Objective)
**Demonstrate professional-grade interface complexity while maintaining approachability**

Psychological triggers deployed:
1. **Social Proof**: Live stats (476 FPS, 98/100 score) signal elite performance
2. **Competence Display**: Multi-panel interface suggests sophisticated tooling
3. **Instant Clarity**: Chat interface shows natural language accessibility
4. **Feature Anchoring**: Right sidebar catalogues capabilities subconsciously
5. **Professional Validation**: Terminal/Git integration signals serious development tool

#### Descriptive Concept/Angle
**"Mission Control for Code Creation"** - A unified command center metaphor where:
- **Left panel** = Communication & Context (the "what")
- **Center panel** = Creation & Validation (the "how")
- **Right panel** = Intelligence & Acceleration (the "why faster")

The interface tells a story: "Describe → Preview → Enhance" workflow visible at a glance.

**Crucial Design Constraint**: We do NOT write final micro-copy yet. Layout and high-fidelity design must be conceptualized first to ensure maximum creative freedom for interactive states, hover behaviors, and physics-based animations.

---

### 3. ASSET FORGE - PARAMETRIC LIVING SYSTEMS

#### Parametric Design Philosophy
Assets are not static images but **reactive systems responding to global physics signals**.

**Global Signal Bus Architecture**:
```
Signal Bus Channels:
├─ scroll.velocity (px/ms)
├─ scroll.depth (0-1 normalized)
├─ mouse.position (x, y viewport coords)
├─ mouse.velocity (px/ms)
├─ idle.time (ms since last interaction)
└─ viewport.dimensions (width, height)
```

#### Asset Categories & Parametric Logic

**1. Status Indicators (Breathing Dots)**
- Geometry: 6-8px circles with radial gradient cores
- Physics: Pulse scale 1.0 → 1.2 → 1.0 at 0.8Hz frequency
- Color modulation: Hue shift ±5° based on scroll velocity
- Glow intensity: Base 0.3 → peaks 0.6 on hover proximity

**2. Interactive Buttons (Magnetic Fields)**
- Geometry: 32px squares, 6px border radius
- Physics: Transform origin follows mouse within 120px radius
- Magnetic pull: translateX/Y max ±3px using spring damping (0.7)
- Background: Opacity shift 0.05 → 0.1 → 0.2 across idle/hover/active states
- Border: Dual-layer (inner highlight + outer glow)

**3. Glass Morphism Panels**
- Geometry: Multi-layer depth system
- Layer 1 (Core): Solid dark base rgba(26, 26, 46, 0.6)
- Layer 2 (Frost): backdrop-filter: blur(20px)
- Layer 3 (Border): 1px solid with gradient from 0.15 → 0.3 opacity
- Layer 4 (Inner highlight): ::before pseudo with top-light gradient
- Shadow system: 3-tier (0 8px 32px ambient, 0 2px 8px contact, 0 0 1px edge)

**4. Particle Indicators (Floating System)**
- Geometry: 8px circles with radial gradients (#FFD700 → #FF8C00)
- Physics: Sine wave motion on Y-axis (amplitude: 15px, frequency: 0.0008Hz)
- Delay cascade: 0s, 0.5s, 1s for staggered choreography
- Opacity breathing: 0.6 → 1.0 → 0.6 cycle
- Position: Absolute with calculated offsets from parent element bounds

**5. Syntax Highlighted Code**
- Geometry: Line-by-line React components with monospace font
- Color palette (Material Theme):
  - Keywords: #C792EA
  - Strings: #C3E88D
  - Functions: #82AAFF
  - Operators: #89DDFF
  - Comments: #697098
  - Variables: #A6ACCD
  - Numbers: #F78C6C
- Line numbers: 10px wide gutter, rgba(255, 255, 255, 0.3)
- Indent system: 20px per nesting level

**6. Stat Cards (Data Visualization Atoms)**
- Geometry: 4-column grid, each card ~100px wide
- Background: Color-coded with hex + transparency (e.g., #22C55E15)
- Border: Matching color at 30% opacity (e.g., #22C55E30)
- Icon: 12px lucide-react, color-matched
- Typography: 10px uppercase label + 16px bold value
- Hover: Transform scale(1.05) + shadow intensity increase

#### Optimization Strategy (DOM Explosion Prevention)
- **React.memo()** on all micro-components (HeaderButton, TabButton, etc.)
- **useMemo()** for color calculations and gradient generations
- **CSS transforms** over position changes (GPU acceleration)
- **will-change** property on interactive elements only
- **Intersection Observer** for lazy rendering of off-screen panels
- **Virtual scrolling** for file trees if >50 items (react-window)

---

### 4. STRUCTURE - ATOMIC FIDELITY LAYERING

#### Layer 1: CORE (Semantic HTML Architecture)

**Container Hierarchy**:
```
<section> DemoScreenInterface
  └─ <div> MainPanel (glass container)
      ├─ <header> TopBar
      │   ├─ <div> ProjectInfo (logo + breadcrumb + status)
      │   ├─ <nav> QuickActions (4 icon buttons)
      │   └─ <div> UserZone (notifications + profile)
      │
      ├─ <main> ThreeColumnGrid
      │   ├─ <aside> LeftColumn (chat + context)
      │   │   ├─ <nav> TabSelector
      │   │   ├─ <section> ContentArea (scrollable)
      │   │   └─ <footer> ModelControls
      │   │
      │   ├─ <article> CenterColumn (preview + stats)
      │   │   ├─ <nav> ViewportControls
      │   │   ├─ <div> PreviewCanvas (scrollable)
      │   │   └─ <footer> StatsDashboard (4-grid)
      │   │
      │   └─ <aside> RightColumn (features + suggestions)
      │       ├─ <div> SearchBar
      │       └─ <section> ContentSections (scrollable)
      │           ├─ AI Suggestions
      │           ├─ Quick Actions
      │           └─ Component Library
      │
      └─ <footer> BottomBar
          ├─ <div> TerminalStatus (3 indicators)
          └─ <div> PerformanceMetrics (4 metrics)
```

**Semantic Considerations**:
- `<header>` and `<footer>` for panel boundaries (accessibility landmarks)
- `<nav>` for interactive control groups (keyboard navigation support)
- `<article>` for primary content (center preview)
- `<aside>` for supplementary content (left/right columns)
- ARIA labels on all icon buttons
- Focus trap within panel for keyboard users
- Escape key to minimize/expand panel

#### Layer 2: SKIN (Pixel-Perfect Styling)

**Background System**:
- Base: `rgba(26, 26, 46, 0.6)` - primary glass tone
- Darker zones: `rgba(10, 10, 11, 0.3-0.4)` - for left/right columns
- Lightest zones: `rgba(15, 15, 25, 0.4)` - for center column (preview contrast)

**Border System** (5-tier hierarchy):
- Tier 1 (Primary boundaries): `1px solid rgba(255, 215, 0, 0.2)`
- Tier 2 (Section dividers): `1px solid rgba(255, 215, 0, 0.15)`
- Tier 3 (Subtle separators): `1px solid rgba(255, 255, 255, 0.1)`
- Tier 4 (Active states): `1px solid rgba(255, 215, 0, 0.3-0.5)`
- Tier 5 (Color-coded): `1px solid [accent-color + 30%]` (e.g., #22C55E30)

**Spacing Rhythm** (Musical intervals pattern):
- Micro: 4px (eighth notes) - icon gaps, small padding
- Small: 6-8px (quarter notes) - button padding, list item gaps
- Medium: 12-16px (half notes) - section padding, card margins
- Large: 20-24px (whole notes) - column padding, major sections
- XL: 60px (phrases) - top-level container margins

**Shadow Orchestration**:
- Ambient: `0 8px 32px rgba(0, 0, 0, 0.3)` - main panel
- Contact: `0 2px 8px rgba(0, 0, 0, 0.2)` - buttons/cards
- Glow (active): `0 0 16px [color + 40%]` - interactive states
- Inset highlight: `0 0 0 1px rgba(255, 255, 255, 0.1) inset` - depth

#### Layer 3: PHYSICS (Motion & Interaction)

**Micro-Interaction Catalog**:

1. **Button Hover** (HeaderButton pattern):
   - Transition: `all 0.2s ease`
   - Background: opacity +0.05
   - Border: opacity +0.1
   - Icon: color shift to active state
   - Cursor: pointer

2. **Tab Switch** (TabButton pattern):
   - Border-bottom: 0 → 2px solid #FFD700
   - Color: rgba(255,255,255,0.5) → #FFD700
   - Font-weight: 400 → 600
   - Transition: `all 0.2s ease`

3. **Chat Message Entry**:
   - Animation: fade-in + translateY(-10px → 0)
   - Duration: 0.3s
   - Easing: cubic-bezier(0.16, 1, 0.3, 1)
   - Stagger: 0.1s per message

4. **File Tree Hover**:
   - Background: transparent → rgba(255, 215, 0, 0.1)
   - Transition: 0.15s ease
   - Cursor: pointer

5. **Suggestion Card Hover**:
   - Transform: scale(1.02)
   - Shadow: increase intensity +20%
   - Border: opacity +0.1
   - Transition: 0.2s ease

6. **Stat Card Pulse** (on data update):
   - Animation: scale(1.0 → 1.08 → 1.0)
   - Duration: 0.4s
   - Easing: ease-out
   - Trigger: value change detection

7. **Viewport Switch**:
   - Active button: border glow + background fill
   - Preview: width/height transition over 0.5s
   - Easing: cubic-bezier(0.4, 0, 0.2, 1)

**Scroll Behavior**:
- Left/Right columns: independent vertical scroll
- Smooth scrolling: `scroll-behavior: smooth`
- Custom scrollbar styling:
  - Width: 6px
  - Track: rgba(255, 255, 255, 0.05)
  - Thumb: rgba(255, 215, 0, 0.3)
  - Hover: rgba(255, 215, 0, 0.5)

#### Layer 4: GLOW (Bioluminescent Effects)

**Active Element Halos**:

1. **Status Badge** (Live indicator):
   - Dot: radial-gradient(circle, #22C55E, transparent)
   - Pulse: scale animation 1.0 → 1.3 → 1.0 at 1.5s intervals
   - Glow: `0 0 8px rgba(34, 197, 94, 0.6)`

2. **Deploy Button** (Active state):
   - Background: rgba(255, 215, 0, 0.2)
   - Border: rgba(255, 215, 0, 0.5)
   - Icon: #FFD700 (full saturation)

3. **Notification Dot**:
   - Base: 8px circle, #FF8C00
   - Border: 2px solid rgba(26, 26, 46, 0.9) (creates separation)
   - Glow: `0 0 6px rgba(255, 140, 0, 0.8)`

4. **Particle Indicators** (Preview canvas):
   - Gradient: radial-gradient(circle, #FFD700, #FF8C00)
   - Animation: float-particle (Y-axis sine wave)
   - Glow: `0 0 12px rgba(255, 215, 0, 0.6)`

5. **Search Input Focus**:
   - Border: rgba(255, 215, 0, 0.2) → rgba(255, 215, 0, 0.5)
   - Background: opacity +0.05
   - Glow: `0 0 16px rgba(255, 215, 0, 0.3)`

**Color-Coded Accent System**:
- Success/Performance: #22C55E (green)
- Info/Technical: #4A90E2 (blue)
- Warning/Speed: #FFD700 (yellow)
- Creative/AI: #A855F7 (purple)
- Alert/Update: #FF8C00 (orange)

Each accent color has:
- Background: [color]10 (hex + 10% opacity)
- Border: [color]30 (hex + 30% opacity)
- Text: [color] (full saturation)
- Icon: [color] (full saturation)

#### Layer 5: CONNECTION (Bio-Inspired Patterns)

**Invisible Data Flow Visualization** (Advanced, optional enhancement):

1. **Panel-to-Panel Connections**:
   - SVG overlay layer at z-index: 0 (behind content)
   - Bezier curves connecting:
     - Chat message → Preview canvas (when generating)
     - AI Suggestion → Preview (when applied)
     - Stat card → Footer metric (correlation lines)
   - Stroke: rgba(255, 215, 0, 0.1) at 1px width
   - Animation: stroke-dashoffset for "signal traveling" effect

2. **Energy Grid Background**:
   - Canvas element rendering subtle dot matrix
   - Dots: 2px, rgba(255, 215, 0, 0.05)
   - Spacing: 40px grid
   - Reactivity: Dots brighten within 200px of mouse (radial gradient mask)

3. **Component Relationship Graph** (Right sidebar):
   - Mini network visualization showing component dependencies
   - Nodes: 4px circles
   - Edges: 0.5px lines, rgba(255, 255, 255, 0.1)
   - Hover: Highlight connected nodes + edges

---

### 5. LAYOUT STRATEGY

#### Grid Architecture
**Main Container**:
- Max-width: 1400px
- Margin: 60px auto (vertical rhythm)
- Border-radius: 16px (friendly containment)

**Three-Column System**:
```css
display: grid;
grid-template-columns: 320px 1fr 300px;
height: 600px;
```

**Responsive Breakpoints**:
- Desktop (>1440px): Full 3-column layout
- Laptop (1024-1440px): Maintain 3 columns, reduce left/right to 280px/260px
- Tablet (768-1024px): Stack to 2 columns (hide right, show toggle)
- Mobile (<768px): Single column stack with tab navigation

**Column Responsibilities**:

**Left Column (320px)**:
- Fixed width for consistency
- Primary: Chat interface (conversational focus)
- Secondary: Context/file tree (information architecture)
- Tertiary: Model selector + token usage (resource awareness)

**Center Column (Fluid 1fr)**:
- Expands to fill available space
- Primary: Live preview canvas (the "creation")
- Secondary: Viewport controls (device testing)
- Tertiary: Stats dashboard (validation metrics)

**Right Column (300px)**:
- Fixed width for scannability
- Primary: AI suggestions (proactive intelligence)
- Secondary: Quick actions (efficiency shortcuts)
- Tertiary: Component library (reusability catalog)

#### Z-Index Stack
```
Layer 10: Tooltips, dropdowns
Layer 5: Floating elements (notifications dot)
Layer 2: Main panel
Layer 1: Content within panel
Layer 0: Background connections/grid
Layer -1: Pseudo-elements (glows, shadows)
```

---

### 6. ELEMENTS BREAKDOWN (50+ Component Catalog)

#### Header Section (15 elements)
1. Logo container (gradient box)
2. Logo icon (Zap)
3. Breadcrumb text 1 ("Projects")
4. Breadcrumb separator (ChevronRight)
5. Breadcrumb text 2 ("BioCommerce Dashboard")
6. Status badge container
7. Status dot (animated Circle)
8. Status text ("Live")
9. HeaderButton - Save
10. HeaderButton - Deploy (active)
11. HeaderButton - Rollback
12. HeaderButton - Settings
13. Notification button
14. Notification indicator dot
15. User profile card (avatar + name)

#### Left Column (18 elements)
16. TabButton - Chat
17. TabButton - Context
18. ChatMessage component (×5 instances = 5 elements)
23. FileTreeItem component (×7 instances = 7 elements)
30. Model selector card
31. Model icon (Cpu)
32. Model name text
33. Dropdown indicator (ChevronDown)
34. Token usage label
35. Token usage value

#### Center Column (16 elements)
36. ViewportButton - Monitor
37. ViewportButton - Tablet
38. ViewportButton - Smartphone
39. IconButton - Play/Pause toggle
40. IconButton - Refresh
41. IconButton - Eye (preview mode)
42. Resolution badge
43. Preview canvas container
44. Grid background overlay
45. Product card mockup
46. ParticleIndicator (×3 instances = 3 elements)
49. StatCard - FPS
50. StatCard - Bundle
51. StatCard - Build
52. StatCard - Score

#### Right Column (12 elements)
53. Search input field
54. Search icon
55. Filter icon
56. SuggestionCard - Particle Trail
57. SuggestionCard - Connect Elements
58. SuggestionCard - GPU Acceleration
59. QuickAction - Generate Component
60. QuickAction - Create Variant
61. QuickAction - State Management
62. QuickAction - Save to Library
63. LibraryItem - BioCard
64. LibraryItem - MagneticButton
65. LibraryItem - ParticleField
66. LibraryItem - GlowText

#### Footer Section (11 elements)
67. Terminal icon + text
68. GitBranch icon + text
69. Clock icon + text
70. FooterMetric - FPS
71. FooterMetric - CPU
72. FooterMetric - Memory
73. FooterMetric - Network

**Total: 73 orchestrated elements** across 5 fidelity layers

---

### 7. FIDELITY POTENTIAL & TOKEN BUDGET

#### Prompt Series Architecture

**Total Budget**: 150k-200k tokens across 8-10 prompts

**Prompt 1: Foundation + Architecture** (20k-25k tokens)
- This document (reasoning plan)
- No code output
- Pure strategic planning
- Component architecture diagrams
- State management strategy
- Performance optimization roadmap

**Prompt 2: Core Structure + Header** (18k-22k tokens)
- Main container setup
- Glass morphism system
- Header section (15 elements)
- All HeaderButton variants
- Color system constants
- Typography system
- Border/shadow systems
**Output**: 400-600 lines of code

**Prompt 3: Left Column - Chat System** (18k-22k tokens)
- TabButton component
- ChatMessage component (all variants)
- Message role styling
- Status indicators (generating/complete)
- Scroll behavior
- Animation entries
**Output**: 350-500 lines of code

**Prompt 4: Left Column - Context Tree** (15k-18k tokens)
- FileTreeItem component
- SectionLabel component
- Active/modified states
- Model selector
- Token usage display
**Output**: 250-350 lines of code

**Prompt 5: Center Column - Preview Controls** (18k-22k tokens)
- ViewportButton system
- IconButton component
- Resolution badge
- Preview canvas container
- Grid background system
- Viewport state management
**Output**: 300-450 lines of code

**Prompt 6: Center Column - Mock Preview + Stats** (20k-25k tokens)
- Product card mockup (sophisticated layout)
- ParticleIndicator components
- Float animation keyframes
- StatCard system (4-grid)
- Color-coded stat variants
- Real-time update animations
**Output**: 400-550 lines of code

**Prompt 7: Right Column - AI Features** (20k-24k tokens)
- Search bar with focus states
- SuggestionCard component
- Color-coded card variants
- QuickAction component
- LibraryItem component
- Usage counter badges
**Output**: 350-500 lines of code

**Prompt 8: Footer + Global Interactions** (15k-20k tokens)
- Footer layout
- FooterMetric components
- Terminal/Git status
- Hover state refinements
- Tab switching logic
- Keyboard navigation
**Output**: 250-350 lines of code

**Prompt 9: Polish + Micro-Interactions** (15k-20k tokens)
- Button hover refinements
- Transition tuning
- Loading states
- Empty states
- Error states
- Focus states (accessibility)
**Output**: 200-300 lines of code

**Prompt 10: Performance + Optimization** (12k-18k tokens)
- React.memo() wrapping
- useMemo() for expensive calculations
- useCallback() for event handlers
- Lazy loading for heavy sections
- Bundle size analysis
- Lighthouse score optimization
**Output**: 150-250 lines + refactoring

#### Expandable Fidelity Options

**Level 1 Enhancement** (+30k tokens):
- Real syntax highlighting with Prism.js
- Actual recharts performance graphs
- Smooth scroll animations with react-spring
- Magnetic cursor tracking on buttons

**Level 2 Enhancement** (+50k tokens):
- WebGL particle system for preview canvas
- Real-time collaboration cursors
- Voice command integration UI
- Advanced component graph visualization

**Level 3 Enhancement** (+70k tokens):
- Full state machine with XState
- Undo/redo timeline visualization
- AI suggestion generation logic
- Real API integration architecture

---

### 8. TECHNICAL STACK SPECIFICATION

#### Core Framework
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.3.0"
}
```

#### Styling
```json
{
  "tailwindcss": "^4.0.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0"
}
```

#### Icons & Assets
```json
{
  "lucide-react": "^0.344.0"
}
```

#### Animation (Optional)
```json
{
  "motion": "^11.0.0"
}
```

#### Build Tools
```json
{
  "vite": "^5.0.0",
  "@vitejs/plugin-react": "^4.2.0"
}
```

#### Project Structure
```
/demo-screen-interface/
├── /src/
│   ├── /components/
│   │   ├── /DemoScreen/
│   │   │   ├── DemoScreenContainer.tsx (main)
│   │   │   ├── Header/
│   │   │   │   ├── HeaderSection.tsx
│   │   │   │   ├── HeaderButton.tsx
│   │   │   │   ├── StatusBadge.tsx
│   │   │   │   └── UserProfile.tsx
│   │   │   ├── LeftColumn/
│   │   │   │   ├── LeftColumn.tsx
│   │   │   │   ├── TabButton.tsx
│   │   │   │   ├── ChatMessage.tsx
│   │   │   │   ├── FileTreeItem.tsx
│   │   │   │   └── ModelSelector.tsx
│   │   │   ├── CenterColumn/
│   │   │   │   ├── CenterColumn.tsx
│   │   │   │   ├── ViewportControls.tsx
│   │   │   │   ├── PreviewCanvas.tsx
│   │   │   │   ├── ProductCardMock.tsx
│   │   │   │   └── StatsDashboard.tsx
│   │   │   ├── RightColumn/
│   │   │   │   ├── RightColumn.tsx
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   ├── SuggestionCard.tsx
│   │   │   │   ├── QuickAction.tsx
│   │   │   │   └── LibraryItem.tsx
│   │   │   └── Footer/
│   │   │       ├── FooterSection.tsx
│   │   │       └── FooterMetric.tsx
│   │   └── /shared/
│   │       ├── SectionLabel.tsx
│   │       ├── IconButton.tsx
│   │       └── ParticleIndicator.tsx
│   ├── /hooks/
│   │   ├── useTabState.ts
│   │   ├── useViewportSelector.ts
│   │   └── useHoverState.ts
│   ├── /styles/
│   │   ├── globals.css
│   │   └── demo-screen.css
│   ├── /types/
│   │   └── demo-screen.types.ts
│   └── /utils/
│       ├── colors.ts
│       └── animations.ts
├── App.tsx
└── main.tsx
```

---

### 9. STATE MANAGEMENT ARCHITECTURE

#### Component State Strategy

**Local State** (useState):
- `selectedTab` (chat/context) - LeftColumn
- `selectedViewport` (desktop/tablet/mobile) - CenterColumn
- `isPreviewPlaying` (boolean) - CenterColumn
- `searchQuery` (string) - RightColumn
- Button hover states - Individual components

**Derived State** (useMemo):
- Filtered file lists
- Color calculations for stat cards
- Viewport dimensions for preview scaling

**No Global State Needed** (isolated demo component):
- Each column operates independently
- No cross-column data dependencies
- Pure presentational component
- No API calls in base version

#### Event Handling Patterns

**Button Clicks**:
```typescript
const handleTabSwitch = useCallback((tab: 'chat' | 'context') => {
  setSelectedTab(tab);
  // Optional: Track analytics event
}, []);
```

**Viewport Changes**:
```typescript
const handleViewportChange = useCallback((viewport: ViewportType) => {
  setSelectedViewport(viewport);
  // Trigger preview resize animation
}, []);
```

**Search Input**:
```typescript
const handleSearch = useDeferredValue(searchQuery);
// React 19 concurrent rendering for smooth typing
```

---

### 10. PERFORMANCE OPTIMIZATION STRATEGY

#### React Optimization
1. **Memoization**:
   - Wrap all micro-components with `React.memo()`
   - Use `useMemo()` for expensive color calculations
   - Use `useCallback()` for event handlers

2. **Lazy Loading**:
   - Code-split each column into separate chunks
   - Use `React.lazy()` + `Suspense` for right column
   - Intersection Observer for below-fold content

3. **Virtual Scrolling**:
   - Implement for chat messages if >30 items
   - Implement for file tree if >50 items
   - Use react-window or react-virtualized

#### CSS Optimization
1. **GPU Acceleration**:
   - Use `transform` over `top/left`
   - Apply `will-change` only on interactive elements
   - Use `translateZ(0)` for layer promotion

2. **Repaints/Reflows**:
   - Batch DOM updates
   - Use CSS containment (`contain: layout style paint`)
   - Avoid layout thrashing in animations

3. **CSS-in-JS Limitations**:
   - Use inline styles only for dynamic values
   - Static styles in CSS files
   - CSS modules for component-scoped styles

#### Animation Performance
1. **RequestAnimationFrame**:
   - Use for particle animations
   - Throttle scroll listeners to 16ms
   - Cancel RAF on unmount

2. **CSS Animations Over JS**:
   - Use CSS keyframes for repeating animations
   - Use CSS transitions for state changes
   - JS only for complex physics

---

### 11. ACCESSIBILITY REQUIREMENTS

#### Keyboard Navigation
- Tab order: Header → Left → Center → Right → Footer
- Arrow keys: Navigate within tab groups
- Enter/Space: Activate buttons
- Escape: Close dropdowns/modals

#### ARIA Labels
- All icon buttons: `aria-label="[Action]"`
- Stat cards: `aria-label="[Metric]: [Value]"`
- Status indicators: `aria-live="polite"`
- Tab panels: `role="tabpanel"` with `aria-labelledby`

#### Screen Reader Support
- Section landmarks (header, main, aside, footer)
- Alt text for all visual indicators
- Focus states visible (outline: 3px solid)
- Color contrast: WCAG AA minimum (4.5:1)

#### Focus Management
- Focus trap within panel
- Focus visible on keyboard navigation only
- Skip links for lengthy sections
- Restore focus after state changes

---

### 12. TESTING STRATEGY

#### Unit Tests
- Individual component rendering
- Button click handlers
- State updates
- Color calculation utilities

#### Integration Tests
- Tab switching behavior
- Viewport selector integration
- Search filtering logic
- Multi-component interactions

#### Visual Regression Tests
- Snapshot testing for each component
- Chromatic for visual diffs
- Mobile/tablet/desktop layouts
- Hover states and animations

#### Performance Tests
- Lighthouse CI (score >90)
- Bundle size limits (<200kb)
- Time to Interactive (<3s)
- First Contentful Paint (<1.5s)

---

### 13. DELIVERABLE CHECKLIST

**Code Files**:
- [ ] 1 main container component
- [ ] 4 section components (Header/Left/Center/Right/Footer)
- [ ] 15+ micro-components
- [ ] 3+ shared utility components
- [ ] 2 CSS files (globals + demo-screen)
- [ ] 1 TypeScript types file

**Documentation**:
- [ ] Component API documentation
- [ ] Props interface definitions
- [ ] Usage examples
- [ ] Customization guide
- [ ] Performance notes

**Quality Assurance**:
- [ ] TypeScript strict mode (no errors)
- [ ] ESLint passing (no warnings)
- [ ] All hover states functional
- [ ] Responsive breakpoints tested
- [ ] Accessibility audit passed

---

## EXECUTION INSTRUCTIONS FOR PROMPT SERIES

### How to Use This Plan

**Step 1**: Read this entire plan thoroughly (20k tokens)
**Step 2**: Begin with Prompt 2 (Core Structure + Header)
**Step 3**: Execute Prompts 3-10 sequentially
**Step 4**: Test and refine after each prompt
**Step 5**: Optional: Add Level 1-3 enhancements

### Prompt Template Structure

Each prompt (2-10) should follow this format:

```
PROMPT [X]: [Section Name]

CONTEXT:
- Working on demo screen interface
- Following 5-layer atomic fidelity architecture
- Current progress: [Previous sections completed]
- Building: [Current section elements]

REQUIREMENTS:
[List of specific components to build]

QUALITY STANDARDS:
- Glass morphism styling
- Yellow/orange gradient system
- Hover states with 0.2s transitions
- React.memo() on all components
- TypeScript strict mode
- Proper ARIA labels

OUTPUT:
- Create [X] components
- Estimated [Y] lines of code
- Include hover states
- Include TypeScript types
- Add inline comments for complex logic

End prompt with: "Prompt [X] complete. Ready for Prompt [X+1]?"
```

---

## FINAL NOTES

This plan represents **maximum fidelity implementation** of the demo screen interface. Each element serves a specific UX purpose, follows bio-inspired design principles, and maintains the god-tier quality standard.

**Key Success Metrics**:
- 70+ orchestrated elements
- 5-layer atomic fidelity
- <3s load time
- >90 Lighthouse score
- 100% keyboard accessible
- Glass morphism aesthetic
- Bio-inspired interactions

**Total Implementation Time**: 8-10 prompts × 18-25k tokens = 150-200k tokens

This interface is designed to **demonstrate mastery** while remaining **approachable and professional**. Every element breathes with purpose.

---

**END OF PROMPT PLAN**

Ready to execute Prompt 2: Core Structure + Header?
