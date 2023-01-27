<script lang="ts">
  import { getPartyCandidate } from "$lib/utils";

  export let data;
</script>

<h3 class="text-opacity-60 text-sm mb-2">Current standings</h3>
<div>
  <ul class="flex flex-col gap-2">
    {#each data.results as result}
      <li class="flex items-center gap-5">
        <div class="flex items-center gap-2">
          <div class="w-14 h-14 rounded-full p-2 bg-slate-900" />
          <div>
            <h2 class="font-medium">
              {getPartyCandidate(result.party, data)?.name}
            </h2>
            <p class="text-sm">Party</p>
          </div>
        </div>
        <p>80%</p>
        <p>20,122 votes</p>
      </li>
    {/each}
  </ul>
</div>
