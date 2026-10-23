import { createStaticVueUiXy } from 'vue-data-ui/ssr/xy';
import { createStaticVueUiDonut } from 'vue-data-ui/ssr/donut';
import { createChartExamples } from '#shared/chartExamples';

export default defineEventHandler(async () => {
  const { xyConfig, xyDataset, donutConfig, donutDataset } = createChartExamples();
  const [xy, donut] = await Promise.all([
    createStaticVueUiXy({ dataset: xyDataset, config: xyConfig,
      width: xyConfig.chart!.width, height: xyConfig.chart!.height,
      svgTitle: 'Revenue compared with target over six periods' }),
    createStaticVueUiDonut({ dataset: donutDataset, config: donutConfig,
      width: donutConfig.style!.chart!.width, height: donutConfig.style!.chart!.height,
      svgTitle: 'Revenue sources: subscriptions 58%, services 27%, other 15%' }),
  ]);
  return { xy, donut };
});
