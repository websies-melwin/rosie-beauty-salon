# Gallery Page - Rosie Beauty Salon

## Page Purpose
Showcase before and after transformations from facial treatments and laser hair removal services. Visual proof of results to build trust and encourage bookings. Demonstrates the effectiveness of Rosie Beauty Salon's treatments.

## Target Audience
- Prospective clients researching treatment results
- Current clients looking for inspiration
- Anyone considering facial or laser hair removal services
- Visual learners who need to see proof before booking

## SEO Keywords
- Primary: "before after facial Weston-super-Mare", "laser hair removal results", "facial transformation gallery"
- Secondary: "Hydrafacial results", "skin treatment before after", "beauty salon results Weston"
- Long-tail: "real before after facial treatments Somerset", "laser hair removal transformation photos BS23"

## Page Structure & Sections

### 1. Page Header
**Layout:**
- Simple, clean header
- Centered page title
- White/cream background
- Minimal design

**Content:**
- Page Title: "Gallery"

**Design Notes:**
- Typography: Large, elegant serif (48-60px desktop)
- Generous top padding
- Simple, lets the images be the focus

---

### 2. Facial Treatments Gallery Section
**Layout:**
- Grid layout: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Before/After split images (vertical divider down the middle)
- Equal-sized cards/containers
- White line divider down the center of each image

**Content:**
- 6 before/after facial treatment comparison images
- Each image shows left side (before) and right side (after) split by white vertical line
- Images show facial transformations: skin texture, tone, clarity improvements

**Image Specifications:**
- Aspect ratio: Square or portrait (consistent across all)
- Before (left): Untreated skin condition
- After (right): Post-treatment results
- White vertical line: 2-3px width, centered

**Placeholder:**
- Empty cards with:
  - Light gray background (#F5F5F5 or similar)
  - White vertical divider line down the center
  - Text labels: "Before" on left, "After" on right (subtle, top corners)
  - Icon or text: "Image Coming Soon" centered

**Design Notes:**
- Clean presentation
- Consistent spacing between cards (16-24px gap)
- Hover effect: Slight scale or shadow increase
- No borders on images, clean edge-to-edge
- Optional: Category label above section (e.g., "Facial Treatments")

---

### 3. Laser Hair Removal Section
**Layout:**
- Section heading: "Laser Hair Removal"
- Horizontal carousel/slider
- Before/After comparison images
- Left/right navigation arrows
- Multiple images in carousel

**Content:**
- Carousel of before/after laser hair removal results
- Images show hair removal progress on various body areas
- Side-by-side comparison format with clear "Before" and "After" labels

**Image Specifications:**
- Landscape orientation
- Before/After shown side by side or with slider divider
- Clear labels: "Before" badge (left/top) and "After" badge (right/bottom)
- Professional, clinical presentation

**Placeholder:**
- Empty carousel with:
  - Light gray placeholder cards
  - "Before" label on left side, "After" label on right side
  - Center divider or side-by-side layout
  - Navigation arrows visible
  - Text: "Image Coming Soon"

**Design Notes:**
- Carousel smooth scrolling
- Shows 1 comparison at a time (full width)
- Navigation arrows: Outside edges or overlaid
- Mobile: Swipeable gesture support
- Dots/indicators below to show position in carousel
- Optional: Thumbnail navigation below main image

---

### 4. Additional Gallery Grid (Optional)
**Layout:**
- If more images needed beyond the two main sections
- Grid format: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile)
- Mix of facial and laser hair removal results

**Content:**
- Additional before/after transformations
- Can include different treatment types mixed together

**Placeholder:**
- Same empty card structure as Facial Treatments section
- Consistent styling

**Design Notes:**
- Maintain consistent spacing
- Same hover effects
- Can be added/removed based on available images

---

### 5. Call-to-Action Section (Optional)
**Layout:**
- Full-width section
- Centered content
- Gradient background (pink to coral)

**Content:**
- Heading: "Ready to Transform Your Skin?"
- Button: "Book Your Appointment"
- Optional subtext: "Join our satisfied clients and see real results"

**Design Notes:**
- Elegant gradient matching brand
- Button: Outlined white/cream style
- Generous padding
- Eye-catching but not overwhelming

---

## Image Card Component Specifications

### Before/After Split Card (Facial Treatments)
```
┌─────────────────────────┐
│  Before  │   After      │
│          │              │
│          │              │
│   [img]  │   [img]      │
│          │              │
│          │              │
│          │              │
└─────────────────────────┘
```

**Structure:**
- Container: Full card area
- Left half: "Before" image
- Right half: "After" image  
- Center: 2-3px white vertical line divider
- Optional labels: "Before" and "After" text in top corners (subtle, small text)

**Placeholder State:**
- Background: Light gray (#F5F5F5)
- White vertical line visible
- "Before" and "After" labels visible
- Center text: "Image Coming Soon" or icon
- Maintains aspect ratio/height

### Before/After Carousel Card (Laser Hair Removal)
```
┌───────────────────────────────────────┐
│                                       │
│  ┌──────────┐       ┌──────────┐    │
│  │  Before  │       │  After   │    │
│  │          │       │          │    │
│  │   [img]  │       │   [img]  │    │
│  │          │       │          │    │
│  └──────────┘       └──────────┘    │
│                                       │
└───────────────────────────────────────┘
       ←                         →
```

**Structure:**
- Full-width carousel container
- Side-by-side before/after images
- Clear "Before" and "After" badges/labels
- Navigation arrows left and right
- Position indicators (dots) below

**Placeholder State:**
- Two gray placeholder boxes side by side
- "Before" label on left box
- "After" label on right box
- "Image Coming Soon" in each box
- Navigation arrows present but subtle

---

## Mobile Responsiveness Notes
- Page title: Reduce to 32-36px
- Facial gallery grid: Switch to 1 column below 768px
- Before/After cards: Maintain split view even on mobile (stacked might confuse)
- Carousel: Full swipeable functionality
- Touch-friendly navigation buttons
- Proper spacing maintained on all screen sizes
- Images: Responsive sizing, maintain aspect ratios

## Accessibility Requirements
- All images: Descriptive alt text ("Before and after facial treatment showing improved skin texture")
- Before/After labels: Not just visual, use aria-labels
- Carousel: Keyboard navigable (arrow keys)
- Focus states on navigation elements
- Screen reader announcements for carousel position
- Semantic HTML structure

## Performance Considerations
- Lazy load all images (especially below fold)
- Optimize images: WebP format with JPG fallback
- Use responsive images (srcset) for different screen sizes
- Thumbnail previews load first, full resolution on interaction
- Carousel: Preload next/previous images only
- Consider pagination if gallery becomes very large

## Image Loading Strategy
- Show placeholder cards immediately on page load
- Progressive image loading as user scrolls
- Smooth fade-in animation when images load
- Loading spinner or skeleton state while fetching
- Graceful handling if image fails to load

---

## Development Notes for Claude Code

### Component Structure
```
Gallery Page
├── Header Section
├── Facial Treatments Grid
│   ├── BeforeAfterCard (component)
│   ├── BeforeAfterCard
│   ├── BeforeAfterCard
│   └── ... (6 total)
├── Laser Hair Removal Carousel
│   └── BeforeAfterCarousel (component)
│       ├── CarouselSlide
│       ├── CarouselSlide
│       └── Navigation Controls
└── CTA Section (optional)
```

### BeforeAfterCard Component Props
```typescript
interface BeforeAfterCardProps {
  beforeImage?: string;
  afterImage?: string;
  altText: string;
  category?: string; // 'facial' | 'laser'
  loading?: boolean;
}
```

### Carousel Component
- Use react-slick or swiper.js
- Auto-height based on image
- Touch/swipe enabled
- Keyboard navigation
- Dots navigation
- Lazy loading of slides

### Image Placeholder Logic
```typescript
const ImagePlaceholder = () => (
  <div className="placeholder-container">
    <div className="before-section">
      <span className="label">Before</span>
      <span className="coming-soon">Image Coming Soon</span>
    </div>
    <div className="divider" />
    <div className="after-section">
      <span className="label">After</span>
      <span className="coming-soon">Image Coming Soon</span>
    </div>
  </div>
);
```

---

## Design System Integration
- Follow brand color palette (cream, beige, soft gold)
- Typography: Serif for headings, sans-serif for labels
- Consistent spacing (8px base unit)
- Card shadows: Subtle, follows elevation system
- Hover effects: Smooth transitions (300ms)
- Divider line: Brand color or pure white
- Placeholder background: Light neutral gray

## Content Management Notes
- Images should be organized by category (facial, laser)
- File naming convention: `[category]_[number]_[before/after].jpg`
- Consider CDN for image hosting (performance)
- Admin interface needed for uploading new images in future
- Metadata: Treatment type, date, optional description

## Image Upload Guidelines (For Future Reference)
**For Client to Provide:**
- High-resolution images (minimum 1200px width)
- Consistent lighting between before/after pairs
- Same angle, pose, and framing for comparisons
- Professional, clinical presentation
- Patient consent for using images
- Format: JPG or PNG
- Organized by treatment type

**Image Processing:**
- Resize to multiple sizes for responsive display
- Compress for web (80-85% quality)
- Convert to WebP with fallback
- Generate thumbnails for faster initial load
- Add watermark if desired

---

## JSON Structure for Gallery Data (Reference)

```json
{
  "facialGallery": [
    {
      "id": "facial-001",
      "beforeImage": "/images/gallery/facial_001_before.jpg",
      "afterImage": "/images/gallery/facial_001_after.jpg",
      "altText": "Before and after facial treatment showing improved skin texture and reduced pigmentation",
      "treatment": "Deluxe Therapy",
      "category": "facial"
    }
    // ... more facial entries
  ],
  "laserGallery": [
    {
      "id": "laser-001", 
      "beforeImage": "/images/gallery/laser_001_before.jpg",
      "afterImage": "/images/gallery/laser_001_after.jpg",
      "altText": "Before and after laser hair removal showing smooth, hair-free skin",
      "treatment": "Full Legs",
      "bodyArea": "legs",
      "category": "laser"
    }
    // ... more laser entries
  ]
}
```

---

## Future Enhancements
- Lightbox/modal view for full-size images
- Filter by treatment type
- Search functionality
- Client testimonials alongside relevant images
- Treatment details on hover
- Share functionality (social media)
- Print-friendly view
- Before/After slider (drag to reveal) for more interactive comparison

---

**Last Updated:** October 26, 2025
**Status:** Ready for Development  
**Priority:** Medium - Supporting page showcasing results
**Dependencies:** Image assets from client (will be provided later)
