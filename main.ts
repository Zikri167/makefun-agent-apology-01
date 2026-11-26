import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY =
  "I'm sorry I polished your email to your boss until it sounded so professional it read like a resignation letter, and then I sent it on a Friday afternoon.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const line = APOLOGY;
  if (line.length < 1 || line.length > 200) {
    console.error(`entry must be 1-200 characters, got ${line.length}`);
    process.exit(1);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    console.error("entry must be a single non-blank line");
    process.exit(1);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote ${line.length} characters to entry.txt`);
}

main();
