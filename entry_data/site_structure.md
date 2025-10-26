# Site Structure - Rosie Beauty Salon

## Site Architecture Overview

### Site Type
- **Architecture:** Multi-page website (5 core pages)
- **Framework:** Next.js 14+ App Router
- **Routing:** File-based routing with dynamic segments
- **Navigation:** Horizontal top navigation + mobile hamburger menu

---

## Site Map

```
rosiebeautysalon.com
│
├── Home (/)
│   ├── Hero Section
│   ├── 20% OFF Banner
│   ├── What We Offer (Services Overview)
│   ├── A Note From Rosica
│   ├── Client Testimonials
│   ├── Gallery Preview
│   ├── Before & After Showcase
│   ├── Equipment Highlight
│   └── Location & Contact
│
├── Face & Skin (/face-and-skin)
│   ├── Page Header & Description
│   ├── Service Image Carousel
│   ├── About Our Equipment
│   ├── Services Grid (8 services)
│   └── CTA Section
│
├── Laser Hair Removal (/laser-hair-removal)
│   ├── Page Header
│   ├── Introduction & Process Explanation
│   ├── Technology Showcase
│   ├── Treatment Image Carousel
│   ├── Pricing - Women (16 services)
│   ├── Pricing - Men (25 services)
│   └── CTA Section
│
├── Gallery (/gallery)
│   ├── Page Header
│   ├── Facial Treatments Gallery Grid (6 images)
│   ├── Laser Hair Removal Carousel
│   └── Optional CTA Section
│
└── About Me (/about)
    ├── Page Header ("I am Rosica")
    ├── Bio & Photo Section
    └── CTA Section
```

---

## Navigation Structure

### Primary Navigation (Desktop)

**Location:** Top of page, fixed/sticky header  
**Background:** Light yellow (#F4E9A3)  
**Height:** 64px

**Menu Items (Left to Right):**
1. **Home** → `/`
2. **Face & Skin** → `/face-and-skin`
3. **Laser Hair Removal** → `/laser-hair-removal`
4. **Before & After** → `/gallery`
5. **About Me** → `/about`
6. **Contact** → Scrolls to footer on current page (or `/` footer if on other pages)

**Right Side:**
- **Book Now** button (outlined style, placeholder for now)

### Mobile Navigation

**Trigger:** Hamburger menu icon (top right)  
**Menu Type:** Slide-in overlay or full-screen menu  
**Background:** Light yellow (#F4E9A3)

**Menu Items (Stacked):**
1. Home
2. Face & Skin
3. Laser Hair Removal
4. Before & After
5. About Me
6. Contact
7. Book Now (button at bottom)

**Behavior:**
- Close on item click
- Close on outside click (overlay)
- Close button (X icon) in top right
- Smooth slide animation (300ms)

---

## Footer Structure

### Footer Layout
**Background:** Light yellow (#F4E9A3)  
**Layout:** Multi-column grid (desktop) / stacked (mobile)

### Footer Content Columns

#### Column 1: Business Information
**Heading:** Rosie Beauty Salon

**Contact Information:**
- Email: rosiebeautyst@gmail.com (clickable mailto: link)
- Phone: 07414 601010 (clickable tel: link with "Text me:" label)

**Location:**
- Orchard Street, 49C
- Weston-super-Mare
- BS23 1RJ

#### Column 2: Business Hours
**Heading:** Hours

**Schedule:**
- Mon, Wed, Fri: 9 AM - 8 PM
- Tue, Thu: 9 AM - 6 PM
- Sat: 10 AM - 2 PM
- Sun: CLOSED

#### Column 3: Quick Links
**Heading:** Navigation (or hidden heading)

**Links:**
- Home
- Face & Skin
- Laser Hair Removal
- Before & After
- About Me
- Contact

#### Column 4: Legal & Social
**Heading:** Follow Us

**Social Media Links:**
- Instagram (icon + link)
- Facebook (icon + link)

**Legal Links:**
- Terms & Conditions
- Privacy Policy
- Refund Policy
- Accessibility Statement

### Footer Bottom
**Copyright:** © 2025 Rosie Beauty Salon  
**Additional:** "Made by [Developer Name]" or Websies attribution (if applicable)

---

## URL Structure & Routing

### Page URLs

| Page | URL Path | Slug |
|------|----------|------|
| Homepage | `/` | index |
| Face & Skin | `/face-and-skin` | face-and-skin |
| Laser Hair Removal | `/laser-hair-removal` | laser-hair-removal |
| Gallery | `/gallery` | gallery |
| About | `/about` | about |

### Future Routes (Phase 2+)
- `/booking` - Booking flow pages
- `/booking/success` - Booking confirmation
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy
- `/refund-policy` - Refund Policy
- `/accessibility` - Accessibility Statement
- `/admin` - Admin dashboard (future)

### URL Best Practices
- Lowercase only
- Hyphens for spaces (not underscores)
- Descriptive, keyword-rich slugs
- No trailing slashes
- Consistent structure

---

## Page Hierarchy & Information Architecture

### Level 1: Homepage (/)
**Purpose:** Main entry point, overview of services, build trust, guide to other pages  
**Priority:** Highest - Most traffic  
**Key Actions:** View services, book appointment, learn about Rosica

### Level 2: Service Pages
**Face & Skin** (`/face-and-skin`)
- **Purpose:** Detailed facial service information, pricing, booking
- **Priority:** High - Primary revenue source
- **Key Actions:** View service details, book specific treatment

**Laser Hair Removal** (`/laser-hair-removal`)
- **Purpose:** Detailed laser service information, pricing (women/men), booking
- **Priority:** High - Primary revenue source
- **Key Actions:** View pricing, book treatment, understand process

### Level 2: Supporting Pages
**Gallery** (`/gallery`)
- **Purpose:** Showcase results, build trust through transformations
- **Priority:** Medium - Social proof
- **Key Actions:** View before/after, get inspired, proceed to booking

**About** (`/about`)
- **Purpose:** Personal connection with Rosica, build trust
- **Priority:** Medium - Relationship building
- **Key Actions:** Learn about Rosica, explore services

---

## Content Hierarchy & Typography

### Heading Levels

**H1 - Page Title**
- One per page
- Largest heading (48-60px desktop)
- Example: "Face & Skin", "Gallery", "I am Rosica"

**H2 - Section Headings**
- Multiple per page
- 30-36px desktop
- Example: "What we offer", "Hear From My Clients", "Pricing - Women"

**H3 - Subsection Headings**
- Component titles, service names
- 24-28px desktop
- Example: "Basic Therapy", "About Our Equipment"

**H4 - Minor Headings** (if needed)
- Small section labels
- 20-22px desktop
- Example: Labels within cards or components

### Content Organization Principles
1. **Inverted Pyramid:** Most important info first
2. **Scannable:** Short paragraphs, bullet points, clear headings
3. **Actionable:** Clear CTAs throughout
4. **Progressive Disclosure:** Brief overview → detailed info on click/navigation
5. **Visual Hierarchy:** Use typography, spacing, and layout to guide eye

---

## Internal Linking Strategy

### Homepage Links
**Primary Internal Links:**
- "Face & Skin" service card → `/face-and-skin`
- "Laser Hair Removal" service card → `/laser-hair-removal`
- Gallery preview "View Full Gallery" → `/gallery`
- "Before & After Transformations" section → `/gallery`
- "Rosica" mention or signature → `/about`

### Service Page Links
**Face & Skin Page:**
- Each "Book Now" button → Booking flow (placeholder initially)
- "Explore" in Before/After section → `/gallery`
- Navigation links to other pages

**Laser Hair Removal Page:**
- "Book Now" buttons → Booking flow (placeholder)
- Navigation links

### Cross-Linking Opportunities
- Gallery page → Service pages (view related services)
- About page → Service pages (explore services)
- Footer links on every page

---

## Breadcrumb Navigation
**Phase 1:** Not implemented (simple 5-page structure)  
**Future:** Consider breadcrumbs if site expands beyond 10 pages

Example for future:
```
Home > Face & Skin > Basic Therapy
```

---

## Sitemap Structure

### XML Sitemap (sitemap.xml)
Generated automatically by Next.js or manually created:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rosiebeautysalon.com/</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rosiebeautysalon.com/face-and-skin</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rosiebeautysalon.com/laser-hair-removal</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rosiebeautysalon.com/gallery</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://rosiebeautysalon.com/about</loc>
    <lastmod>2025-10-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

### Robots.txt
```
User-agent: *
Allow: /

Sitemap: https://rosiebeautysalon.com/sitemap.xml
```

---

## User Flows

### Primary User Journey: Book a Service

**Starting Point:** Any page  
**Goal:** Complete booking

**Flow:**
1. User lands on site (homepage or service page)
2. Explores services (reads descriptions, views pricing)
3. Clicks "Book Now" button
4. [Future] Booking modal/page opens:
   - Select service from dropdown
   - Choose date
   - Choose time (dynamic based on service duration)
   - Enter contact info (name, email, phone)
   - Review booking details
   - Submit booking
5. Confirmation screen
6. Email confirmation sent to user
7. Rosie receives notification email
8. Booking added to Rosie's Google Calendar

### Secondary User Journey: Research & Build Trust

**Flow:**
1. User lands on homepage
2. Reads about Rosica ("A Note From Rosica")
3. Views testimonials
4. Clicks to Gallery page
5. Views before/after transformations
6. Navigates to About page
7. Reads Rosica's full bio
8. Returns to service page
9. Clicks "Book Now"

### Tertiary User Journey: Service Comparison

**Flow:**
1. User lands on Face & Skin page
2. Browses services and pricing
3. Clicks navigation to Laser Hair Removal page
4. Compares services
5. Makes decision
6. Clicks "Book Now" for chosen service

---

## Mobile Navigation UX Considerations

### Touch Targets
- **Minimum size:** 44x44px (Apple guidelines)
- **Recommended:** 48x48px (Android guidelines)
- **Navigation links:** Full-width on mobile menu
- **Buttons:** Adequate padding, easy to tap

### Sticky Navigation
**Desktop:** Header fixed at top (always visible)  
**Mobile:** 
- Option A: Fixed header (always visible)
- Option B: Hide on scroll down, show on scroll up
- Recommendation: Always visible for easy access to "Book Now"

### Gesture Support
- Swipe right/left for gallery carousel
- Tap outside to close mobile menu
- Pull-to-refresh (native browser behavior)

---

## Accessibility Navigation Features

### Keyboard Navigation
- **Tab order:** Logical flow through interactive elements
- **Skip to content link:** Jump past navigation to main content
- **Focus indicators:** Visible on all links, buttons
- **Arrow keys:** Navigate carousel/slider

### Screen Reader Support
- **ARIA labels:** Descriptive labels for icon-only buttons
- **Landmark roles:** header, nav, main, footer
- **Current page indicator:** aria-current="page" on active nav link
- **Descriptive link text:** Avoid "click here" - use "View Face & Skin Services"

### Mobile Accessibility
- **Hamburger menu:** Clear label "Menu" or "Open Navigation"
- **Close button:** Clear label "Close Menu"
- **Focus management:** Trap focus in mobile menu when open

---

## Search Functionality
**Phase 1:** Not implemented  
**Future:** Consider if site expands significantly

Potential implementation:
- Search bar in header
- Search service names, descriptions
- Autocomplete suggestions
- Search results page

---

## Error Pages

### 404 - Page Not Found
**URL:** `/404` (automatic Next.js route)

**Content:**
- Heading: "Page Not Found"
- Message: "Sorry, the page you're looking for doesn't exist."
- CTA: "Return to Homepage" button
- Additional links: Main navigation or popular pages

**Design:** Matches site branding, friendly tone

### 500 - Server Error
**URL:** `/500` (automatic Next.js route)

**Content:**
- Heading: "Something Went Wrong"
- Message: "We're working to fix this. Please try again later."
- CTA: "Return to Homepage" button
- Contact info: Email or phone if urgent

---

## Page Load & Transition Strategy

### Loading States
- **Initial page load:** Loading spinner or skeleton screen
- **Navigation between pages:** Smooth fade transition (300ms)
- **Image loading:** Progressive loading with blur effect
- **Form submission:** Loading spinner on button

### Optimistic UI
- Immediate feedback on interactions
- Show success state before server confirmation
- Handle errors gracefully with retry option

---

## Analytics & Tracking Structure

### Page View Tracking
Track all page visits:
- Homepage views
- Service page views (Face & Skin, Laser)
- Gallery views
- About page views

### Event Tracking
**Navigation Events:**
- Menu item clicks
- Footer link clicks
- Logo click (return to home)

**CTA Events:**
- "Book Now" button clicks (track which page)
- "Explore Services" clicks
- Service card clicks

**Engagement Events:**
- Gallery image views
- Carousel interactions
- Time on page
- Scroll depth

**Conversion Events:**
- Booking form starts
- Booking form completions
- Email link clicks
- Phone number clicks

---

## Responsive Breakpoint Behavior

### Desktop (1024px+)
- Full horizontal navigation
- Multi-column layouts
- Hover states active
- Full-size images

### Tablet (768px - 1023px)
- Horizontal navigation (may adjust spacing)
- Two-column layouts become single column selectively
- Touch and hover states
- Medium-size images

### Mobile (< 768px)
- Hamburger menu navigation
- Single-column layouts
- Touch-optimized interactions
- Optimized image sizes
- Reduced spacing
- Larger touch targets

---

## Content Loading Strategy

### Above the Fold
**Priority Loading:**
1. Navigation
2. Hero section (text + image)
3. Primary CTA

**Strategy:** Inline critical CSS, preload hero image

### Below the Fold
**Lazy Loading:**
- All images below initial viewport
- Carousels and galleries
- Testimonial sections
- Footer content

**Strategy:** Intersection Observer API, lazy load images

---

## Future Site Structure Enhancements

### Phase 2+ Additions

**Booking System Pages:**
- `/booking` - Main booking interface
- `/booking/confirm` - Review booking
- `/booking/success` - Confirmation page
- `/booking/cancel` - Cancellation flow

**Content Pages:**
- `/blog` - Beauty tips and news
- `/faq` - Frequently asked questions
- `/services` - Comprehensive services overview

**Account/Admin:**
- `/admin/dashboard` - Rosie's admin panel
- `/admin/bookings` - Manage appointments
- `/admin/settings` - Business settings

**Legal Pages:**
- `/terms-and-conditions`
- `/privacy-policy`
- `/refund-policy`
- `/accessibility-statement`

---

## Navigation State Management

### Active Page Indication
- **Current page:** Bold text or underline in navigation
- **Hover state:** Color change (#8B7355 gold)
- **Mobile:** Highlight current page in menu

### Navigation Context
- Maintain navigation state across pages
- Smooth transitions between pages
- Preserve scroll position on back navigation (when appropriate)

---

## Implementation Checklist

### Navigation Setup
- [ ] Create header component with horizontal nav
- [ ] Implement mobile hamburger menu
- [ ] Add active page indicators
- [ ] Test keyboard navigation
- [ ] Implement sticky/fixed header

### Footer Setup
- [ ] Create footer component with 4 columns
- [ ] Add contact information (clickable)
- [ ] Add business hours
- [ ] Add navigation links
- [ ] Add social media icons/links
- [ ] Add legal links placeholders

### Routing
- [ ] Set up Next.js App Router structure
- [ ] Create page routes for all 5 pages
- [ ] Implement 404 page
- [ ] Generate sitemap.xml
- [ ] Create robots.txt

### Internal Linking
- [ ] Link all navigation items correctly
- [ ] Link CTAs to appropriate pages
- [ ] Add footer links
- [ ] Test all internal links

### Responsive Behavior
- [ ] Test navigation on all breakpoints
- [ ] Ensure mobile menu works properly
- [ ] Verify touch targets on mobile
- [ ] Test landscape orientation

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Ready for Implementation  
**Next Steps:** Implement navigation and routing structure in Next.js
