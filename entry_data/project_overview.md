# Project Overview - Rosie Beauty Salon Website

## Project Information

**Project Name:** Rosie Beauty Salon Website  
**Project Type:** Business Website - Beauty Salon  
**Client:** Rosica Kachova (Rosie)  
**Business Name:** Rosie Beauty Salon  
**Location:** Weston-super-Mare, England  

**Project Start Date:** October 26, 2025  
**Target Launch Date:** TBD  
**Current Status:** Planning & Development Phase

---

## Project Goals

### Primary Objectives
1. **Replace existing Wix website** with modern, custom-built solution
2. **Modernize design** while maintaining brand identity and existing content
3. **Integrate booking system** directly into the website (no third-party redirects)
4. **Improve user experience** with faster load times and mobile-first design
5. **Maintain SEO rankings** and improve local search visibility
6. **Showcase services** professionally with clear pricing and descriptions

### Secondary Objectives
- Build scalable architecture for future feature additions
- Create maintainable codebase for easy updates
- Implement performance optimizations (fast loading, responsive images)
- Ensure accessibility compliance (WCAG AA standards)
- Set up analytics and tracking for business insights

---

## Project Scope

### In Scope - Phase 1 (Current)
✅ Five main pages:
- Homepage (landing page with overview)
- Face & Skin page (facial therapy services)
- Laser Hair Removal page (laser services for men and women)
- Gallery page (before/after transformations)
- About page (owner bio and story)

✅ Core Features:
- Responsive design (mobile-first approach)
- Booking system integration (guest bookings, no user accounts)
- Google Calendar sync for Rosie
- Email notifications (client confirmation, Rosie notification)
- Google Maps integration
- Service listings with detailed pricing
- Before/after gallery
- Testimonials section
- Contact information in footer

✅ Technical Implementation:
- Next.js 14+ framework with App Router
- React for component architecture
- Supabase backend for booking data
- Vercel hosting and deployment
- Custom domain connection (rosiebeautysalon.com)

### Out of Scope - Phase 1
❌ User accounts/login system
❌ Online payment processing (cash only, in-person)
❌ Blog or news section
❌ Multi-language support
❌ Admin panel for Rosie (manages bookings via Google Calendar)
❌ E-commerce or product sales
❌ Loyalty program or membership system
❌ Live chat support
❌ Review/rating system integration

### Future Enhancements (Phase 2+)
- Admin dashboard for Rosie to manage bookings
- Client portal for viewing appointment history
- Payment integration (Stripe/PayPal)
- Email marketing integration
- Advanced analytics dashboard
- Blog section for beauty tips
- Automated SMS reminders
- Package purchase tracking system

---

## Technical Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **UI Library:** React 18+
- **Styling:** Tailwind CSS (utility-first approach)
- **Icons:** Lucide React or Hero Icons
- **Carousel/Slider:** Swiper.js or react-slick
- **Forms:** React Hook Form + Zod validation
- **Date Picker:** react-datepicker or custom solution

### Backend
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Not required for Phase 1 (guest bookings only)
- **API:** Next.js API Routes (App Router route handlers)
- **Email Service:** Resend or SendGrid
- **Calendar Integration:** Google Calendar API

### Hosting & Deployment
- **Hosting:** Vercel
- **Domain:** rosiebeautysalon.com (to be transferred)
- **SSL:** Automatic via Vercel
- **CDN:** Vercel Edge Network
- **Environment Variables:** Vercel environment management

### Development Tools
- **Version Control:** Git
- **Code Editor:** VS Code (or preferred IDE)
- **Package Manager:** npm or pnpm
- **Linting:** ESLint
- **Formatting:** Prettier
- **Type Checking:** TypeScript (optional but recommended)

---

## Project Structure

```
rosie_beauty_salon/
├── entry_data/                          # Project specifications
│   ├── project_overview.md             # This file
│   ├── business_info.md                # Business details
│   ├── branding_and_design.md          # Design system
│   ├── site_structure.md               # Navigation & architecture
│   ├── booking_system_requirements.md  # Booking functionality
│   ├── technical_specifications.md     # Technical details
│   ├── seo_and_analytics.md           # SEO strategy
│   └── page_specifications/            # Individual page specs
│       ├── homepage.md
│       ├── face_skin_page.md
│       ├── laser_hair_removal_page.md
│       ├── gallery_page.md
│       └── about_page.md
├── project_documentation/               # Development guides
│   ├── workflow.md                     # Development workflow
│   ├── rules.md                        # Coding standards
│   └── readme.md                       # Project overview
└── src/                                # Application source code
    ├── app/                            # Next.js App Router
    ├── components/                     # React components
    ├── lib/                            # Utilities & helpers
    ├── styles/                         # Global styles
    └── public/                         # Static assets
```

---

## Key Requirements

### Performance Requirements
- **First Contentful Paint (FCP):** < 1.5 seconds
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **Time to Interactive (TTI):** < 3.5 seconds
- **Lighthouse Score:** 90+ across all categories
- **Mobile Page Speed:** 85+ (Google PageSpeed Insights)

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile Browsers:** iOS Safari, Chrome Mobile
- **No support required:** Internet Explorer

### Device Support
- **Desktop:** 1920px, 1440px, 1280px, 1024px
- **Tablet:** 768px, 820px, 1024px
- **Mobile:** 375px, 390px, 414px, 428px
- **Breakpoints:** Mobile-first responsive design

### Accessibility Requirements
- **WCAG Compliance:** AA standard minimum
- **Keyboard Navigation:** Full site navigable via keyboard
- **Screen Reader Support:** Semantic HTML, ARIA labels
- **Color Contrast:** Minimum 4.5:1 for text
- **Focus Indicators:** Visible focus states on all interactive elements

---

## Content Strategy

### Content Sources
- **Existing Website:** Copy to maintain from rosiebeautysalon.com
- **Client Provided:** New images, updated service descriptions
- **Stock Images:** Temporary placeholders until client provides assets
- **Copywriting:** Keep existing copy, maintain 20% OFF promotion

### Content Management
- **Phase 1:** Hardcoded content in React components
- **Future:** Consider headless CMS (Contentful, Sanity, Strapi)
- **Updates:** Handled by developer (client does not need editing access)

### Image Requirements
**Client to Provide:**
- Professional photos of Rosica (portrait for About page)
- Treatment images (facial procedures, laser equipment)
- Before/after gallery images (6-8 facial, 4-6 laser)
- Salon ambiance photos (optional)
- Logo/branding assets (if available)

**Temporary Placeholders:**
- Stock images from Unsplash, Pexels, or similar
- Maintain proper aspect ratios and sizing
- Replace with client photos during final phase

---

## Timeline & Milestones

### Phase 1: Planning & Specification (Current)
- ✅ Gather requirements
- ✅ Define project scope
- ✅ Create page specifications
- ✅ Design system documentation
- 🔄 Entry data documentation (in progress)
- ⏳ Project workflow documentation

### Phase 2: Design & Prototyping
- ⏳ Finalize design system
- ⏳ Create component library
- ⏳ Design approval from client

### Phase 3: Development
- ⏳ Set up Next.js project
- ⏳ Implement component architecture
- ⏳ Build all five pages
- ⏳ Integrate booking system
- ⏳ Connect Supabase database
- ⏳ Google Calendar integration
- ⏳ Email notification system

### Phase 4: Testing & Refinement
- ⏳ Cross-browser testing
- ⏳ Mobile responsiveness testing
- ⏳ Booking flow testing
- ⏳ Performance optimization
- ⏳ Accessibility audit
- ⏳ SEO implementation

### Phase 5: Deployment & Launch
- ⏳ Vercel deployment setup
- ⏳ Domain transfer and DNS configuration
- ⏳ Production environment testing
- ⏳ Client training (if needed)
- ⏳ Launch and monitoring

---

## Success Metrics

### Business Goals
- Increase booking conversions by 25%
- Reduce bounce rate by 30%
- Improve mobile traffic engagement
- Maintain or improve local SEO rankings
- Positive client feedback on new design

### Technical Metrics
- Page load time < 2 seconds
- 99.9% uptime
- Zero critical accessibility issues
- Mobile-friendly test passing
- Core Web Vitals in green

### User Experience Metrics
- Low bounce rate (< 40%)
- High average session duration (> 2 minutes)
- Booking completion rate > 70%
- Mobile conversion rate matches desktop

---

## Risks & Mitigation

### Technical Risks
**Risk:** Google Calendar API integration complexity  
**Mitigation:** Research and test API early, use established libraries

**Risk:** Booking system conflicts (double bookings)  
**Mitigation:** Implement proper locking mechanisms, sync frequently with Google Calendar

**Risk:** Email deliverability issues  
**Mitigation:** Use reputable service (Resend/SendGrid), implement proper SPF/DKIM records

### Business Risks
**Risk:** Client provides low-quality images  
**Mitigation:** Provide clear image guidelines, offer professional photography recommendations

**Risk:** Content updates needed frequently  
**Mitigation:** Plan for Phase 2 CMS integration

**Risk:** Scope creep during development  
**Mitigation:** Clear documentation, change request process

---

## Stakeholders

### Primary Stakeholder
**Rosica Kachova (Rosie)**
- Business Owner
- Primary user of booking system
- Content provider
- Final approval authority

### Development Team
**Developer (Ivo)**
- Project lead
- Full-stack development
- Deployment and maintenance

### End Users
**Primary Users:**
- Women and men ages 25-60
- Local Weston-super-Mare residents
- Beauty-conscious individuals
- Mobile-first users (60%+ mobile traffic expected)

---

## Budget & Resources

### Development Resources
- Developer time: Full project development
- Hosting: Vercel (free tier initially, upgrade as needed)
- Database: Supabase (free tier suitable for Phase 1)
- Email Service: Resend or SendGrid (free tier for low volume)
- Domain: Existing domain transfer (no additional cost)

### Third-Party Services
- Google Calendar API: Free
- Google Maps Embed API: Free tier sufficient
- Image optimization: Built into Next.js
- CDN: Included with Vercel

---

## Documentation References

### Related Documents
- `business_info.md` - Business details and contact information
- `branding_and_design.md` - Design system and visual guidelines
- `site_structure.md` - Navigation and page architecture
- `booking_system_requirements.md` - Booking functionality specifications
- `technical_specifications.md` - Detailed technical implementation
- `seo_and_analytics.md` - SEO strategy and tracking

### Page Specifications
- `page_specifications/homepage.md`
- `page_specifications/face_skin_page.md`
- `page_specifications/laser_hair_removal_page.md`
- `page_specifications/gallery_page.md`
- `page_specifications/about_page.md`

---

## Notes & Assumptions

### Key Assumptions
1. Client will provide all necessary images within 2 weeks of development start
2. Current domain (rosiebeautysalon.com) can be transferred to Vercel
3. Rosie is comfortable managing bookings via Google Calendar
4. Cash-only payment model will continue (no online payment needed)
5. Client email and SMS communication is acceptable for booking confirmations
6. Booking volume will remain manageable without complex admin panel

### Important Notes
- Existing Wix site will remain live until new site is fully tested and approved
- All existing content and SEO must be preserved or improved
- Mobile-first approach is critical (majority of traffic is mobile)
- 20% OFF promotion should remain prominent on homepage
- Personal touch (Rosica's story, testimonials) is key differentiator

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Ready for Development Planning  
**Next Steps:** Create remaining entry_data documents and begin technical specification
