# Technical Specifications - Schenier Lopez Portfolio

## Architecture Overview

### Framework Stack
- **Astro v5.15.9**: Static Site Generator with Island Architecture
- **TypeScript**: Strict mode configuration for type safety
- **TailwindCSS**: Utility-first CSS framework with custom design system
- **GSAP**: Professional animation library for complex interactions

### Project Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── layout/          # Layout components
│   └── animations/      # Animation utilities and hooks
├── pages/
│   ├── index.astro      # Main landing page
│   └── blog/            # Blog pages (CMS-driven)
├── styles/
│   ├── global.css       # Global styles and CSS variables
│   └── components/      # Component-specific styles
├── scripts/
│   ├── animations.ts    # GSAP animation configurations
│   └── utils.ts         # Utility functions
├── content/             # CMS content collections
└── images/              # Optimized images and assets
```

## Performance Requirements

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTFB (Time to First Byte)**: < 600ms

### Optimization Strategies
1. **Image Optimization**
   - WebP format with fallbacks
   - Lazy loading for below-the-fold images
   - Responsive images with srcset
   - Critical images preloaded

2. **Font Loading**
   - Font display: swap for web fonts
   - Preload critical fonts
   - Subset font files for performance

3. **JavaScript Optimization**
   - Tree shaking for unused code
   - Code splitting by sections
   - Defer non-critical JS
   - Minify and compress assets

4. **CSS Optimization**
   - Critical CSS inlined
   - Non-critical CSS loaded asynchronously
   - Purge unused utilities in production

## Animation System

### GSAP Implementation
```typescript
// animations/gsap-config.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Default animation settings
export const animationDefaults = {
  duration: 0.8,
  ease: "power3.out",
  overwrite: 'auto'
};

// Scroll reveal animation
export const revealAnimation = (element: Element) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: animationDefaults.duration,
    ease: animationDefaults.ease,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
};
```

### Animation Categories
1. **Page Load Animations**
   - Hero text typing effect
   - Staggered element reveals
   - Background particle animations

2. **Scroll Animations**
   - Parallax effects on background elements
   - Section reveals with stagger timing
   - Progress indicators for long sections

3. **Interactive Animations**
   - Button hover states with spring physics
   - Card 3D transforms on hover
   - Custom cursor interactions

4. **Data Visualizations**
   - Animated counters for statistics
   - Progress bars for skills
   - Network connection animations

## Content Management System

### CMS Integration Options
1. **Strapi** (Recommended)
   - Self-hosted option for full control
   - GraphQL API for efficient queries
   - Rich text editor with custom components
   - Role-based permissions

2. **Sanity**
   - Real-time collaboration features
   - Portable text format
   - Excellent developer experience
   - Built-in image optimization

3. **Contentful**
   - Headless SaaS solution
   - Excellent CDN performance
   - Multiple environment support
   - GraphQL and REST APIs

### Content Schema
```typescript
// content/config.ts
export const collections = {
  blog: {
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.date(),
      tags: z.array(z.string()),
      readTime: z.number(),
      featured: z.boolean().optional(),
      content: z.any() // Rich text content
    })
  },
  portfolio: {
    schema: z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['enterprise', 'api', 'cms', 'custom']),
      technologies: z.array(z.string()),
      completionDate: z.date(),
      client: z.string().optional(),
      liveUrl: z.string().optional(),
      githubUrl: z.string().optional(),
      featured: z.boolean().optional(),
      images: z.array(z.string())
    })
  }
};
```

## SEO Implementation

### Meta Tags Strategy
```astro
---
// src/components/SEO.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  url?: string;
}

const { title, description, image, type = 'website', url } = Astro.props;
const siteUrl = Astro.site.href;
const currentUrl = url || siteUrl;
---

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={currentUrl} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image || `${siteUrl}/images/og-default.jpg`} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={currentUrl} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={image || `${siteUrl}/images/og-default.jpg`} />
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Schenier Lopez",
  "jobTitle": "Backend Developer",
  "description": "Backend Developer specializing in API development with 7+ years of experience",
  "url": "https://schenierlopez.es",
  "sameAs": [
    "https://github.com/schenierlopez",
    "https://linkedin.com/in/schenierlopez"
  ],
  "knowsAbout": [
    "PHP", "Laravel", "Symfony", "Node.js", "NestJS", "Express.js", "API Development"
  ],
  "offers": {
    "@type": "Service",
    "serviceType": "Custom Application Development",
    "description": "Development of custom business-oriented applications"
  }
}
```

## Development Workflow

### Local Development Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type checking
pnpm astro check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Code Quality Tools
- **ESLint**: TypeScript and Astro linting
- **Prettier**: Code formatting with consistent style
- **TypeScript**: Strict type checking
- **Commitlint**: Conventional commit messages
- **Husky**: Git hooks for pre-commit checks

### Git Workflow
1. **Main Branch**: Production-ready code
2. **Develop Branch**: Integration branch for features
3. **Feature Branches**: Individual features and fixes
4. **Pull Request Process**: Code review and automated testing

## Security Considerations

### Content Security Policy
```astro
---
// src/layouts/MainLayout.astro
const csp = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'img-src': ["'self'", "data:", "https:"],
  'connect-src': ["'self'"]
};
---
```

### Contact Form Security
- Server-side validation
- Rate limiting implementation
- CSRF protection
- Input sanitization
- Secure email delivery

## Deployment Configuration

### Build Optimization
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  build: {
    format: 'directory'
  },
  image: {
    domains: ['example.com'],
    format: ['webp', 'avif', 'jpeg']
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['gsap'],
            animations: ['./src/scripts/animations.ts']
          }
        }
      }
    }
  }
});
```

### Hosting Options
1. **Vercel** (Recommended)
   - Edge CDN deployment
   - Automatic HTTPS
   - Built-in analytics
   - Git integration

2. **Netlify**
   - Form handling capabilities
   - Edge functions
   - Deploy previews
   - CDN distribution

3. **Cloudflare Pages**
   - Global CDN network
   - Durable Objects for dynamic features
   - Built-in DDoS protection
   - Analytics dashboard

## Monitoring and Analytics

### Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Web Vitals Library**: Real user monitoring
- **Sentry**: Error tracking and performance insights

### Business Analytics
- **Google Analytics 4**: User behavior and conversion tracking
- **Hotjar**: User session recordings and heatmaps
- **Custom Events**: Contact form submissions and CTA clicks

## Browser Support

### Target Browsers
- Chrome/Chromium: latest 2 versions
- Firefox: latest 2 versions
- Safari: latest 2 versions
- Edge: latest 2 versions
- Mobile Safari: iOS 14+
- Chrome Mobile: Android 8+

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced experience with modern browsers
- Graceful degradation for older browsers
- Accessible design for screen readers