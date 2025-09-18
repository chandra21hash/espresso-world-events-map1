# Espresso World Map Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern mapping applications like Airbnb's travel maps and Apple Maps, combined with the warm, professional aesthetic of specialty coffee brands.

## Core Design Elements

### A. Color Palette
**Primary Colors (from espres.png logo):**
- Espresso Dark: 25 65% 25% (for past events)
- Espresso Light: 35 45% 55% (for upcoming events)
- Logo Orange: 20 85% 60% (accent and highlights)

**Supporting Colors:**
- Background: 210 25% 8% (dark charcoal)
- Surface: 210 15% 12% (elevated elements)
- Text Primary: 0 0% 95% (high contrast)
- Text Secondary: 0 0% 70% (medium contrast)

### B. Typography
- **Primary Font**: Inter via Google Fonts
- **Heading Font**: Playfair Display (for elegant coffee brand feel)
- **Scale**: text-xs to text-4xl with emphasis on text-lg for body content

### C. Layout System
**Spacing Primitives**: Tailwind units of 2, 4, 6, and 8
- Tight spacing: p-2, m-2
- Standard spacing: p-4, gap-4
- Generous spacing: p-6, m-8
- Section spacing: py-8, my-12

### D. Component Library

**Map Container:**
- Full viewport height with subtle dark borders
- Rounded corners (rounded-lg) on desktop
- Custom Leaflet styling matching espresso color scheme

**Toggle Control:**
- Pill-shaped toggle in top-left corner
- Active state uses espresso colors matching current mode
- Smooth transition animations (transition-all duration-300)

**Event Pins:**
- Custom coffee bean-shaped markers
- Color-coded: dark espresso (past) / light espresso (upcoming)
- Subtle drop shadows for depth

**Event Popups:**
- Rounded cards (rounded-xl) with espresso-toned borders
- Typography hierarchy: venue name (text-lg font-semibold), location (text-sm), date (text-xs)
- CTA buttons with espresso orange background

**Legend:**
- Bottom-right floating card
- Compact design with color swatches and clear labels
- Semi-transparent background with backdrop blur

**Navigation Header:**
- Clean, minimal design with logo left-aligned
- Espresso orange logo colors preserved exactly
- Transparent background with subtle border-bottom

### E. Interactions
**Minimal Animation Strategy:**
- Smooth map panning and zooming (native Leaflet)
- Gentle hover states on interactive elements (scale-105)
- Fade transitions for mode switching (opacity changes)
- No distracting animations that interfere with map exploration

## Visual Treatment
**Background:** Deep charcoal gradient with subtle texture overlay
**Map Styling:** Custom dark theme emphasizing espresso color palette
**Elevation:** Subtle shadows using Tailwind's shadow-lg for floating elements
**Contrast:** High contrast between map elements and UI components for clarity

## Responsive Behavior
- **Desktop**: Full-width map with floating controls
- **Tablet**: Adjusted legend positioning, touch-friendly controls
- **Mobile**: Collapsed legend, larger touch targets, simplified popup layout

This design creates a sophisticated, coffee-centric mapping experience that balances functional clarity with the warm, premium aesthetic of the Espresso brand.