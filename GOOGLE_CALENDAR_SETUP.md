# Google Calendar Integration Setup Guide

This guide will walk you through setting up Google Calendar integration using a Service Account. This allows the booking system to automatically create calendar events in Rosie's Google Calendar.

## Why Service Account?

A Service Account is like a "robot" Google account that can access Google services on behalf of your application. It's perfect for this use case because:
- ✅ No need for Rosie to perform technical setup
- ✅ No login credentials required from Rosie
- ✅ Works automatically in the background
- ✅ Very secure (key file stays on server only)
- ✅ No token expiration issues

---

## Part 1: Google Cloud Console Setup (You Do This)

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account (not Rosie's)
3. Click on the project dropdown at the top
4. Click "New Project"
5. Enter project name: `Rosie Beauty Salon Booking`
6. Click "Create"
7. Wait for the project to be created (takes a few seconds)

### Step 2: Enable Google Calendar API

1. In the Google Cloud Console, make sure your new project is selected
2. Go to "APIs & Services" → "Library" (or click [here](https://console.cloud.google.com/apis/library))
3. Search for "Google Calendar API"
4. Click on "Google Calendar API"
5. Click "Enable"
6. Wait for it to enable (takes a few seconds)

### Step 3: Create Service Account

1. Go to "APIs & Services" → "Credentials" (or click [here](https://console.cloud.google.com/apis/credentials))
2. Click "Create Credentials" at the top
3. Select "Service Account"
4. Fill in the details:
   - **Service account name**: `rosie-booking-calendar`
   - **Service account ID**: Will auto-populate (e.g., `rosie-booking-calendar@project-name.iam.gserviceaccount.com`)
   - **Description**: `Service account for automated booking calendar events`
5. Click "Create and Continue"
6. For "Grant this service account access to project":
   - Skip this step (not needed for Calendar API)
   - Click "Continue"
7. For "Grant users access to this service account":
   - Skip this step
   - Click "Done"

### Step 4: Create and Download Service Account Key

1. In the Credentials page, you'll see your new service account listed under "Service Accounts"
2. Click on the service account email (e.g., `rosie-booking-calendar@project-name.iam.gserviceaccount.com`)
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Select "JSON" format
6. Click "Create"
7. **IMPORTANT**: A JSON file will be downloaded automatically - keep this file safe!
8. The file will look something like: `project-name-abc123.json`

### Step 5: Extract Credentials from JSON File

1. Open the downloaded JSON file in a text editor
2. Look for these two fields:
   - `"client_email"` - This is your service account email
   - `"private_key"` - This is a long string starting with `-----BEGIN PRIVATE KEY-----`
3. Copy these values - you'll need them for the environment variables

---

## Part 2: Share Calendar with Service Account (Rosie Does This - VERY EASY!)

This is the only step Rosie needs to do, and it's as simple as sharing a Google Doc!

### Instructions for Rosie:

**Hey Rosie! I need you to share your Google Calendar with a special email address so the booking system can add appointments automatically. Here's how:**

1. Open [Google Calendar](https://calendar.google.com) on your computer
2. On the left side, find "My calendars"
3. Hover over your main calendar (probably called "Rosie" or your email)
4. Click the three dots (⋮) that appear
5. Click "Settings and sharing"
6. Scroll down to "Share with specific people or groups"
7. Click "Add people and groups"
8. In the box that appears, paste this email: `[SERVICE_ACCOUNT_EMAIL_FROM_STEP_4]`
   - Example: `rosie-booking-calendar@rosie-salon-123456.iam.gserviceaccount.com`
9. For permissions, select "Make changes to events"
10. Click "Send"

**That's it! You're done! ✅**

---

## Part 3: Add Environment Variables (You Do This)

### Local Development (.env.local)

1. Open your `.env.local` file in the project root
2. Add these three new environment variables:
```bash
# Add these to .env.local

# Service Account Email (from the JSON file's "client_email" field)
GOOGLE_SERVICE_ACCOUNT_EMAIL=rosie-booking-calendar@your-project.iam.gserviceaccount.com

# Private Key (from the JSON file's "private_key" field)
# IMPORTANT: Keep the quotes and the entire key including -----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere...\n-----END PRIVATE KEY-----\n"

# Rosie's Calendar ID (usually her Gmail address)
GOOGLE_CALENDAR_ID=rosiebeautyst@gmail.com
```

### Important Notes:

- The `GOOGLE_PRIVATE_KEY` must be in quotes
- The `\n` characters in the private key should stay as `\n` (don't convert them to actual newlines)
- If you're copying from the JSON file, the private key will already have `\n` in it

### Production Deployment (Vercel)

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project (rosie-beauty-salon)
3. Go to "Settings" → "Environment Variables"
4. Add these three variables:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` = (paste service account email)
   - `GOOGLE_PRIVATE_KEY` = (paste entire private key with quotes)
   - `GOOGLE_CALENDAR_ID` = `rosiebeautyst@gmail.com`
5. Click "Save"
6. Redeploy your application

---

## Part 4: Testing the Integration

### Test in Local Development

1. Make sure you've added the environment variables to `.env.local`
2. Make sure Rosie has shared her calendar with the service account
3. Restart your dev server:
   ```bash
   npm run dev
   ```
4. Go to the booking page and make a test booking
5. Check the console logs for:
   - `Calendar event created: [event_id]`
6. Check Rosie's Google Calendar - you should see the new event!

### Test in Production

1. After deploying with the environment variables
2. Make a test booking on the live site
3. Check Rosie's Google Calendar for the new event
4. Check Vercel logs for any errors

---

## Troubleshooting

### "Calendar client not initialized - credentials missing"

- **Cause**: Environment variables not set or incorrect
- **Fix**: Double-check that all three environment variables are added correctly in `.env.local` and/or Vercel

### "Calendar event failed to create"

- **Cause**: Service account doesn't have access to Rosie's calendar
- **Fix**: Make sure Rosie has completed Part 2 (sharing her calendar with the service account email)

### "Invalid credentials"

- **Cause**: The private key or service account email is incorrect
- **Fix**: Re-download the JSON key file and copy the values again

### Event not showing in calendar

- **Cause**: Wrong calendar ID
- **Fix**: Verify that `GOOGLE_CALENDAR_ID` is set to Rosie's correct Gmail address (`rosiebeautyst@gmail.com`)

---

## Security Best Practices

✅ **DO:**
- Keep the JSON key file secure and never commit it to Git
- Store credentials only in environment variables
- Use different service accounts for development and production (optional but recommended)

❌ **DON'T:**
- Don't share the JSON key file publicly
- Don't commit `.env.local` to Git (it's already in `.gitignore`)
- Don't paste the private key in public places

---

## What Happens When Someone Books?

When a customer makes a booking:

1. ✅ Booking is saved to Supabase database
2. ✅ Customer receives a confirmation email
3. ✅ Rosie receives a notification email
4. ✅ Event is automatically created in Rosie's Google Calendar with:
   - Client name and contact info
   - Service details
   - Appointment time and duration
   - Price and payment method
   - Automatic reminders (1 day before + 1 hour before)

---

## Quick Reference

### Service Account Email Format
```
rosie-booking-calendar@your-project-id.iam.gserviceaccount.com
```

### Calendar Sharing Permissions
```
Make changes to events
```

### Environment Variables Needed
```
GOOGLE_SERVICE_ACCOUNT_EMAIL
GOOGLE_PRIVATE_KEY
GOOGLE_CALENDAR_ID
```

---

## Need Help?

If you encounter any issues:
1. Check the console logs for error messages
2. Verify all environment variables are set correctly
3. Confirm Rosie has shared her calendar with the service account
4. Make sure the Google Calendar API is enabled in Google Cloud Console

Good luck! 🚀
