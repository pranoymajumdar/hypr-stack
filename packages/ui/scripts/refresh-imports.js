import { readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.resolve(__dirname, "../src/components");
const indexFile = path.resolve(__dirname, "../src/index.ts");

// Get all .tsx files in components folder
const files = readdirSync(componentsDir).filter((f) => f.endsWith(".tsx"));

// // Build exports lines
const exports = files
  .map((f) => `export * from "./components/${f.replace(".tsx", "")}";`)
  .join("\n");

// Write to index.ts
writeFileSync(indexFile, exports);

console.log("✅ packages/ui/src/index.ts updated with all component exports!");
