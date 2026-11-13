---
name: Schenier Lopez Portfolio
description: A paper-led portfolio that makes backend fit legible to hiring teams.
colors:
  red-pencil: "#96372c"
  red-pencil-hover: "#76271f"
  pine: "#315d56"
  stock: "#e0e7de"
  sheet: "#f2f4ec"
  sheet-bright: "#f8f9f3"
  ink: "#1d2927"
  ink-soft: "#42514c"
  ink-muted: "#56655f"
  rule: "#a6b2a8"
  rule-soft: "#cbd3ca"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(3.6rem, 7.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.045em"
  body:
    fontFamily: "Work Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  square: "0px"
components:
  button-primary:
    backgroundColor: "{colors.red-pencil}"
    textColor: "{colors.sheet-bright}"
    rounded: "{rounded.square}"
    padding: "0.78rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.red-pencil-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.pine}"
    rounded: "{rounded.square}"
    padding: "0.5rem 1.25rem"
  nav-masthead:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    height: "4.75rem"
    padding: "0 1.25rem"
  review-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "clamp(1.25rem, 4vw, 3.75rem)"
  evidence-row:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    padding: "0.72rem 0"
  technology-register:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    padding: "1.25rem 0"
  service-disclosure:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "1rem 0"
---

# Design System: Schenier Lopez Portfolio

## Overview

**Creative North Star: “The Interview Review Sheet”**

The page is a hiring-panel record rather than a generic technology landing page. Its paper-like field, ruled evidence rows, asymmetric opening, and locally served workhorse type make professional fit easy to inspect before asking for a conversation. Spanish copy stays direct, and the hiring action is the clearest accent.

Cool grey-green stock and layered sheet tones carry the page; carbon ink and pine rules organize it. Square forms, open space, and measured labels keep the sheet legible without decorative cards or fabricated proof. The freelance passage is a quieter disclosure after the professional profile and technology register.

**Key Characteristics:**
- Evidence is arranged as labeled fields and ruled registers.
- The opening sheet leads with the role and direct hiring action.
- Oxide red is reserved for hiring actions; pine carries secondary emphasis.
- Bricolage Grotesque, Work Sans, and DM Mono are self-hosted.

## Colors

The palette pairs a cool grey-green stock with paper whites, carbon ink, pine rules, and a restrained oxide-red action color.

### Primary
- **Oxide Pencil Red** (`red-pencil`): Primary hiring actions and their hover state; preserve its scarcity in the resting page.

### Secondary
- **Pine Ink** (`pine`): Secondary links, focus rings, and the small registration rule.

### Neutral
- **Cool Stock** (`stock`): The page ground and sticky masthead.
- **Review Sheet** (`sheet`): Main form surface.
- **Bright Sheet** (`sheet-bright`): High-contrast paper surface for the mobile menu and action text.
- **Carbon Ink** (`ink`): Primary text and strong rules.
- **Soft Ink** (`ink-soft`): Body copy and secondary text.
- **Muted Ink** (`ink-muted`): Field labels and low-priority notes; maintain readable contrast.
- **Ruled Lines** (`rule`, `rule-soft`): Sheet edges, dividers, and evidence rows.

**The One Red Mark Rule.** Red belongs to primary hiring actions, not decorative rules or repeated list markers. Use pine or a neutral rule for structure.

## Typography

- **Display Font:** Bricolage Grotesque (self-hosted; sans-serif fallback)
- **Body Font:** Work Sans (self-hosted; sans-serif fallback)
- **Label/Mono Font:** DM Mono (self-hosted; monospace fallback)

**Character:** The display face gives role and section headings a compact, confident voice. Work Sans keeps longer Spanish copy open and readable; DM Mono is reserved for measured fields and small register labels.

### Hierarchy
- **Display** (700, responsive 3.35rem–6rem, 0.91 line-height): The opening role; tracking is tight but controlled.
- **Headline** (700, responsive 2rem–3.5rem, near 1 line-height): Major section headings and the contact close.
- **Title** (700, 1.2rem–1.35rem): Record headings and expandable service titles.
- **Body** (400, 1rem–1.05rem, 1.65 line-height): Profile and explanatory copy, usually constrained to about 66–70 characters per line.
- **Label** (400, 0.68rem, 0.05em, uppercase): Field names and document references; small caps-like register language, not paragraph text.

**The Label Measure Rule.** DM Mono names fields, technologies, and document references; use Work Sans for sentences.

## Layout

The page uses one long review-sheet reading path. The opening sheet and content registers share a maximum measure of 78rem; the sticky masthead is a single narrow row. The opening is asymmetric, pairing a wide role statement with a compact evidence register. The profile follows as a two-column narrative and method register, then the technology register, secondary freelance disclosures, and a clear contact close.

Section spacing grows with the viewport. The hero and profile columns collapse below 900px; technical rows and the service disclosure content become single-column below 640px. The masthead switches to its compact menu at the project’s `md` breakpoint. Keep section anchors visible below the sticky masthead and preserve the opening sheet’s role, evidence, and action hierarchy on mobile.

## Elevation & Depth

Depth is restrained and structural: the opening sheet lifts gently from the stock, and the mobile navigation panel has a slightly stronger offset shadow. Buttons and evidence rows stay flat. Avoid glows, stacked card shadows, or blur as decoration.

### Shadow Vocabulary
- **Opening sheet** (`0 20px 48px rgb(29 41 39 / 12%)`): Soft separation between the paper sheet and page stock.
- **Mobile menu** (`0 16px 36px rgb(29 41 39 / 16%)`): Distinguishes the open navigation panel from content beneath it.

## Shapes

The form language is square-cornered and ruled: 1px borders define sheets and rows, while a 3px pine registration mark provides a small signature stroke. Actions are rectangular, not pill-shaped. Group information with spacing and rules rather than rounded cards or chips.

## Components

### Buttons
- **Shape:** Square corners (0px radius) with a 1px border.
- **Primary:** Oxide-red fill, bright-sheet text, compact horizontal padding; use for hiring actions.
- **Secondary:** Transparent stock-colored masthead action with a pine label and neutral border.
- **Hover / Focus:** Primary darkens and lifts slightly; keyboard focus uses a 3px pine outline with a 4px offset.

### Cards / Containers
- **Opening review sheet:** One paper surface with a thin ruled edge, generous inset, and a soft offset shadow. It is the evidence frame, not a reusable stack of cards.
- **Evidence rows:** Definition-list pairs with printed labels, bold values, and a fine top rule.

### Navigation
- **Masthead:** Sticky, 4.75rem high, with the monogram/name at left and section links at right. The contact link is outlined so it does not compete with the red primary action.
- **Mobile:** A compact sheet panel with named links; its button synchronizes expanded state, label, hidden state, and inertness.

### Registers and Disclosures
- **Technology register:** Group labels sit in a narrow column; names are plain text with a fine underline, not rounded chips.
- **Freelance disclosure:** Native `details` and `summary` keep services secondary until requested. An authored plus mark rotates when expanded.

### Contact Close
Use a ruled, open contact panel with a plain-language hiring prompt, one red email action, and quieter LinkedIn/GitHub links.

## Do's and Don'ts

### Do:
- **Do** use ruled fields and registers to make evidence scannable.
- **Do** keep the red action scarce and the freelance passage visually secondary.
- **Do** serve the display, body, and label fonts from the project’s local font files.
- **Do** retain visible keyboard focus and complete open/closed navigation states.

### Don't:
- **Don't** turn the sheet into an equal-card stack, gradient-tech hero, or rounded technology-chip grid.
- **Don't** use red for decorative rules or repeated list markers.
- **Don't** add scores, stars, project counts, employment claims, or outcomes without verified evidence.
