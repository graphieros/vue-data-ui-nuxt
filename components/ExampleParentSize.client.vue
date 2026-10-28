<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";
import { useParentSize } from "vue-data-ui/composables";
import { createChartExamples } from "#shared/chartExamples";

const offsetHeight = ref(-80);
const scale = ref(1);
const observe = ref(true);
const chartElement = useTemplateRef<HTMLDivElement>("chartElement");
// The referenced element's parent is measured, not the element itself.
// ResizeObserver tracks changes; the composable cleans up on unmount.
const { width, height } = useParentSize(chartElement, {
  offsetHeight,
  scale,
  observe,
});
const { xyConfig, xyDataset } = createChartExamples();
const config = computed(() => ({
  ...xyConfig,
  chart: {
    ...xyConfig.chart,
    width: width.value,
    height: height.value,
  },
}));
</script>

<template>
  <article class="parent-size-example">
    <div class="controls">
      <label>
        offsetHeight: {{ offsetHeight }}px
        <input
          v-model.number="offsetHeight"
          type="range"
          min="-200"
          max="200"
          step="10"
        />
      </label>
      <label>
        scale: {{ scale }}
        <input
          v-model.number="scale"
          type="range"
          min="0.25"
          max="1.5"
          step="0.05"
        />
      </label>
      <label class="observe-control">
        <input v-model="observe" type="checkbox" />
        observe
      </label>
    </div>
    <p>
      Drag the container’s bottom-right corner to resize it. Disable observe to
      pause size tracking.
    </p>
    <p role="status">
      Chart size after offset, scale, and viewport limits:
      {{ width === undefined ? "…" : Math.round(width) }} ×
      {{ height === undefined ? "…" : Math.round(height) }} px
    </p>
    <div class="sized-parent">
      <div ref="chartElement">
        <ExampleXy
          v-if="width && height"
          :dataset="xyDataset"
          :config="config"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>
.parent-size-example {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: #fff;
}
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
}
label {
  display: grid;
  gap: 0.25rem;
}
.sized-parent {
  width: 100%;
  height: 360px;
  min-width: 240px;
  min-height: 240px;
  max-width: 100%;
  resize: both;
  overflow: auto;
  outline: 2px dashed #5f8bee;
}
.observe-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
