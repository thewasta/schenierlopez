# Design System - Schenier Lopez Portfolio

## Overview
This document defines the design system for the Schenier Lopez professional portfolio website, implementing the "Corporate Tech Noir" aesthetic.

## Typography

### Font Families
```css
/* Display Font - Technical Headers */
--font-display: 'Space Grotesk', 'JetBrains Mono', monospace;

/* Body Font - Professional Content */
--font-body: 'Instrument Sans', 'Figtree', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Typography Scale
```css
/* Hero Title */
--font-size-hero: clamp(2.5rem, 8vw, 5rem);
--font-weight-hero: 700;
--line-height-hero: 1.1;

/* Section Headers */
--font-size-section: clamp(2rem, 4vw, 3rem);
--font-weight-section: 600;
--line-height-section: 1.2;

/* Card Titles */
--font-size-card: 1.5rem;
--font-weight-card: 500;
--line-height-card: 1.3;

/* Body Content */
--font-size-body: 1.125rem;
--font-weight-body: 400;
--line-height-body: 1.7;

/* Small Text */
--font-size-small: 0.875rem;
--font-weight-small: 400;
--line-height-small: 1.5;
```

## Color System

### Primary Colors
```css
/* Corporate Blue Palette */
--color-primary: #1e40af;        /* Deep corporate blue */
--color-primary-light: #3b82f6;  /* Accent blue (adjusted #2563eb) */
--color-primary-dark: #1e3a8a;   /* Darker blue for hover states */

/* Background Colors */
--color-bg-primary: #0f172a;     /* Main background (slate-900) */
--color-bg-secondary: #1e293b;   /* Cards and sections (slate-800) */
--color-bg-tertiary: #334155;    /* Interactive elements (slate-700) */

/* Text Colors */
--color-text-primary: #f1f5f9;   /* Main text (slate-100) */
--color-text-secondary: #94a3b8; /* Secondary text (slate-400) */
--color-text-tertiary: #64748b;  /* Muted text (slate-500) */
```

### Semantic Colors
```css
/* Success States */
--color-success: #10b981;       /* Emerald for tech indicators */
--color-success-light: #34d399;

/* Warning/CTA */
--color-warning: #f59e0b;       /* Amber for call-to-actions */
--color-warning-light: #fbbf24;

/* Border Colors */
--color-border-primary: #334155; /* Subtle borders */
--color-border-secondary: #475569; /* Emphasized borders */
--color-border-accent: #3b82f6;  /* Accent borders */
```

### Gradients
```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);

/* Card Gradient */
--gradient-card: linear-gradient(145deg, #1e293b 0%, #334155 100%);

/* Background Gradient */
--gradient-bg: radial-gradient(ellipse at top, #1e293b 0%, #0f172a 100%);
```

## Spacing System

### Scale
```css
/* Base spacing unit */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Container Sizes
```css
/* Max width containers */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

## Components Design

### Cards
```css
/* Base Card Styles */
.card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 12px;
  padding: var(--space-6);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-accent);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}
```

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary-light);
  border: 2px solid var(--color-border-accent);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}
```

### Code Elements
```css
/* Inline Code */
code {
  background: var(--color-bg-tertiary);
  color: var(--color-success);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--font-display);
  font-size: 0.9em;
}

/* Code Blocks */
.pre {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-primary);
  border-radius: 8px;
  padding: var(--space-4);
  overflow-x: auto;
  font-family: var(--font-display);
  line-height: 1.5;
}
```

## Animation System

### Timing Functions
```css
/* Standard easing */
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in: cubic-bezier(0.55, 0.085, 0.68, 0.53);
--ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);

/* Custom easing for tech feel */
--ease-tech: cubic-bezier(0.23, 1, 0.32, 1);
```

### Durations
```css
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Key Animations
```css
/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Typing Animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* Pulse Animation for Tech Elements */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Float Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
```

## Visual Effects

### Shadows
```css
/* Card Shadows */
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
--shadow-xl: 0 16px 64px rgba(0, 0, 0, 0.6);

/* Glow Effects */
--glow-primary: 0 0 20px rgba(59, 130, 246, 0.5);
--glow-success: 0 0 20px rgba(16, 185, 129, 0.5);
```

### Backdrops
```css
/* Glassmorphism Effect */
.glass {
  background: rgba(30, 41, 59, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

/* Subtle Grid Pattern */
.grid-pattern {
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

## Breakpoints
```css
/* Mobile First Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## Accessibility
- **WCAG 2.1 AA**: All color combinations meet contrast requirements
- **Focus States**: Visible focus indicators on all interactive elements
- **Reduced Motion**: Respects user's motion preferences
- **Screen Reader**: Proper ARIA labels and semantic HTML

## Usage Guidelines

### Do's
- Use consistent spacing from the spacing scale
- Maintain hierarchy with typography scale
- Apply animations with purpose and subtlety
- Ensure all text meets contrast requirements

### Don'ts
- Don't mix more than 2-3 colors in one section
- Avoid rapid or jarring animations
- Don't use generic icon libraries
- Avoid purely decorative animations without purpose