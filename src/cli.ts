#!/usr/bin/env node

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

const SKILL_NAME = "readydesign-skill";
const PKG_ROOT = path.join(__dirname, "..");
const SKILL_SRC = path.join(PKG_ROOT, "SKILL.md");

const PROJECT_SKILL_DIRS = [
  [".claude", "skills", SKILL_NAME],
  [".agents", "skills", SKILL_NAME],
  [".agent", "skills", SKILL_NAME],
  [".codex", "skills", SKILL_NAME],
  [".grok", "skills", SKILL_NAME],
] as const;

const GLOBAL_SKILL_DIRS = [
  [".claude", "skills", SKILL_NAME],
  [".agents", "skills", SKILL_NAME],
  [".codex", "skills", SKILL_NAME],
  [".gemini", "config", "skills", SKILL_NAME],
  [".grok", "skills", SKILL_NAME],
] as const;

const POINTER_MARK = "readydesign-skill";

type PointerAction = "kept" | "appended" | "created";

interface CliOptions {
  global: boolean;
  fromPostinstall: boolean;
  help: boolean;
  projectDir: string;
}

function usage(): void {
  process.stdout.write(`ReadyDesign — install the agent skill into this project.

Usage:
  npx readydesign-skill
  npx readydesign-skill --global
  npm install readydesign-skill

Options:
  --global, -g     Also write user-level skill dirs (all hosts)
  --project-dir D  Install into D instead of the current directory
  --help, -h       Show this help
`);
}

function parseArgs(argv: readonly string[]): CliOptions {
  const opts: CliOptions = {
    global: false,
    fromPostinstall: false,
    help: false,
    projectDir: process.env.INIT_CWD ?? process.cwd(),
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "--help":
      case "-h":
        opts.help = true;
        break;
      case "--global":
      case "-g":
        opts.global = true;
        break;
      case "--from-postinstall":
        opts.fromPostinstall = true;
        break;
      case "--project-dir": {
        const next = argv[++i];
        if (!next) {
          throw new Error("--project-dir requires a path");
        }
        opts.projectDir = next;
        break;
      }
      case "init":
      case "install":
        break;
      default:
        process.stderr.write(`Unknown argument: ${arg}\n`);
        usage();
        process.exit(1);
    }
  }

  return opts;
}

function isInsideOwnPackage(dir: string): boolean {
  try {
    const raw = fs.readFileSync(path.join(dir, "package.json"), "utf8");
    const pkg: unknown = JSON.parse(raw);
    return (
      typeof pkg === "object" &&
      pkg !== null &&
      "name" in pkg &&
      (pkg as { name: unknown }).name === SKILL_NAME
    );
  } catch {
    return false;
  }
}

function writeSkill(destDir: string, src: string): string {
  fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, "SKILL.md");
  fs.copyFileSync(src, dest);
  return dest;
}

function ensurePointer(filePath: string, body: string): PointerAction {
  if (fs.existsSync(filePath)) {
    const current = fs.readFileSync(filePath, "utf8");
    if (current.includes(POINTER_MARK)) return "kept";
    fs.appendFileSync(filePath, `\n\n${body.trim()}\n`);
    return "appended";
  }
  fs.writeFileSync(filePath, `${body.trim()}\n`);
  return "created";
}

function install(opts: CliOptions): string[] {
  if (!fs.existsSync(SKILL_SRC)) {
    throw new Error(`Missing SKILL.md next to the package (${SKILL_SRC})`);
  }

  const projectDir = path.resolve(opts.projectDir);
  const written: string[] = [];

  if (opts.fromPostinstall && isInsideOwnPackage(projectDir)) {
    return written;
  }

  for (const parts of PROJECT_SKILL_DIRS) {
    written.push(writeSkill(path.join(projectDir, ...parts), SKILL_SRC));
  }

  written.push(
    `${path.join(projectDir, "AGENTS.md")} ${ensurePointer(
      path.join(projectDir, "AGENTS.md"),
      `# ReadyDesign

When building, restyling, or scaffolding UI, load and follow
\`${SKILL_NAME}\`. Do not invent components or colors.
Install with \`npx ${SKILL_NAME}\` or \`npm install ${SKILL_NAME}\`.

- Codex / Antigravity: \`.agents/skills/${SKILL_NAME}/SKILL.md\`
- Claude Code: \`.claude/skills/${SKILL_NAME}/SKILL.md\`
- Invoke: \`/${SKILL_NAME}\` or \`$${SKILL_NAME}\`
`
    )}`
  );

  written.push(
    `${path.join(projectDir, "CLAUDE.md")} ${ensurePointer(
      path.join(projectDir, "CLAUDE.md"),
      `# ReadyDesign

When building, restyling, or scaffolding UI, load and follow
\`.claude/skills/${SKILL_NAME}/SKILL.md\`. Do not invent components
or colors. Install with \`npx ${SKILL_NAME}\` or
\`npm install ${SKILL_NAME}\`.

Invoke with \`/${SKILL_NAME}\`.
`
    )}`
  );

  if (opts.global) {
    const home = os.homedir();
    for (const parts of GLOBAL_SKILL_DIRS) {
      written.push(writeSkill(path.join(home, ...parts), SKILL_SRC));
    }
  }

  return written;
}

function main(): void {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    usage();
    process.exit(0);
  }

  try {
    const written = install(opts);
    if (written.length === 0) {
      process.exit(0);
    }
    process.stdout.write(
      `ReadyDesign installed (${written.length} paths).\n` +
        `Invoke with /${SKILL_NAME} or $${SKILL_NAME}.\n`
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`readydesign-skill: ${message}\n`);
    process.exit(opts.fromPostinstall ? 0 : 1);
  }
}

main();
