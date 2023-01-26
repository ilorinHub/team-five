<script>
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  import geoJSON from "$lib/localGovernments";

  let mapElement;
  let map;
  let geoJSONMap;
  let info;

  const location = [9.0765, 7.3986];

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }

  function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    layer.bringToFront();
    info.update(layer.feature.properties);
  }

  function resetHighlight(e) {
    geoJSONMap.resetStyle(e.target);
    info.update();
  }

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");

      map = leaflet.map(mapElement).setView(location, 6);

      // leaflet
      //   .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //     attribution:
      //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      //   })
      //   .addTo(map);
      geoJSONMap = leaflet
        .geoJSON(geoJSON, {
          onEachFeature: onEachFeature,
          style: function (feature) {
            return {
              // fillColor: getColor(feature.properties.density),
              weight: 2,
              opacity: 1,
              color: "white",
              dashArray: "3",
            };
          },
        })
        .bindPopup(function (layer) {
          return "hello";
        })
        .addTo(map);

      //     leaflet
      //       .marker(location)
      //       .addTo(map)
      //       .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      //       .openPopup();

      info = leaflet.control();

      info.onAdd = function (map) {
        this._div = leaflet.DomUtil.create("div", "info");
        this._div.classList.add(
          "bg-default",
          "p-4",
          "text-default",
          "rounded-md"
        ); // create a div with a class "info"
        this.update();
        return this._div;
      };

      // method that we will use to update the control based on feature properties passed
      info.update = function (props) {
        this._div.innerHTML =
          "<h4>Election results by states</h4>" +
          (props ? "<b>" + props.admin1Name + "</b>" : "Hover over a state");
      };

      info.addTo(map);
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
  .info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  .info h4 {
    margin: 0 0 5px;
    color: #777;
  }
</style>
