# Sippy

Sippy is a minimal local-only water tracking PWA. It runs as a single static app with no account, backend, or server-side data.

## Local development

Install dependencies:

```sh
npm install
```

Run the acceptance tests:

```sh
npm test
```

Open the app directly from `index.html`, or serve the folder with any static file server.

## Deployment

The project is configured for Netlify. The publish directory is the repository root, and all routes fall back to `index.html`.

## PWA

The app includes a web manifest, placeholder PNG icons, and an offline-first service worker for the app shell and fonts.
