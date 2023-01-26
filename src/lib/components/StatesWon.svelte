<h3 class="text-opacity-60 text-sm mb-2">states won</h3>
<ul class="flex items-center justify-center gap-8 text-center">
  {#each labels as label, count}
    <li>
      <p class="text-3xl">{count}</p>
      <h2 class="font-medium text-lg">{label}</h2>
    </li>
  {/each}
</ul>
