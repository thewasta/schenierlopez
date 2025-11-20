# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for Schenier Lopez (schenierlopez.es) - a Backend Developer with 7+ years of experience specializing in PHP and Node.js APIs. The project is built with Astro v5.15.9 with TypeScript in strict mode.

## Project Purpose

Dual-purpose professional website:
1. **Job Seeking**: Professional portfolio for employment opportunities
2. **Freelance Business**: Client acquisition and service presentation

## Design Specifications

### Visual Identity: "Corporate Tech Noir"
- **Theme**: Dark theme with sophisticated blue accents
- **Style**: Corporate professional meets technological sophistication
- **Aesthetic**: Premium, tech-focused, memorable and differentiating
- **Approach**: Authority and confidence with technical precision

### Typography System
- **Display Font (Headings)**: Space Grotesk or JetBrains Mono
  - Usage: Hero titles, section headers, technology names
  - Character: Technical, precise, modern but authoritative

- **Body Font (Content)**: Instrument Sans or Figtree
  - Usage: Service descriptions, blog content, forms
  - Character: Professional, accessible, corporate

### Color Palette
- **Primary Blue**: `#1e40af` (Deeper corporate blue)
- **Accent Blue**: `#3b82f6` (Adjusted from #2563eb for better contrast)
- **Dark Background**: `#0f172a` (Slate-900 near-black)
- **Card Background**: `#1e293b` (Slate-800 with subtle gradients)
- **Success/Tech**: `#10b981` (Emerald for positive indicators)
- **Warning/Accent**: `#f59e0b` (Amber for CTAs)
- **Text Primary**: `#f1f5f9` (Slate-100)
- **Text Secondary**: `#94a3b8` (Slate-400)

### Animations & Interactions
- **Level**: Moderate and dynamic with purpose
- **Types**: Scroll animations, subtle parallax, micro-interactions
- **Effects**: Staggered reveals, code typing effects, data visualization
- **Technology**: GSAP for advanced animations
- **Unique Elements**: Custom cursor, network patterns, API-style loading states

### Target Audience
- **Primary**: Freelance clients seeking enterprise solutions
- **Secondary**: Tech recruiters and engineering managers

## Website Structure

### Main Sections (Single Page)
1. **Hero**: Professional introduction with code typing animation
2. **About Me**: Professional background with animated statistics
3. **Tech Stack**: Full Stack Balance with network connection effects
4. **Portfolio**: Visual gallery with 3D hover effects
5. **Services**: Custom development and enterprise systems with glassmorphism
6. **Work Process**: Development workflow with visual progression
7. **Blog**: CMS Headless integration with custom design
8. **Contact**: Professional form with validation and success states

## Technical Requirements

### Core Technologies
- **Framework**: Astro with TypeScript
- **Styling**: TailwindCSS with custom design system
- **Animations**: GSAP for advanced animations
- **CMS**: Headless CMS for blog management
- **Icons**: Custom SVG icons (no generic icon libraries)

### Performance
- **Target**: Core Web Vitals optimization
- **Approach**: Static site generation with minimal JavaScript
- **Loading**: Optimized images and lazy loading with skeleton states

### SEO
- **Implementation**: Meta tags, structured data, sitemaps
- **Focus**: Local SEO for freelance services
- **Analytics**: Visitor tracking and conversion monitoring

## Development Commands

Use `pnpm` for all package management (never npm):

- `pnpm install` - Install dependencies
- `pnpm dev` - Start local development server at `localhost:4321`
- `pnpm build` - Build production site to `./dist/`
- `pnpm preview` - Preview build locally
- `pnpm astro ...` - Run Astro CLI commands (use `pnpm astro -- --help` for options)

## Project Architecture

- **Framework**: Astro with file-based routing
- **Pages**: Located in `src/pages/` - each `.astro` or `.md` file becomes a route
- **Static Assets**: Place in `public/` directory
- **Components**: Can be added to `src/components/` (standard convention)
- **TypeScript**: Strict configuration enabled, extends `astro/tsconfigs/strict`
- **Output**: Static site generation to `dist/` folder

## Content Guidelines

### Professional Focus
- **Expertise**: Backend API development (Laravel, Symfony, NestJS, Express)
- **Services**: Custom applications, RBAC, Payment systems, CMS, Enterprise management
- **Experience**: 7+ years in API development and business-oriented solutions

### Brand Identity
- **Domain**: schenierlopez.es
- **Professional Name**: Schenier Lopez
- **Specialization**: Backend Developer & API Expert
- **Value Proposition**: Custom business-oriented application development

### Visual Differentiators
- **Custom elements**: Terminal-style interactions, network animations
- **Code presentation**: Real syntax highlighting, typing effects
- **Data visualization**: Animated statistics and metrics
- **Background patterns**: Geometric patterns inspired by software architecture

## File Structure Notes

- Main entry point: `src/pages/index.astro`
- Astro config: `astro.config.mjs` (minimal configuration)
- TypeScript config: `tsconfig.json` (strict mode)
- All pages are server-rendered by default in Astro
- Components should be organized by section (Hero, About, Portfolio, etc.)
- Animation utilities should be centralized for maintainability
- Custom CSS variables for design system consistency

## Development Commands

Use `pnpm` for all package management (never npm):

- `pnpm install` - Install dependencies
- `pnpm dev` - Start local development server at `localhost:4321`
- `pnpm build` - Build production site to `./dist/`
- `pnpm preview` - Preview build locally
- `pnpm astro ...` - Run Astro CLI commands (use `pnpm astro -- --help` for options)

## Project Architecture

- **Framework**: Astro with file-based routing
- **Pages**: Located in `src/pages/` - each `.astro` or `.md` file becomes a route
- **Static Assets**: Place in `public/` directory
- **Components**: Can be added to `src/components/` (standard convention)
- **TypeScript**: Strict configuration enabled, extends `astro/tsconfigs/strict`
- **Output**: Static site generation to `dist/` folder

## File Structure Notes

- Main entry point: `src/pages/index.astro`
- Astro config: `astro.config.mjs` (minimal configuration)
- TypeScript config: `tsconfig.json` (strict mode)
- All pages are server-rendered by default in Astro