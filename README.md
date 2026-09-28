# Abdul Muntaqim | Senior QA Automation Engineer Portfolio

A premium, responsive portfolio website for Abdul Muntaqim, showcasing automation engineering depth, quality systems, CI/CD workflows, API and UI automation, and release confidence.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Playwright (for automated portfolio smoke tests)

## Features

- Premium dark engineering brand aesthetic
- Responsive layout across desktop and mobile
- Story-driven portfolio sections with clear professional narrative
- Experience timeline reflecting factual CV details
- Case studies based on actual provided experience
- Automation architecture and CI/CD visual storytelling
- Downloadable resume placeholder at /public/resume/Abdul-Muntaqim-Resume.pdf
- SEO metadata and social preview configuration
- Accessibility-conscious UI patterns and focus states
- Playwright smoke suite covering page load, navigation, and key sections

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
```

## Testing

```bash
npx playwright test
```

## Deployment

This project supports static export through Next.js. It is ready for deployment to platforms such as Vercel or GitHub Pages with the existing export configuration.

For a Vercel deployment:

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.

## Content updates

Portfolio content is stored in the data folder:

- data/profile.ts
- data/experience.ts
- data/projects.ts
- data/skills.ts
- data/certifications.ts

Update these files when personal details, experience, or project content needs to be refreshed.

## Resume placeholder

A placeholder resume file exists at:

/public/resume/Abdul-Muntaqim-Resume.pdf

Replace it with the real PDF when available.

## QA notes

The portfolio includes automated smoke tests that confirm the homepage loads and the main sections render correctly. The visual and content direction aims to communicate Abdul's engineering credibility without inventing unsupported claims.
