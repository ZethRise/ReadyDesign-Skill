# ReadyDesign Skill

An [Agent Skills](https://agentskills.io) package that forces AI coding agents to build UI from **six official component sources only**. The agent must web-fetch each site one-by-one and install the real components those pages ship. Memory, guesses, and "inspired by" rebuilds are not allowed.

Works with **Claude Code**, **Codex**, **Antigravity 2.0**, and **Grok**.

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

Clone this repo, then copy or symlink the skill folder into the host's discovery path. The folder name must stay `readydesign-skill`.

```bash
git clone https://github.com/ZethRise/ReadyDesign-Skill.git
cd ReadyDesign-Skill
```

| Host | Project path | User path |
| --- | --- | --- |
| Claude Code | `.claude/skills/readydesign-skill/` | `~/.claude/skills/readydesign-skill/` |
| Codex | `.agents/skills/readydesign-skill/` | `~/.agents/skills/readydesign-skill/` |
| Antigravity 2.0 | `.agents/skills/readydesign-skill/` | `~/.gemini/config/skills/readydesign-skill/` |
| Grok | `.grok/skills/readydesign-skill/` | `~/.grok/skills/readydesign-skill/` |

This repo already contains those project paths as links back to `SKILL.md`. To use it inside another project:

```bash
mkdir -p .claude/skills .agents/skills .grok/skills
ln -sfn /path/to/ReadyDesign-Skill .claude/skills/readydesign-skill
ln -sfn /path/to/ReadyDesign-Skill .agents/skills/readydesign-skill
ln -sfn /path/to/ReadyDesign-Skill .grok/skills/readydesign-skill
```

Or copy only `SKILL.md` into `<host-skills-dir>/readydesign-skill/SKILL.md`.

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
AGENTS.md         Pointer for Codex / Antigravity
CLAUDE.md         Pointer for Claude Code
LICENSE           MIT
CONTRIBUTING.md   How to change this skill
```

## License

[MIT](LICENSE)
