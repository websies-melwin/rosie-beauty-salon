# Development Workflow - Rosie Beauty Salon

## Overview

This document outlines the complete development workflow for building the Rosie Beauty Salon website. Claude Code must follow this workflow strictly and document every step in `memo.md` and every issue in `errors.md`.

---

## CRITICAL: Documentation Requirements

### Before Starting ANY Task:
1. **Read ALL relevant entry_data files**
2. **Document the task** in `memo.md`
3. **Track any issues** in `errors.md`
4. **Reference which documents** you're following

### During Development:
1. **Log every major step** in `memo.md`
2. **Record every error/warning** in `errors.md`
3. **Update progress** after each component
4. **Document decisions** and reasoning

### After Completing Tasks:
1. **Update memo.md** with completion status
2. **Summarize any issues** encountered
3. **Note any deviations** from specifications

---

## Workflow Phases

### Phase 0: Pre-Development Setup

**Tasks:**
1. ✅ Read `project_overview.md` completely
2. ✅ Read `technical_specifications.md` completely
3. ✅ Read `business_info.md` completely
4. ✅ Read `branding_and_design.md` completely
5. ✅ Create `memo.md` with header and Phase 0 entry
6. ✅ Create `errors.md` with header
7. ✅ Initialize Next.js project
8. ✅ Install all dependencies
9. ✅ Set up basic project structure
10. ✅ Configure Tailwind CSS
11. ✅ Set up environment variables template

**Entry Data References:**
- `entry_data/project_overview.md` - Complete project context
- `entry_data/technical_specifications.md` - Tech stack and structure
- `entry_data/branding_and_design.md` - Design system

**Memo Entry Example:**
```markdown
## Phase 0: Pre-Development Setup
**Date:** 2025-10-26
**Status:** In Progress

### Tasks Completed:
- [x] Read all core documentation
- [x] Created memo.md and errors.md
- [x] Initialized Next.js 14 project with App Router
- [x] Installed dependencies: tailwindcss, lucide-react, etc.
- [ ] Configured TypeScript (in progress)

### Notes:
- Using Next.js 14.0.3 (latest stable)
- Chose TypeScript for better type safety
- Tailwind CSS v3.4 configured with custom colors

### Issues Encountered:
- None yet

**Next Steps:** Configure design system variables in Tailwind
```

---

### Phase 1: Design System Implementation

**Tasks:**
1. ✅ Read `branding_and_design.md` thoroughly
2. ✅ Configure Tailwind with brand colors
3. ✅ Set up custom fonts (Cormorant Garamond, Inter)
4. ✅ Create spacing system (8px base unit)
5. ✅ Implement typography scale
6. ✅ Create base UI components (Button, Card, Input)
7. ✅ Test responsive breakpoints
8. ✅ Document design system implementation in memo.md

**Entry Data References:**
- `entry_data/branding_and_design.md` - Complete design system
  - Color palette (primary, secondary, accent)
  - Typography (fonts, sizes, weights)
  - Spacing scale
  - Component styles
  - Responsive breakpoints

**Critical Checkpoints:**
- [ ] All brand colors defined in Tailwind config
- [ ] Fonts loaded correctly (test in browser)
- [ ] Button component matches specifications exactly
- [ ] Responsive breakpoints work on mobile/tablet/desktop

**Memo Entry Required:**
```markdown
## Phase 1: Design System Implementation
**Date:** [DATE]
**Status:** [In Progress/Complete]

### Design System Components Implemented:
- Colors: [List all implemented]
- Fonts: [Which fonts loaded]
- Typography scale: [Confirmed sizes]
- Base components: [List all]

### Tailwind Configuration:
- Custom colors added: [Yes/No]
- Font families configured: [Yes/No]
- Spacing scale: [Yes/No]

### Testing Results:
- Mobile responsiveness: [Pass/Fail]
- Font loading: [Pass/Fail]
- Color contrast: [Pass/Fail]

### Issues:
- Reference errors.md entries #[numbers]
```

---

### Phase 2: Layout Components

**Tasks:**
1. ✅ Read `site_structure.md` completely
2. ✅ Read `branding_and_design.md` navigation section
3. ✅ Create root layout (`app/layout.tsx`)
4. ✅ Build Header component with navigation
5. ✅ Build MobileMenu component
6. ✅ Build Footer component (4 columns)
7. ✅ Test navigation across all breakpoints
8. ✅ Implement sticky header behavior
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/site_structure.md` - Navigation structure, footer content
- `entry_data/branding_and_design.md` - Navigation styling
- `entry_data/business_info.md` - Business hours, contact info for footer

**Component Checklist:**

**Header/Navigation:**
- [ ] Logo/brand name on left
- [ ] Navigation links: Home, Face & Skin, Laser Hair Removal, Before & After, About Me, Contact
- [ ] "Book Now" button on right (placeholder)
- [ ] Mobile hamburger menu
- [ ] Sticky/fixed positioning
- [ ] Active page indicator
- [ ] Correct background color (#F4E9A3)

**Footer:**
- [ ] 4-column layout (responsive)
- [ ] Column 1: Business info (name, email, phone, address)
- [ ] Column 2: Business hours (correct schedule)
- [ ] Column 3: Quick links (all pages)
- [ ] Column 4: Social media + legal links
- [ ] All links functional
- [ ] Correct background color

**Memo Entry Required:**
```markdown
## Phase 2: Layout Components
**Date:** [DATE]
**Status:** [Status]

### Components Built:
- RootLayout: [Complete/Incomplete]
- Header: [Complete/Incomplete]
- MobileMenu: [Complete/Incomplete]
- Footer: [Complete/Incomplete]

### Testing:
- Desktop navigation: [Pass/Fail]
- Mobile menu: [Pass/Fail]
- Footer responsive: [Pass/Fail]
- All links working: [Pass/Fail]

### Deviations from Spec:
- [None or list any changes made]

### Issues:
- [Reference errors.md]
```

---

### Phase 3: Homepage Development

**Tasks:**
1. ✅ Read `page_specifications/homepage.md` COMPLETELY
2. ✅ Re-read `branding_and_design.md` for homepage styling
3. ✅ Create page structure (`app/page.tsx`)
4. ✅ Build Hero Section component
5. ✅ Build 20% OFF Banner component
6. ✅ Build What We Offer section
7. ✅ Build Note From Rosica section
8. ✅ Build Testimonials section
9. ✅ Build Gallery Preview section
10. ✅ Build Before/After section
11. ✅ Build Equipment section
12. ✅ Build Location/Visit Us section
13. ✅ Test all sections on mobile/tablet/desktop
14. ✅ Verify SEO meta tags
15. ✅ Document everything in memo.md

**CRITICAL: Before Building Each Section**
- Re-read the section specification in `homepage.md`
- Note the exact content, layout, and styling requirements
- Check `branding_and_design.md` for component styles
- Log the section start in memo.md

**Entry Data References:**
- `entry_data/page_specifications/homepage.md` - COMPLETE page structure
- `entry_data/business_info.md` - Testimonials, business info
- `entry_data/branding_and_design.md` - Component styling
- `entry_data/seo_and_analytics.md` - SEO requirements

**Section-by-Section Checklist:**

**1. Hero Section:**
- [ ] Full-height (90vh) background image
- [ ] Text overlay on right side
- [ ] Heading: "Elite Aesthetics Salon"
- [ ] Subheading: "Your Path to Radiance"
- [ ] "Book Now" button (placeholder)
- [ ] Correct typography (serif heading, sans-serif subheading)

**2. 20% OFF Banner:**
- [ ] Full-width strip
- [ ] Light cream background
- [ ] Centered text: "20% OFF ON ALL SERVICES"
- [ ] Proper typography

**3. What We Offer:**
- [ ] Section heading
- [ ] Two-column layout
- [ ] Left: Service category descriptions with links
- [ ] Right: Salon equipment image
- [ ] Responsive (stacks on mobile)

**4. Note From Rosica:**
- [ ] Two-column layout
- [ ] Left: Welcome text + signature
- [ ] Right: Rosica's photo (placeholder)
- [ ] Correct copy from specs

**5. Testimonials:**
- [ ] Section heading
- [ ] Three-column card layout
- [ ] All 3 testimonials (Emma W., Laura M., Sophie R.)
- [ ] Gradient background on cards
- [ ] Responsive (single column mobile)

**6-8. Remaining Sections:**
- Follow same pattern: Check spec → Build → Test → Document

**Memo Entry Required (For EACH Section):**
```markdown
### Homepage Section: [Section Name]
**Started:** [TIME]
**Completed:** [TIME]
**Duration:** [MINUTES]

#### Specification Reference:
- File: `homepage.md` lines [X-Y]
- Design reference: `branding_and_design.md` section [Z]

#### Implementation Details:
- Components created: [List]
- Data source: [Static/JSON/Props]
- Responsive behavior: [Description]

#### Testing:
- Desktop (1920px): [Pass/Fail]
- Tablet (768px): [Pass/Fail]
- Mobile (375px): [Pass/Fail]

#### Deviations:
- [None or list with justification]

#### Issues:
- [Reference errors.md if any]
```

---

### Phase 4: Face & Skin Page

**Tasks:**
1. ✅ Read `page_specifications/face_skin_page.md` COMPLETELY
2. ✅ Create page route (`app/face-and-skin/page.tsx`)
3. ✅ Build page header with description
4. ✅ Build service image carousel
5. ✅ Build About Our Equipment section
6. ✅ Build service cards (all 8 services)
7. ✅ Build CTA section
8. ✅ Add SEO meta tags
9. ✅ Test responsiveness
10. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/page_specifications/face_skin_page.md` - Complete page spec
- `entry_data/branding_and_design.md` - Card and carousel styling
- `entry_data/seo_and_analytics.md` - SEO requirements

**Service Data Validation:**
Before building service cards, verify you have ALL 8 services with:
- [ ] Basic Therapy - £65, 40-75 min
- [ ] Deluxe Therapy - £110, 60-75 min
- [ ] Platinum Therapy - £160, 1.5 hr
- [ ] Lip Therapy - £35, 15-30 min
- [ ] Eye Contour Therapy - £65, 15-30 min
- [ ] Lymphatic Drainage Therapy - £95, 30-45 min
- [ ] Scalp and Face Nerola Therapy - £95, 60-75 min
- [ ] Laser Hair Removal (Back) - Varies, 1 hr

**Memo Entry Required:**
```markdown
## Phase 4: Face & Skin Page
**Date:** [DATE]
**Status:** [Status]

### Sections Implemented:
1. Page Header: [Complete/Incomplete]
2. Service Carousel: [Complete/Incomplete]
3. Equipment Section: [Complete/Incomplete]
4. Service Cards Grid: [Complete/Incomplete]
5. CTA Section: [Complete/Incomplete]

### Service Cards:
- Total services: [8 expected]
- All data correct: [Yes/No]
- Prices match spec: [Yes/No]
- Durations correct: [Yes/No]

### Testing:
- Carousel functionality: [Pass/Fail]
- Mobile cards layout: [Pass/Fail]
- All CTAs present: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 5: Laser Hair Removal Page

**Tasks:**
1. ✅ Read `page_specifications/laser_hair_removal_page.md` COMPLETELY
2. ✅ Create page route (`app/laser-hair-removal/page.tsx`)
3. ✅ Build page header
4. ✅ Build introduction sections
5. ✅ Build technology showcase
6. ✅ Build treatment carousel
7. ✅ Build Women's pricing section (16 services)
8. ✅ Build Men's pricing section (25 services)
9. ✅ Build CTA section
10. ✅ Add SEO meta tags
11. ✅ Verify ALL pricing matches spec
12. ✅ Test responsiveness
13. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/page_specifications/laser_hair_removal_page.md` - Complete page spec
- `entry_data/branding_and_design.md` - Pricing table styling

**CRITICAL: Pricing Validation**
Must verify EVERY price matches the specification:

**Women's Services (16 total):**
- [ ] Upper Lip: £40 / £200
- [ ] Chin: £40 / £200
- [ ] Half Face: £80 / £400
- [ ] Full Face: £100 / £500
- [ ] Underarm: £50 / £250
- [ ] Half Arm: £80 / £400
- [ ] Full Arm: £120 / £600
- [ ] Half Legs: £90 / £450
- [ ] Full Legs: £150 / £750
- [ ] Bikini Line: £65 / £325
- [ ] Brazilian: £85 / £425
- [ ] Hollywood: £100 / £500
- [ ] Tummy Line: £40 / £200
- [ ] Tummy Line Add-on: £20 / £100
- [ ] Full Body Package: ~~£340~~ £280 / £1400
- [ ] Lip & Chin Package: £60 / £300

**Men's Services (25 total):**
[All 25 services listed in specification must be verified]

**Memo Entry Required:**
```markdown
## Phase 5: Laser Hair Removal Page
**Date:** [DATE]
**Status:** [Status]

### Sections Implemented:
[List all sections]

### Pricing Validation:
- Women's services count: [16 expected]
- Men's services count: [25 expected]
- All prices verified: [Yes/No]
- Strikethrough prices correct: [Yes/No]
- Course pricing (Pay 5, Get 6): [Correct/Incorrect]

### Testing:
- Pricing tables responsive: [Pass/Fail]
- Carousel functional: [Pass/Fail]
- Mobile pricing readability: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 6: Gallery Page

**Tasks:**
1. ✅ Read `page_specifications/gallery_page.md` COMPLETELY
2. ✅ Create page route (`app/gallery/page.tsx`)
3. ✅ Build page header
4. ✅ Build facial treatments grid (6 placeholder cards)
5. ✅ Build laser hair removal carousel (placeholder)
6. ✅ Implement before/after split card component
7. ✅ Build optional CTA section
8. ✅ Test responsive behavior
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/page_specifications/gallery_page.md` - Complete page spec
- `entry_data/branding_and_design.md` - Card styling, hover effects

**Placeholder Requirements:**
- [ ] Empty cards with light gray background
- [ ] White vertical divider line down center
- [ ] "Before" label on left
- [ ] "After" label on right
- [ ] "Image Coming Soon" text centered
- [ ] Maintains aspect ratio (1:1 or 3:4)

**Memo Entry Required:**
```markdown
## Phase 6: Gallery Page
**Date:** [DATE]
**Status:** [Status]

### Components Implemented:
- BeforeAfterCard: [Complete/Incomplete]
- Gallery Grid: [Complete/Incomplete]
- Carousel: [Complete/Incomplete]

### Placeholder Cards:
- Total cards: [6 facial + carousel expected]
- Styling matches spec: [Yes/No]
- Divider line correct: [Yes/No]
- Ready for image replacement: [Yes/No]

### Testing:
- Grid responsive: [Pass/Fail]
- Carousel functional: [Pass/Fail]
- Hover effects: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 7: About Page

**Tasks:**
1. ✅ Read `page_specifications/about_page.md` COMPLETELY
2. ✅ Create page route (`app/about/page.tsx`)
3. ✅ Build page header ("I am Rosica")
4. ✅ Build main about section (text + photo)
5. ✅ Add signature element
6. ✅ Build CTA section
7. ✅ Add SEO meta tags
8. ✅ Test responsiveness
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/page_specifications/about_page.md` - Complete page spec
- `entry_data/business_info.md` - Rosica's bio text
- `entry_data/branding_and_design.md` - Layout styling

**Content Validation:**
- [ ] Exact bio text from specification
- [ ] "With Love, Rosica Kachova" closing
- [ ] Signature image placeholder
- [ ] Photo placeholder (3:4 portrait)

**Memo Entry Required:**
```markdown
## Phase 7: About Page
**Date:** [DATE]
**Status:** [Status]

### Sections Implemented:
- Page Header: [Complete/Incomplete]
- Bio Section: [Complete/Incomplete]
- CTA Section: [Complete/Incomplete]

### Content:
- Bio text matches spec: [Yes/No]
- Signature placeholder: [Yes/No]
- Photo aspect ratio correct: [Yes/No]

### Testing:
- Two-column layout desktop: [Pass/Fail]
- Stacked layout mobile: [Pass/Fail]
- Typography correct: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 8: Booking System (Backend Setup)

**Tasks:**
1. ✅ Read `booking_system_requirements.md` COMPLETELY
2. ✅ Re-read `technical_specifications.md` database section
3. ✅ Set up Supabase project
4. ✅ Create bookings table (exact schema from specs)
5. ✅ Set up RLS policies
6. ✅ Configure environment variables
7. ✅ Test database connection
8. ✅ Create Supabase client utilities
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/booking_system_requirements.md` - Complete system spec
- `entry_data/technical_specifications.md` - Database schema, API structure
- `entry_data/business_info.md` - Business hours for validation

**Database Schema Validation:**
- [ ] All fields present from specification
- [ ] Correct data types
- [ ] Indexes created
- [ ] RLS policies enabled
- [ ] Test insert/select queries work

**Memo Entry Required:**
```markdown
## Phase 8: Booking System Backend Setup
**Date:** [DATE]
**Status:** [Status]

### Supabase Configuration:
- Project created: [Yes/No]
- Database tables: [List created]
- RLS policies: [Enabled/Disabled]
- Environment variables: [Configured/Missing]

### Database Testing:
- Connection successful: [Yes/No]
- Insert test record: [Pass/Fail]
- Query test records: [Pass/Fail]
- RLS policies working: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 9: Booking System (API Routes)

**Tasks:**
1. ✅ Re-read `booking_system_requirements.md` API section
2. ✅ Create `/api/bookings/available-slots` route
3. ✅ Create `/api/bookings/check-availability` route
4. ✅ Create `/api/bookings/create` route
5. ✅ Implement time slot calculation logic
6. ✅ Implement conflict detection
7. ✅ Add rate limiting
8. ✅ Test all API endpoints
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/booking_system_requirements.md` - API endpoints, logic
- `entry_data/business_info.md` - Business hours
- `entry_data/technical_specifications.md` - API structure

**Critical Logic Checks:**
- [ ] 15-minute buffer added between appointments
- [ ] 2-day minimum booking window enforced
- [ ] Business hours respected per day
- [ ] Sunday bookings blocked
- [ ] Conflict detection prevents double bookings

**API Testing Checklist:**
- [ ] GET /api/bookings/available-slots works
- [ ] POST /api/bookings/check-availability works
- [ ] POST /api/bookings/create works
- [ ] Error handling implemented
- [ ] Rate limiting active

**Memo Entry Required:**
```markdown
## Phase 9: Booking System API Routes
**Date:** [DATE]
**Status:** [Status]

### API Routes Created:
- available-slots: [Complete/Incomplete]
- check-availability: [Complete/Incomplete]
- create: [Complete/Incomplete]

### Business Logic:
- Time slot calculation: [Correct/Incorrect]
- Buffer time: [15 min confirmed]
- Minimum booking window: [2 days confirmed]
- Conflict detection: [Working/Not working]

### Testing Results:
[List all test results for each endpoint]

### Issues:
- [Reference errors.md]
```

---

### Phase 10: Booking System (Frontend Components)

**Tasks:**
1. ✅ Re-read `booking_system_requirements.md` UI flow section
2. ✅ Create BookingForm component structure
3. ✅ Build ServiceSelect component
4. ✅ Build DateSelect component (date picker)
5. ✅ Build TimeSlotSelect component
6. ✅ Build ClientInfoForm component
7. ✅ Build BookingConfirmation component
8. ✅ Implement form validation (React Hook Form + Zod)
9. ✅ Connect to API routes
10. ✅ Test complete booking flow
11. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/booking_system_requirements.md` - Complete UI flow
- `entry_data/branding_and_design.md` - Form styling
- `entry_data/technical_specifications.md` - Form handling

**Form Flow Validation:**
Step 1: Service Selection
- [ ] All services listed correctly
- [ ] Duration and price displayed
- [ ] Cannot proceed without selection

Step 2: Date Selection
- [ ] Calendar shows correct month
- [ ] Past dates disabled
- [ ] Dates within 2 days disabled
- [ ] Sundays disabled
- [ ] Selected date highlighted

Step 3: Time Selection
- [ ] Only available slots shown
- [ ] Slots calculated based on service duration
- [ ] 15-minute buffer applied
- [ ] Business hours respected
- [ ] No conflicting slots shown

Step 4: Client Information
- [ ] Name validation (2-100 chars)
- [ ] Email validation (proper format)
- [ ] Phone validation (UK format)
- [ ] Special requests optional (max 500 chars)
- [ ] Error messages display correctly

Step 5: Review & Confirm
- [ ] All details displayed correctly
- [ ] Edit button works
- [ ] Cancel button works
- [ ] Submit button enabled

Step 6: Submission
- [ ] Loading state shows
- [ ] Success message displays
- [ ] Booking ID shown
- [ ] Email confirmation mentioned

**Memo Entry Required:**
```markdown
## Phase 10: Booking System Frontend
**Date:** [DATE]
**Status:** [Status]

### Components Created:
[List all booking components]

### Form Validation:
- React Hook Form: [Integrated/Not integrated]
- Zod schema: [Created/Not created]
- All fields validated: [Yes/No]

### API Integration:
- Service selection fetches data: [Yes/No]
- Date selection checks availability: [Yes/No]
- Time slots load correctly: [Yes/No]
- Booking submission works: [Yes/No]

### Testing:
- Complete booking flow: [Pass/Fail]
- Form validation: [Pass/Fail]
- Error handling: [Pass/Fail]
- Mobile experience: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 11: Google Calendar Integration

**Tasks:**
1. ✅ Re-read `booking_system_requirements.md` calendar section
2. ✅ Set up Google Cloud project
3. ✅ Enable Google Calendar API
4. ✅ Create OAuth credentials
5. ✅ Generate refresh token
6. ✅ Implement calendar event creation
7. ✅ Test event creation
8. ✅ Implement webhook endpoint (optional Phase 1)
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/booking_system_requirements.md` - Calendar integration specs
- `entry_data/technical_specifications.md` - Google Calendar implementation
- `entry_data/business_info.md` - Salon address for location field

**Integration Checklist:**
- [ ] Google Cloud project created
- [ ] Calendar API enabled
- [ ] OAuth credentials configured
- [ ] Refresh token generated and stored
- [ ] Test event created successfully
- [ ] Event includes all required details
- [ ] Timezone set to Europe/London

**Event Details Validation:**
- [ ] Title: "[Service] - [Client Name]"
- [ ] Description includes client info
- [ ] Location: Full salon address
- [ ] Start time correct
- [ ] Duration includes service time + 15 min buffer
- [ ] Reminders configured

**Memo Entry Required:**
```markdown
## Phase 11: Google Calendar Integration
**Date:** [DATE]
**Status:** [Status]

### Setup:
- Google Cloud project: [Created/Not created]
- API enabled: [Yes/No]
- Credentials configured: [Yes/No]
- Refresh token obtained: [Yes/No]

### Implementation:
- Event creation function: [Complete/Incomplete]
- Event format correct: [Yes/No]
- Timezone handling: [Correct/Incorrect]

### Testing:
- Test event created: [Yes/No]
- Event details correct: [Yes/No]
- Shows in Rosie's calendar: [Yes/No]

### Issues:
- [Reference errors.md]
```

---

### Phase 12: Email Notifications

**Tasks:**
1. ✅ Re-read `booking_system_requirements.md` email section
2. ✅ Set up Resend account
3. ✅ Verify domain
4. ✅ Configure API key
5. ✅ Create email templates
6. ✅ Implement client confirmation email
7. ✅ Implement admin notification email
8. ✅ Test email sending
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/booking_system_requirements.md` - Email templates
- `entry_data/technical_specifications.md` - Email implementation
- `entry_data/business_info.md` - Business contact info

**Email Template Validation:**

**Client Confirmation:**
- [ ] Subject line correct
- [ ] Greeting includes client name
- [ ] All booking details included
- [ ] Location and directions
- [ ] Rosie's contact information
- [ ] Professional tone and formatting

**Admin Notification:**
- [ ] Subject line includes service and client name
- [ ] All client information included
- [ ] Booking ID present
- [ ] Link to Google Calendar event
- [ ] Easy to scan format

**Testing Checklist:**
- [ ] Emails send successfully
- [ ] Client receives confirmation
- [ ] Admin receives notification
- [ ] Email formatting correct (HTML)
- [ ] Links work correctly
- [ ] Mobile email view tested

**Memo Entry Required:**
```markdown
## Phase 12: Email Notifications
**Date:** [DATE]
**Status:** [Status]

### Resend Setup:
- Account created: [Yes/No]
- Domain verified: [Yes/No]
- API key configured: [Yes/No]

### Templates:
- Client confirmation: [Complete/Incomplete]
- Admin notification: [Complete/Incomplete]
- Content matches spec: [Yes/No]

### Testing:
- Test emails sent: [Yes/No]
- Client email received: [Yes/No]
- Admin email received: [Yes/No]
- Formatting correct: [Yes/No]

### Issues:
- [Reference errors.md]
```

---

### Phase 13: SEO Implementation

**Tasks:**
1. ✅ Read `seo_and_analytics.md` COMPLETELY
2. ✅ Add meta tags to all pages
3. ✅ Implement Schema.org structured data
4. ✅ Create sitemap.xml
5. ✅ Create robots.txt
6. ✅ Add canonical URLs
7. ✅ Optimize images (alt text, format)
8. ✅ Test SEO with tools
9. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/seo_and_analytics.md` - Complete SEO strategy
- `entry_data/site_structure.md` - URL structure
- All page specification files - SEO keywords

**SEO Checklist (Per Page):**
- [ ] Title tag (55-60 chars, includes keywords)
- [ ] Meta description (150-160 chars, compelling)
- [ ] H1 heading (one per page, keyword-rich)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Image alt text (descriptive, includes keywords)
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] Schema.org markup

**Global SEO:**
- [ ] Sitemap.xml generated
- [ ] Robots.txt created
- [ ] Favicon added
- [ ] 404 page created

**Memo Entry Required:**
```markdown
## Phase 13: SEO Implementation
**Date:** [DATE]
**Status:** [Status]

### Meta Tags:
- Homepage: [Complete/Incomplete]
- Face & Skin: [Complete/Incomplete]
- Laser Hair Removal: [Complete/Incomplete]
- Gallery: [Complete/Incomplete]
- About: [Complete/Incomplete]

### Structured Data:
- Local Business schema: [Added/Not added]
- Service schema: [Added/Not added]
- Review schema: [Added/Not added]
- Person schema: [Added/Not added]

### Files Created:
- sitemap.xml: [Yes/No]
- robots.txt: [Yes/No]

### Testing:
- SEO validator: [Pass/Fail]
- Schema validator: [Pass/Fail]
- Mobile-friendly test: [Pass/Fail]

### Issues:
- [Reference errors.md]
```

---

### Phase 14: Analytics Setup

**Tasks:**
1. ✅ Re-read `seo_and_analytics.md` analytics section
2. ✅ Set up Google Analytics 4
3. ✅ Set up Google Search Console
4. ✅ Implement event tracking
5. ✅ Test analytics data collection
6. ✅ Set up conversion tracking
7. ✅ Document in memo.md

**Entry Data References:**
- `entry_data/seo_and_analytics.md` - Analytics configuration

**Analytics Implementation:**
- [ ] GA4 tracking code added
- [ ] Page view tracking working
- [ ] Custom events configured
- [ ] Conversion goals set up
- [ ] Search Console verified
- [ ] Sitemap submitted to Search Console

**Event Tracking:**
- [ ] Navigation clicks
- [ ] CTA button clicks
- [ ] Phone/email clicks
- [ ] Booking form events (all steps)
- [ ] Service selection
- [ ] Booking completion

**Memo Entry Required:**
```markdown
## Phase 14: Analytics Setup
**Date:** [DATE]
**Status:** [Status]

### Google Analytics 4:
- Tracking code installed: [Yes/No]
- Page views tracking: [Working/Not working]
- Events configured: [List all]
- Testing successful: [Yes/No]

### Google Search Console:
- Property added: [Yes/No]
- Ownership verified: [Yes/No]
- Sitemap submitted: [Yes/No]

### Issues:
- [Reference errors.md]
```

---

### Phase 15: Testing & QA

**Tasks:**
1. ✅ Create comprehensive test checklist
2. ✅ Test all pages on desktop (1920px, 1440px, 1280px)
3. ✅ Test all pages on tablet (768px)
4. ✅ Test all pages on mobile (375px, 390px)
5. ✅ Test booking flow end-to-end
6. ✅ Test all links and navigation
7. ✅ Test form validation
8. ✅ Cross-browser testing
9. ✅ Lighthouse audit all pages
10. ✅ Fix all critical issues
11. ✅ Document in memo.md

**Testing Checklist:**

**Functional Testing:**
- [ ] All navigation links work
- [ ] Footer links work
- [ ] Social media links work (when added)
- [ ] Contact links (email, phone) work
- [ ] Booking form submits successfully
- [ ] Email notifications received
- [ ] Google Calendar event created

**Visual Testing:**
- [ ] All images load correctly
- [ ] Typography matches design system
- [ ] Colors match brand palette
- [ ] Spacing consistent
- [ ] Hover states work
- [ ] Animations smooth

**Responsive Testing:**
- [ ] Desktop (1920px): All pages
- [ ] Laptop (1440px): All pages
- [ ] Tablet (768px): All pages
- [ ] Mobile (375px): All pages
- [ ] Navigation responsive
- [ ] Forms usable on mobile

**Performance Testing:**
- [ ] Homepage Lighthouse score: 90+
- [ ] All pages load < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Mobile performance good

**Accessibility Testing:**
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] Color contrast sufficient
- [ ] Screen reader friendly

**Memo Entry Required:**
```markdown
## Phase 15: Testing & QA
**Date:** [DATE]
**Status:** [Status]

### Testing Summary:
- Total tests run: [NUMBER]
- Tests passed: [NUMBER]
- Tests failed: [NUMBER]
- Critical issues: [NUMBER]

### Functional Testing:
[Results for each test]

### Responsive Testing:
[Results per breakpoint]

### Performance:
- Homepage Lighthouse: [Score]
- Face & Skin: [Score]
- Laser: [Score]
- Gallery: [Score]
- About: [Score]

### Browser Testing:
- Chrome: [Pass/Fail]
- Firefox: [Pass/Fail]
- Safari: [Pass/Fail]
- Edge: [Pass/Fail]

### Issues Found:
- [Reference errors.md with all issues]

### Issues Fixed:
- [List fixed issues]

### Outstanding Issues:
- [List remaining issues with priority]
```

---

### Phase 16: Deployment

**Tasks:**
1. ✅ Review all environment variables
2. ✅ Set up Vercel project
3. ✅ Configure environment variables in Vercel
4. ✅ Connect Git repository
5. ✅ Deploy to preview environment
6. ✅ Test preview deployment
7. ✅ Fix any deployment issues
8. ✅ Deploy to production
9. ✅ Configure custom domain
10. ✅ Test production deployment
11. ✅ Document in memo.md

**Pre-Deployment Checklist:**
- [ ] All environment variables documented
- [ ] .env.example up to date
- [ ] No console.logs in production code
- [ ] All placeholders documented
- [ ] README.md complete

**Vercel Configuration:**
- [ ] Project created
- [ ] Git repository connected
- [ ] Build settings correct
- [ ] Environment variables added
- [ ] Preview deployment successful

**Domain Configuration:**
- [ ] Domain verified in Vercel
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] Domain redirects correctly

**Post-Deployment Testing:**
- [ ] All pages load on production
- [ ] Booking system works
- [ ] Emails send correctly
- [ ] Google Calendar integration works
- [ ] Analytics tracking active

**Memo Entry Required:**
```markdown
## Phase 16: Deployment
**Date:** [DATE]
**Status:** [Status]

### Vercel Setup:
- Project created: [Yes/No]
- Git connected: [Yes/No]
- Environment variables: [All added/Some missing]

### Deployments:
- Preview URL: [URL]
- Production URL: [URL]
- Custom domain: [Configured/Not configured]

### Production Testing:
- All pages load: [Yes/No]
- Booking system: [Working/Not working]
- Email notifications: [Working/Not working]
- Calendar integration: [Working/Not working]
- Analytics active: [Yes/No]

### Performance:
- Production Lighthouse score: [Score]
- Load time: [Seconds]

### Issues:
- [Reference errors.md]
```

---

## Documentation Requirements

### memo.md Format

**Header:**
```markdown
# Development Memo - Rosie Beauty Salon
**Project:** Rosie Beauty Salon Website  
**Developer:** Claude Code  
**Start Date:** [DATE]  
**Last Updated:** [DATE]

---

## Overview
This document tracks the complete development progress of the Rosie Beauty Salon website. Every major step, decision, and milestone is documented here.

---
```

**Each Phase Entry Must Include:**
- Date and timestamp
- Phase name and status
- Tasks completed (checklist)
- Components/files created
- Testing results
- Deviations from specifications (with justification)
- Issues encountered (with reference to errors.md)
- Next steps
- Time taken

### errors.md Format

**Header:**
```markdown
# Error & Issue Tracking - Rosie Beauty Salon
**Project:** Rosie Beauty Salon Website  
**Developer:** Claude Code  
**Start Date:** [DATE]  
**Last Updated:** [DATE]

---

## Error Categories
- **Critical:** Prevents progress, must fix immediately
- **High:** Significant issue, fix before moving to next phase
- **Medium:** Notable issue, fix when convenient
- **Low:** Minor issue, nice to fix
- **Resolved:** Fixed and verified

---
```

**Each Error Entry Must Include:**
```markdown
### Error #[NUMBER]: [Brief Description]
**Date Occurred:** [DATE TIME]  
**Severity:** [Critical/High/Medium/Low]  
**Status:** [Open/In Progress/Resolved]  
**Phase:** [Which phase]  
**Component/File:** [Where it occurred]

**Description:**
[Detailed description of the error]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]

**Error Message:**
```
[Exact error message or code]
```

**Impact:**
[How this affects the project]

**Attempted Solutions:**
1. [What was tried]
2. [Result]

**Resolution:**
[How it was fixed, or status if still open]

**Resolved Date:** [DATE if resolved]  
**Time to Resolve:** [How long it took]

**Related Issues:** [Links to related errors if any]

---
```

---

## Progress Tracking

### Daily Summary Template (in memo.md)

```markdown
## Daily Summary - [DATE]
**Hours Worked:** [HOURS]  
**Phase:** [Current phase]  
**Status:** [Overall progress]

### Accomplishments:
- [Major accomplishment 1]
- [Major accomplishment 2]

### Components Created:
- [Component list]

### Issues Encountered:
- [Reference errors.md #X]

### Next Session Goals:
- [Goal 1]
- [Goal 2]
```

---

## Quality Assurance

### Before Moving to Next Phase:
1. ✅ All tasks in current phase completed
2. ✅ All components tested
3. ✅ memo.md updated with phase completion
4. ✅ All errors documented in errors.md
5. ✅ Critical errors resolved
6. ✅ Code reviewed against specifications

### Phase Completion Criteria:
- All checkboxes checked
- Testing passed
- No critical errors outstanding
- Documentation complete
- Ready for next phase

---

## Communication Protocol

### When to Report Issues:
- Immediately for critical errors
- End of phase for high/medium issues
- Weekly summary for low priority issues

### What to Include in Reports:
- Error number reference
- Current phase and status
- What's blocking progress
- Proposed solutions
- Timeline impact

---

## Reference Document Quick Links

**Core Documentation:**
- Project Overview: `entry_data/project_overview.md`
- Technical Specs: `entry_data/technical_specifications.md`
- Booking System: `entry_data/booking_system_requirements.md`
- Design System: `entry_data/branding_and_design.md`

**Page Specifications:**
- Homepage: `entry_data/page_specifications/homepage.md`
- Face & Skin: `entry_data/page_specifications/face_skin_page.md`
- Laser: `entry_data/page_specifications/laser_hair_removal_page.md`
- Gallery: `entry_data/page_specifications/gallery_page.md`
- About: `entry_data/page_specifications/about_page.md`

**Business Info:**
- Business Details: `entry_data/business_info.md`
- Site Structure: `entry_data/site_structure.md`
- SEO & Analytics: `entry_data/seo_and_analytics.md`

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Ready for Development
