
# Bandage — Shopping Cart

A responsive product listing + shopping cart built with React, Vite, TypeScript,
Redux Toolkit, and RTK Query against the [DummyJSON Products API](https://dummyjson.com/docs/products).

## Stack

- React 19 + Vite + TypeScript
- Redux Toolkit (`cart` slice) for cart state
- RTK Query (`productsApi`) for data fetching, caching, and pagination
- Vanilla CSS (CSS custom properties for theming, no framework)

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-checks (tsc -b) then produces a production build in dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  app/                    Redux store + typed hooks
  features/
    products/              RTK Query API slice (getProducts, pagination via merge)
    cart/                   cartSlice (add/remove/qty), selectors, localStorage persistence
  components/              Header, Footer, ProductCard, CartItemRow (+ co-located CSS)
  pages/                    HomePage (product grid), CartPage, PlaceholderPage
  styles/global.css        Design tokens (colors, spacing, radius) + base styles
  types/product.ts          Shared Product / ProductsResponse types
```

## Key decisions

- **Cart persistence**: cart state is mirrored to `localStorage` on every mutation
  and rehydrated on load, so a refresh doesn't lose the cart.
- **Pagination**: `getProducts` uses RTK Query's `serializeQueryArgs` + `merge` to
  append pages under one cache entry, powering "Load More Products".
- **Responsive cart**: the cart list is a CSS grid that behaves like a table on
  desktop (≥640px) and collapses into stacked cards with inline labels on mobile,
  via a single breakpoint in `CartPage.css` — no separate mobile markup.
- **Pricing**: DummyJSON returns `price` + `discountPercentage`; the discounted
  unit price is computed once when an item is added to the cart, so later
  price changes upstream don't retroactively change what's already in the cart.

## Environment

No environment variables or API keys are required — the DummyJSON API is public
and called directly from `productsApi.ts` via `baseUrl: "https://dummyjson.com/"`.

## Deploying to Netlify

**Option A — CLI**

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

**Option B — Git integration**

1. Push this project to a GitHub/GitLab repo.
2. In Netlify: *Add new site → Import an existing project*, pick the repo.
3. Build command: `npm run build`, Publish directory: `dist` (already set in `netlify.toml`).
4. Deploy.

`netlify.toml` includes a SPA redirect rule so refreshing `/cart` doesn't 404.# ecommerceWeb

