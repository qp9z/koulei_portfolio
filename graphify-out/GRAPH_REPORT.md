# Graph Report - .  (2026-07-17)

## Corpus Check
- Corpus is ~8,346 words - fits in a single context window. You may not need a graph.

## Summary
- 70 nodes · 89 edges · 8 communities
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 14 edges (avg confidence: 0.88)
- Token cost: 58,951 input · 0 output

## Community Hubs (Navigation)
- Package & Build Config
- Component & Page Tree
- Site Content & Layout
- README Design Principles
- TypeScript Config
- Brand Identity & Icons
- Agent Dev-Server Docs

## God Nodes (most connected - your core abstractions)
1. `../components/Icon.astro` - 9 edges
2. `koulei.dev Portfolio` - 8 edges
3. `scripts` - 6 edges
4. `../layouts/Layout.astro` - 6 edges
5. `../components/Footer.astro` - 4 edges
6. `Favicon SVG (k monogram)` - 4 edges
7. `koulei Brand Identity` - 4 edges
8. `../components/About.astro` - 3 edges
9. `../components/Contact.astro` - 3 edges
10. `../components/Hero.astro` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Astro Dev Server (Background Mode)` --semantically_similar_to--> `Astro Dev Server (Background Mode) - CLAUDE.md`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Astro Documentation` --semantically_similar_to--> `Astro Documentation - CLAUDE.md`  [INFERRED] [semantically similar]
  AGENTS.md → CLAUDE.md
- `Astro Dev Server (Background Mode)` --conceptually_related_to--> `Astro Framework`  [INFERRED]
  AGENTS.md → README.md
- `Apple Touch Icon (k monogram)` --conceptually_related_to--> `Favicon SVG (k monogram)`  [INFERRED]
  public/apple-touch-icon.png → public/favicon.svg
- `Favicon 96px PNG (k monogram)` --conceptually_related_to--> `Favicon SVG (k monogram)`  [INFERRED]
  public/favicon-96.png → public/favicon.svg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Portfolio Source Structure (Pages, Layout, Components, Content, Styles)** — readme_pages, readme_layout_astro, readme_components, readme_site_ts, readme_global_css [EXTRACTED 1.00]
- **Portfolio Design Principles (Static, Accessible, Monochrome)** — readme_static_fast, readme_accessibility, readme_monochrome_theme [INFERRED 0.85]
- **koulei Brand Mark Variants (favicon / touch icon / OG)** — public_favicon_favicon_mark, public_favicon_96_favicon_raster, public_apple_touch_icon_touch_icon, public_og_og_preview [INFERRED 0.85]

## Communities (8 total, 0 thin omitted)

### Community 0 - "Package & Build Config"
Cohesion: 0.13
Nodes (14): astro, dependencies, astro, engines, node, name, scripts, astro (+6 more)

### Community 1 - "Component & Page Tree"
Cohesion: 0.32
Nodes (12): ../data/site, ../components/About.astro, ../components/Contact.astro, ../components/Footer.astro, year, ../components/Hero.astro, ../components/Icon.astro, string (+4 more)

### Community 2 - "Site Content & Layout"
Cohesion: 0.21
Nodes (9): ../styles/global.css, about, journey, projects, services, site, skills, socials (+1 more)

### Community 3 - "README Design Principles"
Cohesion: 0.20
Nodes (12): Abdulrhman Al-Smadi, Accessibility (Semantic Markup, Keyboard-friendly, Reduced Motion), Astro Framework, Astro Components (Nav, Hero, About, Skills, Projects, Journey, Contact, Footer, Icon), src/styles/global.css (Plain CSS Styling), koulei.dev Portfolio, src/layouts/Layout.astro, Monochrome Light/Dark Theme (+4 more)

### Community 4 - "TypeScript Config"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 5 - "Brand Identity & Icons"
Cohesion: 0.70
Nodes (5): koulei Brand Identity, Apple Touch Icon (k monogram), Favicon 96px PNG (k monogram), Favicon SVG (k monogram), OpenGraph Preview Image

### Community 6 - "Agent Dev-Server Docs"
Cohesion: 0.67
Nodes (4): Astro Documentation, Astro Dev Server (Background Mode), Astro Documentation - CLAUDE.md, Astro Dev Server (Background Mode) - CLAUDE.md

## Knowledge Gaps
- **26 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+21 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../layouts/Layout.astro` connect `Site Content & Layout` to `Component & Page Tree`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `../components/Icon.astro` connect `Component & Page Tree` to `Site Content & Layout`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _26 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package & Build Config` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._