<div class="space-y-2">
  <h3 class="text-opacity-60 text-sm mb-2">Top contenders</h3>
  <div class="grid grid-cols-2 gap-2">
    <div class="w-full h-[300px] bg-slate-900" />
    <div class="w-full h-[300px] bg-slate-900" />
  </div>
</div>
<div class="flex justify-between">
  {#each [1, 2] as _, index}
    <div class:text-right={_ % 2 == 0}>
      <div>
        <h2 class="text-3xl font-medium">
          {getPartyCandidate(dataset.results[index].party)?.name}
        </h2>
        <p class="text-sm">{dataset.results[index].party}</p>
        <p class="text-sm">34 States won</p>
      </div>
    </div>
  {/each}
</div>
<div class="flex">
  <div
    class="h-8 bg-green-500"
    style:width={`${
      (dataset.results[0].votes /
        (dataset.results[0].votes + dataset.results[1].votes)) *
      100
    }%`}
  />
  <div
    class="h-8 bg-red-500"
    style:width={`${
      (dataset.results[1].votes /
        (dataset.results[0].votes + dataset.results[1].votes)) *
      100
    }%`}
  />
</div>
