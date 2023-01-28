<script lang="ts">
  import Chart from "$lib/components/Chart.svelte";
  import Map from "$lib/components/Maps/Map.svelte";
  import HeatMap from "$lib/components/Maps/HeatMap.svelte";

  import type { PageData } from "./$types";
  import TopContenders from "$lib/components/TopContenders.svelte";
  import LeaderBoard from "$lib/components/LeaderBoard.svelte";
  import StatesWon from "$lib/components/StatesWon.svelte";

  export let data: PageData;
  $: {
    data.electionData.results.sort((a, b) => a.votes - b.votes);
  }

  setInterval(() => {
    let results = [];
    if (data.electionData.results) {
      data.electionData.results.map(
        (result) =>
          (results = [
            ...results,
            { ...result, votes: result.votes + Math.random() * 40 },
          ])
      );
      data.electionData = { ...data.electionData, results: results };
    }
  }, 200);
</script>

<main class="space-y-20">
  <section class="container max-w-6xl drop-shadow-md">
    <div class="py-8">
      <h2 class="text-2xl">Nigerian</h2>
      <h3 class="text-opacity-60 text-5xl">
        <span class="font-medium">Presidential</span> Election
      </h3>
      <p class="text-2xl font-semibold">2022</p>
      <div class="max-w-[200px] bg-site-primary/30">
        <div class="bg-site-primary h-1" style:width="50%" />
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-2 space-y-4">
        <TopContenders data={data.electionData} />
      </div>
      <div>
        <LeaderBoard data={data.electionData} />
      </div>
    </div>
  </section>
  <section>
    <div class=" container max-w-6xl space-y-4">
      <div class="bg-site-dark-700/20 h-[500px]">
        <Map data={data.electionData} />
      </div>
      <!-- <Chart data={data.electionData} chartType="bar" /> -->
    </div>
  </section>
  <section class="bg-site-dark-700 text-site-light py-20">
    <StatesWon data={data.electionData} />
  </section>
  <section class="container max-w-6xl space-y-2">
    <div class="grid grid-cols-4 gap-4">
      <div class="max-w-lg container">
        <h3 class="text-opacity-60 text-2xl font-semibold mb-2">
          Most influencial states
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea
          quisquam sunt saepe earum ad neque excepturi temporibus expedita iure
          dolore, minima voluptatum officiis vel, assumenda minus commodi, nobis
          in?
        </p>
      </div>
      <div class="col-span-3">
        <Chart data={data.electionData} chartType="bar" />
      </div>
    </div>
  </section>
  <section class="container max-w-6xl space-y-14">
    <div class="grid grid-cols-3 gap-4">
      <div>
        <Chart data={data.electionData} chartType="doughnut" />
      </div>
      <div>
        <Chart data={data.electionData} chartType="polarArea" />
      </div>
      <div>
        <h3 class="text-opacity-60 text-2xl font-semibold mb-2">Non-voters</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <h3 class="text-opacity-60 text-2xl font-semibold mb-2">
          Invalidated votes
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
      <div>
        <Chart data={data.electionData} chartType="doughnut" />
      </div>
      <div>
        <Chart data={data.electionData} chartType="polarArea" />
      </div>
    </div>
  </section>
  <section class="container max-w-6xl">
    <div class="grid grid-cols-4 gap-4">
      <div>
        <h2 class="text-2xl font-medium">Cancellations</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
      <div class="col-span-3">
        <h3 class="text-opacity-60 text-sm mb-2">heat map of cancellations</h3>
        <div class="bg-site-dark-700/20 h-[400px]">
          <HeatMap />
        </div>
      </div>
    </div>
  </section>
</main>
