<script lang="ts">
  import { extractStatesWinners } from "$lib/utils";
  import type { PageData } from "./$types";

  export let data: PageData;

  let winners = extractStatesWinners(data);
</script>

<h3 class="text-opacity-60 text-sm text-center mb-6">states won</h3>
<ul class="flex items-center justify-center gap-8 text-center">
  {#each winners as party}
    <li>
      <p class="text-3xl">{party.count}</p>
      <h2 class="font-medium text-lg">{party.party}</h2>
    </li>
  {/each}
</ul>
