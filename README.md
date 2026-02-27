# ZakitPro - IT Desktop Engineering Blog

IT Desktop Engineering Blog built with Astro, featuring:
- Technical articles on Windows troubleshooting, scripting, deployment, security, packaging, and career
- Downloadable PowerShell scripts
- Dark mode support
- Search functionality
- RSS feed

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [MDX](https://mdxjs.com) - Markdown + JSX
- [Shiki](https://shiki.matsu.io) - Syntax highlighting
- [Pagefind](https://pagefind.app) - Static search

## Writing Content

### Articles
Create MDX files in `src/content/articles/` with frontmatter:

```yaml
---
title: "Your Article Title"
slug: "your-article-slug"
description: "A brief description"
publishedAt: "2026-02-27"
pillar: troubleshooting  # troubleshooting | scripting | deployment | security | packaging | career
difficulty: junior  # junior | mid | senior
type: how-to  # war-story | deep-dive | how-to | script-drop | error-reference | opinion | career-guide
tags: ["tag1", "tag2"]
draft: false
---
```

### Scripts
Create MDX files in `src/content/scripts/`:

```yaml
---
title: "Script Name"
slug: "script-slug"
description: "What the script does"
language: powershell  # powershell | cmd | batch | registry
pillar: scripting
publishedAt: "2026-02-27"
draft: false
---
```

## Deployment

Deploy to Cloudflare Pages:
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `pnpm build`
3. Set output directory: `dist`
4. Add environment variable: `NODE_VERSION` = `20`

## License

MIT
