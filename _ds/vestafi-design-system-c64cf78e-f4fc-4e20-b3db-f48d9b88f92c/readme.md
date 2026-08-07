# VestaFi Design System

Design system for **VestaFi** — a warm, approachable personal-wealth platform for everyday
Australians. VestaFi brings goals, accounts and investment strategy into one clear plan, with
plain-English guidance and a flat-fee, no-commission model. The brand pairs a friendly orange
with a trustworthy navy "ink" on warm cream Paper, and rounded Nunito type — modern fintech that
feels human, not corporate.

> **Products represented:** a marketing **website** (hero + strategy widget + pricing) and a
> member **app** (login → dashboard with goals, portfolio, activity). Both are recreated as UI kits.

## Sources provided
- **Figma exports** (`Figma/` — mounted, read-only): PNG specimens of the color tokens
  (Orange / Ink / Navy BG / Paper ramps) and a type scale board (`Build.png`, `Heading 1–4`,
  `Body`). Exact hex + type sizes were sampled from these pixels; there was no component library
  in the export.
- **Uploaded brand assets** (`uploads/`): logo lockups (`VestaFi Logos-01/02.svg` + light/dark PNGs),
  the circle-check app icon (`VestaFi Icon.svg`), favicon, the **Nunito Sans** variable font
  (`NunitoSans-VariableFont…ttf`), and a `fonts.css` importing Nunito Sans + Nunito from Google Fonts.

No codebase, live URL, or Figma share link was provided — only the exports above. Values here are
derived from those assets; flag anything that should be reconciled against source-of-truth files.

---

## CONTENT FUNDAMENTALS — how VestaFi writes

**Voice:** warm, plain-spoken, and quietly confident — a knowledgeable friend, not a bank. The
brand demystifies money. Clarity over cleverness.

- **Person:** speaks to the reader as **"you"** / **"your"**; refers to itself as **"we"**.
  ("Your money, working toward the life you actually want." · "We only make money when you do.")
- **Tone:** reassuring and honest. Leans on trust cues — *no jargon, no commissions, no surprises,
  your money stays yours*. Australian spelling (personalise, optimisation, licensed).
- **Casing:** sentence case for headings and buttons ("Start your plan", "Get started").
  UPPERCASE only for small eyebrows/labels with wide tracking ("WHY VESTAFI", "PRICING").
- **Emphasis:** a single word set in **orange italic** to add warmth/emphasis inside a heading
  ("advice that feels *genuinely* personal"). Use sparingly — one accent per headline.
- **Numbers:** concrete and specific ($1,240 saved, 80k+ members, 4.9★, 6.5% return). Always
  ground projections with an assumption line.
- **Buttons:** short, action-first verbs — "Start your plan", "Add money", "Book a call",
  "Get started". Avoid "Submit", "Click here".
- **Emoji:** not used. Iconography carries visual meaning instead.
- **Vibe:** optimistic, human, grounded. Financial services with the anxiety removed.

---

## VISUAL FOUNDATIONS

**Palette** (see `tokens/colors.css`). Two brand hues on warm cream:
- **Orange** `#FF6B35` — the primary. Buttons, accents, the italic emphasis word, active states.
  Hover deepens to **Orange Deep** `#E5572A`. Soft fills use **Orange Soft** `#FFE8DD` /
  **Orange Tint** `#FFF4EE`.
- **Ink** (navy-blue) — *all* foreground text and links. `Ink #074E86` for body/links/primary
  headings, **Ink Deep** `#003561` for display headings, **Ink Soft** `#4A5A6E` for paragraphs,
  **Ink Faint** `#8995A6` for captions/metadata.
- **Navy BG** `#00264A` / **Navy BG Deep** `#001B36` — dark section backgrounds, hero panels,
  the app sidebar, footers, nav-button hover.
- **Paper** `#FDFCF9` — the default warm-cream body & card background (never pure white for pages;
  cards may use pure white on Paper). `Paper Shade #F4F1EA` for sunken rows/wells.

**Typography** (`tokens/typography.css`).
- **Headings:** *Nunito* (ExtraBold 800 / Black 900), tight tracking (−0.01em). Rounded terminals =
  friendly. Scale sampled from the brand board: **H1 52 / H2 36 / H3 26 / H4 20**, plus a 64px
  marketing display.
- **Body & UI:** *Nunito Sans* (400/600/700). Body 16 / line-height 1.6. Lead 18, small 14, caption 12.
- **Eyebrows:** Nunito Sans 700, 12px, uppercase, +0.08em, orange.

**Shape & depth.** Friendly and generous: radii from 8 (inputs) → 12 (buttons/cards inner) →
16 (cards) → 24–32 (feature/CTA blocks) → pill (badges, tags, progress). Shadows are **soft and
warm-tinted** (navy-based rgba, never neutral grey/black) — `--shadow-sm/md/lg`. Primary buttons
carry a warm **orange glow lift** (`--shadow-brand`). Borders are warm hairlines (`#E7E2D8`), or
`rgba(255,255,255,.14)` on navy.

**Backgrounds.** Flat color fields — cream Paper for light sections, Navy BG for dark bands, a
solid Orange block for the closing CTA. No busy gradients or photographic hero imagery in the
system; the brand icon is used as a large low-opacity **watermark** on navy panels. Data viz
(sparklines) use a subtle single-color area gradient fading to transparent.

**Motion.** Gentle and quick. `--ease-out` (cubic-bezier(.22,.61,.36,1)) for most transitions;
120–320ms. Cards lift 2px on hover; buttons dip ~1px + scale 0.985 on press. No bounces, no
looping/decorative animation. Respect `prefers-reduced-motion`.

**States.**
- *Hover:* primary → Orange Deep; ghost → orange tint fill + orange border; nav links → orange-tint
  pill; cards → deeper shadow + lift.
- *Focus:* 3px orange focus ring (`--focus-ring`), or a 4px soft ring on inputs; border turns orange.
- *Press:* slight downward nudge + scale.
- *Selected:* orange fill/border with orange-deep text (tags, goal picker, tabs underline).

**Layout.** Max content width 1200px (narrow 760px for prose), 32px gutters, 8px spacing grid,
~88px vertical section rhythm. Sticky translucent nav with backdrop blur.

---

## ICONOGRAPHY

- **Brand marks** (`assets/`): `logo-full.svg` (wordmark — orange "Vesta", navy "Fi"),
  `logo-full-dark.png` (for navy/dark surfaces), `logo-stacked.svg`, `logo-animated.gif`
  (1100×246 animated wordmark — intros, loading states, splash screens; static SVG is the default
  everywhere else), `icon.svg` (the circle-check
  symbol — app icon / avatar / watermark), `favicon.svg`, plus light/dark PNG variants. Copy these
  into artifacts; **never redraw** the logo or icon.
- **UI icons:** **Lucide** (outline, ~2px stroke) via CDN, wrapped by `ui_kits/*/Icon.jsx`
  (`<Icon name="arrow-right" />`). Lucide's rounded, friendly outline style matches the brand's soft
  letterforms. **This is a substitution** — no first-party UI icon set was provided; swap for the
  official set if one exists. Stroke weight ~2, size 17–24 in UI.
- **No emoji** and no unicode-glyph icons in product UI. The circle-check motif (tick inside a ring)
  is the signature brand shape — reach for `icon.svg` rather than inventing check treatments.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import list only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — logos, icon, favicon, `fonts/NunitoSans-Variable.ttf`.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**Components** (`components/`) — React primitives, exported on `window.VestaFiDesignSystem_c64cf7`:
- `forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch
- `core/` — Card, Badge, Tag, Avatar, Stat, Divider
- `feedback/` — Alert, ProgressBar, Tooltip
- `navigation/` — Tabs, Breadcrumb, Accordion

**UI kits** (`ui_kits/`)
- `website/` — interactive marketing site (nav, hero + strategy widget, features, how-it-works,
  pricing, FAQ, CTA, footer). Entry `index.html`.
- `app/` — member app (login → dashboard: net worth, goals, portfolio, activity). Entry `index.html`.

**Foundation cards** (`guidelines/*.card.html`) — specimen tiles for the Design System tab
(Colors, Type, Spacing, Brand).

## Caveats / to reconcile
- **Nunito** heading font loads from Google Fonts (no local binary supplied). Nunito Sans ships
  locally. Provide a licensed Nunito file to self-host if needed.
- **UI icons are Lucide** (substitution) — replace with the official VestaFi icon set if one exists.
- Type sizes, status colors, and neutrals (Paper Shade, borders, success/warning/danger) were
  derived to complete the system — confirm against brand source-of-truth.
