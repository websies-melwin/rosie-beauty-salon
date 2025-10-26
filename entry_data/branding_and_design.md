# Branding & Design System - Rosie Beauty Salon

## Brand Overview

**Brand Name:** Rosie Beauty Salon  
**Tagline:** "Elite Aesthetics Salon - Your Path to Radiance"  
**Brand Essence:** Professional, personalized beauty care with advanced technology  
**Brand Personality:** Elegant, warm, modern, trustworthy, approachable

---

## Design Philosophy

### Core Design Principles

1. **Modern Minimalism with Decorative Accents**
   - Clean, uncluttered layouts
   - Strategic use of white space
   - Elegant decorative touches (not sterile)
   - Balance between simplicity and visual interest

2. **Mobile-First Responsive Design**
   - Prioritize mobile experience (60%+ mobile traffic)
   - Touch-friendly interactive elements
   - Fast loading, optimized images
   - Seamless experience across all devices

3. **Professional Yet Approachable**
   - High-quality, polished aesthetic
   - Warm, inviting atmosphere
   - Not overly clinical or cold
   - Builds trust while remaining accessible

4. **Visual Storytelling**
   - Before/after transformations showcase results
   - High-quality imagery tells the brand story
   - Service visuals demonstrate expertise
   - Personal touches (Rosica's story, signature) build connection

---

## Color Palette

### Primary Colors

**Cream (#F5F1E8 or similar)**
- Usage: Backgrounds, sections, cards
- Represents: Elegance, cleanliness, softness
- Application: 40% of design

**Soft Gold/Beige (#E8DCC4 or similar)**
- Usage: Accents, hover states, subtle highlights
- Represents: Luxury, warmth, premium service
- Application: 20% of design

**Light Yellow (#F4E9A3 or similar)**
- Usage: Footer background, promotional banners
- Represents: Energy, positivity, attention
- Application: 15% of design (featured sections)

### Secondary Colors

**Soft Pink to Coral Gradient (#FFE5E5 → #FFD4B8)**
- Usage: CTA sections, testimonial cards, accents
- Represents: Beauty, femininity, warmth
- Application: Gradient backgrounds, special sections

**White (#FFFFFF)**
- Usage: Primary backgrounds, cards, clean sections
- Represents: Purity, cleanliness, professionalism
- Application: 25% of design

### Text Colors

**Primary Text - Dark Charcoal (#2C2C2C or #1A1A1A)**
- Usage: Body text, paragraphs, descriptions
- Provides: Excellent readability, professional look
- Contrast ratio: 15:1 on white (exceeds WCAG AAA)

**Secondary Text - Medium Gray (#6B6B6B or #757575)**
- Usage: Supporting text, captions, metadata
- Provides: Visual hierarchy, subtle information
- Contrast ratio: 7:1 on white (exceeds WCAG AA)

**Accent Text - Gold/Brown (#8B7355 or similar)**
- Usage: Links, important information, decorative text
- Provides: Visual interest, brand consistency

### Accent & Interaction Colors

**Success Green (#4CAF50)**
- Usage: Success messages, confirmations
- Application: Booking confirmation, form success states

**Error Red (#DC3545)**
- Usage: Error messages, validation warnings
- Application: Form errors, alert messages

**Info Blue (#2196F3)**
- Usage: Informational messages (if needed)
- Application: System notifications, tips

---

## Typography System

### Font Families

#### Primary Heading Font: **Cormorant Garamond** (Serif)
- **Weight:** Regular (400), SemiBold (600), Bold (700)
- **Purpose:** Main headings, page titles, elegant display text
- **Characteristics:** Elegant, decorative, sophisticated, readable
- **Fallback:** Georgia, 'Times New Roman', serif

**Alternative Option:** Playfair Display

#### Body & UI Font: **Inter** (Sans-Serif)
- **Weight:** Regular (400), Medium (500), SemiBold (600)
- **Purpose:** Body text, buttons, navigation, UI elements
- **Characteristics:** Clean, modern, highly readable, versatile
- **Fallback:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif

**Alternative Option:** DM Sans

#### Accent Font: **Montserrat** (Sans-Serif) - Optional
- **Weight:** Medium (500), SemiBold (600)
- **Purpose:** Small headings, labels, special text
- **Characteristics:** Geometric, modern, clean
- **Use sparingly for special accents**

### Typography Scale

```css
/* Desktop Typography Scale */
--font-size-xs: 0.75rem;     /* 12px - Fine print, captions */
--font-size-sm: 0.875rem;    /* 14px - Small text, labels */
--font-size-base: 1rem;      /* 16px - Body text, paragraphs */
--font-size-lg: 1.125rem;    /* 18px - Large body text */
--font-size-xl: 1.25rem;     /* 20px - Small headings */
--font-size-2xl: 1.5rem;     /* 24px - Section subheadings */
--font-size-3xl: 1.875rem;   /* 30px - Section headings */
--font-size-4xl: 2.25rem;    /* 36px - Page subheadings */
--font-size-5xl: 3rem;       /* 48px - Page titles */
--font-size-6xl: 3.75rem;    /* 60px - Hero headings */
```

```css
/* Mobile Typography Scale (16px base) */
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;     /* 20px */
--font-size-2xl: 1.375rem;   /* 22px */
--font-size-3xl: 1.5rem;     /* 24px */
--font-size-4xl: 1.875rem;   /* 30px */
--font-size-5xl: 2.25rem;    /* 36px */
--font-size-6xl: 2.5rem;     /* 40px */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 1.25;    /* Headings */
--line-height-normal: 1.5;    /* Body text */
--line-height-relaxed: 1.75;  /* Long-form content */
```

### Letter Spacing
```css
--letter-spacing-tight: -0.025em;  /* Large headings */
--letter-spacing-normal: 0;        /* Body text */
--letter-spacing-wide: 0.05em;     /* Small caps, labels */
```

---

## Spacing System

### Base Unit: 8px

```css
/* Spacing Scale (8px base unit) */
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
```

### Usage Guidelines
- **Micro spacing:** 4-8px (element padding, small gaps)
- **Component spacing:** 16-24px (card padding, button spacing)
- **Section spacing:** 48-96px (between page sections)
- **Responsive:** Reduce spacing by 25-50% on mobile

---

## Component Styles

### Buttons

#### Primary Button
```css
Background: Transparent (outlined)
Border: 2px solid #8B7355 (gold/brown)
Text: #8B7355
Font: Inter, 500 weight
Padding: 12px 32px
Border Radius: 24px (fully rounded)
Font Size: 16px

Hover State:
  Background: #8B7355
  Text: #FFFFFF
  Transition: 300ms ease
```

#### Secondary Button (CTA)
```css
Background: Transparent (outlined)
Border: 2px solid #FFFFFF (on gradient backgrounds)
Text: #FFFFFF
Font: Inter, 500 weight
Padding: 12px 32px
Border Radius: 24px
Font Size: 16px

Hover State:
  Background: #FFFFFF
  Text: #8B7355
  Transition: 300ms ease
```

#### Button Sizes
- **Small:** 10px 24px, 14px text
- **Medium:** 12px 32px, 16px text (default)
- **Large:** 14px 40px, 18px text

### Cards

#### Service Card
```css
Background: #FFFFFF
Border: 1px solid #E8DCC4 (optional)
Border Radius: 8px
Padding: 24px
Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)

Hover State:
  Box Shadow: 0 4px 16px rgba(0, 0, 0, 0.12)
  Transform: translateY(-4px)
  Transition: 300ms ease
```

#### Testimonial Card
```css
Background: Linear gradient (soft pink to cream)
Border Radius: 12px
Padding: 32px
Box Shadow: 0 2px 12px rgba(0, 0, 0, 0.06)
```

#### Gallery Card
```css
Background: #F5F5F5 (placeholder)
Border Radius: 4px (minimal)
Aspect Ratio: 1:1 or 3:4
Box Shadow: None (clean edges)

Hover State:
  Transform: scale(1.05)
  Transition: 300ms ease
```

### Forms & Inputs

#### Text Input / Select
```css
Background: #FFFFFF
Border: 1px solid #E0E0E0
Border Radius: 6px
Padding: 12px 16px
Font: Inter, 400 weight, 16px
Color: #2C2C2C

Focus State:
  Border: 2px solid #8B7355
  Outline: none
  Box Shadow: 0 0 0 3px rgba(139, 115, 85, 0.1)
```

#### Date Picker / Time Picker
```css
Same styling as text input
Calendar popup: White background, shadow
Selected date: Gold/beige background
Hover date: Light gold/beige background
```

### Navigation

#### Desktop Navigation
```css
Background: #F4E9A3 (light yellow)
Height: 64px
Font: Inter, 500 weight, 16px
Link Color: #2C2C2C
Link Hover: #8B7355
Active State: Bold, underline

Book Now Button: Outlined primary button style
```

#### Mobile Navigation
```css
Hamburger Menu: Simple icon
Mobile Menu: Full-screen overlay or slide-in
Background: #F4E9A3
Links: Larger touch targets (48px min height)
```

---

## Layout & Grid System

### Container Widths
```css
/* Max-width for content */
--container-sm: 640px;   /* Small content blocks */
--container-md: 768px;   /* Medium content, forms */
--container-lg: 1024px;  /* Standard page content */
--container-xl: 1280px;  /* Wide sections */
--container-full: 100%;  /* Full-width sections */
```

### Grid System
- **Desktop:** 12-column grid
- **Tablet:** 8-column grid
- **Mobile:** 4-column grid
- **Gutter:** 24px (desktop), 16px (mobile)

### Section Layouts
- **Hero sections:** Full-width, 90vh minimum height
- **Content sections:** Max-width container, centered
- **Two-column layouts:** 60/40 or 50/50 split
- **Three-column grids:** Equal width cards

---

## Imagery Guidelines

### Image Style
- **Professional photography** preferred
- **Clean backgrounds:** White, neutral, or soft focus
- **Well-lit, bright images**
- **High resolution:** Minimum 1200px width
- **Consistent tone:** Warm, inviting, professional

### Image Types

**Hero Images:**
- Close-up treatment shots
- Peaceful, serene compositions
- Soft lighting, professional quality
- Aspect ratio: 16:9 or 21:9

**Service Images:**
- Equipment and technology shots
- Treatment demonstrations
- Before/after comparisons
- Aspect ratio: 4:3 or 1:1

**Gallery Images:**
- Before/after split images (vertical divider)
- Clear, clinical documentation
- Same lighting and angle for comparisons
- Aspect ratio: 1:1 (square) or 3:4 (portrait)

**About/Bio Images:**
- Professional portrait of Rosica
- Warm, welcoming expression
- Salon setting or clean background
- Aspect ratio: 3:4 (portrait)

### Image Optimization
- **Format:** WebP with JPG fallback
- **Compression:** 80-85% quality
- **Responsive images:** srcset for multiple sizes
- **Lazy loading:** Below-the-fold images
- **Alt text:** Descriptive, accessible

---

## Iconography

### Icon Style
- **Line icons** (outlined, not filled)
- **Stroke width:** 1.5-2px
- **Size:** 20-24px standard
- **Color:** Matches text color or accent color

### Icon Library
**Recommended:** Lucide React or Hero Icons
- Consistent stroke width
- Modern, clean design
- Good variety for all needs

### Common Icons Needed
- Phone (contact)
- Email (contact)
- MapPin (location)
- Calendar (booking)
- Clock (duration)
- Check (confirmation)
- ChevronRight (navigation)
- ChevronLeft (carousel)
- Instagram (social)
- Facebook (social)

---

## Animations & Transitions

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### Duration
```css
--duration-fast: 150ms;    /* Micro-interactions */
--duration-normal: 300ms;  /* Standard transitions */
--duration-slow: 500ms;    /* Dramatic effects */
```

### Common Animations
- **Hover effects:** Scale (1.05), translateY(-4px), shadow increase
- **Button interactions:** Background fill, border color change
- **Page transitions:** Fade in (opacity), slide up
- **Loading states:** Skeleton screens, fade in
- **Carousel:** Smooth slide (300ms)

### Animation Guidelines
- **Subtle, not distracting**
- **Enhance UX, don't just add for style**
- **Respect prefers-reduced-motion**
- **Smooth, natural feeling**

---

## Elevation & Shadows

### Shadow System
```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-xl: 0 8px 32px rgba(0, 0, 0, 0.15);
```

### Usage
- **Cards at rest:** shadow-md
- **Cards on hover:** shadow-lg
- **Modals/dialogs:** shadow-xl
- **Dropdowns:** shadow-lg
- **Subtle accents:** shadow-sm

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large desktop */
```

### Device Targets
- **Mobile:** < 640px (primary focus)
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px+
- **Large Desktop:** 1280px+

---

## Accessibility Standards

### WCAG Compliance
- **Target:** WCAG 2.1 Level AA minimum
- **Color Contrast:** 4.5:1 for text, 3:1 for large text
- **Focus Indicators:** Visible on all interactive elements
- **Keyboard Navigation:** Full site navigable via keyboard
- **Screen Readers:** Semantic HTML, ARIA labels where needed

### Implementation
- Alt text for all images
- Proper heading hierarchy (H1 → H2 → H3)
- Form labels for all inputs
- Skip to content link
- Focus visible styles
- Sufficient touch target sizes (44x44px minimum)

---

## Brand Assets

### Logo
[To be provided by client if available]
- Primary logo (full color)
- Logo mark (icon only)
- White version (for dark backgrounds)
- Minimum size: 120px width

### Signature
- Rosica's handwritten signature (PNG with transparency)
- Used on About page for personal touch

### Pattern/Texture
- Optional: Subtle texture or pattern for backgrounds
- Keep minimal, don't distract from content

---

## Design Inspiration References

### Aesthetic Keywords
- Elegant
- Minimal
- Modern
- Warm
- Professional
- Clean
- Inviting
- Trustworthy

### Similar Style References
- High-end spa websites
- Premium skincare brands
- Boutique beauty salons
- Medical aesthetic clinics
- Luxury service providers

---

## Design Don'ts

❌ **Avoid These:**
- Overly clinical, sterile appearance
- Too much decoration (busy, cluttered)
- Neon or harsh colors
- Comic Sans or unprofessional fonts
- Low-quality stock photos
- Excessive animations
- Tiny text (below 14px)
- Poor color contrast
- Auto-playing videos/music

---

## Implementation Notes for Developers

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        beige: '#E8DCC4',
        'light-yellow': '#F4E9A3',
        'accent-gold': '#8B7355',
        'dark-gray': '#2C2C2C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'sans-serif'],
      },
      spacing: {
        // 8px base unit system
      },
    },
  },
}
```

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-cream: #F5F1E8;
  --color-beige: #E8DCC4;
  --color-light-yellow: #F4E9A3;
  --color-accent-gold: #8B7355;
  
  /* Typography */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
  
  /* Spacing */
  --space-unit: 8px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Ready for Implementation  
**Next Steps:** Apply design system consistently across all pages and components
