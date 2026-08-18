---
name: readydesign-skill
description: >
  Force UI work onto six ready-to-use libraries only: shadcn/ui, Ant Design,
  Kokonut UI, Motion (motion.dev), Bklit (bklit.com), and sashimi UI. Web-fetch
  each official site one-by-one and install the real components from those
  pages — never invent APIs, class names, colors, or components from memory.
  Use when building or restyling a UI, scaffolding a frontend, adding
  components, picking a design system, or when the user says ReadyDesign,
  ready-to-use components, shadcn, antd, kokonut, motion.dev, framer motion,
  bklit, sashimi, or runs /readydesign-skill or $readydesign-skill.
license: MIT
compatibility: >
  Requires network access to fetch official component docs. Agent Skills
  SKILL.md for Claude Code, Codex, Antigravity 2.0, and Grok.
metadata:
  short-description: "Fetch and use only 6 ready component libraries"
  hosts: "claude-code,codex,antigravity,grok"
---

# ReadyDesign

UI may come only from these six official sources. Fetch their live docs
one-by-one and install what those pages actually ship. Memory, training
data, and "shadcn-like" custom rebuilds are not allowed.

## Allowed sources

Fetch these pages. Do not substitute blogs, YouTube, or memory.

| Source | Use for | Catalog / start here | Then open |
|---|---|---|---|
| [shadcn/ui](https://ui.shadcn.com) | App primitives: button, form, dialog, table, sidebar | https://ui.shadcn.com/llms.txt | https://ui.shadcn.com/docs/components and the component URL listed there |
| [Ant Design](https://ant.design) | Enterprise / data-dense controls | https://ant.design/components/overview | https://ant.design/components/`<name>` or https://ant.design/components/`<name>`.md |
| [Kokonut UI](https://kokonutui.com) | Decorative / marketing sections, animated extras | https://kokonutui.com/docs | The component page you will install from |
| [Motion](https://motion.dev) | All animation and gesture motion | https://motion.dev/docs/react | The specific guide (animation, gestures, layout, presence) plus https://motion.dev/examples |
| [Bklit](https://bklit.com) | Charts and data visualization | https://bklit.com/docs/components | https://bklit.com/docs/installation then the chart page you will add |
| [sashimi UI](https://yuto-hasegawa.github.io/sashimi-ui/) | Native HTML/CSS, no-JS chrome | https://yuto-hasegawa.github.io/sashimi-ui/ | https://yuto-hasegawa.github.io/sashimi-ui/getting-started/ |

Agent extras, fetch when that source is in play:

- shadcn CLI: https://ui.shadcn.com/docs/cli
- Ant Design agents: https://ant.design/docs/react/for-agents.md and https://ant.design/llms.txt
- Motion install: https://motion.dev/docs/react-installation

Nothing else is a UI source. MUI, Chakra, Mantine, DaisyUI, Bootstrap,
Flowbite, Magic UI, Aceternity, HeroUI, Radix Themes, GSAP, anime.js,
Recharts/Tremor/Chart.js used directly, and handmade "inspired by"
components are banned.

## Fetch protocol (do this, in this order)

Do not write UI until the fetches for this session have started.
Fetch **one URL at a time** with the host's page-fetch tool (`WebFetch`,
`web_fetch`, `open_page`, `curl`, or equivalent). Never batch catalog
fetches. Never skip a source because you "already know it." Search
snippets are not a substitute for the official page.

1. Fetch all six catalog / start-here URLs from the table, one after
   another. Record the real component names each page lists.
2. Ask the required user questions (below). Use the answers to decide
   which sources you will actually install from.
3. For every component you will add, fetch **that component's official
   page** (or its registry JSON) before you install or paste it.
4. Install or copy using only the command, import path, and API shown
   on the page you just fetched. If the page and your memory disagree,
   the page wins.
5. If a fetch fails: retry that same URL once. If it still fails, stop
   and tell the user which URL died. Do not invent the missing component.

If a catalog HTML page returns almost no content, fetch that source's
markdown / llms.txt / `.md` docs URL instead (shadcn:
https://ui.shadcn.com/llms.txt; antd:
https://ant.design/components/`<name>`.md).

## Pick a source

| Need | Source |
|---|---|
| Charts, gauges, heatmaps, funnels, analytics | Bklit |
| Motion, hover/tap, layout, exit, scroll animation | Motion (`motion/react`) |
| Buttons, inputs, dialogs, tables, sidebars, toasts | shadcn/ui |
| Heavy enterprise forms, dense admin, antd-only widgets | Ant Design |
| Hero treatments, particle buttons, decorative blocks | Kokonut UI |
| Semantic native HTML / CSS-only controls | sashimi UI |

Do not put two primitive kits on the same control (no antd `Button`
wrapped in a shadcn `Button`). You may compose: shadcn/antd/sashimi
structure + Kokonut decoration + Motion motion + Bklit charts.

## Color lock

If the project is new **and** the user did not give a design, brand
palette, or token file:

- Keep each installed component's original colors, tokens, and theme
  CSS exactly as the official source ships them.
- Do not change a hex, hsl, oklch, shade, radius, or shadow "to match."
- Do not invent a custom palette. Do not restyle defaults.

If the user **did** give a design, apply their tokens and still use
only these six sources.

## Ask the user (2–4 times while working)

Do not dump a questionnaire up front. Ask 2 to 4 of these as real
decisions come up. Wait for the answer before that part of the UI.

- Are there any analysing charts?
- Should I use animations and motion on every place and action, or only
  on key interactions?
- Is this a marketing/landing surface, an app shell, or a data-dense
  admin?
- Do you have a brand/design, or should I keep each library's original
  colors untouched?
- Any forms that need heavy validation, dates, uploads, or steppers?

Skip a question only when the user already answered it in this thread.

## Add the real thing

After the component page is fetched:

- shadcn: `npx shadcn@latest add <name>` (name from the fetched docs)
- Kokonut: add the `@kokonutui` registry from https://kokonutui.com/docs,
  then `npx shadcn@latest add @kokonutui/<name>`
- Bklit: add the `@bklit` registry from https://bklit.com/docs/installation,
  then `npx shadcn@latest add @bklit/<name>`
- Ant Design: `npm install antd` as on https://ant.design/docs/react/introduce,
  then import the component whose page you fetched
- Motion: `npm install motion` as on https://motion.dev/docs/react-installation,
  then `import { motion } from "motion/react"`
- sashimi: follow https://yuto-hasegawa.github.io/sashimi-ui/getting-started/
  (`npm install sashimi-ui` or the CSS files that page names)

Do not hand-write a stand-in that "looks like" a library component.
If the official component exists, add it.

## Before you finish

Every UI import in the change must map to a URL fetched in this session.
If you cannot point at that fetch, fetch it now or remove the import.
