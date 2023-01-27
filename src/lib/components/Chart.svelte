<script lang="ts">
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  var myChartPointer;
  var ctxPointer;

  export let isAlternate;

  export let dataset = {
    labels: ["apc", "pdp", "aac", "apga", "ac", "cpc", "ap"],
    datasets: [
      {
        // label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  export let data;
  $: {
    // if (myChart) {
    dataset = { datasets: [data.results] };
    try {
      myChartPointer.update();
    } catch (error) {}
  }

  export let chartType;

  export const config = {
    type: chartType,
    data: dataset,
    options: {
      scales: {
        y: {
          // beginAtZero: true,
        },
      },
    },
  };

  onMount(() => {
    const ctx = dataset.getContext("2d");
    ctxPointer = ctx;
    const myChart = new Chart(ctx, config);
    myChartPointer = myChart;
  });
</script>

<div>
  <canvas bind:this={dataset} />
</div>
