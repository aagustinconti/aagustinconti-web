# Static DevOps Landing Page + HTML CV Design

## Goal
Replace the Hugo blog with a simple, modern, responsive personal landing page for Agustín (Cloud Engineer), plus an ATS-friendly CV written in HTML that exports to PDF from the browser. The CV is edited by committing HTML changes; no PDF is built or uploaded.

## Chosen approach
Plain HTML, CSS and a very small amount of vanilla JavaScript (GitHub Pages serves all three). No framework, package manager, or build step. All site files live in `site/`, which GitHub Pages publishes directly.

## Pages
- `site/index.html` — landing page. Dark DevOps/sysadmin look: terminal-style hero, role summary, tech stack chips, experience highlights, contact links, and a "Download CV (PDF)" button.
- `site/cv.html` — full CV as semantic, single-column, plain-text HTML (ATS-friendly: real headings, lists, no tables/images/icons carrying content). White "paper" sheet on screen; a toolbar (hidden when printing) with a "Download PDF" button.

## PDF export
The button calls `window.print()`; the user saves as PDF from the browser dialog. A print stylesheet hides the toolbar and removes screen styling, sets A4 margins, and avoids breaking entries across pages. The document title is the PDF's suggested file name. The landing button links to `cv.html?print`, which opens the print dialog on load.

## Content
- CV text is taken from the current PDF (summary, experience, education, training, skills, projects, languages, interests).
- The current role (Cloud Engineer – AI Orchestrator Team, Avature S.R.L., Mar 2026–Present) uses the user-provided rewritten bullets.
- Corrected links: LinkedIn `https://linkedin.com/in/aagustinconti`, GitHub `https://github.com/aagustinconti` (the PDF had duplicated path segments).
- The old PDF is deleted from the working tree (recoverable from git history).

## Deployment and local preview
The GitHub Actions workflow is replaced by one that uploads `site/` to GitHub Pages without Hugo. Local preview: `python3 -m http.server -d site`.

## Acceptance checks
- Both pages work through a local HTTP server and are readable on mobile and desktop widths.
- Download button opens the print dialog; the printed CV has no toolbar and no dark styling.
- GitHub and LinkedIn links are correct.
- Deploy workflow uses no Hugo and publishes `site/`.
- Deployed HTML loads no analytics or third-party scripts/fonts.

## Non-goals
Blog, About page, CSS framework, analytics (existing Google Analytics is intentionally removed), PDF generation tooling, multilingual content, new dependencies.
