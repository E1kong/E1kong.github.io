---
name: Cyber-Circuit Aesthetic
colors:
  surface: '#131317'
  surface-dim: '#131317'
  surface-bright: '#39393d'
  surface-container-lowest: '#0e0e12'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#2a292e'
  surface-container-highest: '#353439'
  on-surface: '#e5e1e7'
  on-surface-variant: '#b9cbb9'
  inverse-surface: '#e5e1e7'
  inverse-on-surface: '#303034'
  outline: '#849585'
  outline-variant: '#3b4b3d'
  surface-tint: '#00e478'
  primary: '#f1ffef'
  on-primary: '#003919'
  primary-container: '#00ff87'
  on-primary-container: '#007138'
  inverse-primary: '#006d36'
  secondary: '#ffb955'
  on-secondary: '#452b00'
  secondary-container: '#dc9100'
  on-secondary-container: '#4f3100'
  tertiary: '#f1ffef'
  on-tertiary: '#003919'
  tertiary-container: '#5afb95'
  on-tertiary-container: '#007139'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#60ff98'
  primary-fixed-dim: '#00e478'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb955'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#60ff99'
  tertiary-fixed-dim: '#3ae27f'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#131317'
  on-background: '#e5e1e7'
  surface-variant: '#353439'
typography:
  headline-xl:
    fontFamily: spaceGrotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: spaceGrotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: spaceGrotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  button-text:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
spacing:
  unit: 4px
  gutter: 24px
  margin-safe: 32px
  container-max: 1200px
---

## Brand & Style

This design system establishes a "Cyberpunk Dark" identity for a personal digital presence. It is characterized by high-contrast neon accents against deep, void-like backgrounds, evoking a high-tech, futuristic atmosphere. The aesthetic prioritizes technical precision and digital immersion.

The visual language draws from **Brutalism** and **Glassmorphism**, utilizing 1px hairlines, scanline textures, and radiant glows to simulate a terminal interface from a high-budget sci-fi reality. The layout feels "engineered" rather than "designed," emphasizing structural grids and geometric decorative elements.

## Colors

The palette is anchored by a deep obsidian background (`#050508`) to maximize the perceived luminance of the neon accents. 

- **Primary Neon:** Use `#00ff87` for critical actions, status indicators, and primary branding. It should frequently be paired with a `0px 0px 12px` outer glow (drop-shadow) to simulate light emission.
- **Accent Action:** The secondary gold (`#f5a623`) is reserved for high-priority buttons and specific call-to-outs, providing a warm "industrial" contrast to the cool green.
- **Surface & Borders:** UI containers use `#0d0d14` to separate from the background, while boundaries are defined by sharp `#1a1a2e` strokes.

## Typography

The typographic system balances futuristic geometry with technical legibility.

- **Headlines:** `Space Grotesk` provides a sharp, geometric feel that mimics structural blueprints. Use it for names and major section titles.
- **Technical Labels:** `JetBrains Mono` is used for navigation, metadata, and decorative "data strings." It should always feel like code or a terminal readout.
- **Body Content:** `Inter` is utilized for long-form reading to ensure maximum clarity and a modern, professional tone.
- **Styling:** Headings should occasionally use `text-transform: uppercase` to reinforce the authoritative, high-tech aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop, transitioning to a fluid model for mobile.

- **Navigation:** The navigation bar is fixed to the top-right corner, appearing as a floating module with a backdrop blur and 1px border.
- **Grid:** A 12-column grid is used for the main stage, with content often offset to create "dead space" that feels intentional and cinematic.
- **Geometric Accents:** Use 1px vertical and horizontal lines (hairlines) to "frame" sections. These lines should extend to the edge of the viewport where possible to create a sense of an infinite digital grid.
- **Scanlines:** A global overlay of subtle, horizontal scanlines (0.03 opacity) should be applied to the entire viewport to mimic a CRT or high-end HUD.

## Elevation & Depth

In this design system, depth is achieved through **Luminance and Glow** rather than traditional shadows.

- **Layer 0 (Background):** Pure `#050508`.
- **Layer 1 (Panels):** `#0d0d14` with a 1px border of `#1a1a2e`.
- **Layer 2 (Active Elements):** Elements "glow" into the foreground. Use radial gradients (`radial-gradient(circle, rgba(0,255,135,0.1) 0%, rgba(0,0,0,0) 70%)`) behind primary cards or buttons to create a localized ambient light effect.
- **Glassmorphism:** Navigation menus and modals use a `backdrop-filter: blur(12px)` combined with a semi-transparent surface color to suggest a translucent high-tech glass.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every UI element—from buttons to input fields to cards—should have hard 90-degree corners. This reinforces the "Brutalist" and "Technical" nature of the design. To add visual interest without using border-radii, use **chamfered corners** (cut corners) on primary buttons or containers using CSS `clip-path`.

## Components

### Buttons
- **Primary:** Background `#00ff87`, Text `#050508`, Sharp corners. On hover, increase glow intensity.
- **Accent:** Background `#f5a623`, Text `#050508`. Hover state: `#ffcf40` with a matching gold glow.
- **Ghost:** Transparent background, 1px border of `#00ff87`, Text `#00ff87`.

### Cards & Panels
Cards should feature a 1px border. For "Active" cards, the top-left corner should have a small decorative "L-shaped" bracket in Neon Green to signify focus.

### Input Fields
Inputs are bottom-border only (2px thick). When focused, the border glows Neon Green, and a small monospaced "cursor" block flickers at the end of the placeholder text.

### Navigation
The fixed top-right nav should use `JetBrains Mono` at a small scale (12px-14px). Each link should be prefixed with a bracketed number (e.g., `[01] HOME`) to mimic a directory structure.

### Chips/Status
Small, rectangular tags with a background of `rgba(0, 255, 135, 0.1)` and a solid 1px `#00ff87` border. Text must be monospaced and all-caps.