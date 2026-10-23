<script setup lang="ts">
import VueUiDonut, {
  type VueUiDonutConfig,
  type VueUiDonutDatasetItem,
} from 'vue-data-ui/vue-ui-donut';

defineProps<{
  dataset: VueUiDonutDatasetItem[];
  config: VueUiDonutConfig;
}>();
</script>

<template>
  <VueUiDonut :dataset="dataset" :config="config" />
</template>
