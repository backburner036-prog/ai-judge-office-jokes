import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI Judge Laugh: Office Jokes — one original office joke, single line.
// FINAL: "per my last email" — the office's signature passive-aggressive phrase —
// reframed as a threat HR has to intervene in. Twist lands on the last word:
// "coworkers". Fresh angle (not Monday/photocopier), tight, instantly true.
// Output: one line, under 200 characters, no trailing newline.
const LINE =
  "I've written 'per my last email' so often that HR asked me to stop threatening my coworkers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
