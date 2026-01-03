# Tasks: Landing Page Redesign with Screenshot Showcase

**Change ID:** `landing-page-redesign-with-screenshot-showcase`
**Status:** Completed

This document outlines the implementation tasks for redesigning the SuperDucky documentation landing page.

## Task Summary

| Phase | Tasks | Parallelizable |
|-------|-------|----------------|
| 1. Site Configuration | 2 tasks | Sequential |
| 2. Component Creation | 3 tasks | Partially |
| 3. Landing Page Update | 2 tasks | Sequential |
| 4. Styling & Polish | 2 tasks | Sequential |
| 5. Validation | 2 tasks | Sequential |

**Total:** 11 tasks

---

## Phase 1: Site Configuration Updates

### Task 1.1: Update Docusaurus Site Metadata

**Description:** Update `docusaurus.config.ts` with accurate SuperDucky project information.

**File:** `docusaurus.config.ts`

**Changes:**
- Update `title` from "My Site" to "SuperDucky"
- Update `tagline` from "Dinosaurs are cool" to "USB Device Security Manager"
- Update `url` to actual production URL (or placeholder for future deployment)
- Update organizationName and projectName to actual values
- Update navbar title and logo references
- Update footer links and copyright

**Validation:**
- Site builds without errors
- New title and tagline appear in browser tab
- Meta tags reflect correct information

**Dependencies:** None

**Estimated Effort:** Small

---

### Task 1.2: Update Social Card Image

**Description:** Replace default Docusaurus social card with SuperDucky-branded image.

**File:** `docusaurus.config.ts` (themeConfig.image)

**Changes:**
- Update `themeConfig.image` path from 'img/docusaurus-social-card.jpg' to appropriate image
- Create or source a social card image that represents SuperDucky

**Validation:**
- Social media previews display correctly
- Image is accessible and loads properly

**Dependencies:** Task 1.1

**Estimated Effort:** Small

---

## Phase 2: Component Creation

### Task 2.1: Create Screenshot Gallery Component

**Description:** Build a React component to display the 16 screenshots in an organized grid layout.

**File:** `src/components/ScreenshotGallery/index.tsx` (new)

**Requirements:**
- Accept array of screenshot objects (path, title, category, description)
- Display screenshots in responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop)
- Group screenshots by feature category
- Implement lazy loading for images
- Add hover effects and click-to-expand functionality
- Use CSS modules for styling

**Screenshot Data Structure:**
```typescript
interface Screenshot {
  id: string;
  path: string;
  title: string;
  category: 'detection' | 'monitoring' | 'security' | 'config' | 'logging' | 'dashboard';
  description: string;
}
```

**Files:**
- `src/components/ScreenshotGallery/index.tsx` - Main component
- `src/components/ScreenshotGallery/styles.module.css` - Component styles

**Validation:**
- All 16 screenshots load and display correctly
- Responsive layout works across breakpoints
- No console errors
- Lazy loading triggers on scroll

**Dependencies:** None

**Estimated Effort:** Medium

---

### Task 2.2: Create Feature Overview Cards Component

**Description:** Build a React component displaying 5 feature cards with icons, titles, and descriptions.

**File:** `src/components/FeatureCards/index.tsx` (new)

**Requirements:**
- Display 5 feature cards: USB Device Management, Real-time Monitoring, Security Controls, Event Logging, Flexible Configuration
- Each card includes: icon, title, brief description, link to documentation
- Responsive grid layout
- Hover effects for interactivity
- Use existing SVG icons or inline SVGs

**Features:**
1. **USB Device Management** - "Discover, identify, and manage connected USB devices" - Link to `/docs/device-management`
2. **Real-time Monitoring** - "Track device connections and disconnections as they happen" - Link to `/docs/monitoring`
3. **Security Controls** - "Block unauthorized devices and set access policies" - Link to `/docs/security`
4. **Event Logging** - "Complete audit trail of all USB device activities" - Link to `/docs/logging`
5. **Flexible Configuration** - "Customize rules, notifications, and security policies" - Link to `/docs/configuration`

**Files:**
- `src/components/FeatureCards/index.tsx` - Main component
- `src/components/FeatureCards/styles.module.css` - Component styles

**Validation:**
- All 5 cards display with correct content
- Links navigate to correct documentation sections
- Responsive layout works on all screen sizes
- Hover effects work smoothly

**Dependencies:** None

**Estimated Effort:** Medium

---

### Task 2.3: Create Screenshot Data Module

**Description:** Create a TypeScript module with metadata for all 16 screenshots.

**File:** `src/data/screenshots.ts` (new)

**Content:**
```typescript
export interface Screenshot {
  id: string;
  filename: string;
  title: string;
  category: ScreenshotCategory;
  description: string;
  order: number;
}

export type ScreenshotCategory =
  | 'detection'
  | 'monitoring'
  | 'security'
  | 'config'
  | 'logging'
  | 'dashboard';

export const screenshots: Screenshot[] = [
  // All 16 screenshots with metadata
];
```

**Validation:**
- TypeScript compiles without errors
- All 16 screenshots are included
- Categories match screenshot analysis from proposal

**Dependencies:** None

**Estimated Effort:** Small

---

## Phase 3: Landing Page Update

### Task 3.1: Update Homepage Header Component

**Description:** Replace default hero content with SuperDucky branding and messaging.

**File:** `src/pages/index.tsx` (modify `HomepageHeader` function)

**Changes:**
- Update hero heading to "SuperDucky"
- Update subtitle to "USB Device Security Manager for Windows"
- Update CTA button text and link
- Optionally add a brief description paragraph

**Files:**
- `src/pages/index.tsx` - Modify HomepageHeader component
- `src/pages/index.module.css` - Update hero styling if needed

**Validation:**
- Hero section displays correct branding
- CTA button navigates to appropriate destination
- Styling is consistent and professional

**Dependencies:** Task 1.1

**Estimated Effort:** Small

---

### Task 3.2: Replace HomepageFeatures with New Components

**Description:** Update main landing page to use new FeatureCards and ScreenshotGallery components.

**File:** `src/pages/index.tsx` (modify default export)

**Changes:**
- Remove import of HomepageFeatures
- Add imports for FeatureCards and ScreenshotGallery
- Replace `<HomepageFeatures />` with:
  - `<FeatureCards />` section
  - `<ScreenshotGallery />` section
- Add section headings for each component

**Files:**
- `src/pages/index.tsx` - Update main component

**Validation:**
- Page displays both new components correctly
- No layout breaks or overlapping elements
- Section spacing is appropriate

**Dependencies:** Tasks 2.1, 2.2, 2.3

**Estimated Effort:** Small

---

## Phase 4: Styling & Polish

### Task 4.1: Enhance Landing Page Styles

**Description:** Add custom styles for landing page sections and improve visual hierarchy.

**File:** `src/pages/index.module.css` (modify)

**Changes:**
- Add styles for section spacing and separators
- Add styles for screenshot section heading
- Ensure consistent color scheme with SuperDucky theme
- Add animation or transition effects if appropriate

**Validation:**
- Visual hierarchy is clear and professional
- Spacing is consistent across sections
- Colors are accessible (contrast ratio >= 4.5:1)

**Dependencies:** Tasks 3.1, 3.2

**Estimated Effort:** Small

---

### Task 4.2: Optimize Screenshot Images

**Description:** Optimize screenshot images for web performance.

**Action:** Convert PNG screenshots to WebP format and/or compress existing PNGs.

**Files:** All files in `static/img/screenshots/`

**Steps:**
1. Convert screenshots to WebP format (optional but recommended)
2. If keeping PNG, run through image optimizer (e.g., pngquant, optipng)
3. Ensure image dimensions are appropriate for web display

**Validation:**
- Total page weight is reduced (if optimization applied)
- Images still display clearly
- No visible quality loss

**Dependencies:** Task 2.1 (for implementation in component)

**Estimated Effort:** Small (optional task)

---

## Phase 5: Validation

### Task 5.1: Build and Test Locally

**Description:** Run full build and test landing page in development and production modes.

**Commands:**
```bash
yarn start          # Test in development mode
yarn build          # Build for production
yarn serve          # Test production build locally
```

**Validation Checklist:**
- [ ] Site starts without errors
- [ ] Landing page loads with all components
- [ ] All screenshots display correctly
- [ ] No console errors in browser
- [ ] Responsive design works on mobile, tablet, desktop
- [ ] All links navigate correctly
- [ ] Production build succeeds
- [ ] Production build serves correctly

**Dependencies:** All previous tasks

**Estimated Effort:** Medium

---

### Task 5.2: Accessibility and Performance Validation

**Description:** Validate accessibility and performance of the new landing page.

**Tools:**
- Browser DevTools Lighthouse audit
- Axe DevTools or similar accessibility checker

**Validation Criteria:**
- Lighthouse Performance score >= 90
- Lighthouse Accessibility score = 100
- No accessibility violations detected
- First Contentful Paint < 1.5s
- Time to Interactive < 3s

**Remediation:**
- Fix any critical accessibility issues
- Optimize loading performance if below thresholds

**Dependencies:** Task 5.1

**Estimated Effort:** Medium

---

## Task Dependencies Graph

```
Task 1.1 (Update Site Config)
    |
    +-> Task 1.2 (Social Card)
    |
    +-> Task 3.1 (Hero Header) ----+
                                    |
Task 2.1 (Screenshot Gallery) ------+
Task 2.2 (Feature Cards)            +-> Task 3.2 (Landing Page) ----> Task 4.1 (Styles) ----> Task 5.1 (Build Test)
Task 2.3 (Screenshot Data) ---------+                                  |
                                                                       +-> Task 4.2 (Image Opt) ----> Task 5.2 (Validation)
```

## Parallelizable Work

The following tasks can be worked on simultaneously:
- **Phase 1 tasks** can run in parallel with **Phase 2 tasks**
- **Tasks 2.1, 2.2, 2.3** can be developed in parallel (different components)
- **Task 4.2** (image optimization) can run in parallel with other tasks

## Rollback Plan

If issues arise during implementation:
1. Each phase can be independently reverted
2. Original components remain in version control
3. Feature flags can hide new components (if added)
4. Git revert can restore previous working state

## Notes

- Task 4.2 (Image Optimization) is marked as optional but recommended for performance
- Documentation page destinations in Task 2.2 may need to be created if they don't exist
- Consider adding lightbox library for screenshot expansion if native implementation is insufficient
