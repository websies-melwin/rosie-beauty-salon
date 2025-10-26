# About Page - Rosie Beauty Salon

## Page Purpose
Introduce Rosica, the owner and beautician behind Rosie Beauty Salon. Build personal connection and trust with potential clients by sharing her story, qualifications, passion, and dedication to beauty and wellness.

## Target Audience
- New clients wanting to know who they'll be working with
- People seeking personalized, professional beauty care
- Clients who value personal connection and trust in their beauty professional
- Local community members in Weston-super-Mare

## SEO Keywords
- Primary: "beautician Weston-super-Mare", "Rosica Kachova", "beauty specialist Somerset"
- Secondary: "qualified beautician near me", "professional skincare specialist", "beauty salon owner"
- Long-tail: "experienced beautician Weston-super-Mare", "qualified beauty therapist BS23"

## Page Structure & Sections

### 1. Page Header / Title
**Layout:**
- Simple, clean header
- Centered page title
- White/cream background
- Minimal, elegant design

**Content:**
- Page Title: "I am Rosica"

**Design Notes:**
- Typography: Medium-large serif font (36-48px)
- Centered alignment
- Generous top padding
- Personal, warm tone set from the start

---

### 2. Main About Section
**Layout:**
- Two-column layout (desktop) / stacked (mobile)
- Left column: Text content (60% width)
- Right column: Photo of Rosica (40% width)
- White/light cream background

**Content:**

**Left Column - About Text:**

"Hello! I am a qualified beautician specializing in next-generation skincare treatments to help you achieve well-maintained, fresh skin. With a deep passion for beauty and wellness, I'm dedicated to offering personalized care and effective treatments. I look forward to helping each of you reveal your natural radiance and confidence."

**Closing:**
"With Love,
Rosica Kachova"

**Signature:** Handwritten signature image

**Right Column - Photo:**
- Professional portrait of Rosica
- Image shows her in salon setting (sitting in elegant chair with salon branding visible)
- Warm, welcoming pose

**Placeholder:**
- Portrait-oriented placeholder
- Light gray background
- Text: "Professional photo of Rosica"
- Aspect ratio: 3:4 or similar portrait ratio

**Design Notes:**
- Left text: Easy to read, proper line spacing (1.6-1.8)
- Personal, conversational tone
- Signature adds authentic, personal touch
- Right photo: Professional but approachable
- Photo should have subtle shadow or border
- Mobile: Photo stacks on top of text

---

### 3. Call-to-Action Section
**Layout:**
- Full-width section
- Centered content
- Gradient background (soft pink to coral/peach)

**Content:**
- Button: "Explore Services"
- Links to: Homepage services section or services overview

**Design Notes:**
- Elegant gradient matching brand palette
- Button: Outlined style in white/cream
- Generous vertical padding (60-80px)
- Clean, minimal design
- Optional: Brief tagline like "Discover Your Natural Radiance"

---

## Additional Content Sections (Optional Enhancements)

### Qualifications & Experience Section (Optional)
**Layout:**
- Centered text block
- Clean, organized presentation
- Light background or card container

**Content Suggestions:**
- Years of experience
- Professional certifications
- Training in specific treatments (Hydrafacial, laser therapy, etc.)
- Professional memberships
- Philosophy/approach to beauty

**Note:** This section can be added when client provides qualification details

---

### Why Choose Rosie Beauty Salon (Optional)
**Layout:**
- Icon + text blocks
- 3-column grid (desktop) / stacked (mobile)

**Content Ideas:**
- "Personalized Care" - Tailored treatments for your unique needs
- "Advanced Technology" - Latest equipment and techniques
- "Results-Driven" - Proven transformations and satisfied clients

**Note:** Optional enhancement for more comprehensive about page

---

## Mobile Responsiveness Notes
- Page title: Reduce to 28-36px on mobile
- Two-column layout: Stack text above photo on mobile
- Text content: Maintain readability (16-18px body text)
- Photo: Full width on mobile, maintain aspect ratio
- Signature: Scale appropriately, remain legible
- CTA section: Maintain full width, proper padding
- Touch-friendly button size

## Accessibility Requirements
- Page title: H1 heading
- Proper heading hierarchy if additional sections added
- Photo alt text: "Rosica Kachova, owner and qualified beautician at Rosie Beauty Salon"
- Signature alt text: "Rosica Kachova signature"
- Text: High contrast, readable font size
- Button: Keyboard accessible, proper focus state
- Screen reader friendly structure

## Performance Considerations
- Optimize Rosica's photo (WebP with JPG fallback)
- Lazy load signature image if below fold
- Minimize CSS for simple layout
- Fast page load for good first impression

## Call-to-Action Strategy
- Primary CTA: "Explore Services" button at bottom
- Secondary CTA: "Book Now" in navigation (placeholder)
- Soft sell approach - focus on connection, not hard selling

---

## Development Notes for Claude Code

### Component Structure
```
About Page
├── Header Section (Title)
├── Main About Section
│   ├── Text Column
│   │   ├── Introduction paragraph
│   │   ├── Closing message
│   │   └── Signature image
│   └── Photo Column
│       └── Rosica portrait image
└── CTA Section
    └── Explore Services button
```

### Content Props/Data
```typescript
interface AboutPageContent {
  pageTitle: string;
  introText: string;
  closingMessage: string;
  signatureName: string;
  signatureImage: string;
  profileImage: string;
  profileImageAlt: string;
  ctaText: string;
  ctaLink: string;
}
```

### Image Specifications
**Profile Photo:**
- Aspect ratio: 3:4 portrait
- Minimum width: 800px
- Format: JPG or WebP
- Professional quality
- Good lighting, clear focus

**Signature Image:**
- Transparent background (PNG)
- High resolution for clarity
- Appropriate size (not too large)
- Format: PNG for transparency

---

## Design System Integration
- Follow brand color palette (cream, beige, gold accents)
- Typography: Serif for heading, sans-serif for body text
- Consistent spacing (8px base unit)
- Photo: Subtle shadow or border following elevation system
- Gradient CTA: Matches brand style from other pages
- Button: Outlined style consistent with site
- Hover effects: Smooth 300ms transitions

## Content Management Notes
- Text content should be easily editable
- Consider CMS integration for future updates
- Photo should be replaceable without code changes
- Signature image should be standalone asset

## Image Guidelines (For Client)
**Profile Photo Requirements:**
- Professional portrait, well-lit
- Salon setting or clean background
- Friendly, approachable expression
- High resolution (minimum 1200px width)
- Portrait orientation
- Professional attire
- Current photo (recent)

**Signature Requirements:**
- Scanned or digitally created signature
- Black or dark color on transparent background
- PNG format
- High resolution for sharpness
- Clean, legible signature

---

## Content Expansion Options (Future)
When more information becomes available from client:

**Professional Background:**
- Years in beauty industry
- Training and education
- Specializations
- Awards or recognition

**Personal Touch:**
- What inspired her to become a beautician
- Her beauty philosophy
- What she loves about helping clients
- Community involvement

**Visual Enhancements:**
- Additional photos (at work, with equipment, with satisfied clients)
- Video introduction (optional)
- Behind-the-scenes content

---

## SEO Enhancements
**Schema.org Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rosica Kachova",
  "jobTitle": "Qualified Beautician",
  "worksFor": {
    "@type": "BeautySalon",
    "name": "Rosie Beauty Salon"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Orchard Street, 49C",
    "addressLocality": "Weston-super-Mare",
    "postalCode": "BS23 1RJ",
    "addressCountry": "GB"
  }
}
```

**Meta Description:**
"Meet Rosica Kachova, qualified beautician and owner of Rosie Beauty Salon in Weston-super-Mare. Specializing in next-generation skincare treatments with personalized care."

---

## Tone & Voice Guidelines
- Warm and welcoming
- Professional but personal
- Confident but humble
- Focus on client benefit, not self-promotion
- Authentic and genuine
- Encouraging and supportive

---

**Last Updated:** October 26, 2025
**Status:** Ready for Development
**Priority:** Medium - Important for building trust and connection
**Dependencies:** 
- Professional photo of Rosica (to be provided by client)
- Signature image (to be provided by client)
