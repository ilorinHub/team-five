<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  // import HeatmapOverlay from "leaflet-heatmap";

  export let data;
  import citiesData from "$lib/citiesData";

  let mapElement;
  let map;

  var heatmapLayer;

  let info;

  const location = [9.0765, 7.3986];

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");
      // const HeatmapOverlay = await import("leaflet-heatmap");

      var testData = {
        max: 8,
        data: [
          { lat: 22.6408, lng: 43.7728, count: 3 },
          { lat: 22.6408, lng: 43.7728, count: 5 },
          { lat: 24.6408, lng: 46.7728, count: 8 },
          { lat: 50.75, lng: -1.55, count: 1 },
        ],
      };

      var baseLayer = leaflet.tileLayer(
        "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
        }
      );
      var cfg = {
        // radius should be small ONLY if scaleRadius is true (or small radius is intended)
        // if scaleRadius is false it will be the constant radius used in pixels
        radius: 20,
        maxOpacity: 0.8,
        // scales the radius based on map zoom
        scaleRadius: true,
        // if set to false the heatmap uses the global maximum for colorization
        // if activated: uses the data maximum within the current map boundaries
        //   (there will always be a red spot with useLocalExtremas true)
        useLocalExtrema: true,
        // which field name in your data represents the latitude - default "lat"
        latField: "lat",
        // which field name in your data represents the longitude - default "lng"
        lngField: "lng",
        // which field name in your data represents the data value - default "value"
        valueField: "count",
      };

      // heatmapLayer = new HeatmapOverlay(cfg);

      map = leaflet.map(mapElement, {
        layers: [baseLayer],
        center: new leaflet.LatLng(25.6586, -80.3568),
        zoom: 4,
      });

      // heatmapLayer.setData(testData);
    }
  });

  onDestroy(async () => {
    if (map) {
      map.remove();
    }
  });
</script>

<main class="h-full">
  <div bind:this={mapElement} />
</main>

<style>
  @import "leaflet/dist/leaflet.css";
  main div {
    height: 100%;
  }
</style>
