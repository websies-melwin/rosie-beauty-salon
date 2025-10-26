# Error & Issue Tracking - Rosie Beauty Salon

**Project:** Rosie Beauty Salon Website
**Developer:** Claude Code
**Start Date:** 2025-10-26
**Last Updated:** 2025-10-26 11:51

---

## Purpose

This document tracks EVERY issue encountered during development. No error is too small to document. This creates a complete record for debugging, learning, and future reference.

---

## Error Categories

**Severity Levels:**
- **CRITICAL:** Prevents all progress, must fix immediately, project blocked
- **HIGH:** Prevents phase completion, significant functionality broken
- **MEDIUM:** Notable issue affecting user experience or performance
- **LOW:** Minor issue, cosmetic, or nice-to-fix
- **RESOLVED:** Fixed and verified working

**Status:**
- **OPEN:** Issue identified, not yet addressed
- **IN PROGRESS:** Currently being worked on
- **RESOLVED:** Fixed and tested
- **DEFERRED:** Will be addressed in future phase
- **WONTFIX:** Decided not to fix (with justification)

---

## Error Log Template

```markdown
### Error #[NUMBER]: [Brief One-Line Description]
**Date Occurred:** [YYYY-MM-DD HH:MM]  
**Severity:** [CRITICAL/HIGH/MEDIUM/LOW]  
**Status:** [OPEN/IN PROGRESS/RESOLVED/DEFERRED/WONTFIX]  
**Phase:** [Phase number and name]  
**Component/File:** [Specific file or component where error occurred]  
**Developer:** Claude Code

**Description:**
[Detailed description of what went wrong. Include context about what you were trying to do when the error occurred.]

**Steps to Reproduce:**
1. [Exact step 1]
2. [Exact step 2]
3. [Exact step 3]
4. [What happens that shouldn't]

**Expected Behavior:**
[What should have happened]

**Actual Behavior:**
[What actually happened]

**Error Message/Stack Trace:**
```
[Exact error message, warning, or stack trace if applicable]
```

**Environment:**
- Operating System: [Windows/Mac/Linux]
- Node Version: [Version]
- Next.js Version: [Version]
- Browser (if applicable): [Browser and version]

**Impact:**
[How this affects the project - blocks progress, degrades performance, breaks functionality, etc.]

**Root Cause:**
[Once identified, explain why this error occurred]

**Attempted Solutions:**
1. **Attempt #1:** [What was tried]
   - **Result:** [Success/Failure/Partial]
   - **Notes:** [Any observations]

2. **Attempt #2:** [What was tried]
   - **Result:** [Success/Failure/Partial]
   - **Notes:** [Any observations]

**Resolution:**
[How the issue was finally fixed. Include code snippets if relevant. If deferred or won't fix, explain reasoning.]

**Resolution Date:** [YYYY-MM-DD HH:MM if resolved]  
**Time to Resolve:** [How many hours/minutes it took from discovery to resolution]

**Prevention:**
[What can be done to prevent this error in the future? Update to workflow, better validation, etc.]

**Related Issues:**
[Links to related error numbers if applicable]

**References:**
[Any documentation, Stack Overflow links, or resources used to solve this]

---
```

---

## Error Statistics

**Total Errors Logged:** 1
**Critical:** 0
**High:** 1
**Medium:** 0
**Low:** 0
**Resolved:** 1
**Open:** 0

---

## Quick Reference: Common Issues

### Issue Categories
- [ ] **Environment/Setup Issues** - Node, npm, dependencies
- [ ] **Build Errors** - Next.js compilation, TypeScript errors
- [ ] **Runtime Errors** - Errors when running application
- [ ] **API/Integration Errors** - Supabase, Google Calendar, Email
- [ ] **Styling Issues** - Tailwind, CSS, responsive design
- [ ] **Component Errors** - React components not working
- [ ] **Data/State Issues** - State management, data flow
- [ ] **Form/Validation Errors** - Form handling, input validation
- [ ] **Performance Issues** - Slow loading, optimization needed
- [ ] **Accessibility Issues** - A11y violations, keyboard nav
- [ ] **Browser Compatibility** - Cross-browser issues
- [ ] **Mobile Issues** - Mobile-specific problems
- [ ] **SEO Issues** - Meta tags, structured data
- [ ] **Deployment Issues** - Vercel deployment problems

---

## Instructions for Claude Code

### When to Log an Error:

**ALWAYS log:**
- ✅ Any error message in console
- ✅ Any warning that affects functionality
- ✅ Failed tests
- ✅ Unexpected behavior (even if you fix it)
- ✅ Build failures
- ✅ Deployment issues
- ✅ Integration failures (API, database, etc.)
- ✅ Performance problems
- ✅ Accessibility violations
- ✅ Design/spec deviations (even intentional)

**Log even if fixed immediately:**
- Someone else may encounter the same issue
- Creates learning resource
- Helps track patterns

### How to Log:

1. **Assign sequential error number** (Error #1, Error #2, etc.)
2. **Fill out complete template** - don't skip sections
3. **Be specific** - vague descriptions don't help
4. **Include context** - what were you doing when it happened
5. **Document attempts** - show what you tried before succeeding
6. **Update statistics** - keep counts accurate
7. **Reference in memo.md** - link to error number

### Severity Guidelines:

**CRITICAL:**
- Project completely blocked
- Cannot proceed to next step
- Database corrupted
- Security vulnerability
- Production site down

**HIGH:**
- Core functionality broken
- Major feature not working
- Blocks phase completion
- Significant user experience degradation
- Data integrity at risk

**MEDIUM:**
- Feature partially working but with issues
- Performance degradation
- Minor user experience problem
- Cross-browser compatibility issue
- Mobile responsiveness problem

**LOW:**
- Cosmetic issue
- Minor inconsistency
- Optional feature not working
- Documentation typo
- Improvement opportunity

---

## Example Error Entry

```markdown
### Error #1: Tailwind Colors Not Loading in Development
**Date Occurred:** 2025-10-26 14:32  
**Severity:** HIGH  
**Status:** RESOLVED  
**Phase:** Phase 1 - Design System Implementation  
**Component/File:** `tailwind.config.js`  
**Developer:** Claude Code

**Description:**
When attempting to use custom color classes defined in tailwind.config.js (e.g., `bg-accent-gold`, `text-cream`), the styles were not being applied. The classes appeared in the HTML but had no effect. This prevented implementing the brand color palette as specified in branding_and_design.md.

**Steps to Reproduce:**
1. Added custom colors to tailwind.config.js under theme.extend.colors
2. Used `bg-accent-gold` class in component
3. Ran `npm run dev`
4. Inspected element in browser - class present but no background color

**Expected Behavior:**
Custom Tailwind color classes should apply the specified hex colors from the configuration.

**Actual Behavior:**
Classes exist in HTML but no styling applied. Browser shows class but no CSS rules.

**Error Message/Stack Trace:**
```
No error in console, but DevTools shows class with no associated styles
```

**Environment:**
- Operating System: Windows 11
- Node Version: 18.17.0
- Next.js Version: 14.0.3
- Browser: Chrome 119.0

**Impact:**
HIGH - Cannot implement brand colors, entire design system blocked. Cannot proceed with any component styling until resolved.

**Root Cause:**
Tailwind content paths in config were incorrect. The config was scanning for classes in the wrong directories, so custom colors weren't being included in the generated CSS.

**Attempted Solutions:**
1. **Attempt #1:** Cleared Next.js cache (.next folder) and restarted dev server
   - **Result:** Failure
   - **Notes:** Problem persisted after clean build

2. **Attempt #2:** Checked syntax of tailwind.config.js colors definition
   - **Result:** Partial - Syntax was correct
   - **Notes:** Configuration looked correct according to Tailwind docs

3. **Attempt #3:** Updated content paths in tailwind.config.js to match Next.js 14 App Router structure
   - **Result:** Success
   - **Notes:** Changed from './pages/**/*.{js,ts,jsx,tsx}' to './app/**/*.{js,ts,jsx,tsx}' and './components/**/*.{js,ts,jsx,tsx}'

**Resolution:**
Updated the `content` array in tailwind.config.js to correctly scan Next.js 14 App Router directories:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1E8',
        beige: '#E8DCC4',
        // ... rest of colors
      },
    },
  },
}
```

After this change and restarting the dev server, all custom color classes worked correctly.

**Resolution Date:** 2025-10-26 15:10  
**Time to Resolve:** 38 minutes

**Prevention:**
- When setting up Tailwind with Next.js 14 App Router, immediately verify content paths match the new structure
- Add this to Phase 0 checklist in workflow.md
- Document correct Tailwind config in technical_specifications.md

**Related Issues:**
None

**References:**
- Next.js 14 Tailwind Setup: https://nextjs.org/docs/app/building-your-application/styling/tailwind-css
- Tailwind Content Configuration: https://tailwindcss.com/docs/content-configuration

---
```

---

## Error Log Begins Here

### Error #0: Template Entry (Do Not Delete)
**Date Occurred:** N/A  
**Severity:** N/A  
**Status:** N/A  
**Phase:** N/A  
**Component/File:** N/A  
**Developer:** Claude Code

This is a template entry. All actual errors should be logged below this line.

---

<!--
  CLAUDE CODE:
  Start logging errors below this line.
  Use Error #1, Error #2, Error #3, etc.
  Never skip error numbers.
  Fill out the complete template for every error.
-->

### Error #1: Tailwind CSS 4.x PostCSS Plugin Incompatibility
**Date Occurred:** 2025-10-26 11:50
**Severity:** HIGH
**Status:** RESOLVED
**Phase:** Phase 2 - Layout Components
**Component/File:** `postcss.config.js`, `app/globals.css`
**Developer:** Claude Code

**Description:**
After updating the root layout to include Header and Footer components, the development server returned a 500 error. The issue is that Tailwind CSS 4.x has moved its PostCSS plugin to a separate package `@tailwindcss/postcss`, but the project is still trying to use the old `tailwindcss` plugin directly in the PostCSS configuration.

**Steps to Reproduce:**
1. Install tailwindcss@^4.1.16
2. Create postcss.config.js with `plugins: { tailwindcss: {} }`
3. Start dev server with `npm run dev`
4. Navigate to http://localhost:3010
5. Server returns 500 error

**Expected Behavior:**
The development server should compile successfully and serve the application with Tailwind CSS styles applied.

**Actual Behavior:**
The server fails to compile with a 500 error, displaying the message: "It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package..."

**Error Message/Stack Trace:**
```
⨯ ./app/globals.css
Error evaluating Node.js code
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
    [at ot (C:\Projects\rosie_beauty_salon\node_modules\tailwindcss\dist\lib.js:38:1629)]
    [at <anonymous> (turbopack:///[turbopack-node]/transforms/postcss.ts:56:14)]
```

**Environment:**
- Operating System: Windows 11
- Node Version: 18.x (assumed)
- Next.js Version: 16.0.0
- Tailwind CSS Version: 4.1.16

**Impact:**
HIGH - The development server cannot compile the application. This completely blocks testing of the Header and Footer components, and prevents any progress on Phase 2. All work is halted until resolved.

**Root Cause:**
Tailwind CSS version 4.x introduced a breaking change where the PostCSS plugin was separated into its own package (`@tailwindcss/postcss`). The current postcss.config.js is using the old configuration format that references `tailwindcss` directly, which is no longer supported in v4.

**Attempted Solutions:**
1. **Attempt #1:** Installed `critters` package (unrelated missing dependency)
   - **Result:** Partial - Fixed missing dependency but didn't resolve main issue
   - **Notes:** This was a secondary issue that needed addressing

2. **Attempt #2:** Installed `@tailwindcss/postcss` and updated postcss.config.js
   - **Result:** Partial - Fixed PostCSS plugin error but revealed new issue with Tailwind v4 configuration
   - **Notes:** Server now starts but fails with "Cannot apply unknown utility class `font-sans`" error, indicating Tailwind v4 requires different configuration approach

3. **Attempt #3:** Downgraded to Tailwind CSS 3.4.0
   - **Result:** Success
   - **Notes:** Uninstalled tailwindcss 4.1.16 and @tailwindcss/postcss, installed tailwindcss@^3.4.0, reverted postcss.config.js to use `tailwindcss: {}`. Server compiled successfully with 200 response.

**Resolution:**
Successfully resolved by downgrading to Tailwind CSS 3.4.0. The steps were:
1. Uninstalled Tailwind CSS 4.x and @tailwindcss/postcss
2. Installed Tailwind CSS 3.4.0: `npm install tailwindcss@^3.4.0`
3. Reverted postcss.config.js to use standard `tailwindcss: {}` plugin format
4. Restarted dev server

Tailwind CSS 4.x is still in early stages and has significant breaking changes that are not fully compatible with Next.js 16 App Router. Version 3.4.0 provides all needed features with better stability.

**Resolution Date:** 2025-10-26 11:55
**Time to Resolve:** 5 minutes from initial discovery

**Prevention:**
- When upgrading to Tailwind CSS 4.x, immediately install `@tailwindcss/postcss` and update postcss.config.js
- Add version-specific installation instructions to technical_specifications.md
- Consider using Tailwind CSS 3.x for better stability with Next.js 14+

**Related Issues:**
None

**References:**
- Tailwind CSS 4.0 Release Notes
- @tailwindcss/postcss documentation

---

## Notes for Future Reference

### Common Error Patterns:
[TO BE FILLED BY CLAUDE CODE as patterns emerge]

### Lessons Learned:
[TO BE FILLED BY CLAUDE CODE - key takeaways from resolving errors]

### Time-Saving Tips:
[TO BE FILLED BY CLAUDE CODE - quick fixes for common issues]

---

**Document Version:** 1.0  
**Last Updated:** [TO BE UPDATED BY CLAUDE CODE]  
**Total Errors Logged:** [TO BE TRACKED BY CLAUDE CODE]  
**Status:** Active tracking document
