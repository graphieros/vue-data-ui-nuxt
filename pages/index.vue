<script setup lang="ts">
import { createChartExamples } from "#shared/chartExamples";
import { componentDocumentation } from "#shared/componentDocumentation";

useSeoMeta({
  title: "Vue Data UI · Nuxt examples",
  description:
    "Interactive and server-rendered XY and donut charts side by side.",
});

const { xyConfig, xyDataset, donutConfig, donutDataset } =
  createChartExamples();
// Nuxt transfers the server result in its payload, avoiding a hydration refetch.
const { data: previews, error } = await useFetch("/api/chart-previews");
</script>

<template>
  <main class="examples">
    <header>
      <h1>Vue Data UI + Nuxt</h1>
      <p>
        Note: only <code>VueUiXy</code> and <code>VueUiDonut</code> support SSR
        in vue-data-ui, through <code>createStaticVueUiXy</code> and
        <code>createStaticVueUiDonut</code>. All other components require
        <code>ClientOnly</code>.
      </p>
    </header>

    <section aria-labelledby="xy-title">
      <h2 id="xy-title">Revenue and target</h2>
      <p>
        A mixed bar and line chart comparing revenue with its target over six
        periods.
      </p>
      <div class="chart-grid">
        <article class="chart-card" aria-labelledby="xy-client-title">
          <h3 id="xy-client-title">Client · Interactive</h3>
          <div class="chart">
            <ClientOnly>
              <ExampleXy :dataset="xyDataset" :config="xyConfig" />
              <template #fallback>
                <p role="status">Loading interactive chart…</p>
              </template>
            </ClientOnly>
          </div>
        </article>
        <article class="chart-card" aria-labelledby="xy-ssr-title">
          <h3 id="xy-ssr-title">SSR · Static SVG</h3>
          <div class="chart">
            <!-- Generated on our server from fixed data; remains visible after mount. -->
            <div
              v-if="previews?.xy"
              class="static-chart"
              v-html="previews.xy"
            />
            <p v-else role="status">
              {{
                error
                  ? "Server preview unavailable."
                  : "Loading server preview…"
              }}
            </p>
          </div>
        </article>
      </div>
    </section>

    <section aria-labelledby="donut-title">
      <h2 id="donut-title">Revenue sources</h2>
      <p>
        Subscriptions account for 58%, services for 27%, and other sources for
        15%.
      </p>
      <div class="chart-grid">
        <article class="chart-card" aria-labelledby="donut-client-title">
          <h3 id="donut-client-title">Client · Interactive</h3>
          <div class="chart">
            <ClientOnly>
              <ExampleDonut :dataset="donutDataset" :config="donutConfig" />
              <template #fallback>
                <p role="status">Loading interactive chart…</p>
              </template>
            </ClientOnly>
          </div>
        </article>
        <article class="chart-card" aria-labelledby="donut-ssr-title">
          <h3 id="donut-ssr-title">SSR · Static SVG</h3>
          <div class="chart">
            <!-- Generated on our server from fixed data; remains visible after mount. -->
            <div
              v-if="previews?.donut"
              class="static-chart"
              v-html="previews.donut"
            />
            <p v-else role="status">
              {{
                error
                  ? "Server preview unavailable."
                  : "Loading server preview…"
              }}
            </p>
          </div>
        </article>
      </div>
    </section>
    <section aria-labelledby="components-title">
      <h2 id="components-title">All Vue Data UI components</h2>
      <p>
        Browse the public components in this project's vue-data-ui version. Each
        link opens its official documentation. The pattern components share the
        patterns guide.
      </p>
      <ul class="component-list">
        <li v-for="component in componentDocumentation" :key="component.name">
          <a :href="component.href" target="_blank" rel="noopener noreferrer">
            {{ component.name
            }}<span class="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.examples {
  max-width: 90rem;
  margin-inline: auto;
  padding: 2rem 1rem;
  line-height: 1.6;
}
section {
  margin-top: 3rem;
}
.chart-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}
.chart-card {
  min-width: 0;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: #fff;
}
.chart-card h3 {
  margin-top: 0;
}
.chart {
  min-height: 16rem;
}
@media (max-width: 48rem) {
  .chart-grid {
    grid-template-columns: 1fr;
  }
}
.chart :deep(svg[viewBox="0 0 800 500"]) {
  display: block;
  width: 100%;
  height: auto;
}
.component-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
  gap: 0.5rem 1.5rem;
  padding: 0;
  list-style: none;
}
.component-list a {
  display: block;
  padding: 0.5rem 0.75rem;
  color: #2452a6;
  border-radius: 0.25rem;
  overflow-wrap: anywhere;
  text-underline-offset: 0.2em;
}
.component-list a:hover {
  background: #f1f5f9;
}
.component-list a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
</style>
