<script>
  import Chart from "$lib/components/Chart.svelte";
  import Map from "$lib/components/Map.svelte";
  import HeatMap from "$lib/components/HeatMap.svelte";

  let candidates = [
    { name: "lorem", party: "apc" },
    { name: "ipsum", party: "pdp" },
    { name: "dolor", party: "aac" },
    { name: "sit amit", party: "cvv" },
  ];

  let dataset = {
    election: "presidential",
    results: [
      { party: "apc", votes: 300 },
      { party: "pdp", votes: 320 },
      { party: "aac", votes: 303 },
      { party: "cvv", votes: 350 },
    ],
    registeredVoters: 123412,
    accreditedVoters: 3412,
    validVoters: 1312,
    states_results: [
      {
        title: "state1",
        results: [
          { party: "apc", votes: 300 },
          { party: "pdp", votes: 320 },
          { party: "aac", votes: 303 },
          { party: "cvv", votes: 350 },
        ],
      },
      {
        title: "state2",
        results: [
          { party: "apc", votes: 300 },
          { party: "pdp", votes: 320 },
          { party: "aac", votes: 303 },
          { party: "cvv", votes: 350 },
        ],
      },
    ],
  };
  $: data = {
    labels: extractParties(dataset),
    datasets: [
      {
        data: extractPartiesVotes(dataset),
      },
    ],
  };
  $: {
    dataset = {
      ...dataset,
      results: dataset.results.sort((a, b) => a.votes - b.votes),
    };
  }

  setInterval(() => {
    let results = [];
    dataset.results.map(
      (result) =>
        (results = [
          ...results,
          { ...result, votes: result.votes + Math.random() * 40 },
        ])
    );
    dataset = { ...dataset, results: results };
  }, 200);

  function extractParties(dataset) {
    let parties = [];
    dataset.results.forEach((result) => {
      parties = [...parties, result.party];
    });
    return parties;
  }
  function extractPartiesVotes(dataset) {
    let votes = [];
    dataset.results.forEach((result) => {
      votes = [...votes, result.votes];
    });
    return votes;
  }
  function extractStatesWinner(state) {
    let winner = null;
    let maxStateScore;

    state.results.map((item) => {
      if (item.score > maxStateScore) {
        maxStateScore = item.score;

        winner = item.party;
      }
    });
  }
  function extractStatesWon(states) {
    let wins = 0;
    return states.forEach((state) => {
      wins = extractStatesWinner();
    });
  }
  function getPartyCandidate(party) {
    let candidate = candidates.find((candidate) => candidate.party == party);
    return candidate;
  }

  const labels = ["apc", "pdp", "aac", "apga", "ac", "cpc", "ap"];
  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
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
    <div class="grid grid-cols-3 gap-8 items-center">
      <div class="col-span-2 space-y-4">
        <!-- <TopContenders /> -->
      </div>
      <div>
        <!-- <LeaderBoard /> -->
      </div>
    </div>
  </section>
  <section>
    <div class=" container max-w-6xl space-y-4">
      <!-- <div class="bg-site-dark-700/20 h-[500px]">
        <Map />
      </div> -->
      <!-- <Chart {data} chartType="bar" /> -->
    </div>
  </section>
  <section class="bg-site-dark-700 text-site-light text-center py-20">
    <!-- <StatesWon /> -->
  </section>
  <section class="container max-w-6xl space-y-2">
    <div class="grid grid-cols-4 items-center gap-4">
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
      <div class="col-span-3">
        <!-- <Chart {data} chartType="bar" /> -->
      </div>
    </div>
  </section>
  <section class="container max-w-6xl space-y-14">
    <div class="grid grid-cols-3 gap-4 items-center">
      <div>
        <!-- <Chart {data} chartType="doughnut" /> -->
      </div>
      <div>
        <!-- <Chart {data} chartType="polarArea" /> -->
      </div>
      <div class="text-center">
        <h3 class="text-opacity-60 text-2xl font-semibold mb-2">Non-voters</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          praesentium modi unde amet culpa sint minima eveniet, in expedita
          voluptatum quae ad consequatur nesciunt, corporis quis qui, ipsa enim
          sapiente.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 items-center">
      <div class="text-center">
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
        <!-- <Chart {data} chartType="doughnut" /> -->
      </div>
      <div>
        <!-- <Chart {data} chartType="polarArea" /> -->
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
        <!-- <h3 class="text-opacity-60 text-sm mb-2">heat map of cancellations</h3>
        <div class="bg-site-dark-700/20 h-[400px]">
          <HeatMap />
        </div> -->
      </div>
    </div>
  </section>
</main>
