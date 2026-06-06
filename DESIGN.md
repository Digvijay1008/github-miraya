# Trishabh Miraya - Design Strategy & System

## 1. Core Aesthetic: "Quiet Luxury"
The website must feel like a premium architectural editorial. It should evoke calmness, luxury, and thoughtful planning. We avoid generic SaaS layouts, heavy gradients, and gimmicky animations in favor of restraint, whitespace, and cinematic composition.

---

## 2. Color Palette
The color system is rooted in natural, warm, and sophisticated tones.
- **Deep Emerald (`#003B36`)**: Primary brand color. Used for bold headings, solid button backgrounds, and key architectural accents.
- **Warm Gold (`#C6A06A`)**: Accent color. Used for delicate dividers, hover states, and premium highlights.
- **Warm Ivory (`#F5EFE6`)**: Primary background color. Creates a soft, breathable canvas that feels more luxurious than stark white.
- **Soft Beige (`#DCC5A2`)**: Secondary background for alternating sections or subtle card backgrounds.
- **Charcoal (`#1A1A1A`)**: Primary text color for maximum readability without the harshness of pure black.
- **Soft Gray (`#6B6B6B`)**: Secondary text color for body copy and metadata.

---

## 3. Typography System
*Impeccable Skill Application: Typography must be razor-sharp, perfectly kerned, and highly legible.*

**Headings (Satoshi Bold / General Sans / Clash Display)**
- Use tight letter-spacing for large headings (`-0.02em` to `-0.04em`).
- Case: Sentence case for storytelling, UPPERCASE for structural section titles.
- Scale: Massive for Hero (e.g., `80px+` on desktop), refined for sub-sections.

**Body (Inter / Neue Montreal)**
- Line height: Generous (`1.6` to `1.8`) to ensure breathability.
- Color: Never pure black; use Charcoal or Soft Gray.
- Max-width: Limit paragraphs to `65ch` (characters) for optimal reading comfort.

---

## 4. Layout Principles (Taste Skill)
- **Asymmetrical Balance**: Avoid boring 50/50 splits everywhere. Use a 60/40 or 70/30 split to create editorial tension (e.g., large image on the left, tightly composed text on the right).
- **Whitespace is a Feature**: Use massive padding between sections (`120px` to `200px` on desktop) to let the content breathe.
- **12-Column Grid**: Strict adherence to a 12-column architectural grid (`max-width: 1440px`), with a `24px` gutter.
- **Layering**: Use subtle overlapping of images and text blocks to create depth, mimicking a printed brochure.

---

## 5. Spacing System
Based on a strict 8px multiplier.
- `8px`, `16px`, `24px` (Micro-spacing: Inside components, icon-to-text)
- `32px`, `48px`, `64px` (Macro-spacing: Between paragraphs, between cards)
- `96px`, `128px`, `160px` (Layout-spacing: Section padding, hero spacing)

---

## 6. Component Guidelines
- **Buttons**: Sharp corners or very subtle rounding (`2px`). Solid Emerald for primary, Outline Emerald/Gold for secondary.
- **Shadows**: Extremely soft, diffused shadows. Avoid harsh drop shadows. Use `rgba(0,0,0,0.06)` for subtle depth.
- **Dividers**: Thin `1px` lines (Warm Gold or Soft Beige) to separate content elegantly. Avoid heavy borders.
- **Badges/Tags**: Minimalist pills with muted backgrounds and crisp typography (e.g., "Premium Living").

---

## 7. Motion Principles (Emil Kowalski Skill)
*Animations should be felt, not just seen. They must be cinematic and expensive.*
- **Scroll Reveals**: Elements should subtly fade in and drift upward (`transform: translateY(20px)`) over a long duration (`0.8s - 1.2s`) using a custom cubic-bezier ease (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Hover States**: Buttons and cards should have a subtle lift or a slow, smooth color depth transition. No aggressive bouncing.
- **Parallax**: Very gentle parallax on large architectural images to give a sense of scale and depth without causing motion sickness.
- **Image Reveals**: Use slow unmasking/clipping reveals for hero imagery rather than standard fades.

---

## 8. Platform Strategy
**Desktop Design Strategy**
- Treat the browser like a wide editorial canvas.
- Utilize horizontal space for side-by-side storytelling.
- Employ sticky scrolling for complex sections (like location/amenities) where imagery changes as the user reads.

**Mobile Design Strategy**
- Stack elements logically but maintain the generous whitespace (reduce section padding to `64px` or `80px`).
- Ensure typography scales down perfectly.
- Make all touch targets (buttons, floor plan toggles) at least `48x48px`.
- Use swipeable carousels for amenities or floor plans to save vertical space while maintaining interactivity.
