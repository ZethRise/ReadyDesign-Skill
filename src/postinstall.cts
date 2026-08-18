import * as fs from "node:fs";
import * as path from "node:path";
import { spawnSync } from "node:child_process";

const cli = path.join(__dirname, "cli.js");
if (!fs.existsSync(cli)) {
  process.exit(0);
}

const result = spawnSync(process.execPath, [cli, "--from-postinstall"], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
