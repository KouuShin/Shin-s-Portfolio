# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Personal Website
**Generated:** 2026-01-29 14:35:00
**Category:** Portfolio/Personal
**Style:** Swiss Gradient Minimal

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| **Background** | `#F2EFE9` | `--color-background` | Main Canvas (Warm Cream) |
| **Primary Text** | `#252627` | `--color-text` | Body / Headings (Soft Black) |
| **Accent Primary** | `#008148` | `--color-accent-green` | Success, Nature, Primary Actions |
| **Accent Warm** | `#FF5666` | `--color-accent-red` | Highlights, Notices, Warmth |
| **Accent Deep** | `#033F63` | `--color-accent-blue` | Structure, Strong UI elements |

**Gradient Strategy:**
- Use gradients to blend the Accents (Green/Red/Blue) on backgrounds or text.
- **Gradient 1 (Warm):** `background: linear-gradient(135deg, #FF5666 0%, #033F63 100%)`
- **Gradient 2 (Nature):** `background: linear-gradient(135deg, #008148 0%, #033F63 100%)`
- **Gradient 3 (Vibrant):** `background: linear-gradient(90deg, #008148, #FF5666, #033F63)` (Use sparingly, e.g., thin borders or hover glows)

### Typography

- **Heading Font:** Archivo (Bold, Geometric)
- **Body Font:** Space Grotesk (Clean, Modern)
- **Mood:** Minimalist, Swiss, Editorial, Spacious
- **Google Fonts:** [Archivo + Space Grotesk](https://fonts.google.com/share?selection.family=Archivo:wght@300;400;500;600;700|Space+Grotesk:wght@300;400;500;600;700)

### Spacing & Whitespace

> **Rule:** "留白" (Whitespace) is active design. Double the standard padding.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | |
| `--space-sm` | `8px` | |
| `--space-md` | `16px` | |
| `--space-lg` | `32px` | **Doubled from standard** |
| `--space-xl` | `48px` | **Major component gap** |
| `--space-2xl` | `80px` | **Section gap** |
| `--space-3xl` | `120px` | **Hero padding** |

---

## Component Specs

### Buttons

```css
/* Gradient Pill Button */
.btn-primary {
  background: linear-gradient(135deg, var(--color-accent-green), var(--color-accent-blue));
  color: #F2EFE9;
  padding: 14px 32px;
  border-radius: 50px; /* Pill shape */
  font-weight: 600;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(3, 63, 99, 0.2);
}

.btn-ghost {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-text);
  padding: 14px 32px;
  border-radius: 50px;
}
```

### Cards (Minimal)

```css
.card {
  background: white; /* Pure white on Cream background creates subtle separation */
  border-radius: 16px;
  padding: 32px; /* Generous padding */
  border: 1px solid rgba(37, 38, 39, 0.05); /* Very subtle border */
  box-shadow: 0 4px 20px rgba(0,0,0,0.03); /* Soft shadow */
}
```

---

## Pre-Delivery Checklist

- [ ] Background is #F2EFE9
- [ ] Text is #252627
- [ ] Gradients are used specifically (not modifying entire page bg, just accents)
- [ ] Whitespace is generous (Sections have ~120px padding)
- [ ] No corporate blue/gray templates. Use the provided palette.
