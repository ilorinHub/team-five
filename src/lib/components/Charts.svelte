<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let portfolio;
  const labels = ["apc", "pdp", "aac", "apga", "ac", "cpc", "ap"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
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
  let chartTypes = ["pie", "bar", "line", "doughnut"];
  let current_chart_type = 0;
  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  function cycleChartTypes() {
    if (current_chart_type < chartTypes.length) {
      current_chart_type += 1;
    } else {
      current_chart_type = 0;
    }
  }
  onMount(() => {
    // config.data.datasets = [];
    // data.forEach((d) => {
    //   config.data.datasets.push({
    //     label: d.year,
    //     data: d.count,
    //   });
    // });
    const ctx = portfolio.getContext("2d");
    // Initialize chart using default config set
    var myChart = new Chart(ctx, config);
  });
</script>

<div class="grid grid-cols-2 h-screen">
  <div>
    <canvas bind:this={portfolio} />
  </div>
  <div>
    <button on:click={cycleChartTypes}>switch</button>
  </div>
</div>
