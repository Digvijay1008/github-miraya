# Trishabh Miraya - Wireframes & Layout Architecture

*Note: This document relies on the structural principles of Taste Skill (editorial composition) and Emil Kowalski (cinematic interaction).*

---

## 1. Hero Section
**Purpose**: Establish mood, prestige, and location immediately.
- **Desktop Layout**: 
  - Full viewport height (`100vh`).
  - Warm Ivory background.
  - Center alignment for the Trishabh Miraya logo (gold/emerald).
  - Massive, elegant typography for "EVERYTHING THAT MATTERS."
  - A cinematic, slow-zooming image of the family in the living room, softly masked with a subtle beige overlay to ensure text legibility.
- **Mobile Layout**: 
  - Similar full-screen approach, but text is stacked. Logo at the top, headline taking up 3-4 lines for impact.
- **Animation**: Slow image unmasking on load. Text fades in softly from the bottom.

---

## 2. Intro Story (Philosophy)
**Purpose**: Articulate the brand positioning and "quiet luxury" ethos.
- **Desktop Layout (Asymmetrical)**:
  - 12-column grid.
  - Left 5 columns: The headline "In a city that offers endless choices, what truly matters becomes clearer."
  - Right 6 columns (offset by 1): A beautifully composed lifestyle image (woman relaxing on sofa).
  - Below the image, the core pillars (Location, Planning, Comfort) listed elegantly.
- **Mobile Layout**:
  - Stacked. Headline first -> Lifestyle Image -> Core Pillars text.
- **Animation**: Parallax scroll on the lifestyle image. Staggered fade-in for the text pillars as they enter the viewport.

---

## 3. Well Designed Homes (Architecture)
**Purpose**: Highlight the unique PT slab design and lack of column/beam obstructions.
- **Desktop Layout**:
  - Deep Emerald background block to shift the visual rhythm.
  - Left side: Large, crisp text emphasizing "No columns. No beam obstructions."
  - Right side: Wide, sprawling image of the expansive, open living room showing the seamless ceiling.
- **Mobile Layout**:
  - Emerald background. Text placed above the image. The image bleeds to the edges of the screen to maximize the feeling of space.
- **Animation**: Text elements fade in while the background transitions smoothly from Ivory to Emerald.

---

## 4. Floor Plan Section
**Purpose**: Functional display of the intelligent space planning.
- **Desktop Layout**:
  - Clean, Warm Ivory background.
  - Center-aligned title: "OPEN. FLEXIBLE. INTELLIGENT."
  - A large, high-resolution display of the 2 BHK floor plan.
  - Subtle interactive hotspots (Taste Skill) that gently pulse. Hovering over a room (e.g., Living Room) slightly highlights it or brings up the dimensions (`15'1" x 16'7"`).
- **Mobile Layout**:
  - The floor plan must be horizontally scrollable or implement a "pinch to zoom" viewer, as floor plans shrink terribly on mobile.
- **Animation**: Fade in. Interactive hover states on desktop.

---

## 5. Amenities Section
**Purpose**: Showcase curated, premium lifestyle additions.
- **Desktop Layout (Bento Grid / Editorial Spread)**:
  - Avoid a boring list. Use a staggered masonry or bento-box grid for the 4-5 key amenities (Yoga Zone, Gym, Garden, Kids Area, Security).
  - High-quality imagery for each, with the title overlaid in a minimal, frosted glass or solid Warm Gold pill at the bottom corner of each image.
- **Mobile Layout**:
  - A smooth, snapping horizontal carousel to allow users to swipe through amenities without endless vertical scrolling.
- **Animation**: Hovering an amenity image scales it up very slightly (`1.02x`) while dimming the others (Emil Kowalski focus state).

---

## 6. Location Section
**Purpose**: Validate Chembur as a prime, connected neighborhood.
- **Desktop Layout (Sticky Scroll)**:
  - Left side (Sticky): The title "RIGHT WHERE IT MATTERS" and the stylized map graphic.
  - Right side (Scrolling): The list of proximities (2 Mins from Monorail, 10 Mins from Schools, etc.). As the user scrolls the right side, the left side stays pinned.
- **Mobile Layout**:
  - Static map image followed by a clean, icon-based list of the proximities.
- **Animation**: Map pins dropping in sequentially as the section comes into view.

---

## 7. Trust / Legacy Section
**Purpose**: Prove reliability and past performance.
- **Desktop Layout**:
  - Split section. Top half is text explaining the 1999 establishment and expertise.
  - Bottom half features the "100% OC" graphic prominently, surrounded by the stats (27 Years, 15+ Projects).
  - Use the Deep Emerald and Warm Gold palette to make the numbers feel monumental.
- **Mobile Layout**:
  - Stats are presented in a 2x2 grid for easy scanning.
- **Animation**: Numbers counting up rapidly from 0 to their final value (e.g., 0 to 27, 0 to 100) when scrolled into view.

---

## 8. Footer / Final CTA
**Purpose**: Capture leads and provide legal/contact info.
- **Desktop & Mobile Layout**:
  - Charcoal background for finality.
  - A clean, minimalist contact form (Name, Email, Phone, Message) styled with thin bottom borders for inputs (no bulky boxes).
  - Below the form: Site address, corporate office, MahaRERA details, and a QR code if applicable.
  - Floating WhatsApp button fixed to the bottom right of the viewport globally.
- **Animation**: Input fields have a Warm Gold line expansion on focus.
