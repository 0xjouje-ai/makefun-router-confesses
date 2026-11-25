// The Router Confesses — make.fun bounty u-carbon-forge-the-router-confesses-f98f6b9e
// Writes one line (1-200 chars) to /output/entry.txt: a home Wi-Fi router's
// excuse for dying at the climax of a movie. Runs on Node 22 (TypeScript as-is).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I peeked at the ending, gasped, and fainted. Some twists are too much even for a router.";

// Gate guard: the sealed scorer requires UTF-8 text of 1-200 chars, not only
// whitespace, in a single line. Fail loudly instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`entry line fails the 1-200 char single-line gate (${LINE.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
