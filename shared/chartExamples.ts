import type { VueUiXyConfig, VueUiXyDatasetItem } from 'vue-data-ui/vue-ui-xy';
import type { VueUiDonutConfig, VueUiDonutDatasetItem } from 'vue-data-ui/vue-ui-donut';

// Fresh objects keep chart instances and server requests independent.
export function createChartExamples() {
  const xyConfig: VueUiXyConfig = {
    devHints: { enable: false },
    bar: { showTransition: false, useGradient: false },
    line: { showTransition: false, useGradient: false, strokeWidth: 3, dot: { strokeWidth: 0 } },
    chart: {
      width: 800,
      height: 500,
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#FFFFFF',
      color: '#1F2937',
      title: { show: false },
      userOptions: { show: true },
      legend: { show: true },
      padding: { top: 12, right: 12, bottom: 12, left: 12 },
      grid: { labels: {
        fontSize: 14,
        yAxis: { scaleMin: 0, scaleMax: 70, commonScaleSteps: 7, useNiceScale: false },
        xAxisLabels: { show: true, rotation: 0, autoRotate: { enable: false, angle: 0 } },
      } },
    },
  };
  const xyDataset: VueUiXyDatasetItem[] = [
    { name: 'Revenue', type: 'bar', series: [32, 41, 38, 52, 61, 58], color: '#5F8BEE' },
    { name: 'Target', type: 'line', series: [40, 40, 45, 45, 50, 50], color: '#42D392', dashed: true, dataLabels: false },
  ];
  const donutConfig: VueUiDonutConfig = {
    devHints: { enable: false },
    userOptions: { show: true },
    useCssAnimation: false,
    startAnimation: { show: false },
    style: {
      fontFamily: 'system-ui, sans-serif',
      chart: {
        width: 800,
        height: 500,
        backgroundColor: '#FFFFFF',
        color: '#1F2937',
        useGradient: false,
        legend: { show: true },
      },
    },
  };
  const donutDataset: VueUiDonutDatasetItem[] = [
    { name: 'Subscriptions', values: [58], color: '#5F8BEE' },
    { name: 'Services', values: [27], color: '#42D392' },
    { name: 'Other', values: [15], color: '#FF9F43' },
  ];
  return { xyConfig, xyDataset, donutConfig, donutDataset };
}
