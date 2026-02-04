# Timeline Section Module

## Overview
A self-contained, horizontal scrolling timeline component that displays professional experience in an interactive, visually engaging format.

## Features
- **Horizontal Scroll Pinning**: Vertical scroll translates to horizontal timeline movement
- **Zigzag Layout**: Alternating top/bottom positioning for visual interest
- **Interactive Icons**: Hover effects on experience markers
- **Responsive Design**: Adapts to different screen sizes

## Structure
```
timeline/
├── TimelineSection.tsx    # Main component
└── README.md             # This file
```

## Data Structure
Each timeline node contains:
- `id`: Unique identifier
- `step`: Step label (e.g., "STEP 1")
- `year`: Time period
- `title`: Position/role title
- `subtitle`: Company/institution name
- `desc`: Brief description
- `icon`: Lucide React icon component
- `position`: "top" or "bottom" for zigzag layout

## Usage
```tsx
import { TimelineSection } from './components/sections/timeline/TimelineSection';

function App() {
  return <TimelineSection />;
}
```

## Customization
- **Colors**: Modify the `#385C96` and `#cce6ff` color values
- **Scroll Distance**: Adjust `h-[400vh]` for longer/shorter scroll
- **Node Spacing**: Change `width: '50vw'` in the node container
- **Animation Speed**: Modify the `useTransform` range values

## Accessibility
- Semantic HTML with `<article>` and `<time>` tags
- ARIA labels for screen readers
- Keyboard navigation support through Framer Motion
