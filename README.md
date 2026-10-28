# Nuxt 4 Minimal Starter

Look at the [Nuxt 4 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## useParentSize example

The home page includes an interactive example of `useParentSize` (vue-data-ui
3.28.6+) in `components/ExampleParentSize.client.vue`. Drag the container's
bottom-right corner to resize the chart's parent. The controls adjust
`offsetHeight`, `scale`, and `observe`; disable `observe` to pause size tracking.

```ts
import { useParentSize } from 'vue-data-ui/composables';

const chartElement = useTemplateRef<HTMLDivElement>('chartElement');
const offsetHeight = ref(0);
const scale = ref(1);
const observe = ref(true);
const { width, height } = useParentSize(chartElement, { offsetHeight, scale, observe });
```

Place `ref="chartElement"` on a child of a container with an explicit size, then
use the returned computed refs in a computed chart configuration (`chart.width`
and `chart.height` for `VueUiXy`). The example runs inside `ClientOnly` and waits
for dimensions before rendering the chart. Resize observation and cleanup are
automatic; dimensions are capped at the viewport by default. Options include
reactive `scale`, `offsetWidth`, `offsetHeight`, `maxWidth`, `maxHeight`, and
`observe` values.

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
