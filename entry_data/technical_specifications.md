# Technical Specifications - Rosie Beauty Salon

## Technology Stack Overview

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **UI Library:** React 18+
- **Language:** TypeScript (recommended) or JavaScript
- **Styling:** Tailwind CSS 3.x
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Date/Time Picker:** react-datepicker or custom
- **Carousel:** Swiper.js or react-slick
- **HTTP Client:** Native Fetch API

### Backend
- **Runtime:** Node.js 18+ (Vercel serverless)
- **API:** Next.js API Routes (App Router)
- **Database:** Supabase (PostgreSQL 14+)
- **Authentication:** Supabase Auth (admin only, Phase 2+)
- **Email:** Resend (primary) or SendGrid (fallback)
- **Calendar:** Google Calendar API v3
- **File Storage:** Vercel Blob or Supabase Storage

### Deployment & Infrastructure
- **Hosting:** Vercel (serverless)
- **Domain:** rosiebeautysalon.com
- **SSL:** Automatic via Vercel
- **CDN:** Vercel Edge Network
- **Analytics:** Vercel Analytics or Google Analytics 4
- **Monitoring:** Vercel Monitoring
- **Environment:** Production, Preview, Development

---

## Project Structure

```
rosie_beauty_salon/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Homepage
│   │   ├── face-and-skin/
│   │   │   └── page.tsx
│   │   ├── laser-hair-removal/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── api/                     # API Routes
│   │   │   ├── bookings/
│   │   │   │   ├── check-availability/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── available-slots/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── create/
│   │   │   │   │   └── route.ts
│   │   │   │   └── by-date/
│   │   │   │       └── route.ts
│   │   │   ├── calendar/
│   │   │   │   └── webhook/
│   │   │   │       └── route.ts
│   │   │   └── email/
│   │   │       └── send/
│   │   │           └── route.ts
│   │   ├── globals.css              # Global styles
│   │   └── not-found.tsx            # 404 page
│   │
│   ├── components/                   # React components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── DatePicker.tsx
│   │   │   └── Modal.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── LocationSection.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceCarousel.tsx
│   │   ├── gallery/
│   │   │   ├── BeforeAfterCard.tsx
│   │   │   └── GalleryCarousel.tsx
│   │   └── booking/
│   │       ├── BookingForm.tsx
│   │       ├── ServiceSelect.tsx
│   │       ├── DateSelect.tsx
│   │       ├── TimeSlotSelect.tsx
│   │       ├── ClientInfoForm.tsx
│   │       └── BookingConfirmation.tsx
│   │
│   ├── lib/                          # Utilities & helpers
│   │   ├── supabase/
│   │   │   ├── client.ts            # Supabase client
│   │   │   └── server.ts            # Server-side Supabase
│   │   ├── google/
│   │   │   └── calendar.ts          # Google Calendar API
│   │   ├── email/
│   │   │   ├── resend.ts            # Resend client
│   │   │   └── templates/           # Email templates
│   │   │       ├── booking-confirmation.tsx
│   │   │       └── admin-notification.tsx
│   │   ├── utils/
│   │   │   ├── date.ts              # Date utilities
│   │   │   ├── validation.ts        # Validation helpers
│   │   │   └── booking.ts           # Booking logic
│   │   └── constants/
│   │       ├── services.ts          # Service definitions
│   │       └── business-hours.ts    # Hours configuration
│   │
│   ├── types/                        # TypeScript types
│   │   ├── booking.ts
│   │   ├── service.ts
│   │   └── api.ts
│   │
│   └── data/                         # Static data
│       ├── services.json            # Service catalog
│       ├── testimonials.json        # Client testimonials
│       └── gallery.json             # Gallery images
│
├── public/                           # Static assets
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── gallery/
│   │   └── about/
│   ├── icons/
│   └── fonts/ (if custom fonts)
│
├── entry_data/                       # Project documentation
├── project_documentation/            # Development guides
├── .env.local                        # Environment variables (local)
├── .env.example                      # Environment template
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Dependencies
└── README.md                         # Project README
```

---

## Database Architecture

### Supabase Setup

**Project:** rosie-beauty-salon  
**Region:** West Europe (closest to UK)  
**Plan:** Free tier (upgrade if needed)

### Tables

#### 1. `bookings` Table
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

-- Indexes
CREATE INDEX idx_booking_datetime ON bookings(booking_date, booking_time);
CREATE INDEX idx_client_email ON bookings(client_email);
CREATE INDEX idx_status ON bookings(status);
CREATE INDEX idx_calendar_event ON bookings(google_calendar_event_id);
```

#### 2. `services` Table (Optional - for dynamic management)
```sql
CREATE TABLE services (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT,
  duration INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 3. `business_hours` Table (Future - for dynamic hours)
```sql
CREATE TABLE business_hours (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  day_of_week INTEGER NOT NULL, -- 0=Sunday, 1=Monday, etc.
  open_time TIME,
  close_time TIME,
  is_closed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. `blocked_dates` Table (Future - for holidays/closures)
```sql
CREATE TABLE blocked_dates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL UNIQUE,
  reason VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Public can insert bookings (guest booking)
CREATE POLICY "Public insert bookings" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Public can check availability (read-only specific fields)
CREATE POLICY "Public read booking times" ON bookings
  FOR SELECT
  USING (true);

-- Admin can do everything (when auth is implemented)
-- This will be added in Phase 2 when admin panel is built
```

---

## API Architecture

### API Routes Structure

All API routes follow RESTful conventions and return JSON.

#### 1. Bookings API

**GET /api/bookings/available-slots**
- Query params: `service_id`, `date`
- Returns: Array of available time slots
- Public access

**POST /api/bookings/check-availability**
- Body: `{ service_id, date, time }`
- Returns: `{ available: boolean }`
- Public access

**POST /api/bookings/create**
- Body: Complete booking object
- Returns: Booking confirmation
- Public access
- Rate limited: 5 requests/hour per IP

**GET /api/bookings/by-date** (Future - Admin only)
- Query params: `date`
- Returns: Array of bookings
- Requires authentication

#### 2. Calendar API

**POST /api/calendar/webhook**
- Receives Google Calendar webhook notifications
- Updates booking status on calendar changes
- Authenticated via Google webhook verification

#### 3. Email API

**POST /api/email/send**
- Body: `{ type, recipient, booking_data }`
- Sends confirmation or notification emails
- Internal use only (called by booking API)

### API Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Operation successful"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": { /* optional additional info */ }
}
```

### Error Codes

```typescript
enum ErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  SLOT_UNAVAILABLE = 'SLOT_UNAVAILABLE',
  DATABASE_ERROR = 'DATABASE_ERROR',
  CALENDAR_ERROR = 'CALENDAR_ERROR',
  EMAIL_ERROR = 'EMAIL_ERROR',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  INTERNAL_ERROR = 'INTERNAL_ERROR'
}
```

---

## Environment Variables

### Required Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Google Calendar API
GOOGLE_CALENDAR_CLIENT_ID=your-client-id
GOOGLE_CALENDAR_CLIENT_SECRET=your-client-secret
GOOGLE_CALENDAR_REFRESH_TOKEN=your-refresh-token
GOOGLE_CALENDAR_ID=rosie@example.com

# Email Service (Resend)
RESEND_API_KEY=your-resend-api-key
ADMIN_EMAIL=rosiebeautyst@gmail.com

# Application
NEXT_PUBLIC_SITE_URL=https://rosiebeautysalon.com
NODE_ENV=production
```

### .env.example Template
```bash
# Copy this file to .env.local and fill in the values

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Google Calendar
GOOGLE_CALENDAR_CLIENT_ID=
GOOGLE_CALENDAR_CLIENT_SECRET=
GOOGLE_CALENDAR_REFRESH_TOKEN=
GOOGLE_CALENDAR_ID=

# Email
RESEND_API_KEY=
ADMIN_EMAIL=rosiebeautyst@gmail.com

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Third-Party Integrations

### 1. Supabase Integration

**Setup:**
1. Create Supabase project
2. Create database tables
3. Configure RLS policies
4. Get API keys
5. Install client: `npm install @supabase/supabase-js`

**Client Configuration:**
```typescript
// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

**Server Configuration:**
```typescript
// lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js';

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

### 2. Google Calendar Integration

**Setup:**
1. Create Google Cloud project
2. Enable Google Calendar API
3. Create OAuth 2.0 credentials
4. Generate refresh token
5. Install library: `npm install googleapis`

**Implementation:**
```typescript
// lib/google/calendar.ts
import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CALENDAR_CLIENT_ID,
  process.env.GOOGLE_CALENDAR_CLIENT_SECRET
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_CALENDAR_REFRESH_TOKEN
});

export const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
```

**Event Creation:**
```typescript
async function createCalendarEvent(booking: Booking) {
  const event = {
    summary: `${booking.service_name} - ${booking.client_name}`,
    description: `
      Client: ${booking.client_name}
      Phone: ${booking.client_phone}
      Email: ${booking.client_email}
      Service: ${booking.service_name}
      Price: £${booking.service_price}
      Booking ID: ${booking.id}
    `,
    location: 'Orchard Street, 49C, Weston-super-Mare, BS23 1RJ',
    start: {
      dateTime: `${booking.booking_date}T${booking.booking_time}:00`,
      timeZone: 'Europe/London'
    },
    end: {
      dateTime: booking.booking_end_time,
      timeZone: 'Europe/London'
    }
  };

  const response = await calendar.events.insert({
    calendarId: process.env.GOOGLE_CALENDAR_ID!,
    requestBody: event
  });

  return response.data.id;
}
```

### 3. Resend Email Integration

**Setup:**
1. Sign up for Resend account
2. Verify domain (rosiebeautysalon.com)
3. Get API key
4. Install library: `npm install resend`

**Implementation:**
```typescript
// lib/email/resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingConfirmation(booking: Booking) {
  await resend.emails.send({
    from: 'Rosie Beauty Salon <bookings@rosiebeautysalon.com>',
    to: booking.client_email,
    subject: 'Booking Confirmed - Rosie Beauty Salon',
    html: renderBookingConfirmationTemplate(booking)
  });
}
```

---

## Component Architecture

### Component Hierarchy

```
App
├── RootLayout
│   ├── Header
│   │   ├── Navigation (Desktop)
│   │   └── MobileMenu
│   ├── Page Content
│   │   └── [Dynamic based on route]
│   └── Footer
│       ├── ContactInfo
│       ├── BusinessHours
│       ├── QuickLinks
│       └── SocialLinks
```

### Component Patterns

**Server Components (Default):**
- Static page content
- Data fetching components
- SEO-critical content

**Client Components:**
- Interactive forms
- Carousels/sliders
- Modal/dialog components
- State-dependent UI

**Example:**
```typescript
// Server Component (default in App Router)
export default async function FaceSkinPage() {
  // Can fetch data directly
  return (
    <div>
      <PageHeader title="Face & Skin" />
      <ServicesList /> {/* Client component with interactivity */}
    </div>
  );
}

// Client Component
'use client';

export function ServicesList() {
  const [selectedService, setSelectedService] = useState(null);
  // Interactive logic
}
```

---

## State Management

### Approach: React Context + Server State

**Global State:** React Context for booking flow state  
**Server State:** React Query or SWR (optional)  
**Form State:** React Hook Form

**Booking Context:**
```typescript
// contexts/BookingContext.tsx
'use client';

interface BookingState {
  service?: Service;
  date?: string;
  time?: string;
  clientInfo?: ClientInfo;
}

const BookingContext = createContext<{
  state: BookingState;
  updateBooking: (data: Partial<BookingState>) => void;
} | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<BookingState>({});

  const updateBooking = (data: Partial<BookingState>) => {
    setState(prev => ({ ...prev, ...data }));
  };

  return (
    <BookingContext.Provider value={{ state, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
```

---

## Form Handling & Validation

### React Hook Form + Zod

**Installation:**
```bash
npm install react-hook-form @hookform/resolvers zod
```

**Example:**
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const bookingSchema = z.object({
  client_name: z.string().min(2, 'Name must be at least 2 characters'),
  client_email: z.string().email('Invalid email address'),
  client_phone: z.string().regex(/^[0-9\s\+\-\(\)]+$/, 'Invalid phone number'),
  special_requests: z.string().max(500).optional()
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function ClientInfoForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (data: BookingFormData) => {
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}
```

---

## Image Optimization

### Next.js Image Component

```typescript
import Image from 'next/image';

<Image
  src="/images/hero/facial-treatment.jpg"
  alt="Professional facial treatment"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="..." // Low-quality placeholder
/>
```

### Image Processing
- **Format:** WebP with JPG fallback (automatic with Next.js Image)
- **Compression:** 80-85% quality
- **Responsive:** Automatic srcset generation
- **Lazy Loading:** Automatic for below-the-fold images

---

## Performance Optimization

### Code Splitting
- Automatic route-based code splitting (Next.js default)
- Dynamic imports for large components:
  ```typescript
  const BookingModal = dynamic(() => import('@/components/booking/BookingModal'));
  ```

### Caching Strategy
**Static Pages:** ISR (Incremental Static Regeneration)
```typescript
export const revalidate = 3600; // Revalidate every hour
```

**API Routes:** Cache-Control headers
```typescript
export async function GET() {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
    }
  });
}
```

### Bundle Size Optimization
- Tree shaking (automatic)
- Remove unused Tailwind classes (automatic)
- Analyze bundle: `npm run build --analyze`

---

## Testing Strategy

### Testing Tools
- **Unit Tests:** Vitest or Jest
- **Component Tests:** React Testing Library
- **E2E Tests:** Playwright (Phase 2)
- **Type Checking:** TypeScript

### Test Structure
```
src/
├── __tests__/
│   ├── unit/
│   │   ├── utils/
│   │   └── lib/
│   ├── integration/
│   │   └── api/
│   └── e2e/
│       └── booking-flow.spec.ts
```

### Example Unit Test
```typescript
import { calculateEndTime } from '@/lib/utils/booking';

describe('calculateEndTime', () => {
  it('should add service duration and buffer to start time', () => {
    const result = calculateEndTime('10:00', 60);
    expect(result).toBe('11:15'); // 60 min + 15 min buffer
  });
});
```

---

## Monitoring & Analytics

### Vercel Analytics
- Automatic Web Vitals tracking
- Real User Monitoring (RUM)
- Performance insights

### Google Analytics 4 (Optional)
- Page view tracking
- Event tracking (booking attempts, completions)
- Conversion tracking

### Error Tracking
- Vercel Error Monitoring
- Or Sentry integration (optional)

---

## Deployment Configuration

### Vercel Deployment

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["lhr1"]
}
```

### Build Configuration

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-supabase-project.supabase.co'],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    optimizeCss: true
  }
};

module.exports = nextConfig;
```

### Environment-Specific Configs
- **Development:** `npm run dev` (localhost:3000)
- **Preview:** Automatic on PR (Vercel preview deployments)
- **Production:** `npm run build` → Deploy to rosiebeautysalon.com

---

## Security Best Practices

### API Security
- Rate limiting on booking endpoints
- Input validation and sanitization
- CORS configuration (restrict to domain)
- Secure environment variables

### Data Security
- HTTPS only (enforced by Vercel)
- Encrypted data in transit
- Supabase RLS policies
- No sensitive data in client-side code

### XSS Prevention
- React's automatic escaping
- Sanitize user inputs
- Content Security Policy headers

---

## Browser & Device Support

### Browser Support
- **Desktop:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile:** iOS Safari 14+, Chrome Mobile 90+
- **No support:** Internet Explorer

### Device Testing
- iPhone 12/13/14 (iOS 15+)
- Samsung Galaxy S21/S22 (Android 12+)
- iPad Pro (iOS 15+)
- Desktop (1920x1080, 1440x900)

---

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### Git Workflow
- **Main branch:** Production-ready code
- **Development branch:** Integration branch
- **Feature branches:** Individual features
- **Pull requests:** Required for main branch

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Ready for Implementation  
**Dependencies:** All third-party services documented above
