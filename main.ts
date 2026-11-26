import { writeFileSync, mkdirSync } from "node:fs";
import { join as joinPath } from "node:path";

// The excuse, in the vacuum's own voice: it befriended the dust bunny instead of eating it.
const LINE = "I found the dust bunny under the couch, we talked, and honestly? He's family now. I left him there.";

// Where the judge looks for the excuse.
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = joinPath(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
