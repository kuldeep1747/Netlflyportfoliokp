# Kuldeep Patel — Full-Stack Developer Portfolio

## Project Overview
A static, single-page portfolio built with React + Vite + Tailwind CSS. No backend, database or paid API is required.

## Features
Sticky glass navbar with active-section indicator and animated mobile menu · animated hero with typed roles · interactive categorised skills (honest level labels, no fake percentages) · experience timeline · project cards · AI & Python section with lightweight canvas network · SDLC timeline · services · contact form (Netlify Forms) · dark/light theme saved in localStorage · scroll-reveal and counter animations · `prefers-reduced-motion` support · SEO (Open Graph, Twitter, JSON-LD) · accessible markup.

## Technology Stack
React 18, Vite 5, Tailwind CSS 3, Lucide React, Netlify.

## Installation
```bash
npm install
```

## Development
```bash
npm run dev
```

## Production Build
```bash
npm run build     # output in dist/
npm run preview   # test the build locally
```

## Netlify Deployment
1. Push this folder to GitHub.
2. Netlify → Add new site → Import from Git → pick the repo.
3. Settings are read from `netlify.toml` (build: `npm run build`, publish: `dist`, SPA fallback included).
4. After the first deploy, open **Forms** in the Netlify dashboard to see messages (enable email notifications there).
5. Update the placeholder `https://your-site.netlify.app/` in `index.html` (canonical, og:url, JSON-LD) with your real URL.

> Contact form note: Netlify Forms works only on the deployed site, not on `npm run dev`.

## Customization
- Personal info: `src/config/siteConfig.js`
- Skills, experience, projects, services text: `src/data/portfolioData.js`
- Skill proficiency labels: `skillLevels` in `portfolioData.js` (unlisted skills default to "Strong"; adjust honestly).
- Colors/theme: CSS variables at the top of `src/index.css`.

## Contact Configuration
Fill `email`, `phone`, `linkedin`, `github` in `siteConfig.js`. Empty fields are hidden automatically; the GitHub button shows a disabled state until `github` is set.

## Resume Configuration
Place your PDF at `public/resume.pdf`. If the file is missing, the button shows "Resume coming soon" instead of breaking.
