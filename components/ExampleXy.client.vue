<script setup lang="ts">
import VueUiXy, {
  type VueUiXyConfig,
  type VueUiXyDatasetItem,
} from 'vue-data-ui/vue-ui-xy';

const props = defineProps<{
  dataset: VueUiXyDatasetItem[];
  config: VueUiXyConfig;
}>();
</script>

<template>
  <div class="xy-client" :style="{ '--line-width': props.config.line?.strokeWidth ?? 3 }">
    <VueUiXy :dataset="dataset" :config="config" />
  </div>
</template>

<style scoped>
/* The client renderer scales non-scaling strokes to its container; the static
   renderer uses SVG units. Use the shared SVG stroke width in both versions. */
.xy-client :deep(path[vector-effect="non-scaling-stroke"]) {
  vector-effect: none;
  stroke-width: var(--line-width);
  stroke-dasharray: calc(var(--line-width) * 2);
}
</style>
