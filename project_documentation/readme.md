# Rosie Beauty Salon - Website Project

**Version:** 1.0.0  
**Status:** In Development  
**Last Updated:** October 26, 2025

---

## Project Overview

Modern, custom-built website for Rosie Beauty Salon, an elite aesthetics salon in Weston-super-Mare, England. The site features professional service pages, an integrated booking system, and SEO optimization for local search visibility.

**Business:** Rosie Beauty Salon  
**Owner:** Rosica Kachova  
**Location:** Weston-super-Mare, North Somerset, UK  
**Website:** rosiebeautysalon.com

---

## Features

### Core Features
- ✅ **5 Main Pages:** Home, Face & Skin, Laser Hair Removal, Gallery, About
- ✅ **Responsive Design:** Mobile-first, works on all devices
- ✅ **Professional UI:** Clean, modern design matching brand identity
- ✅ **Service Showcase:** Detailed service descriptions and pricing
- ✅ **Before/After Gallery:** Visual results showcase
- ✅ **Local SEO:** Optimized for Weston-super-Mare searches

### Booking System
- ✅ **Guest Booking:** No account required
- ✅ **Service Selection:** Dropdown with all services
- ✅ **Date Picker:** Calendar with 2-day minimum advance booking
- ✅ **Time Slots:** Dynamic slots based on service duration
- ✅ **Smart Scheduling:** 15-minute buffer between appointments
- ✅ **Google Calendar:** Automatic event creation
- ✅ **Email Notifications:** Client confirmation + admin notification

### Technical Highlights
- ⚡ **Next.js 14:** Latest App Router for performance
- 🎨 **Tailwind CSS:** Utility-first styling with custom design system
- 🗄️ **Supabase:** PostgreSQL database for bookings
- 📧 **Resend:** Reliable email delivery
- 📅 **Google Calendar API:** Two-way calendar integration
- 🚀 **Vercel:** Serverless deployment with global CDN

---

## Technology Stack

### Frontend
- **Framework:** Next.js 14.0+ (App Router)
- **UI Library:** React 18+
- **Language:** TypeScript (recommended) / JavaScript
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Date Picker:** react-datepicker
- **Carousel:** Swiper.js

### Backend
- **Runtime:** Node.js 18+
- **API:** Next.js API Routes (serverless)
- **Database:** Supabase (PostgreSQL 14+)
- **Email:** Resend
- **Calendar:** Google Calendar API v3

### Infrastructure
- **Hosting:** Vercel
- **Domain:** rosiebeautysalon.com
- **SSL:** Automatic (Vercel)
- **CDN:** Vercel Edge Network
- **Analytics:** Google Analytics 4
- **Monitoring:** Vercel Analytics

---

## Project Structure

```
rosie_beauty_salon/
├── entry_data/                          # Project specifications
│   ├── project_overview.md             # Complete project details
│   ├── business_info.md                # Business information
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
│
├── project_documentation/               # Development guides
│   ├── workflow.md                     # Development workflow
│   ├── rules.md                        # Coding standards
│   ├── errors.md                       # Issue tracking
│   ├── memo.md                         # Development log
│   └── readme.md                       # This file
│
├── src/                                # Application source code
│   ├── app/                            # Next.js App Router
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Homepage
│   │   ├── face-and-skin/
│   │   ├── laser-hair-removal/
│   │   ├── gallery/
│   │   ├── about/
│   │   └── api/                       # API routes
│   │       ├── bookings/
│   │       ├── calendar/
│   │       └── email/
│   │
│   ├── components/                     # React components
│   │   ├── layout/                    # Layout components
│   │   ├── ui/                        # Reusable UI components
│   │   ├── home/                      # Homepage components
│   │   ├── services/                  # Service components
│   │   ├── gallery/                   # Gallery components
│   │   └── booking/                   # Booking components
│   │
│   ├── lib/                           # Utilities & helpers
│   │   ├── supabase/                 # Supabase client
│   │   ├── google/                   # Google Calendar API
│   │   ├── email/                    # Email service
│   │   ├── utils/                    # Utility functions
│   │   └── constants/                # Constants
│   │
│   ├── types/                         # TypeScript types
│   └── data/                          # Static data
│
├── public/                            # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── .env.local                         # Environment variables (local)
├── .env.example                       # Environment template
├── next.config.js                     # Next.js configuration
├── tailwind.config.js                 # Tailwind configuration
├── tsconfig.json                      # TypeScript configuration
├── package.json                       # Dependencies
└── README.md                          # This file
```

---

## Getting Started

### Prerequisites

- **Node.js:** 18.0 or higher
- **npm:** 9.0 or higher
- **Git:** Latest version

### Installation

1. **Clone the repository:**
   ```bash
   cd c:/projects/rosie_beauty_salon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in the required values in `.env.local`

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Environment Variables

Required environment variables (see `.env.example` for complete list):

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Google Calendar API
GOOGLE_CALENDAR_CLIENT_ID=your-client-id
GOOGLE_CALENDAR_CLIENT_SECRET=your-client-secret
GOOGLE_CALENDAR_REFRESH_TOKEN=your-refresh-token
GOOGLE_CALENDAR_ID=rosie-calendar@gmail.com

# Email Service (Resend)
RESEND_API_KEY=your-resend-api-key
ADMIN_EMAIL=rosiebeautyst@gmail.com

# Application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

---

## Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Testing (Future)
```bash
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

---

## Documentation

### For Developers

**Core Documentation:**
- `project_documentation/workflow.md` - Complete development workflow
- `project_documentation/rules.md` - Coding standards and best practices
- `project_documentation/errors.md` - Issue tracking and solutions
- `project_documentation/memo.md` - Development progress log

**Entry Data (Specifications):**
- `entry_data/project_overview.md` - Project goals and requirements
- `entry_data/technical_specifications.md` - Technical architecture
- `entry_data/booking_system_requirements.md` - Booking system details
- `entry_data/branding_and_design.md` - Design system and brand guidelines

**Page Specifications:**
- `entry_data/page_specifications/homepage.md` - Homepage structure
- `entry_data/page_specifications/face_skin_page.md` - Face & Skin page
- `entry_data/page_specifications/laser_hair_removal_page.md` - Laser page
- `entry_data/page_specifications/gallery_page.md` - Gallery page
- `entry_data/page_specifications/about_page.md` - About page

### For Business Owner (Rosie)

**Business Information:**
- `entry_data/business_info.md` - Complete business details
- Services, pricing, hours, contact information

**Website Features:**
- Modern, professional design
- Easy online booking
- Automatic calendar updates
- Email notifications
- Mobile-friendly on all devices

---

## Development Workflow

### Phase-Based Development

The project follows a 16-phase development workflow:

**Phases 0-2:** Setup & Foundation
- Project setup, design system, layout components

**Phases 3-7:** Page Development
- Build all 5 main pages with content and styling

**Phases 8-12:** Booking System
- Backend, API, frontend, integrations

**Phases 13-14:** SEO & Analytics
- Meta tags, structured data, tracking setup

**Phases 15-16:** Testing & Deployment
- Comprehensive testing, production deployment

See `project_documentation/workflow.md` for complete phase details.

### Git Workflow

**Branching Strategy:**
- `main` - Production-ready code
- `development` - Integration branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

**Commit Message Format:**
```
type(scope): message

Examples:
feat(booking): add date selection component
fix(api): resolve double booking issue
docs(readme): update installation steps
```

---

## Database Schema

### Bookings Table

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Service Information
  service_id VARCHAR(100) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  service_category VARCHAR(50) NOT NULL,
  service_duration INTEGER NOT NULL,
  service_price DECIMAL(10, 2) NOT NULL,
  
  -- Booking Details
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  booking_end_time TIME NOT NULL,
  
  -- Client Information
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(20) NOT NULL,
  special_requests TEXT,
  
  -- Integration
  google_calendar_event_id VARCHAR(255),
  
  -- Status
  status VARCHAR(20) DEFAULT 'confirmed',
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## API Endpoints

### Bookings API

**GET** `/api/bookings/available-slots`
- Get available time slots for a service and date
- Query params: `service_id`, `date`

**POST** `/api/bookings/check-availability`
- Check if a specific time slot is available
- Body: `{ service_id, date, time }`

**POST** `/api/bookings/create`
- Create a new booking
- Body: Complete booking object
- Creates calendar event and sends emails

### Calendar API

**POST** `/api/calendar/webhook`
- Receives Google Calendar webhook notifications
- Updates booking status on calendar changes

### Email API

**POST** `/api/email/send` (Internal)
- Sends booking confirmation/notification emails
- Called by booking creation API

---

## Services & Pricing

### Facial & Skin Therapies

1. **Basic Therapy** - £65 (40-75 min)
2. **Deluxe Therapy** - £110 (60-75 min)
3. **Platinum Therapy** - £160 (1.5 hr)
4. **Lip Therapy** - £35 (15-30 min)
5. **Eye Contour Therapy** - £65 (15-30 min)
6. **Lymphatic Drainage + LED** - £95 (30-45 min)
7. **Scalp and Face Nerola** - £95 (60-75 min)
8. **Laser Hair Removal (Back)** - Varies (1 hr)

### Laser Hair Removal

**Women's Services:** 16 treatments (face, body, packages)  
**Men's Services:** 25 treatments (face, body, packages)

**Pricing:** Single sessions + Course of 6 (pay for 5)  
**Range:** £20 - £180 per session

See `entry_data/business_info.md` for complete pricing.

---

## Business Hours

**Monday, Wednesday, Friday:** 9 AM - 8 PM  
**Tuesday, Thursday:** 9 AM - 6 PM  
**Saturday:** 10 AM - 2 PM  
**Sunday:** CLOSED

**Booking Requirements:**
- Minimum 2 days advance booking
- 15-minute buffer between appointments
- No same-day or next-day bookings

---

## SEO Strategy

### Target Keywords

**Primary:**
- beauty salon Weston-super-Mare
- facial treatments Weston-super-Mare
- laser hair removal Weston-super-Mare

**Secondary:**
- Hydrafacial Weston
- beautician Weston-super-Mare
- skin therapy Somerset

**Local Focus:**
- Weston-super-Mare and surrounding 15-mile radius
- North Somerset area

### Implementation
- Meta tags on all pages
- Schema.org structured data
- XML sitemap
- Google Business Profile optimization
- Local citations

See `entry_data/seo_and_analytics.md` for complete strategy.

---

## Performance Targets

- **First Contentful Paint:** < 1.5 seconds
- **Largest Contentful Paint:** < 2.5 seconds
- **Time to Interactive:** < 3.5 seconds
- **Lighthouse Score:** 90+ (all categories)
- **Mobile Page Speed:** 85+

---

## Browser Support

**Desktop:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

**Mobile:**
- iOS Safari 14+
- Chrome Mobile 90+

**Not Supported:**
- Internet Explorer (any version)

---

## Deployment

### Vercel Deployment

1. **Connect Repository:**
   - Link Git repository to Vercel
   - Automatic deployments on push to main

2. **Configure Environment:**
   - Add all environment variables in Vercel dashboard
   - Separate variables for production/preview

3. **Deploy:**
   - Preview: Automatic on pull requests
   - Production: Automatic on merge to main

4. **Custom Domain:**
   - Add rosiebeautysalon.com in Vercel
   - Configure DNS records
   - SSL automatic

### Build Configuration

```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['your-supabase-project.supabase.co'],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    optimizeCss: true
  }
};
```

---

## Maintenance

### Regular Tasks

**Weekly:**
- Monitor Google Business Profile
- Respond to reviews
- Check analytics data
- Verify booking system working

**Monthly:**
- Review Google Search Console
- Check keyword rankings
- Analyze conversion funnel
- Update content if needed

**Quarterly:**
- Comprehensive SEO audit
- Update service descriptions/pricing
- Review and optimize Core Web Vitals
- Security updates

---

## Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Environment Variables Not Loading:**
- Check `.env.local` exists and has correct values
- Restart dev server after changes
- Verify variable names match exactly

**Supabase Connection Issues:**
- Verify API keys are correct
- Check RLS policies are configured
- Ensure database tables exist

**Google Calendar Not Syncing:**
- Verify OAuth credentials
- Check refresh token is valid
- Ensure Calendar API is enabled

---

## Contributing

### For Developers

1. **Read Documentation:**
   - Start with `project_documentation/workflow.md`
   - Review `project_documentation/rules.md`
   - Understand the phase-based approach

2. **Follow Standards:**
   - Use defined coding standards
   - Document all changes in `memo.md`
   - Log all issues in `errors.md`

3. **Testing:**
   - Test on multiple devices
   - Verify responsive design
   - Check browser compatibility

4. **Documentation:**
   - Update relevant markdown files
   - Keep memo.md current
   - Document deviations from specs

---

## License

Private project for Rosie Beauty Salon. All rights reserved.

---

## Contact

### Business Owner
**Name:** Rosica Kachova  
**Business:** Rosie Beauty Salon  
**Email:** rosiebeautyst@gmail.com  
**Phone:** 07414 601010  
**Address:** Orchard Street, 49C, Weston-super-Mare, BS23 1RJ

### Developer
**Developer:** Claude Code (AI Assistant)  
**Project Manager:** [To be filled if applicable]

---

## Project Status

**Current Phase:** [TO BE UPDATED]  
**Completion:** [X]%  
**Status:** [In Development/Testing/Deployed]

**Last Updated:** October 26, 2025

---

## Acknowledgments

- **Design Inspiration:** Modern beauty salon websites, premium spa aesthetics
- **Technical Stack:** Next.js, Vercel, Supabase teams for excellent documentation
- **Tools:** Claude AI for development assistance

---

## Version History

### Version 1.0.0 (Target)
- Initial release
- 5 main pages
- Booking system
- Google Calendar integration
- Email notifications
- SEO optimization
- Production deployment

### Future Versions
- **1.1.0:** Admin dashboard for Rosie
- **1.2.0:** Client portal (booking history)
- **1.3.0:** SMS notifications
- **2.0.0:** Advanced features (package tracking, reviews, etc.)

---

**README Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Active Project
