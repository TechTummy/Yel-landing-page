# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing/landing site for **YEL** (a youth empowerment camp program), built with Vite + React 18 and styled with Tailwind CSS. There is no router, no backend, and no test suite — it's one scrolling page assembled from section components.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # Production build -> dist/
npm run preview  # Serve the built dist/ locally
```

There is **no linter, formatter, or test runner** configured. `npm test` does not exist.

## Architecture

Render chain: `index.html` → [src/main.jsx](src/main.jsx) → [src/App.jsx](src/App.jsx) → [src/pages/Home.jsx](src/pages/Home.jsx).

- **[Home.jsx](src/pages/Home.jsx) is the whole page.** It imports every section component from `src/components/` and renders them in vertical order. Sections are turned on/off by commenting/uncommenting their JSX here (e.g. `HeroSection`, `Fire`, and `FaqSection` are currently commented out but still imported). When adding or removing a section, this is the file to edit.
- **[layouts/HomeLayout.jsx](src/layouts/HomeLayout.jsx)** is a width-constraining wrapper (`max-w-[1280px]`, responsive horizontal padding). Sections import it (often aliased as `Layout`) to keep content centered and aligned. Use it rather than re-implementing the max-width container.
- **`src/components/`** holds one file per section or reusable card. Some components have a co-located `.css` file (e.g. [rotatingCard.css](src/components/rotatingCard.css), [Testimonials.css](src/components/Testimonials.css), [infoCard.css](src/components/infoCard.css)) imported directly from the `.jsx`.

### Carousels (three different mechanisms)

This site uses three unrelated carousel implementations — match the existing one when editing a given section rather than introducing a fourth:

- **[rotatingCard.jsx](src/components/rotatingCard.jsx)** — a 3D CSS `rotateY` cube carousel on desktop (manual prev/next, `translateZ` positioning) that swaps to a **Swiper** slider below 768px via a `window.innerWidth` check. Card content is hardcoded in the `cards`/`cards2` arrays and rendered through [infoCard.jsx](src/components/infoCard.jsx).
- **[carouselCard.jsx](src/components/carouselCard.jsx)** — a WebGL `CircularGallery` built on **OGL** (raw `Renderer`/`Camera`/`Mesh`, custom shaders). Heavy and self-contained; treat as a vendored widget.
- **Testimonials** ([testimonialsSection.jsx](src/components/testimonialsSection.jsx)) use **react-slick** (`slick-carousel` CSS is imported globally in [main.jsx](src/main.jsx)).

## Styling conventions

- **Tailwind utility classes are the styling system.** Expect heavy use of arbitrary values and hardcoded hex colors inline, e.g. `bg-[#070322]` (the brand dark background) and gradient stops like `from-[#30077c]`. Many brand colors are inlined this way rather than going through the theme.
- [tailwind.config.js](tailwind.config.js) defines the few named theme extensions: colors (`red`, `dark`, `primary-dark`, `secondary-dark`), font families (`bricolage`, `nunito`, `roboto`, `space`, `montserrat`), `marqueeRight`/`marqueeLeft` animations, and a `glow` box-shadow. Prefer these tokens when one already fits.
- Fonts are pulled from Google Fonts via `@import` at the top of [src/index.css](src/index.css), which also holds the only global CSS (`@tailwind` directives + smooth scroll).

## Assets

Static assets live in `public/assets/` and are referenced with absolute root paths like `src="/assets/logo.png"` (Vite serves `public/` at `/`). Images, plus many `.mp4` videos used as autoplaying muted background loops in the gallery.

## Conventions & gotchas

- Components use **default exports**; filenames are camelCase/lowercase (`header.jsx`, `heroSection.jsx`, `footerText.jsx`), and imports omit the extension.
- **Large blocks of commented-out dead code are common** (e.g. an entire previous version of `GallerySection` sits commented at the top of [gallery.jsx](src/components/gallery.jsx)). Don't assume commented code is meant to be restored.
- A few **stale/duplicate files** exist alongside the active ones — e.g. [rotatingCard.js](src/components/rotatingCard.js) next to the used `rotatingCard.jsx`, and [CircularGallery.css](src/components/CircularGallery.css). Check [Home.jsx](src/pages/Home.jsx) and import statements to confirm what is actually rendered before editing.
- `@botpress/webchat` is in `package.json` but is **not currently wired into `src/`** — installed, unused.
- There is **no `.gitignore`**, so `node_modules/` and `dist/` are tracked in git. Avoid committing build output or dependency churn unless intended.
