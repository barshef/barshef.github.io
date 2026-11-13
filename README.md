# Adebayo Ishola: public profile

My one-page professional profile: who I am, what I do, the products I have built independently and the platforms I built in employment.
A static Next.js site, published to GitHub Pages.

## Run it

```
npm install
npm run dev        # http://localhost:3030
```

## Change what the page says

All of the text is data. Components are never edited to change wording.

| To change | Edit |
| --- | --- |
| Summary, title lines, links, experience, skills | `src/content/profile.ts` |
| A project, or to add one | `src/content/projects.ts` |
| The photo | `public/portrait.jpg` |

### Open to roles

In `src/content/profile.ts`, set `openToRoles` to `true`. The hero shows an "Open to new roles" badge and the contact section uses the
hiring wording. It is `false` by default.

### Download CV

The button is hidden by default: recruiters contact me and I send the CV tailored to the job. To show it, put the PDF in `public/cv/`
(everything there is public, so use a copy without a phone number), set `cvFile` to its name and `showCvDownload` to `true` in
`src/content/profile.ts`.

## Checks

```
npm run lint
npm run typecheck
npm test
npm run test:e2e
```

## Publish

A push to `main` runs `.github/workflows/deploy.yml`, which runs the checks, builds the static files into `out/` and publishes them to
GitHub Pages. In the repository's settings, Pages must have its source set to "GitHub Actions".
