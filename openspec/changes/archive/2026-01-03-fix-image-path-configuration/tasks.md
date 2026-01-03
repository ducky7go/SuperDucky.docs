# Implementation Tasks

## Task Overview

Ordered list of verifiable work items to fix image path configuration for baseUrl compatibility.

## Tasks

### 1. Update screenshots data type for require() imports

**File:** `src/data/screenshots.ts`

**Changes:**
- Update `Screenshot` interface to support both string paths and required images
- Modify the `screenshots` array to use `require()` for image paths
- Change `path` property from static string to computed value

**Implementation:**
```typescript
// Change from:
path: '/img/screenshots/Screenshot_20260102_211525.png'

// Change to:
path: require('@site/static/img/screenshots/Screenshot_20260102_211525.png').default
```

**Validation:**
- TypeScript compilation passes with `yarn typecheck`
- All 16 screenshot entries updated

**Dependencies:** None

---

### 2. Update ScreenshotGallery component to use new path format

**File:** `src/components/ScreenshotGallery/index.tsx`

**Changes:**
- Update `ScreenshotCard` component to handle the new image path format
- Ensure lazy loading still functions with required images
- Update lightbox image src usage

**Implementation:**
- Verify `data-src` and `src` attributes work with required image paths
- No changes should be needed if `Screenshot.path` returns a string, but verify

**Validation:**
- Component TypeScript types are correct
- No runtime errors in browser console

**Dependencies:** Task 1 must be complete

---

### 3. Run type checking

**Command:** `yarn typecheck`

**Purpose:** Verify TypeScript compilation after changes

**Validation:**
- Command exits with code 0
- No type errors reported
- All files compile successfully

**Dependencies:** Tasks 1, 2 complete

---

### 4. Test local build with baseUrl

**Command:** `yarn build`

**Purpose:** Validate build succeeds and no broken links are detected

**Validation:**
- Build completes successfully
- No warnings about broken links
- Output shows all assets processed correctly

**Dependencies:** Task 3 complete

---

### 5. Verify screenshot display in local development

**Command:** `yarn start`

**Purpose:** Visual regression test to ensure screenshots display correctly

**Steps:**
1. Start development server
2. Navigate to homepage
3. Verify screenshot gallery section displays
4. Click on screenshot cards to open lightbox
5. Verify images load and display correctly

**Validation:**
- All 16 screenshots visible in gallery
- Lightbox opens and displays full-size images
- No console errors related to image loading
- Lazy loading triggers on scroll

**Dependencies:** Task 4 complete

---

### 6. Document image path patterns

**File:** `openspec/project.md` (or create `docs/CONTRIBUTING.md` if needed)

**Purpose:** Document correct patterns for future contributors

**Content:**
- Add section on static asset handling
- Document `require()` pattern for TypeScript/JavaScript files
- Note the baseUrl consideration
- Include examples

**Validation:**
- Documentation is clear and follows existing patterns
- Examples are accurate

**Dependencies:** None (can be done in parallel)

---

## Task Dependencies

```
Task 1 (screenshots.ts)
    ↓
Task 2 (ScreenshotGallery)
    ↓
Task 3 (typecheck)
    ↓
Task 4 (build)
    ↓
Task 5 (dev test)

Task 6 (docs) - independent
```

## Parallelizable Work

- Task 6 can be done in parallel with Tasks 1-5

## Rollback Plan

If issues arise:
1. Revert changes to `src/data/screenshots.ts`
2. Revert changes to `src/components/ScreenshotGallery/index.tsx`
3. Run `yarn typecheck && yarn build` to verify restoration

## Definition of Done

- [x] All 16 screenshots use `require()` imports
- [x] TypeScript compilation passes without errors
- [x] Build completes with no broken link warnings
- [x] Screenshots display correctly in development
- [x] Image path pattern is documented
