# PENDING TASKS - Rosie Beauty Salon

**Last Updated:** 2025-10-26

---

## ⚠️ IMPORTANT: Tasks Requiring Client Access

These tasks **CANNOT** be completed until you have access to the client's accounts. The client (Rosie) has promised to provide access in a few days.

---

## Phase 10: Google Calendar Integration

**Status:** ⏸️ BLOCKED - Waiting for client's Google account access

**What's Needed:**
- Access to client's Google account (rosiebeautyst@gmail.com or business account)
- Ability to create a Google Cloud Project
- Permission to enable Google Calendar API
- OAuth 2.0 credentials (Client ID + Client Secret)

**Why We're Blocked:**
- Bookings must sync to the client's actual business calendar
- Cannot use developer's personal Google account
- Calendar events need to appear in her schedule for appointment management

**Steps When Access is Granted:**
1. Log into client's Google account
2. Go to Google Cloud Console (console.cloud.google.com)
3. Create new project: "rosie-beauty-salon"
4. Enable Google Calendar API
5. Create OAuth 2.0 credentials (Web application)
6. Add authorized redirect URIs:
   - http://localhost:3010/api/auth/callback/google (development)
   - https://rosiebeautysalon.com/api/auth/callback/google (production)
7. Download credentials JSON
8. Add to .env.local:
   ```
   GOOGLE_CLIENT_ID=xxxxx.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=xxxxx
   GOOGLE_CALENDAR_ID=primary
   ```

**Files to Create (when ready):**
- `lib/google/calendar.ts` - Google Calendar API integration
- `app/api/calendar/sync/route.ts` - API endpoint to sync bookings
- Update `app/api/bookings/create/route.ts` to trigger calendar sync

**Estimated Time:** 2-3 hours (with credentials)

---

## Phase 11: Email Notifications

**Status:** ⏸️ BLOCKED - Waiting for client's email/domain access

**What's Needed:**
- Client's business domain (rosiebeautysalon.com or similar)
- Access to domain DNS settings (for Resend verification)
- OR access to client's Gmail for sending emails

**Why We're Blocked:**
- Confirmation emails must come from client's business email
- Domain verification required for Resend API
- Cannot use developer's email address

**Recommended Solution: Resend API**

**Steps When Access is Granted:**
1. Client creates Resend account (resend.com)
2. Verify domain in Resend dashboard
3. Add DNS records to domain settings:
   - TXT record for domain verification
   - MX records for email delivery
4. Get Resend API key
5. Add to .env.local:
   ```
   RESEND_API_KEY=re_xxxxx
   RESEND_FROM_EMAIL=booking@rosiebeautysalon.com
   ```

**Alternative Solution: Gmail SMTP**
- If domain verification is too complex
- Use client's Gmail with app password
- Less professional (emails come from Gmail)

**Files to Create (when ready):**
- `lib/email/templates.tsx` - React email templates
- `lib/email/resend.ts` - Resend API client
- `app/api/email/send-confirmation/route.ts` - Send booking confirmation
- Update `app/api/bookings/create/route.ts` to trigger email

**Email Templates Needed:**
1. Booking confirmation (to client customer)
2. Booking notification (to business owner)
3. Booking cancellation
4. Booking reminder (24 hours before)

**Estimated Time:** 3-4 hours (with API key and templates)

---

## Phase 12: Admin Dashboard (Optional)

**Status:** 🟡 CAN START NOW - But better after Phases 10-11

**What's Needed:**
- Basic authentication for admin access
- Dashboard to view all bookings
- Ability to cancel/reschedule bookings
- Calendar view of appointments

**Why Wait:**
- More useful after Google Calendar and email are integrated
- Can cancel bookings and trigger calendar/email updates
- Not critical for initial launch

**Files to Create:**
- `app/admin/page.tsx` - Admin dashboard
- `app/admin/bookings/page.tsx` - List all bookings
- `components/admin/BookingsList.tsx` - Booking table
- `components/admin/BookingActions.tsx` - Cancel/reschedule buttons
- `app/api/admin/bookings/route.ts` - Admin API endpoints

**Security Considerations:**
- Add simple password protection
- Or use Supabase Auth for admin login
- Restrict to client's IP or use basic auth

**Estimated Time:** 4-5 hours

---

## Image Optimization & Alt Tags

**Status:** ⏸️ BLOCKED - No images provided yet

**What's Needed:**
- Professional photos of:
  - Salon interior
  - Treatment rooms
  - Equipment (laser machines, etc.)
  - Owner (Rosie) for About page
  - Before/After treatment results
  - Service process photos

**Current Placeholders:**
- Using placeholder images from Unsplash/Lorem Picsum
- Gallery section has placeholder images
- Hero section has placeholder background

**When Images Are Provided:**
1. Optimize all images:
   - Resize to appropriate dimensions
   - Compress with TinyPNG or similar
   - Convert to WebP format for better performance
   - Create multiple sizes for responsive images

2. Add proper alt tags for SEO:
   - Descriptive text for each image
   - Include keywords naturally
   - Help screen readers (accessibility)

3. Use Next.js Image component:
   - Automatic optimization
   - Lazy loading
   - Responsive srcset

**Files to Update:**
- `components/home/HeroSection.tsx` - Hero background image
- `components/home/GallerySection.tsx` - Gallery images
- `components/home/BeforeAfterSection.tsx` - Before/after photos
- `components/about/AboutHero.tsx` - Owner photo
- `public/images/` - Store optimized images

**Estimated Time:** 2-3 hours (with images provided)

---

## Summary of Blocking Issues

| Phase | Status | Blocker | Who Provides |
|-------|--------|---------|--------------|
| Phase 10: Google Calendar | ⏸️ Blocked | Google account access | Client (Rosie) |
| Phase 11: Email Notifications | ⏸️ Blocked | Domain/email access | Client (Rosie) |
| Phase 12: Admin Dashboard | 🟡 Optional | Can start now, better after 10-11 | N/A |
| Image Optimization | ⏸️ Blocked | Professional photos | Client (Rosie) |

---

## What Can Be Done Now

✅ Phase 13: SEO Optimization (meta tags, sitemap, structured data)
✅ Phase 14: Analytics Setup (placeholders for GA, Pixel)
✅ Phase 15: Testing & QA (cross-browser, mobile, accessibility)
✅ Phase 16: Deployment Preparation (Vercel config, environment setup)

---

## Timeline Estimate

**When Client Access is Granted:**
- Day 1: Phase 10 (Google Calendar) - 2-3 hours
- Day 1: Phase 11 (Email Notifications) - 3-4 hours
- Day 2: Phase 12 (Admin Dashboard) - 4-5 hours
- Day 2: Image Optimization - 2-3 hours

**Total:** 11-15 hours of additional work once access is provided

---

## Contact Information for Access

**Client:** Rosie
**Email:** rosiebeautyst@gmail.com
**Phone:** 07414 601010
**Business:** Rosie Beauty Salon, Weston-super-Mare

**What to Request:**
1. ✉️ Gmail account credentials (or create new business Google Workspace account)
2. 🌐 Domain registrar access (for DNS settings)
3. 📧 Preferred email for sending booking confirmations
4. 📸 Professional photos (salon, services, owner, before/after)
5. 📊 Google Analytics tracking ID (if exists)
6. 📱 Facebook Pixel ID (if exists)

---

## Notes for Next Session

- memo.md has been updated with Phase 8 and Phase 9 completion
- All booking backend APIs are working (Phase 8)
- All booking frontend forms are complete (Phase 9)
- Dev server runs on port 3010 (port 3000 in use)
- Supabase project: kvfdznatjebavthmvnus (second account created to avoid costs)
- .env.local has Supabase credentials

**Next Steps:**
1. Complete Phase 13: SEO Optimization
2. Complete Phase 14: Analytics Setup
3. Complete Phase 15: Testing & QA
4. Complete Phase 16: Deployment to Vercel
5. **THEN WAIT** for client access to complete Phases 10, 11, 12, and images

---

**🚨 REMINDER: DO NOT proceed with Phases 10-11 without client access! 🚨**
