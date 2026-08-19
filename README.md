# Barebones Eleventy Starter

A minimal, zero-dependency Eleventy (11ty) template structured with a `src/` directory and static asset passthrough.

## Quick Start

```bash
# Clone the repository
git clone -b main https://github.com/estiftole/11ty-template.git
cd 11ty-template

# Install dependencies
npm install

# Start local server (http://localhost:8080)
npm start
```

## Available Scripts

* `npm start` – Runs Eleventy in watch mode with a local dev server.
* `npm run build` – Compiles static production files to `_site/`.

## Folder Structure

```text
├── src/
│   ├── _data/          # Data
│   ├── _includes/      # Layouts and UI components
│   ├── assets/         # Static images, fonts, etc.
│   ├── css/            # Stylesheets (passthrough to _site/css)
│   ├── js/             # Client scripts (passthrough to _site/js)
│   └── index.md        # Home page
├── eleventy.config.js  # 11ty config & passthrough copy options
└── package.json

```
