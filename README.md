# Krilly

Unlimited rare-answer trivia, inspired by the daily game Krillion. Each dive gives you seven prompts like "Name a cheese" with 25 seconds each. Obvious answers keep you near the surface; rare-but-correct answers take you deep.

**Play:** open `index.html` in any browser. It's one self-contained file and needs no server. To play from your phone, turn on GitHub Pages for this repo (Settings → Pages → deploy from `main`, root folder).

## Modes
- **New Dive** — 7 random prompts, 25 s each. A wrong guess costs 3 s; your first correct answer locks in.
- **Endless Dive** — one air tank. Correct answers refill it (rarer answers refill more), skips and misses drain it.
- **Themed Packs** — a dive within one topic.

## Scoring
| Tier | Points |
|---|---|
| Plankton | 10 |
| Schooler | 20 |
| Off the Reef | 35 |
| Rare Catch | 55 |
| Deep Cut | 80 |
| One in a Krillion | 100 |

Every point is 10 m of depth, so a perfect dive reaches 7,000 m. Rarity tiers are curated estimates, not live player data. Typos, plurals, accents and a leading "the" are forgiven.

## Editing
- `game.html` — the game (page body; styles and engine).
- `data/dives.js` — 678 prompts from real Krillion daily dives #1–#104 (some reworded from summaries) plus 44 more in the same style, about 127,000 answers. `data/classic-*.js` — an easier starter set, played as the Classics pack. Each prompt lists answers by tier 1–6; `|` separates accepted spellings, the first is shown.
- `node build.mjs` — inlines the data and writes `index.html`.
