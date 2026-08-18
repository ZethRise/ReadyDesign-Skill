# ReadyDesign `v1.0.1`

[![npm version](https://img.shields.io/npm/v/readydesign-skill?logo=npm&logoColor=white&label=npm)](https://www.npmjs.com/package/readydesign-skill)
[![npm downloads](https://img.shields.io/npm/dt/readydesign-skill?logo=npm&logoColor=white&label=downloads)](https://www.npmjs.com/package/readydesign-skill)
[![GitHub stars](https://img.shields.io/github/stars/ZethRise/ReadyDesign-Skill?style=flat&logo=github&label=stars)](https://github.com/ZethRise/ReadyDesign-Skill/stargazers)

[![Agent Skills](https://img.shields.io/badge/Agent_Skills-compatible-7c3aed)](https://agentskills.io)
[![Claude Code](https://img.shields.io/badge/Claude_Code-supported-d97706)](https://code.claude.com)
[![Codex](https://img.shields.io/badge/Codex-supported-10a37f)](https://developers.openai.com/codex)
[![Antigravity](https://img.shields.io/badge/Antigravity_2.0-supported-4285f4)](https://antigravity.google)
[![Grok](https://img.shields.io/badge/Grok-supported-111111)](https://grok.com)

**Six official component libraries. Live docs only. No guesses.**

ReadyDesign is an [Agent Skills](https://agentskills.io) package for AI coding agents. When it is installed, the agent may build UI from **these six sources and nothing else**. It must open each official site **one URL at a time**, then install the real component that page ships.

> Memory, training data, and “inspired by” rebuilds are not allowed.

---

## What it does

| The agent… | Instead of… |
| --- | --- |
| Fetches live catalogs, then each component page | Inventing APIs, class names, or props |
| Installs with the command on that page | Hand-writing a lookalike |
| Keeps each library’s original colors on a fresh project | Tweaking shades “to match” |
| Asks you 2–4 times while it works | Dumping a questionnaire up front |

If a fetch fails twice, it **stops** and tells you which URL died.

---

## The six sources

| Library | Site | Role |
| --- | --- | --- |
| **shadcn/ui** | [ui.shadcn.com](https://ui.shadcn.com) | Buttons, forms, dialogs, tables, sidebars |
| **Ant Design** | [ant.design](https://ant.design) | Enterprise / data-dense controls |
| **Kokonut UI** | [kokonutui.com](https://kokonutui.com) | Decorative and marketing blocks |
| **Motion** | [motion.dev](https://motion.dev) | Animation and gestures |
| **Bklit** | [bklit.com](https://bklit.com) | Charts and data visualization |
| **sashimi UI** | [sashimi-ui](https://yuto-hasegawa.github.io/sashimi-ui/) | Native HTML and CSS |

Nothing else is a UI source — not MUI, Chakra, Magic UI, GSAP, or a custom “shadcn-like” kit.

---

## Compatible hosts

| Host | Invoke |
| --- | --- |
| **Claude Code** | `/readydesign-skill` |
| **Codex** | `$readydesign-skill` |
| **Antigravity 2.0** | mention ReadyDesign |
| **Grok** | `/readydesign-skill` |

Agents also pick it up on their own when you ask to build, restyle, or scaffold a UI.

---

## Install

```bash
npx readydesign-skill
```

or

```bash
npm install readydesign-skill
```

User-wide (every project on this machine):

```bash
npx readydesign-skill --global
```

Requires **Node.js 18+**.

Package: [npmjs.com/package/readydesign-skill](https://www.npmjs.com/package/readydesign-skill)
Source: [github.com/ZethRise/ReadyDesign-Skill](https://github.com/ZethRise/ReadyDesign-Skill)

---

## Color lock

On a **new** project with **no** brand or design from you, original tokens stay as the library shipped them. Not a hex, hsl, oklch, or shade changes.

If you **do** give a design, the agent applies your tokens — still only from these six sources.

---

## What it will ask

Two to four times, as real decisions come up:

- Are there any analysing charts?
- Animations on every action, or only key interactions?
- Marketing landing, app shell, or data-dense admin?
- Your brand, or keep each library’s original colors?
- Heavy forms — validation, dates, uploads, steppers?

---

MIT licensed. The full agent protocol lives in [`SKILL.md`](SKILL.md).
