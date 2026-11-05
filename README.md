# Developer portfolio — React + Vite

A responsive, single-page portfolio starter built with React, Vite, and plain CSS. No UI framework or icon dependency is required.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

## Personalize before publishing

1. Open `src/App.jsx` and update the `profile` object: name, real email, GitHub, LinkedIn, and location wording.
2. Replace the `DEV` wordmark in `src/App.jsx` with your name, initials, or personal mark.
3. Review `skillGroups`; remove anything you are not comfortable offering professionally.
4. Edit the `projects` array. Only add real screenshots, repository links, and deployed demos. The included social platform is labelled **in progress**; update or remove it if that is no longer accurate.
5. Review the service descriptions and only keep services you can currently deliver confidently.
6. Replace `YOUR-DOMAIN.example` in `public/robots.txt` and `public/sitemap.xml` with your real canonical domain.
7. Update the page title, description, and social metadata in `index.html`. Replace `public/og-cover.svg` if you want a personalized social preview image.
8. Add a real resume file only if you want to publish one; no fake resume link is included.

## Contact form status

The form validates required fields and opens the visitor's default email application using a `mailto:` link. It does **not** send data to a server, store submissions, or provide server-side spam protection. Before relying on it for client enquiries, connect a form provider or implement a backend endpoint with server-side validation, rate limiting, and spam protection. Do not put secret API keys in frontend code.

## SEO notes

The starter includes semantic section structure, a page description, Open Graph and X card metadata, a favicon, a basic sitemap, robots.txt, and a social preview SVG. Before launch, replace the example domain and add a canonical URL plus Person JSON-LD using only verified public details. A single-page portfolio does not need breadcrumb schema. Do not add ProfessionalService or Organization schema unless the corresponding real business/entity exists.

For reliable indexing of a React site, consider prerendering or static generation if search visibility becomes a priority. Submit the production sitemap in Google Search Console after deployment.

## Accessibility and performance

The interface includes labelled navigation, keyboard-operable controls, visible focus styling, form labels and feedback, reduced-motion support, and responsive layouts. The reveal effects use IntersectionObserver with a fallback. Run Lighthouse and test with keyboard navigation and a screen reader after adding your real content. The Google Fonts stylesheet is optional; self-host fonts or remove the external font request if you prefer a fully self-contained deployment.
