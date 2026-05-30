# Stitch Prompt — ekong Personal Website Prototype

> Reference style: **Cyberpunk Dark** (designprompts.dev #16)  
> Generate **3 separate full-page screens**: Home, About, Contact.  
> No photos, avatars, or image placeholders of any kind.

---

## 🎨 Shared Design System (applies to all 3 pages)

### Color Palette

| Role                 | Value       | Usage                                             |
|----------------------|-------------|---------------------------------------------------|
| Page Background      | `#050508`   | All page backgrounds                             |
| Surface / Panel      | `#0d0d14`   | Nav bar, cards                                   |
| Border               | `#1a1a2e`   | Card borders, dividers                           |
| Neon Green           | `#00ff87`   | Decorative lines, active nav, glow accents       |
| Neon Green (dim)     | `#00c96a`   | Secondary accents                                |
| Button (accent)      | `#f5a623`   | CTA button fill                                  |
| Button hover         | `#ffcf40`   | Button hover state + glow `0 0 18px #f5a62360`   |
| Primary Text         | `#ffffff`   | Headings                                         |
| Secondary Text       | `#a0a8b8`   | Body copy, captions                              |

### Typography

| Element        | Font            | Weight | Size     |
|----------------|-----------------|--------|----------|
| H1 / Name      | Orbitron        | 700    | 56–64 px |
| H2 / Page title| Orbitron        | 600    | 32 px    |
| Labels / Nav   | JetBrains Mono  | 400    | 13–14 px |
| Body text      | Inter           | 400    | 16 px    |
| Button text    | Inter           | 600    | 14 px    |

### Shared Navigation Bar (present on all 3 pages)

- **Position**: Fixed, top-right corner of the viewport (not full-width).
- **Style**: Floating container, background `#0d0d14`, border `1px solid #00ff8740`, subtle neon green glow.
- **Items** in JetBrains Mono: `[ Home ]` · `[ About ]` · `[ Contact ]`
- **Active page** item: text color `#00ff87`, 2 px neon green bottom line.
- Clicking a nav item navigates to that page.

### Shared Decorative Elements

- 1 px neon green horizontal hairlines (`#00ff87` at 20 % opacity) as section dividers.
- Very subtle repeating scanline texture on background (1 px horizontal lines, 2 % opacity).
- Neon green radial glow blob behind the main focal element on each page.

---

## 📄 Page 1 — Home

**Active nav item**: `[ Home ]`

### Layout

Fully centered — both vertically and horizontally in the viewport (hero layout).

### Elements (top to bottom, centered)

1. **Black Hole** *(CSS animation — no image)*
   - Circular, ~280 × 280 px.
   - Three concentric rings orbiting a pure black center (`#000000`).
   - Outer ring: 2 px neon green arc, slow clockwise spin (annotate: *8s CSS rotation*).
   - Middle ring: dark-purple/teal gradient translucent disc.
   - Inner circle: solid black.
   - Soft neon green radial glow halo behind it.
   - Caption below in JetBrains Mono 11 px `#00ff8780`: `[ ROTATING BLACK HOLE — CSS ANIMATION ]`

2. **Name**
   - Text: `ekong`
   - Orbitron Bold 56 px, white, letter-spacing 4 px.
   - Margin-top: 32 px from the black hole.

3. **Tagline**
   - Text: `// DESIGNER · DEVELOPER · CREATOR`
   - JetBrains Mono 13 px, `#00ff87`, letter-spacing 3 px.

4. **CTA Button — Contact Me**
   - Label: `CONTACT ME`
   - Background `#f5a623`, text black, Inter SemiBold 14 px, uppercase.
   - Padding 14 px 40 px, border-radius 4 px.
   - Hover: background `#ffcf40`, glow `0 0 18px rgba(245,166,35,0.7)`.
   - On click: navigate to Contact page.

### Background

- Dark radial gradient centered: `radial-gradient(ellipse 60% 40% at 50% 50%, #0a1a10 0%, #050508 70%)`.
- Thin neon green hairline at very bottom of page (full width, 20 % opacity).

---

## 📄 Page 2 — About

**Active nav item**: `[ About ]`

### Layout

Two-column grid, desktop 1440 px: left ~38 %, right ~57 %, 5 % gap. Vertically centered in viewport.

### Left Column

- Ghost watermark text: `ABOUT` in Orbitron 700, ~96 px, color `#1a1a2e`, rotated –90°, positioned along far left edge.
- Section label: `[ 02 ]` — JetBrains Mono 12 px, `#00ff87`.
- Section heading: `About Me` — Orbitron SemiBold 32 px, white.
- 2 px neon green short underline (~40 px) below the heading.
- Short body intro in Inter 16 px `#a0a8b8` (2–3 lines of placeholder text starting with `//`).

### Right Column — Info Blocks

Repeat the following pattern for each personal info field.  
Use a 1 px `#1a1a2e` horizontal rule between each block.

```
> name         :  ekong
> role         :  Designer & Developer
> location     :  [City, Country]
> education    :  [Degree · University]
> availability :  Open to opportunities
```

- Label (`> name :`) — JetBrains Mono 13 px, `#00ff87`.
- Value — Inter 16 px, `#ffffff`.
- Row height ~52 px with 1 px border-bottom `#1a1a2e`.

**No images, no photos, no avatar of any kind.**

### Background

- Faint diagonal tech-grid overlay (20 px, `#00ff87` at 3 % opacity) across the entire page background.

---

## 📄 Page 3 — Contact

**Active nav item**: `[ Contact ]`

### Layout

Single column, max-width 560 px, horizontally centered. Content vertically centered in viewport.

### Elements (top to bottom)

1. **Section label**: `[ 03 ]` — JetBrains Mono 12 px, `#00ff87`.

2. **Heading**: `Contact` — Orbitron SemiBold 32 px, white. 2 px neon green short underline.

3. **Intro line**:  
   `// Find me on the following platforms`  
   JetBrains Mono 13 px, `#a0a8b8`.

4. **Social Media Cards** — vertical stack, full width (max 560 px).

   Each card:
   - Background: `#0d0d14`
   - Border: `1px solid #1a1a2e`
   - Border-radius: 6 px
   - Padding: 18 px 20 px
   - Height: ~64 px
   - Gap between cards: 12 px

   Card layout (horizontal, flex row):
   - **Left**: platform icon label in neon green monospace bracket, e.g. `[GH]` `[TW]` `[LI]` `[IG]` — 36 × 36 px square, border `1px solid #00ff8750`, background `#050508`.
   - **Center**: platform name in Inter SemiBold 15 px white + handle in JetBrains Mono 13 px `#a0a8b8` below it.
   - **Right**: arrow `→` in `#f5a623`, 18 px.

   Hover state annotation: *border changes to `#00ff87` 50 % opacity + 4 px left neon green accent bar*.

   Platforms (placeholders):
   - GitHub — `@yourusername`
   - Twitter / X — `@yourusername`
   - LinkedIn — `linkedin.com/in/yourprofile`
   - Instagram — `@yourusername`

5. **Footer note**:  
   `© 2026 ekong. All rights reserved.`  
   JetBrains Mono 12 px, `#a0a8b8`, centered, margin-top 48 px.  
   1 px neon green top border above it at 20 % opacity.

---

## 🔄 Interaction Annotations

Add callout annotations directly on the prototype frames:

| Element                  | Annotation                                                          |
|--------------------------|---------------------------------------------------------------------|
| Black hole outer ring    | `CSS: rotate(360deg) 8s linear infinite`                           |
| Page transition          | `Animation: current page shrinks into black hole, next page fades in` |
| "Contact Me" button      | `Click → navigate to Contact page`                                  |
| Nav items                | `Click → navigate to corresponding page`                            |
| Social card hover        | `Hover: border #00ff87, left 4px green bar appears`                 |

---

## ✅ Deliverable

**3 separate full-page frames**, desktop (1440 × 900 px) and mobile (390 × 844 px):

| Frame | Page    | Notes                              |
|-------|---------|-------------------------------------|
| 1     | Home    | Black hole + ekong + CTA button     |
| 2     | About   | Two-column info layout              |
| 3     | Contact | Social link cards list              |

Total: **6 frames** (3 pages × 2 breakpoints).
