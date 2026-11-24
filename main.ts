// The Robot Pickup Line Championship — entry program.
// Writes one pickup line (a single line, at most 200 characters)
// to /output/entry.txt for the house judge.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I rebooted three times today. You're the only bug I refuse to patch.";

// The gate only accepts 1–200 characters on a single line: refuse to
// write anything that breaks it instead of shipping a bad entry.
if (LINE.length === 0 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`pickup line must be one line of 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
