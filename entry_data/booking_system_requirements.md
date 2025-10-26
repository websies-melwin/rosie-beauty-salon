# Booking System Requirements - Rosie Beauty Salon

## System Overview

**Purpose:** Enable clients to book beauty treatments online without requiring user accounts  
**Type:** Guest booking system with calendar integration  
**Payment:** Cash only (in-person), no online payment processing  
**Admin:** Rosie manages bookings via Google Calendar  

---

## Core Requirements

### Functional Requirements

#### FR1: Service Selection
- Users can select from a dropdown list of all available services
- Services grouped by category (Facial & Skin, Laser Hair Removal)
- Display service duration and price alongside name
- Auto-populate duration for scheduling

#### FR2: Date Selection
- Calendar interface for date selection
- **Minimum booking window:** 2 days in advance
  - If booking on Monday → Earliest available is Wednesday
  - If booking on Tuesday → Earliest available is Thursday
- Display only available dates (respect business hours and existing bookings)
- Highlight selected date
- Show current date but disable if within 2-day window

#### FR3: Time Slot Selection
- **Dynamic time slots** based on selected service duration
- **15-minute buffer** automatically added between appointments
- Display available time slots only (check against existing bookings)
- Time slots respect business hours:
  - Mon, Wed, Fri: 9 AM - 8 PM
  - Tue, Thu: 9 AM - 6 PM
  - Sat: 10 AM - 2 PM
  - Sun: Closed (no bookings)
- Last appointment must end before closing time

#### FR4: Client Information Collection
- **Required fields:**
  - Full Name (text input)
  - Email Address (email input, validated)
  - Phone Number (tel input, UK format)
- **Optional fields:**
  - Special requests or notes (textarea, max 500 characters)
- No account creation required (guest booking)

#### FR5: Booking Confirmation
- Display booking summary before submission:
  - Service name and price
  - Date and time
  - Duration
  - Client information
- "Confirm Booking" button
- "Edit" option to go back and modify

#### FR6: Booking Storage
- Store booking in Supabase database with fields:
  - Booking ID (UUID, auto-generated)
  - Service name and ID
  - Service duration
  - Date and time
  - Client name
  - Client email
  - Client phone
  - Special requests
  - Status (confirmed, cancelled)
  - Created timestamp
  - Updated timestamp

#### FR7: Email Notifications
- **Client confirmation email:**
  - Thank you message
  - Booking details (service, date, time, location)
  - Rosie's contact information
  - Cancellation policy (if applicable)
  - Add to calendar link (optional)
  
- **Rosie notification email:**
  - New booking alert
  - Client information
  - Service details
  - Direct link to Google Calendar event

#### FR8: Google Calendar Integration
- Automatically create event in Rosie's Google Calendar
- Event details:
  - Title: "[Service Name] - [Client Name]"
  - Description: Client phone, email, special requests
  - Start time: Booking time
  - Duration: Service duration + 15-minute buffer
  - Location: Salon address
- Two-way sync: Changes in Google Calendar reflect in booking system

---

## Non-Functional Requirements

### NFR1: Performance
- Booking form loads in < 1 second
- Available time slots calculated in < 500ms
- Form submission completes in < 2 seconds
- Calendar API calls cached appropriately

### NFR2: Reliability
- 99.9% uptime target
- Graceful error handling (network failures, API errors)
- Booking data persisted reliably
- No double bookings (conflict prevention)

### NFR3: Security
- Client data encrypted in transit (HTTPS)
- Database access controlled (Supabase RLS policies)
- Email addresses validated and sanitized
- Protection against spam submissions (rate limiting)

### NFR4: Usability
- Intuitive booking flow (3-5 steps maximum)
- Mobile-friendly interface (thumb-friendly buttons)
- Clear error messages
- Progress indicator showing current step
- Accessible to screen readers (WCAG AA)

### NFR5: Scalability
- Support 50+ bookings per week initially
- Database can handle 10,000+ bookings (future-proof)
- API can handle 100 concurrent users

---

## User Flow: Complete Booking Process

### Step 1: Initiate Booking
**Trigger:** User clicks "Book Now" button  
**Action:** Open booking modal or navigate to booking page  
**UI:** Loading state while initializing booking system

### Step 2: Select Service
**UI:** Dropdown or card selection  
**Options:**
- Face & Skin services (8 options)
- Laser Hair Removal - Women (16 options)
- Laser Hair Removal - Men (25 options)

**Display:** Service name, duration, price  
**Validation:** Required field, must select before proceeding

### Step 3: Select Date
**UI:** Calendar component  
**Behavior:**
- Disable dates within 2-day window
- Disable Sundays (closed)
- Highlight selected date
- Show month navigation

**Validation:** Must select available date

### Step 4: Select Time
**UI:** Grid or list of available time slots  
**Behavior:**
- Display only available slots (no conflicts)
- Calculate slots based on service duration
- Add 15-minute buffer automatically
- Update slots when date changes

**Example Calculation:**
- Service duration: 60 minutes
- Buffer: 15 minutes
- Total block: 75 minutes
- If booking at 10:00 AM, next available slot is 11:15 AM

**Validation:** Must select available time slot

### Step 5: Enter Contact Information
**UI:** Form with 3 required fields + 1 optional  
**Fields:**
- Full Name (text input)
- Email (email input with validation)
- Phone (tel input, preferably UK format)
- Special Requests (textarea, optional)

**Validation:**
- All required fields filled
- Email format valid
- Phone number valid (basic validation)

### Step 6: Review & Confirm
**UI:** Summary card showing all details  
**Display:**
- Service name and price
- Date and time
- Duration
- Client information
- Special requests (if any)

**Actions:**
- "Confirm Booking" button (primary)
- "Edit" button (secondary) - go back to previous step
- "Cancel" button - close booking flow

### Step 7: Submission
**Process:**
1. Validate all data one final time
2. Check for booking conflicts (race condition protection)
3. Create booking record in Supabase
4. Create Google Calendar event
5. Send client confirmation email
6. Send Rosie notification email
7. Display success message

**Loading State:** Show spinner with "Processing your booking..."

### Step 8: Confirmation
**UI:** Success screen  
**Display:**
- Success message: "Your booking is confirmed!"
- Booking reference number
- Booking details summary
- "Check your email for confirmation"
- "Add to Calendar" button (optional)

**Actions:**
- "Book Another Appointment" button
- "Return to Homepage" button

---

## Database Schema: Bookings Table

### Table: `bookings`

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Service Information
  service_id VARCHAR(100) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  service_category VARCHAR(50) NOT NULL, -- 'facial' or 'laser'
  service_duration INTEGER NOT NULL, -- in minutes
  service_price DECIMAL(10, 2) NOT NULL,
  
  -- Booking Time
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  booking_end_time TIME NOT NULL, -- calculated: time + duration + buffer
  
  -- Client Information
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(20) NOT NULL,
  special_requests TEXT,
  
  -- Status & Tracking
  status VARCHAR(20) DEFAULT 'confirmed', -- 'confirmed', 'cancelled', 'completed', 'no_show'
  google_calendar_event_id VARCHAR(255), -- ID of associated Google Calendar event
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  -- Indexes
  INDEX idx_booking_datetime (booking_date, booking_time),
  INDEX idx_client_email (client_email),
  INDEX idx_status (status)
);
```

### Row Level Security (RLS) Policies

```sql
-- Allow public to insert bookings (guest booking)
CREATE POLICY "Allow public insert" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated admin can view/update bookings
CREATE POLICY "Admin read access" ON bookings
  FOR SELECT
  USING (auth.uid() = '[ROSIE_USER_ID]');

CREATE POLICY "Admin update access" ON bookings
  FOR UPDATE
  USING (auth.uid() = '[ROSIE_USER_ID]');
```

---

## API Endpoints

### POST /api/bookings/check-availability
**Purpose:** Check if a time slot is available  
**Request Body:**
```json
{
  "service_id": "deluxe-therapy",
  "date": "2025-11-01",
  "time": "10:00"
}
```

**Response:**
```json
{
  "available": true,
  "conflicts": []
}
```

### GET /api/bookings/available-slots
**Purpose:** Get all available time slots for a date and service  
**Query Params:**
- `service_id`: Service identifier
- `date`: Date in YYYY-MM-DD format

**Response:**
```json
{
  "date": "2025-11-01",
  "slots": [
    { "time": "09:00", "available": true },
    { "time": "10:15", "available": true },
    { "time": "11:30", "available": false }
  ]
}
```

### POST /api/bookings/create
**Purpose:** Create a new booking  
**Request Body:**
```json
{
  "service_id": "deluxe-therapy",
  "service_name": "Deluxe Therapy",
  "service_category": "facial",
  "service_duration": 75,
  "service_price": 110,
  "booking_date": "2025-11-01",
  "booking_time": "10:00",
  "client_name": "Jane Doe",
  "client_email": "jane@example.com",
  "client_phone": "07123456789",
  "special_requests": "First time client"
}
```

**Response:**
```json
{
  "success": true,
  "booking_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "message": "Booking confirmed successfully",
  "booking_details": { /* full booking object */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Time slot no longer available",
  "code": "SLOT_UNAVAILABLE"
}
```

### GET /api/bookings/by-date
**Purpose:** Get all bookings for a specific date (admin only)  
**Query Params:** `date` (YYYY-MM-DD)  
**Authentication:** Required (Rosie's admin access)

**Response:**
```json
{
  "date": "2025-11-01",
  "bookings": [
    {
      "id": "...",
      "service_name": "Deluxe Therapy",
      "time": "10:00",
      "client_name": "Jane Doe",
      "client_phone": "07123456789"
    }
  ]
}
```

---

## Google Calendar Integration

### OAuth 2.0 Setup
- Create Google Cloud project
- Enable Google Calendar API
- Generate OAuth 2.0 credentials
- Set up service account for server-side access
- Store credentials securely (environment variables)

### Calendar Event Creation

**Function:** `createCalendarEvent(booking)`

**Event Structure:**
```javascript
{
  summary: `${booking.service_name} - ${booking.client_name}`,
  description: `
    Client: ${booking.client_name}
    Phone: ${booking.client_phone}
    Email: ${booking.client_email}
    Service: ${booking.service_name} (${booking.service_duration} min)
    Price: £${booking.service_price}
    
    Special Requests: ${booking.special_requests || 'None'}
    
    Booking ID: ${booking.id}
  `,
  location: 'Orchard Street, 49C, Weston-super-Mare, BS23 1RJ',
  start: {
    dateTime: `${booking.booking_date}T${booking.booking_time}:00`,
    timeZone: 'Europe/London'
  },
  end: {
    dateTime: calculateEndTime(booking),
    timeZone: 'Europe/London'
  },
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 }, // 1 day before
      { method: 'popup', minutes: 60 }       // 1 hour before
    ]
  }
}
```

### Two-Way Sync Strategy

**Approach:** Webhook + Polling Hybrid

**Webhook (Primary):**
- Google Calendar sends notifications on event changes
- Endpoint: `/api/calendar/webhook`
- Updates booking status in database
- Handles: Event deletion (cancellation), time changes

**Polling (Backup):**
- Scheduled job runs every 15 minutes
- Fetches recent calendar events
- Syncs any missed changes
- Ensures data consistency

---

## Email Notification System

### Email Service: Resend or SendGrid

### Client Confirmation Email

**Template:** `booking-confirmation.html`

**Subject:** "Booking Confirmed - Rosie Beauty Salon"

**Content:**
```
Hi [Client Name],

Thank you for booking with Rosie Beauty Salon!

Your appointment details:
━━━━━━━━━━━━━━━━━━━━━
Service: [Service Name]
Date: [Day, Month Date, Year]
Time: [Time] ([Duration] minutes)
Price: £[Price]

Location:
Rosie Beauty Salon
Orchard Street, 49C
Weston-super-Mare
BS23 1RJ

━━━━━━━━━━━━━━━━━━━━━

Special Requests: [Requests or "None"]

If you need to cancel or reschedule, please contact us:
📞 Text: 07414 601010
✉️ Email: rosiebeautyst@gmail.com

We look forward to seeing you!

Best regards,
Rosica
Rosie Beauty Salon

---
Your Path to Radiance
```

### Rosie Notification Email

**Template:** `admin-new-booking.html`

**Subject:** "New Booking: [Service Name] - [Client Name]"

**Content:**
```
New Booking Received!

Client Information:
━━━━━━━━━━━━━━━━━━━━━
Name: [Client Name]
Phone: [Client Phone]
Email: [Client Email]

Appointment Details:
━━━━━━━━━━━━━━━━━━━━━
Service: [Service Name]
Date: [Day, Month Date, Year]
Time: [Time]
Duration: [Duration] minutes
Price: £[Price]

Special Requests:
[Requests or "None"]

━━━━━━━━━━━━━━━━━━━━━

Booking ID: [UUID]
Created: [Timestamp]

This appointment has been added to your Google Calendar.

[View in Google Calendar Button]
```

---

## Conflict Prevention & Race Conditions

### Strategy: Optimistic Locking

**Implementation:**
1. User selects time slot (appears available)
2. User fills out information
3. On submission, check availability again
4. If still available, lock slot and create booking
5. If no longer available, show error and refresh slots

### Database Transaction
```sql
BEGIN TRANSACTION;

-- Check for conflicts
SELECT * FROM bookings
WHERE booking_date = $1
  AND (
    (booking_time <= $2 AND booking_end_time > $2) OR
    (booking_time < $3 AND booking_end_time >= $3) OR
    (booking_time >= $2 AND booking_end_time <= $3)
  )
  AND status = 'confirmed'
FOR UPDATE; -- Lock rows

-- If no conflicts, insert new booking
INSERT INTO bookings (...)
VALUES (...);

COMMIT;
```

### Error Handling
**If conflict detected:**
- Show user-friendly message: "Sorry, this time slot was just booked. Please select another time."
- Refresh available time slots
- Keep user's information filled in
- Allow easy time selection change

---

## Booking Cancellation (Future Enhancement)

### Client-Initiated Cancellation
**Method:** Unique cancellation link in confirmation email

**Flow:**
1. Client clicks "Cancel Booking" link in email
2. Link contains booking ID + security token
3. Confirmation page: "Are you sure you want to cancel?"
4. On confirm:
   - Update booking status to 'cancelled' in database
   - Delete Google Calendar event
   - Send cancellation confirmation email to client
   - Send notification email to Rosie

### Rosie-Initiated Cancellation
**Method:** Delete event in Google Calendar

**Flow:**
1. Rosie deletes event from Google Calendar
2. Webhook notifies our system
3. Update booking status to 'cancelled' in database
4. Send cancellation notification email to client

---

## Time Zone Handling

**Primary Time Zone:** Europe/London (UK)

**Strategy:**
- All times stored in database in local time (UK)
- Google Calendar events use 'Europe/London' timezone
- Display times to users in UK time (no conversion needed for local business)
- Date/time pickers use UK time format

---

## Validation Rules

### Service Selection
- Must be a valid service ID from predefined list
- Cannot be empty

### Date Selection
- Must be at least 2 days in future
- Cannot be Sunday (closed)
- Must be in YYYY-MM-DD format
- Cannot be more than 6 months in future (reasonable limit)

### Time Selection
- Must be valid time in HH:MM format (24-hour)
- Must be within business hours for selected day
- Must be an available slot (no conflicts)
- Appointment must end before closing time

### Client Information
**Name:**
- Required
- 2-100 characters
- Letters, spaces, hyphens, apostrophes only

**Email:**
- Required
- Valid email format (regex validation)
- Max 255 characters

**Phone:**
- Required
- UK phone number format (flexible validation)
- Examples: 07414 601010, +44 7414 601010, 07414601010

**Special Requests:**
- Optional
- Max 500 characters
- Sanitize input (prevent XSS)

---

## Error Handling & User Feedback

### Common Errors

**Network Error:**
- Message: "Connection error. Please check your internet and try again."
- Action: Retry button

**Slot Unavailable:**
- Message: "This time slot is no longer available. Please select another time."
- Action: Refresh available slots, keep form data

**Invalid Input:**
- Message: Specific field error (e.g., "Please enter a valid email address")
- Action: Highlight field, show inline error

**Server Error:**
- Message: "Something went wrong. Please try again or contact us directly."
- Action: Show contact information, retry button

### Success Feedback
- Clear success message
- Visual confirmation (checkmark icon)
- Booking details display
- Next steps clearly stated

---

## Testing Requirements

### Unit Tests
- Time slot calculation logic
- Conflict detection algorithm
- Date/time validation
- Buffer time calculation

### Integration Tests
- End-to-end booking flow
- Google Calendar API integration
- Email delivery
- Database transactions

### User Acceptance Testing
- Mobile booking flow (iOS, Android)
- Desktop booking flow
- Form validation
- Error scenarios
- Confirmation email receipt

---

## Performance Optimization

### Caching Strategy
- Cache business hours (static)
- Cache service list (updates rarely)
- Cache available slots for 1 minute
- Invalidate cache on new booking

### Database Optimization
- Index on booking_date and booking_time
- Optimize conflict detection query
- Use connection pooling

### Frontend Optimization
- Lazy load booking form
- Debounce availability checks (300ms)
- Show loading states immediately
- Prefetch next month's availability

---

## Security Considerations

### Rate Limiting
- Max 5 booking attempts per IP per hour
- Max 2 bookings per email per day
- Prevent spam submissions

### Data Sanitization
- Sanitize all user inputs (XSS prevention)
- Validate email format
- Strip HTML from text fields
- Escape special characters

### GDPR Compliance
- Store only necessary client data
- Provide privacy policy link in booking form
- Allow booking data deletion on request
- Secure data transmission (HTTPS)
- Limited data retention (configurable)

---

## Future Enhancements (Phase 2+)

### Advanced Features
- SMS confirmations (Twilio integration)
- Booking reminders (24 hours before)
- Waitlist for fully booked dates
- Recurring appointments
- Gift voucher codes
- Package booking (course of 6 sessions)
- Client booking history (with accounts)
- Review/rating after appointment
- Automated follow-up emails

### Admin Features
- Admin dashboard to view all bookings
- Manually add/edit/cancel bookings
- Block out unavailable times
- Set holiday closures
- Export bookings to CSV
- Analytics (busiest times, popular services)

---

## Implementation Priority

### Phase 1 (MVP - Current)
1. ✅ Basic service selection
2. ✅ Date picker (2-day minimum)
3. ✅ Time slot selection (dynamic, with buffer)
4. ✅ Client information form
5. ✅ Booking confirmation
6. ✅ Database storage (Supabase)
7. ✅ Google Calendar integration
8. ✅ Email notifications (client + Rosie)

### Phase 2 (Enhancements)
1. Client-initiated cancellation
2. SMS notifications
3. Booking reminders
4. Admin dashboard

### Phase 3 (Advanced)
1. Package booking tracking
2. Waitlist functionality
3. Review system
4. Analytics dashboard

---

**Document Version:** 1.0  
**Last Updated:** October 26, 2025  
**Status:** Complete - Ready for Development  
**Dependencies:** Supabase setup, Google Calendar API, Email service (Resend/SendGrid)
