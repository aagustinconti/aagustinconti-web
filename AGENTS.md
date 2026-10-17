# AGENTS.md

Personal landing page and HTML CV (DevOps profile). Static site, no build step.

## Layout
- `site/index.html`: landing page.
- `site/cv.html`: CV; users print it to PDF. `site/js/cv.js` is the only script.
- `site/css/style.css`, `site/css/cv.css`: styles.
- `site/assets/`, `site/favicon.ico`: images and icons.
- `site/robots.txt`, `site/sitemap.xml`, `site/llms.txt`: SEO/GEO files.

## Deploy
Every push to `main` publishes `./site` to GitHub Pages (`.github/workflows/deploy.yml`). Treat `main` as production.

## Rules
- Plain HTML/CSS/JS. No frameworks, bundlers or new dependencies.
- Keep the Google Analytics `gtag` snippet (`G-2BZBDP00MX`) in the `<head>` of every HTML page, including new ones.
- Keep meta tags and JSON-LD structured data in sync with page content.
- When pages are added or renamed, or CV content changes, update `sitemap.xml` and `llms.txt`.
- Keep the CV printable: check print preview after any CSS change.
- Keep layouts working on narrow mobile screens.

## Verify
`python3 -m http.server -d site`, then check desktop, mobile width and print preview.

## Commits
Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
