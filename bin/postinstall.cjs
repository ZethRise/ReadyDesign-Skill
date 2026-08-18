"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const cli = path.join(__dirname, "..", "dist", "cli.js");
if (!fs.existsSync(cli)) process.exit(0);

const result = spawnSync(process.execPath, [cli, "--from-postinstall"], {
  stdio: "inherit",
});
process.exit(result.status ?? 1);
