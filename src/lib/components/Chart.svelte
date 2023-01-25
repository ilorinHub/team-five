<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  var myChartPointer;
  var ctxPointer;

  export let data;
  $: {
    // if (myChart) {
    try {
      myChartPointer.update();
    } catch (error) {}
  }

  export let chartType;

  export const config = {
    type: chartType,
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  onMount(() => {
    const ctx = data.getContext("2d");
    ctxPointer = ctx;
    const myChart = new Chart(ctx, config);
    myChartPointer = myChart;
  });
</script>

<div>
  <canvas bind:this={data} />
</div>
