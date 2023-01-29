<script>
  export let url;
  export let title;

  const share = () => {
    navigator.share({ url, title });
  };
</script>

<div
  class="flex gap-2 items-center group fixed bottom-0 left-0 bg-default px-8 py-2 z-20 m-4 shadow-md"
>
  <div class="hidden group-hover:flex items-center gap-4">
    <p>
      <a href="https://www.facebook.com/sharer.php?u={url}">
        <img
          src="https://vectorwiki.com/images/LthkM__facebook-2020-1.svg"
          alt="share on facebook"
        />
      </a>
    </p>
    <p>
      <a href="https://twitter.com/share?url={url}&text={title}">
        <img
          src="https://vectorwiki.com/images/KAi19__twitter.svg"
          alt="share to twitter"
        />
      </a>
    </p>
    <p>
      <a
        href="https://pinterest.com/pin/create/bookmarklet/?url={url}&description={title}"
      >
        <img
          src="https://vectorwiki.com/images/sJZ1b__pinterest-3.svg"
          alt="share on pinterest"
        />
      </a>
    </p>
    <p>
      <a href="https://www.linkedin.com/shareArticle?url={url}&title={title}">
        <img
          src="https://vectorwiki.com/images/rmxYg__linkedin-icon.svg"
          alt="share to linkedin"
        /></a
      >
    </p>
  </div>
  <p>
    <button on:click={share}>
      <img
        src="https://www.freepnglogos.com/uploads/share-png/share-svg-png-icon-download-21.png"
        alt="share to linkedin"
      />
    </button>
  </p>
</div>

<style>
  img {
    width: 20px;
    height: 20px;
  }
</style>
