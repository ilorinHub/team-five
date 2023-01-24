<script lang="ts">
  import "../app.css";

  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }
</script>

<div class="site_container" class:dark={isDarkMode}>
  <div class="bg-default text-default min-h-screen">
    <header class="max-w-6xl container py-4 flex items-center justify-between">
      <a href="/"><h2 class="text-lg font-medium">elect</h2></a>
      <button
        on:click={toggleDarkMode}
        class="w-4 h-4 rounded-full bg-site-dark hover:opacity-50"
      />
    </header>
    <slot />
  </div>
</div>
