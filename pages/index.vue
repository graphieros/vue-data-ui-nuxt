<script setup lang="ts">

import { type VueUiXyConfig, type VueUiXyDatasetItem } from "vue-data-ui/vue-ui-xy"; // treeshaken

import VueUiXy from 'vue-data-ui/vue-ui-xy' // treeshaken


const config = ref<VueUiXyConfig>({
    chart: {
        fontFamily: 'Arial'
    }
});

const dataset = ref<VueUiXyDatasetItem[]>([
    {
        name: "Series 1",
        series: [-55, -34, -21, -13, -8, -5, -3, -2, -1, -1, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
        type: "bar"
        ,
        color: "rgb(95,139,238)",
    },
    {
        name: "Series 2",
        series: [55, 34, 21, 13, 8, 5, 3, 2, 1, 1, 0, -1, -1, -2, -3, -5, -8, -13, -21, -34, -55],
        type:
            "line"
        ,
        color: "rgb(66,211,146)",
        useProgression: true,
        dataLabels: false
    },
    {
        name: "Series 3",
        series: [64, 60, 52, 42, 30, 16, 0, -18, -38, -46, -50, -46, -38, -18, 0, 16, 30, 42, 52, 60, 64],
        type:
            "plot"
        ,
        color: "rgb(255,100,0)"
    },
    {
        name: "Target",
        series: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
        type: "line",
        color: "#404040",
        dashed: true,
        useTag: "start",
        dataLabels: false,
    },
]);

</script>

<template>
    <div>
    <ClientOnly>
        <VueUiXy :dataset="dataset" :config="config" />
    </ClientOnly>
    </div>
</template>
