# ReadyDesign Skill

[![npm version](https://img.shields.io/npm/v/readydesign-skill?logo=npm&logoColor=white&label=npm)](https://www.npmjs.com/package/readydesign-skill)
[![npm downloads](https://img.shields.io/npm/dt/readydesign-skill?logo=npm&logoColor=white&label=downloads)](https://www.npmjs.com/package/readydesign-skill)
[![GitHub stars](https://img.shields.io/github/stars/ZethRise/ReadyDesign-Skill?style=flat&logo=github&label=stars)](https://github.com/ZethRise/ReadyDesign-Skill/stargazers)

[![Agent Skills](https://img.shields.io/badge/Agent_Skills-compatible-7c3aed)](https://agentskills.io)
[![Claude Code](https://img.shields.io/badge/Claude_Code-supported-d97706)](https://code.claude.com)
[![Codex](https://img.shields.io/badge/Codex-supported-10a37f)](https://developers.openai.com/codex)
[![Antigravity](https://img.shields.io/badge/Antigravity_2.0-supported-4285f4)](https://antigravity.google)
[![Grok](https://img.shields.io/badge/Grok-supported-111111)](https://grok.com)

An [Agent Skills](https://agentskills.io) package that forces AI coding agents to build UI from **six official component sources only**. The agent must web-fetch each site one-by-one and install the real components those pages ship. Memory, guesses, and "inspired by" rebuilds are not allowed.

**v1.0.1** on [npm](https://www.npmjs.com/package/readydesign-skill). Works with **Claude Code**, **Codex**, **Antigravity 2.0**, and **Grok**. Requires Node.js 18+.

## Allowed sources

| Source | Official site | Use for |
| --- | --- | --- |
| shadcn/ui | [ui.shadcn.com](https://ui.shadcn.com) | App primitives |
| Ant Design | [ant.design](https://ant.design) | Enterprise / data-dense controls |
| Kokonut UI | [kokonutui.com](https://kokonutui.com) | Decorative / marketing blocks |
| Motion | [motion.dev](https://motion.dev) | Animation and gestures |
| Bklit | [bklit.com](https://bklit.com) | Charts and data visualization |
| sashimi UI | [yuto-hasegawa.github.io/sashimi-ui](https://yuto-hasegawa.github.io/sashimi-ui/) | Native HTML/CSS |

The full fetch protocol, color lock, and question bank live in [`SKILL.md`](SKILL.md). Do not copy those rules into other files.

## Install

```bash
npx readydesign-skill
```

or

```bash
npm install readydesign-skill
```

Both write `SKILL.md` into the current project's agent folders. `npm install` does that on postinstall. Add `--global` to also install user-wide:

```bash
npx readydesign-skill --global
```

| Host | Project path | User path (`--global`) |
| --- | --- | --- |
| Claude Code | `.claude/skills/readydesign-skill/` | `~/.claude/skills/readydesign-skill/` |
| Codex | `.agents/skills/readydesign-skill/` | `~/.agents/skills/readydesign-skill/` |
| Antigravity 2.0 | `.agents/skills/readydesign-skill/` | `~/.gemini/config/skills/readydesign-skill/` |
| Grok | `.grok/skills/readydesign-skill/` | `~/.grok/skills/readydesign-skill/` |

Package: [readydesign-skill](https://www.npmjs.com/package/readydesign-skill) on npm. Source: this repo.

## Invoke

- Claude Code / Grok: `/readydesign-skill`
- Codex: `$readydesign-skill` or `/skills`
- Antigravity: mention `readydesign-skill` or ReadyDesign

Agents also load it automatically when the task matches the skill description (UI work, scaffolding a frontend, adding components).

## Rules the agent must follow

1. Fetch all six catalog pages **one URL at a time**. Then fetch each component page before installing it.
2. Install from the fetched page only. If a fetch fails twice, stop. Do not invent the component.
3. On a fresh project with no user design, keep each library's original colors and tokens. Do not change a shade.
4. Ask the user 2–4 times while working (charts? motion everywhere? landing vs admin? brand vs original colors?).

## Layout

```
SKILL.md          Agent instructions (single source of truth)
src/cli.ts        Installer CLI (TypeScript 7)
src/postinstall.cts  npm postinstall hook (TypeScript CommonJS)
AGENTS.md         Pointer for Codex / Antigravity
CLAUDE.md         Pointer for Claude Code
LICENSE           MIT
CONTRIBUTING.md   How to change this skill
```

## License

[MIT](LICENSE)
