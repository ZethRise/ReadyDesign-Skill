# Contributing

Thanks for helping keep ReadyDesign strict. The point of this skill is that agents fetch live official docs and install real components. Anything that lets them guess is a bug.

## Ground rules

- **One home per fact.** `SKILL.md` owns the allowlist, fetch protocol, color lock, questions, and install commands. `README.md`, `AGENTS.md`, and `CLAUDE.md` may point at it. They must not restate the rules.
- **Official URLs only.** If a catalog or install URL changes, confirm it by fetching the live page, then update `SKILL.md`. Do not add blog posts, YouTube, or memory-based component lists.
- **Stay on the Agent Skills spec.** Frontmatter may use `name`, `description`, `license`, `compatibility`, `metadata`, and `allowed-tools`. Do not add host-only keys (`when_to_use`, `disable-model-invocation`, `argument-hint`, …) or packaging/upload will fail on some hosts.
- **Name stays `readydesign-skill`.** Lowercase, digits, hyphens. The directory name must match.

## What to change where

| Change | File |
| --- | --- |
| Sources, fetch order, color lock, questions, install commands | `SKILL.md` |
| How humans install or invoke the skill | `README.md` |
| Host discovery pointers only | `AGENTS.md`, `CLAUDE.md` |
| Installer CLI | `src/cli.ts` (TypeScript 7; `npm run build` emits `dist/`) |
| License text | `LICENSE` |

Do not add a second component catalog in `references/` unless `SKILL.md` tells the agent when to load it. Agents must still fetch the live site.

## Pull requests

1. Fork [ZethRise/ReadyDesign-Skill](https://github.com/ZethRise/ReadyDesign-Skill) and branch from `main`.
2. Keep `SKILL.md` under 500 lines. Move extra material only if the agent is told exactly when to read it.
3. After editing `SKILL.md`, confirm:
   - `name` is `readydesign-skill`
   - `description` is ≤ 1024 characters and still lists trigger words
   - `compatibility` is ≤ 500 characters
4. If you touch `src/cli.ts`, run `npm install` and `npm run build`, then `node dist/cli.js --help`.
5. Open a pull request that says what changed and which official page you fetched to justify a URL or install-command edit.

Do not commit npm tokens or `.npmrc` auth lines. Publish with `npm run build && npm publish` after bumping `package.json`.

## Issues

Use issues for broken official URLs, a host that no longer discovers the skill, or a rule that lets an agent invent a component. Include the host (Claude Code, Codex, Antigravity, Grok) and the URL that failed.

## License

By contributing, you agree your changes are licensed under the [MIT License](LICENSE).
