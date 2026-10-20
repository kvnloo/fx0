---
version: alpha
name: zerOS-Living-Night
description: "zerOS Living Night: the owner's cockpit language for agents doing real work. A warm near-black canvas (#0c0c0a, never pure black), warm-white text, and one precious accent: gold. Floating surfaces are liquid glass (blurred warm tint, bright top rim, faint edge, soft shadow), never opaque grey slabs. A serif carries names, titles and big numbers; a grotesk carries everything read while working; mono is only for machine truth (paths, hosts, ids, times). Nothing glows or moves unless it means something."
source: "zerOS packages/ui-foundation/tokens.json (living-night theme) and Dash docs/design/zeros-night.md"

colors:
  canvas: "#0c0c0a"
  canvas-raised: "#151611"
  text-primary: "#ECE8DF"
  text-secondary: "#B4AFA3"
  text-tertiary: "#837F74"
  text-faint: "#5e5b52"
  action: "oklch(0.80 0.075 80)"        # gold, about #d8bc84
  action-strong: "oklch(0.86 0.09 85)"  # about #ecd093
  action-muted: "oklch(0.62 0.06 80)"   # about #9a875f
  success: "oklch(0.80 0.11 140)"
  information: "oklch(0.76 0.075 235)"
  warning: "oklch(0.78 0.10 60)"
  danger: "oklch(0.70 0.13 35)"
  provenance: "oklch(0.72 0.08 305)"
  focus: "oklch(0.86 0.09 85)"
  glass: "rgba(24,26,23,0.46)"
  glass-strong: "rgba(20,22,19,0.66)"
  glass-raised: "rgba(18,20,17,0.82)"
  glass-sheen: "rgba(255,255,255,0.10)"
  glass-rim: "rgba(255,255,255,0.30)"
  glass-edge: "rgba(0,0,0,0.18)"
  border-subtle: "rgba(236,232,223,0.10)"
  border-default: "rgba(236,232,223,0.16)"
  border-quiet: "rgba(236,232,223,0.06)"

typography:
  editorial: '"Cormorant Garamond", Georgia, "Times New Roman", serif'
  operational: '"Hanken Grotesk", system-ui, -apple-system, "Segoe UI", sans-serif'
  telemetry: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
  scale:
    title: { family: editorial, size: 30px, line: 34px, weight: 500 }
    section: { family: editorial, size: 24px, line: 28px, weight: 500 }
    number: { family: editorial, size: 34px, line: 36px, weight: 500, numeric: tabular }
    row-title: { family: operational, size: 16px, line: 22px, weight: 600 }
    body: { family: operational, size: 16px, line: 24px, weight: 400 }
    meta: { family: operational, size: 13px, line: 18px, weight: 400, color: text-secondary }
    micro: { family: operational, size: 12px, line: 16px, weight: 600, tracking: 0.4px, case: sentence }
    machine: { family: telemetry, size: 12px, line: 16px, weight: 400, color: text-tertiary }

space: [4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px]
radius: { control: 6px, card: 8px, sheet: 14px, scene: 18px, pill: 999px }
control-min: 44px
motion:
  immediate: 140ms
  state: 240ms
  transition: 560ms
  settle: "cubic-bezier(.2,.75,.2,1)"
  press: "cubic-bezier(.2,.7,.2,1)"
  sheet: "cubic-bezier(.32,.72,0,1)"
shadow:
  context: "0 8px 30px rgba(0,0,0,0.35)"
  raised: "0 18px 50px rgba(0,0,0,0.50)"
---

# zerOS Living Night

## Canvas

- Background is `#0c0c0a` with a very faint warm vertical wash toward `#151611` at the top. Never `#000`.
- Text is warm white `#ECE8DF`; secondary `#B4AFA3`; tertiary `#837F74`. No cool greys, no blue-black.

## One accent

- Gold (`action`) is the only chromatic accent. Use it for the selected choice, the primary action, a live dot and focus. Never as decoration, never as a large fill behind text except the primary button.
- Semantic hues (success, information, warning, danger, provenance) appear only as small dots or 1px strokes that carry state, never as backgrounds.

## Type

- Serif (Cormorant Garamond, fall back to Georgia) for names, titles and big numbers only.
- Grotesk (Hanken Grotesk, fall back to system-ui) for every working label, body and button.
- Mono (IBM Plex Mono, fall back to ui-monospace) only for paths, hosts, ids and times.
- Labels are sentence case. Never set a count numeral in the serif beside a label: its "1" reads as "I". Use a sans tabular numeral on a small gold pill.
- Web fonts are not available in sandboxed artifacts: write the full fallback stacks above.

## Surfaces

- Cards and sheets are liquid glass: background `glass` (or `glass-strong` for headers and composers), `backdrop-filter: blur(20px)`, a 1px top border in `glass-rim` at ~60% opacity, a 1px border in `border-subtle`, radius 14px (sheet) or 8px (card), padding 16px, shadow `context`.
- Separate rows with `border-subtle` hairlines, not with boxes.
- Buttons: primary is a pill 52px tall (44px minimum) with a vertical gold gradient from `action-strong` to `action`, canvas-coloured text in the grotesk at 16/600 and a 1px specular top rim. Secondary is a ghost: transparent, `border-default` 1px, text-primary.
- Chips: pill radius, 32px tall, `glass` fill, `border-subtle`; a selected chip has a gold 1px border and gold text.

## Controls and touch

- Every tappable target is at least 44x44px. Choices are full-width rows or large cards, never tiny radio dots.
- Selected state shows a gold ring or gold check and is also stated in text ("Selected"); meaning must survive without colour.
- Pressed state: scale to 0.97 over 140ms with the press curve; settle with the settle curve. No bouncing, no idle animation.

## Truth rules

- No fake activity: no spinners, pulses, waveforms or "live" labels unless real state drives them.
- No invented numbers, versions or claims. Leave a field blank (or "unspecified") rather than guess.
- No emoji, no brand marks, no decorative orbs.

## Do

- Compact phone-first layouts at 390px wide; content fits without horizontal scroll.
- Dense, useful information: a title, a one-line consequence of each choice, a mono detail when it helps.

## Don't

- No opaque grey slabs, no pure black, no cyan/violet neon palette, no shouting caps, no drop shadows on text.
