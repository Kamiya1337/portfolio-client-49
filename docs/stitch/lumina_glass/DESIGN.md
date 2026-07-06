---
name: Lumina Glass
colors:
  surface: '#fcf8ff'
  surface-dim: '#dad6ff'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2ff'
  surface-container: '#efebff'
  surface-container-high: '#e9e5ff'
  surface-container-highest: '#e3dfff'
  on-surface: '#181445'
  on-surface-variant: '#494552'
  inverse-surface: '#2d2a5b'
  inverse-on-surface: '#f3eeff'
  outline: '#7a7583'
  outline-variant: '#cac4d4'
  surface-tint: '#674bb5'
  primary: '#674bb5'
  on-primary: '#ffffff'
  primary-container: '#a78bfa'
  on-primary-container: '#3c1989'
  inverse-primary: '#cebdff'
  secondary: '#a43073'
  on-secondary: '#ffffff'
  secondary-container: '#fc79bd'
  on-secondary-container: '#76014e'
  tertiary: '#6d5e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b49c00'
  on-tertiary-container: '#3d3400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e8ddff'
  primary-fixed-dim: '#cebdff'
  on-primary-fixed: '#21005e'
  on-primary-fixed-variant: '#4f319c'
  secondary-fixed: '#ffd8e7'
  secondary-fixed-dim: '#ffafd3'
  on-secondary-fixed: '#3d0026'
  on-secondary-fixed-variant: '#85145a'
  tertiary-fixed: '#ffe24c'
  tertiary-fixed-dim: '#e2c62d'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#524600'
  background: '#fcf8ff'
  on-background: '#181445'
  surface-variant: '#e3dfff'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
  max_width: 1280px
---

## Brand & Style

This design system is built on the principles of **Premium Glassmorphism**. It targets a high-end SaaS audience seeking an interface that feels lightweight, ethereal, and technologically advanced yet approachable. The visual narrative centers on "depth through transparency," utilizing multi-layered frosted glass effects to create a sense of organized luxury.

The style moves away from flat, clinical minimalism toward a more expressive, tactile digital environment. By combining soft pastel gradients with high-refractive surfaces, the design system evokes an emotional response of clarity, calm, and sophisticated innovation. It is designed to feel like a high-end physical object—clear, polished, and perfectly balanced.

## Colors

The palette utilizes a "triad of softness." The **Primary Lavender** (#A78BFA) serves as the main interactive anchor, while **Rose Pink** and **Soft Yellow** are used as background ambient blooms to provide warmth and depth.

The core of the system is the **Glass Surface**. This is not a flat white, but a translucent layer (#FFFFFF at 75% opacity) that allows the background gradients to bleed through. Text is primarily rendered in a deep **Midnight Indigo** (#1E1B4B) to ensure maximum accessibility against light, shimmering backgrounds. All glass elements must feature a subtle 1px white border at 40% opacity to simulate light catching on a physical edge.

## Typography

**Plus Jakarta Sans** is the sole typeface, chosen for its modern, geometric construction and friendly apertures. 

Typography follows a hierarchy that prioritizes legibility over sheer scale, though "Display" styles use aggressive negative letter-spacing to create a "locked-in" editorial look. For body text, line heights are generous (1.6x) to maintain the airy, spacious atmosphere of the brand. When text appears directly on glass surfaces, use a slightly heavier weight (e.g., Medium instead of Regular) to counteract the visual noise of the background blur.

## Layout & Spacing

The system uses a **Fluid Grid** with a strict 8px rhythmic baseline. Elements are spaced out to allow the "glass" to breathe, avoiding visual clutter.

- **Desktop:** 12-column grid, 1280px max-width, 24px gutters.
- **Tablet:** 8-column grid, 32px side margins.
- **Mobile:** 4-column grid, 20px side margins, with spacing scales reduced by one tier (e.g., `lg` becomes `md`).

Padding within glass cards should be generous—never less than `md` (24px)—to ensure content does not feel "trapped" by the frosted edges.

## Elevation & Depth

Hierarchy is achieved through **Backdrop Blur** and **Shadow Diffusion** rather than traditional drop shadows.

1.  **Level 0 (Base):** The pastel gradient background.
2.  **Level 1 (Standard Card):** `backdrop-filter: blur(12px)`, `background: rgba(255, 255, 255, 0.7)`, `box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04)`.
3.  **Level 2 (Floating/Modals):** `backdrop-filter: blur(20px)`, `background: rgba(255, 255, 255, 0.85)`, `box-shadow: 0 20px 60px rgba(167, 139, 250, 0.15)`.

Note the use of tinted shadows in Level 2—using a soft lavender tint in the shadow adds to the premium, luminous feel.

## Shapes

The shape language is ultra-soft and organic. 

Standard components (Cards, Inputs) use a **24px (1.5rem)** radius. Larger containers or feature sections should use **32px (2rem)** or higher. Buttons and chips always use the **Pill** shape (fully rounded ends) to provide a distinct contrast against the larger, rectangular glass cards. This extreme roundedness reinforces the "friendly luxury" aesthetic.

## Components

### Buttons
Primary buttons are solid lavender with white text. Secondary buttons are glass-morphic with a 1px lavender border. Both use a pill-shape and a subtle "inner glow" (a 1px white top-border inside the button) to simulate a physical button top.

### Glass Cards
The signature component. Must include `backdrop-filter: blur(12px)`, a `1px` semi-transparent white border, and a `24px` corner radius. Cards should have no harsh shadows—only large, soft, low-opacity ambient shadows.

### Input Fields
Inputs are essentially mini-glass cards with a `75%` opacity white background. Upon focus, the 1px border transitions from white to the Primary Lavender, and a soft lavender outer glow (4px spread) appears.

### Chips & Tags
Small, pill-shaped elements. Use semi-transparent versions of the accent colors (e.g., 10% opacity Lavender background with 100% opacity Lavender text) to maintain the "light and airy" feel.

### Navigation Bar
A fixed glass "island" at the top of the screen. It should be narrower than the full screen width, floating with a `32px` margin from the top, featuring maximum blur (24px) to ensure content scrolling underneath is elegantly obscured.