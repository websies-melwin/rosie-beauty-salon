# Development Rules & Standards - Rosie Beauty Salon

## Core Principles

### 1. Documentation First
- **READ before WRITE:** Always read relevant entry_data files before starting any task
- **DOCUMENT everything:** Every action, decision, and issue must be logged
- **REFERENCE specifications:** Never work from memory, always check the docs

### 2. Specification Adherence
- **Follow specs exactly:** Do not deviate without documented justification
- **Verify accuracy:** Cross-reference multiple sources when unclear
- **Question discrepancies:** Log any conflicting information in errors.md

### 3. Quality Over Speed
- **Test before moving on:** Each component must be tested before proceeding
- **No shortcuts:** Follow the complete workflow for every phase
- **Fix critical errors immediately:** Do not accumulate technical debt

---

## Code Standards

### File Naming Conventions

**Components:**
```
PascalCase for React components
- Header.tsx
- ServiceCard.tsx
- BookingForm.tsx
```

**Utilities/Helpers:**
```
camelCase for utility functions
- dateUtils.ts
- validation.ts
- bookingHelpers.ts
```

**Pages (Next.js App Router):**
```
kebab-case for routes
- page.tsx (for index)
- face-and-skin/page.tsx
- laser-hair-removal/page.tsx
```

**Styles:**
```
kebab-case for CSS files
- global-styles.css
- component-overrides.css
```

### Directory Structure Rules

**Mandatory Structure:**
```
src/
├── app/                  # Next.js App Router pages
├── components/           # React components
│   ├── layout/          # Layout components
│   ├── ui/              # Reusable UI components
│   ├── home/            # Homepage-specific
│   ├── services/        # Service-specific
│   ├── gallery/         # Gallery-specific
│   └── booking/         # Booking-specific
├── lib/                 # Utilities & helpers
│   ├── supabase/
│   ├── google/
│   ├── email/
│   ├── utils/
│   └── constants/
├── types/               # TypeScript types
└── data/                # Static data (JSON)
```

**Rules:**
- No files in wrong directories
- Keep related components together
- Shared components in `components/ui/`
- Page-specific components in their own folders

---

## React/Next.js Standards

### Component Structure

**Server Components (Default):**
```typescript
// No 'use client' directive
// Can fetch data directly
// Static rendering by default

export default async function PageName() {
  // Data fetching
  const data = await fetchData();
  
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

**Client Components:**
```typescript
'use client';

import { useState } from 'react';

export function ComponentName() {
  // Client-side state and logic
  const [state, setState] = useState();
  
  return (
    <div>
      {/* Interactive JSX */}
    </div>
  );
}
```

**When to Use Client Components:**
- Form inputs and validation
- State management (useState, useContext)
- Event handlers (onClick, onChange)
- Browser APIs (localStorage, window)
- Third-party libraries requiring browser

**When to Use Server Components:**
- Static content
- Data fetching
- SEO-critical content
- Layout components (when possible)

### Component Export Rules

```typescript
// ✅ Default export for pages
export default function HomePage() {}

// ✅ Named export for reusable components
export function Button() {}

// ❌ Don't mix default and named exports in components
```

### Props and Types

```typescript
// ✅ Define props interface
interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ 
  text, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) {
  // Component logic
}

// ❌ Don't use implicit any types
```

---

## Styling Standards

### Tailwind CSS Rules

**Use Tailwind utility classes:**
```tsx
// ✅ Good
<button className="bg-accent-gold text-white px-8 py-3 rounded-full">
  Book Now
</button>

// ❌ Bad - inline styles
<button style={{ backgroundColor: '#8B7355', color: 'white' }}>
  Book Now
</button>
```

**Custom classes for repeated patterns:**
```css
/* globals.css */
@layer components {
  .btn-primary {
    @apply border-2 border-accent-gold text-accent-gold px-8 py-3 rounded-full;
    @apply hover:bg-accent-gold hover:text-white transition-all duration-300;
  }
}
```

**Responsive design:**
```tsx
// ✅ Mobile-first approach
<div className="flex flex-col md:flex-row lg:gap-8">
  {/* Stacked on mobile, row on desktop */}
</div>

// ✅ Responsive text sizes
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Heading
</h1>
```

**Color usage from design system:**
```tsx
// ✅ Use defined color classes
className="bg-cream text-dark-gray"

// ❌ Don't use arbitrary colors
className="bg-[#F5F1E8]" // Use named color instead
```

### CSS Organization

**Global styles in `globals.css`:**
- CSS resets
- Typography base styles
- Custom Tailwind components
- Third-party library overrides

**Scoped styles:**
- Use Tailwind utilities first
- CSS Modules only when necessary
- No inline styles except for dynamic values

---

## TypeScript Standards

### Type Safety Rules

```typescript
// ✅ Define explicit types
interface Booking {
  id: string;
  service_name: string;
  booking_date: string;
  booking_time: string;
  client_name: string;
  client_email: string;
  client_phone: string;
}

// ✅ Use types for function parameters
function createBooking(booking: Booking): Promise<Booking> {
  // Implementation
}

// ❌ Avoid any type
function processData(data: any) { } // Don't do this

// ✅ Use unknown instead if type is truly unknown
function processData(data: unknown) {
  // Type guard before using
  if (typeof data === 'string') {
    // Now TypeScript knows it's a string
  }
}
```

### Type Organization

```typescript
// types/booking.ts
export interface Booking {
  // Fields
}

export interface BookingFormData {
  // Fields
}

export type BookingStatus = 'confirmed' | 'cancelled' | 'completed';
```

---

## API Standards

### API Route Structure

```typescript
// app/api/bookings/create/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation
    if (!body.service_id) {
      return NextResponse.json(
        { success: false, error: 'Service ID required', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }
    
    // Business logic
    const result = await createBooking(body);
    
    // Success response
    return NextResponse.json(
      { success: true, data: result },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}
```

### Response Format Standard

**Success Response:**
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Optional success message"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Human-readable error message",
  "code": "ERROR_CODE",
  "details": {
    // Optional additional context
  }
}
```

### HTTP Status Codes

- **200 OK:** Successful GET request
- **201 Created:** Successful POST creating resource
- **400 Bad Request:** Client-side validation error
- **404 Not Found:** Resource not found
- **429 Too Many Requests:** Rate limit exceeded
- **500 Internal Server Error:** Server-side error

---

## Database Standards

### Supabase Queries

```typescript
// ✅ Use TypeScript types
import { Database } from '@/types/supabase';
type Booking = Database['public']['Tables']['bookings']['Row'];

// ✅ Proper error handling
const { data, error } = await supabase
  .from('bookings')
  .insert(newBooking)
  .select()
  .single();

if (error) {
  console.error('Database error:', error);
  throw new Error('Failed to create booking');
}

return data;

// ❌ Don't ignore errors
const { data } = await supabase.from('bookings').select(); // Missing error check
```

### Query Best Practices

```typescript
// ✅ Select specific columns
const { data } = await supabase
  .from('bookings')
  .select('id, client_name, booking_date')
  .eq('status', 'confirmed');

// ❌ Don't select everything when not needed
const { data } = await supabase
  .from('bookings')
  .select('*'); // Fetches unnecessary data
```

### Transaction Handling

```typescript
// ✅ Use transactions for related operations
const { data, error } = await supabase.rpc('create_booking_with_calendar', {
  booking_data: newBooking
});

// Rollback happens automatically on error
```

---

## Form Handling Standards

### React Hook Form + Zod

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ✅ Define schema
const bookingSchema = z.object({
  client_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name too long'),
  client_email: z.string()
    .email('Invalid email address'),
  client_phone: z.string()
    .regex(/^[0-9\s\+\-\(\)]+$/, 'Invalid phone number'),
  special_requests: z.string()
    .max(500, 'Maximum 500 characters')
    .optional()
});

type BookingFormData = z.infer<typeof bookingSchema>;

// ✅ Use schema in form
export function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (data: BookingFormData) => {
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('client_name')} />
      {errors.client_name && <span>{errors.client_name.message}</span>}
    </form>
  );
}
```

### Form Validation Rules

- **Client-side validation:** Use Zod schemas
- **Server-side validation:** Re-validate in API routes
- **Error messages:** Clear, actionable, user-friendly
- **Accessibility:** Link labels to inputs, proper ARIA attributes

---

## Performance Standards

### Image Optimization

```tsx
import Image from 'next/image';

// ✅ Use Next.js Image component
<Image
  src="/images/hero/facial.jpg"
  alt="Professional facial treatment"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="..." // Low-quality placeholder
/>

// ❌ Don't use regular img tag for local images
<img src="/images/hero/facial.jpg" alt="Facial" /> // No optimization
```

### Code Splitting

```tsx
import dynamic from 'next/dynamic';

// ✅ Dynamic import for large components
const BookingModal = dynamic(() => import('@/components/booking/BookingModal'), {
  loading: () => <LoadingSpinner />,
  ssr: false // If client-only
});

// ✅ Route-based splitting (automatic in Next.js)
// Each page in app/ directory is automatically code-split
```

### Performance Targets

- **First Contentful Paint:** < 1.5 seconds
- **Largest Contentful Paint:** < 2.5 seconds
- **Time to Interactive:** < 3.5 seconds
- **Cumulative Layout Shift:** < 0.1
- **Lighthouse Score:** 90+ (all categories)

---

## Accessibility Standards

### Semantic HTML

```tsx
// ✅ Use semantic elements
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
  </article>
</main>

<footer>
  {/* Footer content */}
</footer>

// ❌ Don't use divs for everything
<div className="header">
  <div className="nav">
    {/* Wrong */}
  </div>
</div>
```

### ARIA Attributes

```tsx
// ✅ Proper ARIA usage
<button aria-label="Close menu" onClick={closeMenu}>
  <X />
</button>

<nav aria-label="Main navigation">
  {/* Navigation items */}
</nav>

<img src="..." alt="Descriptive alt text" />

// ❌ Don't use empty alt or missing labels
<img src="..." alt="" /> // Only for decorative images
<button onClick={handleClick}><Icon /></button> // Missing label
```

### Keyboard Navigation

```tsx
// ✅ Keyboard accessible
<button 
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
>
  Click me
</button>

// ✅ Focus management
<input
  ref={inputRef}
  onFocus={() => setFocused(true)}
  className="focus:ring-2 focus:ring-accent-gold"
/>
```

### Color Contrast

- **Text on background:** Minimum 4.5:1 ratio (WCAG AA)
- **Large text (18px+):** Minimum 3:1 ratio
- **Interactive elements:** Minimum 3:1 ratio
- **Test with:** Browser DevTools, WebAIM Contrast Checker

---

## SEO Standards

### Meta Tags

```tsx
// app/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rosie Beauty Salon | Facial & Laser Hair Removal | Weston-super-Mare',
  description: 'Elite beauty salon in Weston-super-Mare offering professional facial treatments and laser hair removal. Hydrafacial, LED therapy & more. Book today.',
  keywords: ['beauty salon Weston-super-Mare', 'facial treatments', 'laser hair removal'],
  openGraph: {
    title: 'Rosie Beauty Salon',
    description: 'Professional beauty treatments in Weston-super-Mare',
    images: ['/images/og-image.jpg'],
  },
};
```

### Heading Hierarchy

```tsx
// ✅ Proper hierarchy
<h1>Page Title</h1>
  <h2>Section Heading</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Section</h2>

// ❌ Don't skip levels
<h1>Title</h1>
  <h3>Wrong - skipped h2</h3>
```

### Structured Data

```tsx
// ✅ Add JSON-LD schema
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "Rosie Beauty Salon",
      // ... more schema data
    })
  }}
/>
```

---

## Security Standards

### Environment Variables

```typescript
// ✅ Server-side only secrets
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// ✅ Public variables (prefixed with NEXT_PUBLIC_)
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

// ❌ Never expose secrets in client code
// ❌ Never commit .env.local to git
```

### Input Sanitization

```typescript
import DOMPurify from 'isomorphic-dompurify';

// ✅ Sanitize user input
const cleanInput = DOMPurify.sanitize(userInput);

// ✅ Validate on server
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate with Zod
  const result = bookingSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }
  
  // Use validated data
  const validatedData = result.data;
}
```

### Rate Limiting

```typescript
// ✅ Implement rate limiting on API routes
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  // Check rate limit
  const rateLimitResult = await rateLimit(request);
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests', code: 'RATE_LIMIT_EXCEEDED' },
      { status: 429 }
    );
  }
  
  // Continue with request
}
```

---

## Testing Standards

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click" onClick={handleClick} />);
    screen.getByText('Click').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### API Testing

```typescript
describe('POST /api/bookings/create', () => {
  it('creates a booking successfully', async () => {
    const booking = {
      service_id: 'deluxe-therapy',
      // ... other fields
    };

    const response = await fetch('/api/bookings/create', {
      method: 'POST',
      body: JSON.stringify(booking)
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.success).toBe(true);
  });
});
```

---

## Git Standards

### Commit Messages

```
Format: type(scope): message

Types:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Maintenance

Examples:
✅ feat(booking): add date selection component
✅ fix(api): resolve double booking issue
✅ docs(readme): update installation steps
✅ style(header): fix responsive spacing

❌ "fixed stuff"
❌ "update"
❌ "wip"
```

### Branch Naming

```
Format: type/description

Examples:
✅ feature/booking-system
✅ fix/navigation-mobile
✅ refactor/api-error-handling

❌ "my-branch"
❌ "test123"
```

---

## Error Handling Standards

### Try-Catch Blocks

```typescript
// ✅ Specific error handling
try {
  const result = await createBooking(data);
  return result;
} catch (error) {
  if (error instanceof ValidationError) {
    // Handle validation error
  } else if (error instanceof DatabaseError) {
    // Handle database error
  } else {
    // Handle unexpected error
    console.error('Unexpected error:', error);
    throw error;
  }
}

// ❌ Silent failures
try {
  await riskyOperation();
} catch (error) {
  // Don't do nothing
}
```

### Error Logging

```typescript
// ✅ Proper error logging
console.error('Booking creation failed:', {
  error: error.message,
  stack: error.stack,
  context: { userId, serviceId }
});

// ❌ Useless logs
console.log('error'); // Not helpful
```

---

## Documentation Standards

### Code Comments

```typescript
// ✅ Explain WHY, not WHAT
// Using 15-minute buffer to prevent overlapping appointments
// as per business requirement in booking_system_requirements.md
const bufferMinutes = 15;

// ❌ Obvious comments
// Set buffer to 15
const bufferMinutes = 15;
```

### Function Documentation

```typescript
/**
 * Calculates available time slots for a given date and service.
 * 
 * @param serviceId - The service identifier
 * @param date - Date in YYYY-MM-DD format
 * @param duration - Service duration in minutes
 * @returns Array of available time slots in HH:MM format
 * 
 * @throws {ValidationError} If date is invalid or in the past
 * @throws {DatabaseError} If unable to fetch existing bookings
 * 
 * @example
 * const slots = await getAvailableSlots('deluxe-therapy', '2025-11-01', 75);
 * // Returns: ['09:00', '10:30', '12:00', ...]
 */
async function getAvailableSlots(
  serviceId: string,
  date: string,
  duration: number
): Promise<string[]> {
  // Implementation
}
```

---

## Code Review Checklist

Before considering any component complete:

### Functionality
- [ ] Component works as specified
- [ ] All edge cases handled
- [ ] Error handling implemented
- [ ] Loading states present

### Code Quality
- [ ] No console.logs in production code
- [ ] No commented-out code
- [ ] No TODO comments (track in errors.md instead)
- [ ] No hardcoded values (use constants)
- [ ] Proper TypeScript types
- [ ] No any types

### Performance
- [ ] Images optimized
- [ ] No unnecessary re-renders
- [ ] Debounced inputs where needed
- [ ] Lazy loading implemented

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Alt text on images

### Testing
- [ ] Works on desktop
- [ ] Works on tablet
- [ ] Works on mobile
- [ ] Cross-browser tested
- [ ] All links functional

### Documentation
- [ ] memo.md updated
- [ ] errors.md updated (if issues)
- [ ] Code comments where needed
- [ ] Props/types documented

---

## Prohibited Practices

### ❌ Never Do These:

1. **Skip reading specifications**
   - Always read entry_data files before coding

2. **Hardcode values that belong in constants**
   ```typescript
   // ❌ Bad
   if (time < '09:00' || time > '20:00') {}
   
   // ✅ Good
   import { BUSINESS_HOURS } from '@/lib/constants/business-hours';
   if (time < BUSINESS_HOURS.Monday.open) {}
   ```

3. **Commit sensitive data**
   - Never commit API keys, passwords, tokens
   - Always use environment variables

4. **Ignore TypeScript errors**
   - Fix all TypeScript errors before proceeding
   - Don't use @ts-ignore unless absolutely necessary

5. **Skip testing**
   - Test every component on multiple devices
   - Test every API endpoint before integration

6. **Write unclear code**
   - Variable names should be descriptive
   - Functions should do one thing
   - Keep functions under 50 lines when possible

7. **Make undocumented changes**
   - Every deviation from spec must be documented
   - Update memo.md with reasoning

8. **Accumulate technical debt**
   - Fix issues as they arise
   - Don't postpone critical fixes

---

## Emergency Procedures

### If Blocked by Critical Error:
1. Stop current work
2. Document error in errors.md (mark as CRITICAL)
3. Update memo.md with blocked status
4. Attempt documented solutions
5. If unresolved after 3 attempts, escalate
6. Do not proceed to next phase until resolved

### If Specification Unclear:
1. Document the ambiguity in errors.md
2. Check related documentation for context
3. Make best judgment based on:
   - Project goals
   - User experience
   - Similar examples
4. Document decision and reasoning in memo.md
5. Mark for review

### If Time Constraint Issues:
1. Prioritize critical path features
2. Document what's incomplete in memo.md
3. Create detailed technical debt items
4. Ensure core functionality works
5. Mark non-critical items for Phase 2

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Must be followed strictly
**Violations:** Any deviation must be documented in memo.md with justification
