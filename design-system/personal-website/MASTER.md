# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Personal Website  
**Generated:** 2026-02-03 17:22:08  
**Category:** Portfolio/Personal  
**Style:** Minimal Gradient Editorial

---

## Global Rules

### Color Palette (User-Defined)

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Background** | `#F2EFE9` | `--color-bg` | Main canvas (Warm Cream) |
| **Text Primary** | `#252627` | `--color-text` | Headings, body text (Soft Black) |
| **Accent Green** | `#008148` | `--color-accent-green` | Nature, growth, primary actions |
| **Accent Red** | `#FF5666` | `--color-accent-red` | Energy, highlights, warmth |
| **Accent Blue** | `#033F63` | `--color-accent-blue` | Structure, trust, depth |

### Gradient Strategy

**Core Principle:** Use gradients sparingly for visual interest, not as primary backgrounds.

```css
/* Gradient 1: Warm Energy (Red → Blue) */
--gradient-warm: linear-gradient(135deg, #FF5666 0%, #033F63 100%);

/* Gradient 2: Natural Growth (Green → Blue) */
--gradient-nature: linear-gradient(135deg, #008148 0%, #033F63 100%);

/* Gradient 3: Full Spectrum (Use for accents only) */
--gradient-full: linear-gradient(90deg, #008148, #FF5666, #033F63);

/* Gradient 4: Subtle Mesh (Background decoration) */
--gradient-mesh: radial-gradient(circle at 20% 50%, rgba(0,129,72,0.1), transparent 50%),
                 radial-gradient(circle at 80% 80%, rgba(255,86,102,0.1), transparent 50%),
                 radial-gradient(circle at 40% 20%, rgba(3,63,99,0.1), transparent 50%);
```

### Typography

- **Heading Font:** Archivo (Bold, Geometric, Swiss-inspired)
- **Body Font:** Space Grotesk (Clean, Modern, Readable)
- **Mood:** Minimal, Editorial, Spacious, Designer-focused
- **Google Fonts:** [Archivo + Space Grotesk](https://fonts.google.com/share?selection.family=Archivo:wght@300;400;500;600;700|Space+Grotesk:wght@300;400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### Spacing & Whitespace (留白)

> **Philosophy:** Whitespace is not empty space—it's active design. Be generous.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Micro spacing |
| `--space-sm` | `8px` | Icon gaps |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `32px` | Component gaps (2x standard) |
| `--space-xl` | `48px` | Section spacing |
| `--space-2xl` | `80px` | Major sections |
| `--space-3xl` | `120px` | Hero sections, page breaks |

### Shadow System

```css
--shadow-sm: 0 1px 3px rgba(37,38,39,0.08);
--shadow-md: 0 4px 12px rgba(37,38,39,0.12);
--shadow-lg: 0 12px 24px rgba(37,38,39,0.15);
--shadow-xl: 0 20px 40px rgba(37,38,39,0.2);
```

---

## Component Specs

### Buttons

```css
/* Primary Gradient Button */
.btn-primary {
  background: linear-gradient(135deg, #008148, #033F63);
  color: #F2EFE9;
  padding: 14px 32px;
  border-radius: 50px; /* Pill shape */
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0,129,72,0.25);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: #252627;
  padding: 14px 32px;
  border-radius: 50px;
  border: 1.5px solid rgba(37,38,39,0.2);
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  border-color: #008148;
  color: #008148;
  background: rgba(0,129,72,0.05);
}
```

### Cards (Minimal)

```css
.card {
  background: #FFFFFF; /* Pure white on cream creates subtle contrast */
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(37,38,39,0.06);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: rgba(0,129,72,0.15);
}

/* Gradient Accent Line (optional) */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #008148, #FF5666, #033F63);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover::before {
  opacity: 1;
}
```

### Typography Styles

```css
/* Heading with Gradient Accent */
.heading-gradient {
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  background: linear-gradient(135deg, #008148, #033F63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Body Text */
.body-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  color: #252627;
  line-height: 1.7;
  opacity: 0.9;
}
```

---

## Style Guidelines

**Style:** Minimal Gradient Editorial

**Keywords:** Clean, spacious, gradient accents, smooth animations, editorial layout, Swiss-inspired

**Best For:** Design portfolios, creative professionals, minimalist brands

**Key Effects:**
- Subtle entrance animations (fade + slide)
- Gradient hover states
- Smooth scroll behavior
- Generous whitespace
- Micro-interactions on buttons/cards

### Page Pattern

**Pattern Name:** Editorial Portfolio Grid

- **Layout:** Asymmetric grid with generous whitespace
- **Conversion Strategy:** Visual-first, hover reveals, clear CTAs
- **CTA Placement:** Hero section + Project cards + Footer
- **Section Order:** 
  1. Hero (Name/Role with gradient accent)
  2. About (Editorial layout, 2-column)
  3. Projects (Grid with hover effects)
  4. Contact (Minimal footer)

---

## Motion Guidelines

```css
/* Smooth Transitions */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Animation Durations */
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

**Animation Principles:**
1. **Entrance:** Fade in + subtle slide (20px)
2. **Hover:** Transform + shadow change
3. **Exit:** Reverse entrance
4. **Respect:** Always include `prefers-reduced-motion`

---

## Anti-Patterns (Do NOT Use)

- ❌ **Heavy gradients as backgrounds** — Use gradients as accents only
- ❌ **Corporate blue/gray palettes** — Stick to the defined 5-color system
- ❌ **Cluttered layouts** — Embrace whitespace
- ❌ **Generic stock photos** — Use custom illustrations or high-quality images
- ❌ **Emojis as icons** — Use Lucide React icons
- ❌ **Missing cursor:pointer** — All interactive elements must have it
- ❌ **Low contrast text** — Maintain 4.5:1 minimum ratio
- ❌ **Instant state changes** — Always use transitions

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] Background is `#F2EFE9`
- [ ] Text is `#252627`
- [ ] Gradients used for accents (buttons, borders, text highlights)
- [ ] Whitespace is generous (sections have 80-120px padding)
- [ ] All icons from Lucide React
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (200-300ms)
- [ ] Text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
