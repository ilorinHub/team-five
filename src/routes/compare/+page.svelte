<script lang="ts">
  import Chart from "$lib/components/Chart.svelte";
  import Map from "$lib/components/Maps/Map.svelte";
  import HeatMap from "$lib/components/Maps/HeatMap.svelte";

  import type { PageData } from "./$types";

  import TopContenders from "$lib/components/TopContenders.svelte";
  import LeaderBoard from "$lib/components/LeaderBoard.svelte";
  import StatesWon from "$lib/components/StatesWon.svelte";

  export let data: PageData;
</script>

<main class="space-y-20">
  <section class="container max-w-6xl drop-shadow-md">
    <div class="py-8 text-center">
      <h2 class="text-2xl">Nigerian</h2>
      <h3 class="text-opacity-60 text-5xl">
        <span class="font-medium">Presidential</span> Elections
      </h3>
      <p class="text-2xl font-semibold mt-1">
        <span class="text-white bg-site-dark-700 p-1">2022</span>
        <span class="text-site-primary"> vs </span> 2023
      </p>
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
      <div class="grid grid-cols-2 gap-2">
        <div class="bg-site-dark-700/20 h-[500px] drop-shadow-lg">
          <Map data={data.electionData} />
        </div>
        <div class="bg-site-dark-700/20 h-[500px] drop-shadow-lg">
          <Map data={data.electionData} isAlternate />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <Chart data={data.electionData} chartType="bar" />
        <Chart data={data.electionData} isAlternate chartType="bar" />
      </div>
    </div>
  </section>
  <section class="bg-site-dark-700 text-site-light text-center py-20">
    <StatesWon data={data.electionData} />
  </section>
  <section class="container max-w-6xl space-y-2">
    <div class="space-y-4">
      <div class="text-center max-w-lg container">
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
      <div class="grid grid-cols-2 gap-4">
        <Chart data={data.electionData} chartType="bar" />
        <Chart data={data.electionData} isAlternate chartType="bar" />
      </div>
    </div>
  </section>
  <section class="container max-w-6xl space-y-14">
    <div class="space-y-4">
      <div class="text-center">
        <h3 class="text-opacity-60 text-2xl font-semibold mb-2">Non-voters</h3>
        <p class="max-w-lg container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4 items-center">
          <div>
            <Chart data={data.electionData} chartType="doughnut" />
          </div>
          <div>
            <Chart data={data.electionData} chartType="doughnut" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 items-center">
          <div>
            <Chart data={data.electionData} chartType="polarArea" />
          </div>
          <div>
            <Chart data={data.electionData} chartType="polarArea" />
          </div>
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <div class="text-center">
        <h3 class="text-opacity-60 text-2xl font-semibold mb-2">
          Invalidated votes
        </h3>
        <p class="max-w-lg container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-4">
          <Chart data={data.electionData} chartType="doughnut" />
          <Chart data={data.electionData} isAlternate chartType="doughnut" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <Chart data={data.electionData} chartType="polarArea" />
        <Chart data={data.electionData} isAlternate chartType="polarArea" />
      </div>
    </div>
  </section>
  <section class="container max-w-6xl">
    <div class="space-y-4">
      <div class="max-w-lg container text-center">
        <h2 class="text-2xl font-medium">Cancellations</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
      <div>
        <div class="grid grid-cols-2 gap-2">
          <div class="bg-site-dark-700/20 h-[400px] drop-shadow-lg">
            <HeatMap data={data.electionData} />
          </div>
          <div class="bg-site-dark-700/20 h-[400px] drop-shadow-lg">
            <HeatMap data={data.electionData} />
          </div>
        </div>
        <h3 class="text-opacity-60 text-sm mt-2 text-center">
          heat maps of cancellations
        </h3>
      </div>
    </div>
  </section>
</main>
