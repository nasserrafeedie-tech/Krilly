// Inlines the prompt bank into game.html and writes a single self-contained index.html.
// Usage: node krillion/build.mjs
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const dataDir = join(dir, "data");
const data = readdirSync(dataDir).filter(f => f.endsWith(".js")).sort()
  .map(f => readFileSync(join(dataDir, f), "utf8")).join("\n");
if (data.includes("</script")) throw new Error("data contains </script");

const body = readFileSync(join(dir, "game.html"), "utf8").replace("/*DATA*/", () => data);
// game.html is a page body (the artifact host adds the document skeleton); index.html adds one for local play.
writeFileSync(join(dir, "body.html"), body);
writeFileSync(join(dir, "index.html"),
  `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body>\n${body}\n</body>\n</html>\n`);

globalThis.window = {};
for (const f of readdirSync(dataDir).filter(f => f.endsWith(".js"))) new Function(readFileSync(join(dataDir, f), "utf8"))();
const prompts = window.KRILL_DATA;
const answers = prompts.reduce((n, p) => n + Object.values(p.answers).flat().length, 0);
console.log(`built: ${prompts.length} prompts, ${answers} answers`);
