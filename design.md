# Trunk Academy — Design direction

## Product context
Trunk Academy Babyhouse & Preschool is a play-based crèche and early learning centre in Cosmo City, Randburg, Johannesburg, serving children from 3 months to 5 years. The site should communicate the warmth of a real local school and make practical information easy to find. Do not invent outcomes, accreditations, reviews, staff credentials, policies, or contact details.

## Visual direction
- **Mood:** welcoming, quietly playful, human, contemporary; editorial composition rather than a generic childcare template.
- **Palette:** warm white `#FFFCF7`, soft peach `#F5D9C3`, muted butter `#F4D88B`, deep espresso `#321E14`, and quiet clay `#AA6845` for small accents.
- **Typography:** geometric sans-serif; bold, tightly set headlines and readable regular-weight body copy. Keep type hierarchy clear and avoid decorative display fonts.
- **Photography:** use the supplied child photography with generous crops and meaningful alt text. Keep the images prominent and authentic; avoid decorative stock imagery or unsupported captions.
- **Surfaces:** broad white and peach fields with clear section breaks, restrained borders, and soft corner radii. Avoid excessive cards, shadows, and ornamental elements.
- **Controls:** pill-shaped, high-contrast links and buttons with visible text; clear hover/focus states and keyboard access.

## Homepage structure
1. Shared site header with the complete primary navigation: Home, Programmes, Nutrition & Safety, Admissions, Contact, Partners & Donors. Future routes should reuse this header and design tokens.
2. Hero with concise positioning, a clear first action, and supplied photography.
3. At-a-glance facts: age range, grades, programme formats, hours, meals and language. Keep this reusable if the facts later move to an About or Admissions page.
4. Welcome message and the school’s stated values, with management sign-off.
5. Reasons to choose Trunk, using only facts and language supplied by the school.
6. Play and discovery feature, designed as a bridge to future programme content without inventing specific programme names.
7. One prominent admissions/contact call to action.
8. Shared footer for future pages.

## Future page map
- **Programmes:** age groups and full-day, half-day and hybrid options; add details only when confirmed.
- **Nutrition & Safety:** meal routine and safety policies; publish only school-confirmed procedures.
- **Admissions:** enquiry, visits, availability, application steps and fees once provided.
- **Contact:** verified phone, email, address, map and contact hours.
- **Partners & Donors:** confirmed partner and donation information.

## Content and accessibility
- Keep the tone kind, specific and confident; do not promise developmental results.
- Do not fabricate testimonials, numbers, affiliations, phone numbers, addresses beyond Cosmo City/Randburg, or email addresses.
- Use semantic landmarks, a single H1, ordered headings, descriptive image alternatives, visible keyboard focus, and sufficient color contrast.
- Label links by their action. Ensure navigation and the primary CTA remain usable on narrow screens.

## Component boundaries
- `src/components/site-header.tsx`: shared navigation and brand.
- `src/app/page.tsx`: homepage section composition and supplied page content.
- `src/app/globals.css`: global tokens, responsive layout and shared component styles.
- `src/app/layout.tsx`: site metadata and document shell.
