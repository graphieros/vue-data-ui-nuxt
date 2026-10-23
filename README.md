# Nuxt 4 Minimal Starter

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

This project uses pnpm 12.15.0, pinned in `package.json`. Install it using the
[pnpm installation instructions](https://pnpm.io/installation), then install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Use `pnpm install --frozen-lockfile` in CI to install the versions recorded in
`pnpm-lock.yaml`. Use `pnpm run upgrade` to update `vue-data-ui` and the lockfile;
version control operations are handled manually.

## Vue Data UI integration

**Only two vue-data-ui charts support SSR: VueUiXy and VueUiDonut**, using
`createStaticVueUiXy` and `createStaticVueUiDonut` respectively. **All other
vue-data-ui components require `<ClientOnly>`.** The static renderers return SVG
strings; interactive chart components still render inside `<ClientOnly>`.

- `shared/chartExamples.ts` supplies typed datasets and configurations, creating
  fresh objects for each page instance and server request. Each client/SSR pair
  uses the same configuration, including dimensions, font, and colors. Static
  renderer dimensions are derived from that same configuration.
- `server/api/chart-previews.get.ts` imports the renderers from
  `vue-data-ui/ssr/xy` and `vue-data-ui/ssr/donut`. These imports stay on the server.
- `pages/index.vue` uses `useFetch` to include the generated SVGs in the initial
  HTML and Nuxt payload. They remain visible in dedicated SSR cards beside the interactive client charts.
  Each pair uses a two-column grid that stacks on smaller screens. Without
  JavaScript, the static previews remain visible.
- `components/ExampleXy.client.vue` and `components/ExampleDonut.client.vue` use
  component-specific imports and Nuxt auto-imports. No registration plugin is needed.
- `nuxt.config.ts` loads `vue-data-ui/style.css` globally.

The fallback uses `v-html` only with SVG generated from fixed example data on our
server. Do not insert untrusted SVG or arbitrary user-provided markup there.
Static previews have no interactions; these become available after mount.

The donut uses the library's native data labels and connectors in both client
and SSR versions, without a DOM shim or label workaround.

### Native chart presentation

Both examples share colors, dimensions, scale, and padding, and use the library's
native legends and x-axis labels. Client charts expose their native `userOptions`
menus, tooltips, and legend interactions; static SVGs have no interactive controls.
Native layout and legend rendering can differ between the client and SSR renderers.

`ExampleXy.client.vue` normalizes line strokes to SVG units because the client
library otherwise scales non-scaling strokes differently from the static renderer.
Both chart configurations use a white background.
