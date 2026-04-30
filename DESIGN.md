---
name: Modern Maghreb
colors:
  surface: '#fff8f3'
  surface-dim: '#e0d9d2'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ec'
  surface-container: '#f4ece6'
  surface-container-high: '#efe7e0'
  surface-container-highest: '#e9e1db'
  on-surface: '#1e1b17'
  on-surface-variant: '#56423c'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efe9'
  outline: '#8a726b'
  outline-variant: '#ddc0b8'
  surface-tint: '#a04021'
  primary: '#9c3c1e'
  on-primary: '#ffffff'
  primary-container: '#bc5434'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb59f'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#6bc8fe'
  on-secondary-container: '#005374'
  tertiary: '#755600'
  on-tertiary: '#ffffff'
  tertiary-container: '#936d00'
  on-tertiary-container: '#fffaf6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb59f'
  on-primary-fixed: '#3a0a00'
  on-primary-fixed-variant: '#81290c'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#82cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#f6be39'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#fff8f3'
  on-background: '#1e1b17'
  surface-variant: '#e9e1db'
typography:
  display-xl:
    fontFamily: Noto Serif
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '500'
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
    lineHeight: '1.5'
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
---

## Brand & Style

This design system is built to evoke the sensory richness of Morocco—the warmth of sun-baked clay, the cool shade of a riad courtyard, and the intricate craftsmanship of ancient medinas. The brand personality is **Cultivated, Soulful, and Hospitable**. It avoids the clichés of "budget travel" in favor of a "boutique editorial" aesthetic.

The visual style is **Modern Corporate with Tactile Accents**. We utilize high-end whitespace and structured layouts typical of luxury travel journals, layered with subtle organic textures and geometric patterns that prevent the interface from feeling cold. The goal is to make the user feel like they are already beginning their journey the moment they land on the page.

## Colors

The palette is a curated journey through Moroccan landscapes. 
- **Terracotta (Primary):** Used for primary actions and key brand moments, representing the red walls of Marrakech.
- **Azure Blue (Secondary):** Inspired by Chefchaouen, used for secondary interactions, links, and calm states.
- **Desert Gold (Tertiary):** Reserved for highlights, ratings, and "luxury" indicators.
- **Garden Green (Success/Nature):** Used for eco-tourism labels, botanical gardens, and positive confirmations.
- **Surface Palette:** The background uses a creamy off-white (`#FCF9F2`) rather than pure white to reduce eye strain and feel more like high-quality parchment.

## Typography

This design system employs a high-contrast typographic pairing to balance heritage with modern utility. 

**Noto Serif** is used for headlines to convey authority, history, and elegance. It should be used with generous leading to maintain a literary feel. 

**Plus Jakarta Sans** provides a friendly, contemporary contrast for body copy and UI elements. Its high x-height ensures legibility for logistics and booking details. Labels and small metadata should use uppercase styling with increased letter spacing to provide a clean, organized look against the more decorative headlines.

## Layout & Spacing

The design system utilizes a **Fixed Grid** model for desktop to ensure an editorial, "coffee-table book" feel. A 12-column grid is standard, with 24px gutters. 

Vertical spacing is intentionally generous. We use a 8px base unit, but key sections should be separated by a `section-gap` (80px or 120px) to allow the "Zellij" background patterns room to breathe. Content cards should use internal padding of at least 32px to maintain a feeling of luxury and space.

## Elevation & Depth

Depth in this design system is created through **Tonal Layers** and **Ambient Shadows** rather than heavy 3D effects. 

- **Surface Tiers:** Most containers sit directly on the off-white background with a subtle 1px border in a darkened neutral shade.
- **Shadows:** When elevation is required (e.g., for hovering cards or modals), use "warm" shadows. Instead of pure black, shadows should use a low-opacity Terracotta or Azure tint to feel like natural sunlight casting a shadow on a textured wall.
- **Zellij Patterning:** Use subtle, low-opacity (2-5%) geometric Zellij patterns in the background of certain sections. These act as "visual depth" markers without competing with the foreground text.

## Shapes

The shape language reflects Moroccan architecture—specifically the transition between structural masonry and organic arches. 

A `roundedness` level of **2** (0.5rem base) is applied to all standard components (buttons, inputs, cards). However, specific featured image containers or "Hero" sections may use a custom "Arch" radius on the top edge (e.g., `100px 100px 0 0`) to subtly mimic the iconic Moroccan horseshoe arch.

## Components

- **Buttons:** Primary buttons use a solid Terracotta fill with white text. Secondary buttons use an Azure outline. "Luxury" or "VIP" buttons may use a Desert Gold gradient or solid fill.
- **Cards:** Cards should have a white background, the standard `rounded-lg` corner, and a subtle 1px border in `#E6E1D6`. For high-priority items, a 4px top border in Desert Gold may be added.
- **Inputs:** Form fields use a soft-gray background with a bottom-only border that transitions to Azure on focus, keeping the UI light and airy.
- **Chips/Tags:** Use Garden Green for "Open" or "Available" statuses, and Azure for "Cultural" or "Coastal" categories.
- **Dividers:** Instead of simple lines, use a repetitive Zellij-inspired geometric SVG string to separate major content sections.
- **Navigation:** The navigation bar should be semi-transparent with a backdrop blur (Glassmorphism) to let the vibrant colors of the hero imagery bleed through.