# Static DevOps Landing Page Design

## Goal
Replace the Hugo blog with a simple, modern, responsive personal landing page that presents Agustín's Cloud/DevOps experience and offers his CV as a downloadable PDF.

## Chosen approach
Use plain HTML and CSS, with no framework, JavaScript, package manager, or build step. GitHub Pages will publish the static site directly. This keeps local preview and future maintenance simple.

## Page content and visual direction
- A single-page layout with a modern DevOps/sysadmin aesthetic: dark background, restrained technical accents, clear typography, and responsive spacing.
- Intro identifies Agustín as a Cloud Engineer and briefly describes his production infrastructure and AI platform work.
- Experience section summarizes the provided Avature S.R.L. AI Orchestrator Team role (Mar 2026–Present, Remote): production cloud operations; IaC/configuration management; Kubernetes; CI/CD; monitoring/alerting; cost/capacity optimization; Linux/on-call; cross-functional service lifecycle work.
- Prominent download button links to the existing `static/files/Agustin_Aguilera_Conti_Cloud_Engineer_CV_2026.pdf`.
- GitHub and LinkedIn links reuse existing profile URLs.
- Remove blog and About-page navigation/content from the published experience.

## Deployment and local preview
Replace the Hugo workflow with a GitHub Pages workflow that uploads the repository's static site directory. Keep the CV PDF and favicon/assets needed by the page. Local preview uses a basic static HTTP server; no Hugo installation is needed.

## Acceptance checks
- Site works by opening the static page through a local HTTP server.
- Layout remains readable on mobile and desktop widths.
- CV button returns the existing PDF and downloads it.
- GitHub and LinkedIn links point to the existing accounts.
- GitHub Actions deploys the static output without Hugo.
- Existing unrelated working-tree changes, including the dirty theme submodule, remain untouched.

## Non-goals
No blog migration, About page, JavaScript behavior, CSS framework, analytics, or new dependencies. The existing Google Analytics tracking is intentionally removed because this static page has no JavaScript.
