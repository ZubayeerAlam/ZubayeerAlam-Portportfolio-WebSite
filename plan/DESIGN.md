# Design Direction

Based on the "Developer X" reference image. Used as inspiration, not copied.

## What we take from the reference
- Charcoal background with slightly lighter, blue-grey contrast panels
- White headings, grey body text, one blue accent
- `</>` code icon next to the name as the logo
- A short white bar above each section title
- Large, bold, tightly spaced headings
- Hero: text on the left, circle photo, narrow right column with small uppercase labels (About me / My work / Follow me)
- Underlined text links with an arrow
- Round blue scroll-down button
- Lists split by thin lines, with an arrow on the right (used for projects)
- Split panel (dark + lighter half) for the contact section

## What we leave out
- "12+ years / 150+ projects" counters — would be invented numbers
- Blog and newsletter — no content for them
- Twitter, Instagram, YouTube icons — accounts not provided

## Tokens (first draft)
| Token | Value | Use |
|---|---|---|
| bg | `#1a1c21` | page background |
| surface | `#22252c` | lighter panels |
| surface-2 | `#2b2f38` | contrast half of split panels |
| border | `#30343d` | dividers |
| text | `#f3f4f6` | headings |
| muted | `#a1a7b3` | body text (AA on bg) |
| accent | `#2563eb` | buttons, `</>` icon, highlights |
| accent-hover | `#3b82f6` | hover |
| radius | 8px / 999px | panels / round button and photo |
| container | 1200px | max content width |
| motion | 200ms / 500ms, `cubic-bezier(.2,.7,.2,1)` | hover / reveal |

## Font
One geometric sans font loaded with `next/font/google` (Manrope, variable weight): clean, bold headings close to the reference.

## Responsive rules
- Mobile first. Hero stacks: text → photo → info column.
- Navbar collapses into a menu button below 768px.
- No horizontal scroll at 320px.
- Touch targets at least 44px.
