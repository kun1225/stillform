# Stillform Homepage Design

## Feature Summary
Create a brand-first homepage for Stillform that introduces the product as a quiet industrial object for focused work. The page should use product-presence, restrained copy, and a calm conversion path to move visitors toward the waitlist.

## Primary User Action
Understand the product's value in a few seconds, then choose to join the waitlist.

## Design Direction
- Color strategy: Restrained with one committed warm accent from the product underglow.
- Theme scene sentence: A remote worker sees the page on a bright laptop in a quiet morning studio, with soft daylight and a desk arranged for long, uninterrupted concentration.
- Anchor references: premium industrial product microsites, Japanese stationery catalog rhythm, quiet hi-fi hardware photography.
- Visual probe note: skipped because the user provided clear product photography and approved a concrete direction based on those references.

## Scope
- Fidelity: production-ready
- Breadth: one homepage surface
- Interactivity: shipped-quality responsive page with a static waitlist capture section
- Time intent: polish until it can replace the starter homepage

## Layout Strategy
Use an asymmetric hero with copy on one side and a large product rendering on the other. Follow with rhythmic horizontal sections instead of repetitive feature cards: a three-principle strip, a material-detail band, a usage ritual section, and a closing waitlist block. Emphasis should come from scale, contrast, spacing, and material light, not from loud color or dense UI.

## Key States
- Default: full landing page with headline, product object, supporting rationale, and waitlist CTA.
- Mobile: same narrative order, collapsed to a vertical sequence with the product still remaining visually dominant.
- Reduced motion: no transform-heavy reveal behavior, only instant or nearly instant presentation.
- Waitlist input idle: visible email field and button with clear affordance.
- Waitlist input focus: strong focus ring and sufficient contrast.

## Interaction Model
The page is primarily scroll-driven and informational. Users can scan, read short copy clusters, and use the waitlist field or CTA links. Hover states should feel crisp and physical rather than playful. Motion should be limited to subtle ambient shifts and section reveals with reduced-motion fallbacks.

## Content Requirements
- Short hero eyebrow, strong headline, one supporting paragraph.
- Three concise principle statements about physical focus, material presence, and reduced phone dependence.
- One detail section describing aluminum body, readable display, and warm base light.
- One ritual section describing how the product fits into a work session.
- Waitlist label, email placeholder, and closing CTA copy.

## Recommended References
- `reference/brand.md`
- Shared design laws in `SKILL.md`

## Open Questions
- Real waitlist submission endpoint is not defined yet, so the first pass should use a non-destructive static form shell.
- Final product photography assets are not yet in the repository, so the first pass should render the product in code using the approved image references as guidance.
