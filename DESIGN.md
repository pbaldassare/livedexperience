# Design — Lived Experiences

World: **kintsugi on tenmoku glaze**. The page is a dark glazed bowl; experience is the crack, repaired in gold. Source of truth for tokens: `assets/css/style.css` (`:root`).

## Color

Strategy: Committed. Dark glaze owns most of the page; two whole regions change material (celadon field for "Partecipa", raw stoneware for "Contatti"). Gold is the only accent.

| Token | Value | Role |
|---|---|---|
| `--glaze` | `#14100d` | page ground |
| `--glaze-2` / `--glaze-3` | `#1f1813` / `#2b211a` | alternate sections, inputs, wells |
| `--hare` | `#6b4a33` | scrollbar, rare warm detail |
| `--ink` / `--ink-soft` | `#efe9e1` / `#c4b6a6` | text on glaze |
| `--gold` / `--gold-hi` / `--gold-deep` | `#d9ad4a` / `#f0cd78` / `#9c7426` | seams, primary buttons, focus, selection |
| `--celadon` + `--celadon-ink(-soft)` | `#9fbfa8`, `#12241a`, `#2c4a37` | "Partecipa" field |
| `--stone` + `--stone-ink(-soft)` | `#d8d5ce`, `#1b1714`, `#4a423b` | "Contatti" field |

Selection, caret, focus rings and scrollbar are themed per region.

## Type

- Display: **Bricolage Grotesque** (variable, self-hosted), 600–800, tracking −0.03em, line-height ~1.04, `text-wrap: balance`.
- Body: **Atkinson Hyperlegible Next** (self-hosted), chosen for legibility for tired or low-vision readers. Base `clamp(1.06rem…1.2rem)`, line-height 1.6.
- Fluid scale `--step--1 … --step-4`. Display never above 5.6rem.

## Signature elements

- **Page seam**: one continuous gold crack in the left margin column (`--seam-col`), generated in JS, filling with gold as the page scrolls. Raised-lacquer drawing: dark under-stroke + gold stroke + faint ghost. Never glow.
- **Hero crack**: gold seam crossing the hero photo, drawn once on load.
- **Bowl-rim photo**: hero photo with an arched top (the bowl's rim).
- **Libro soci ledger**: paper ledger illustration, labelled as illustrative.
- **Activities index**: list rows; on desktop hover/focus swaps the sticky photo with a clip-path wipe; on mobile it's an accordion with inline photos.

## Components

- Buttons: pill, gold fill (primary), ghost outline (secondary), min-height 3.25rem.
- Forms: dark cards, 1.5px borders, gold focus, inline errors that name the fix; chips for multi-choice.
- Mobile: full-screen drawer menu; sticky bottom "Chiedi aiuto" + call bar appears after the hero and hides over Contatti.

## Motion

Exponential ease-out (`--ease-out`). One authored moment (the seam); sections fade/de-blur in once. `prefers-reduced-motion` shows everything fully drawn and static.

## Don'ts

No cream/paper page grounds, no gradient text, no glow halos, no emoji icons, no invented testimonials or numbers.
