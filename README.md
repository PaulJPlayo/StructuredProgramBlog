# Structured Programs Blog

This repository contains a one-page static academic-style blog site built with plain HTML, CSS, and vanilla JavaScript. It is designed to deploy on Cloudflare Pages with no build step.

## Project structure

- `index.html`: Main one-page article, table of contents, callouts, and further reading links.
- `styles.css`: Shared design tokens, layout, typography, focus states, and responsive styling.
- `script.js`: Small progressive enhancement for the footer year and active table-of-contents state.
- `404.html`: Visually consistent not-found page.
- `favicon.svg`: Branded SVG favicon.
- `content/blog-copy.md`: Approved source article copy used for the page content.
- `AGENTS.md`: Permanent project rules and visual constraints for future edits.

## Local preview

Open `index.html` directly in a browser to preview the site locally. No build tool, package manager, or local server is required.

## Git setup

Use these commands to create the repository locally and push it to GitHub:

```bash
git init
git add .
git commit -m "Initial blog site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Deploy on Cloudflare Pages from GitHub

1. Push the project to a GitHub repository.
2. In Cloudflare Pages, create a new project and connect the GitHub repository.
3. Configure the deployment settings exactly like this:
   - Production branch: `main`
   - Build command: `exit 0`
   - Build output directory: `.`
4. Save the settings and start the first deployment.

This site is already set up as a no-build static site, so `index.html` stays at the repo root and Cloudflare can serve the project directly.

## Direct upload fallback

If you want to deploy without connecting GitHub, use Wrangler from the project root:

```bash
npx wrangler pages project create
npx wrangler pages deploy .
```

Wrangler will prompt for the Cloudflare account, project name, and authentication if needed.

## Deployment notes

- `index.html` must remain at the top level of the repository.
- No framework, bundler, package manager, or build process is required.
- `404.html` is included for a consistent static fallback page.

## Course materials / further reading

- https://people.cs.vt.edu/~shaffer/Book/JAVA3elatest.pdf
- https://learn.zybooks.com/zybook/CPT307:_Data_Structures_&_Algorithms_(INE2610A)/chapter/1/section/7
- https://www.cs.utexas.edu/~djimenez/utsa/cs1723/lecture2.html
