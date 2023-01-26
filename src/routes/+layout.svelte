<script lang="ts">
  import "../app.css";

  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }

  let isMenuOpen = false;

  function toggleIsMenuOpen() {
    isMenuOpen = !isMenuOpen;
  }

  let resultSource = "inec";
  let isResultSelectorOpen = false;

  function toggleIsResultSelectorOpen() {
    isResultSelectorOpen = !isResultSelectorOpen;
  }
</script>

<div class="site_container" class:dark={isDarkMode}>
  <div>
    <div class="fixed bg-default inset-0 h-screen" />
    <div
      class="relative text-default flex flex-col justify-between min-h-screen"
    >
      <header
        class="max-w-6xl container py-6 flex items-center justify-between"
      >
        <a href="/">
          <h2 class="text-lg ">elect<span class="font-medium">Viz</span></h2>
        </a>
        <div class="flex items-center gap-4">
          <button
            class="p-2 relative px-4 py-2 bg-site-dark-600 group"
            on:click={toggleIsResultSelectorOpen}
          >
            <span class="text-site-light">
              {resultSource}
              <span
                class="w-6 h-6 bg-green-500 rounded-full inline-flex gap-2 justify-center items-center"
              >
                &check;
              </span>
            </span>
            <div
              class="absolute mt-2 right-0 shadow-md p-1 bg-site-light-600 text-site-dark"
              class:hidden={!isResultSelectorOpen}
            >
              <p class="px-4 py-2">asa</p>
              <p class="px-4 py-2">asaasdf</p>
              <p class="px-4 py-2">asaasdfa</p>
            </div>
          </button>
          <button on:click={toggleIsMenuOpen}>Menu <span>&#9776;</span></button>
          <div
            class={`fixed top-0 right-0 w-screen h-screen z-10 bg-default backdrop-blur-sm bg-opacity-20 ${
              isMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"
            } transition-default`}
          >
            <div
              class="max-w-6xl container py-6 h-full relative inset-0 flex items-center justify-center "
            >
              <button
                on:click={toggleIsMenuOpen}
                class="absolute flex justify-center items-center bg-slate-800 w-6 h-6 rounded-full right-0 top-6"
              >
                &times;
              </button>
              <nav>
                <ul
                  class="flex flex-col gap-8 text-center items-center capitalize"
                >
                  <div>
                    {#each ["presidential", "gebernitorial", "LGA", "archive"] as link}
                      <li>{link}</li>
                    {/each}
                  </div>
                  <div>
                    {#each ["home", "about us", "contact us"] as link}
                      <li>{link}</li>
                    {/each}
                  </div>
                  <button on:click={toggleDarkMode}>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div class="flex-1">
        <slot />
      </div>
      <footer class="bg-site-dark-700 text-site-light text-center p-2 mt-4">
        <ul class="flex justify-center items-center gap-4 py-2 capitalize">
          {#each ["home", "about us", "contact us"] as link}
            <li>{link}</li>
          {/each}
        </ul>
        <p class="py-2 text-sm">&copy; electViz {new Date().getFullYear()}</p>
      </footer>
    </div>
  </div>
</div>
