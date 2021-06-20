import { Data, sampleData } from "./sample_data";

export const Map = () => {
  const L = window.L; // Leaflet.js

  // Set up the map to show a floor plan image
  const map = L.map("map", {
    center: [51.505, -0.09],
    crs: L.CRS.Simple,
    maxZoom: 1,
    minZoom: -1,
    zoom: 0
  });
  const imageUrl =
    "https://structionsite-code-challenge-assets.s3.us-east-2.amazonaws.com/full_map.png";
  const imageBounds = [
    [0, 0],
    [1016, 1590] // TODO use consts instead of "magic numbers"
  ];
  // TODO fix these type errors with imageBounds "Argument of type 'number[][]' is not assignable to parameter of type 'LatLngBoundsExpression'."
  L.imageOverlay(imageUrl, imageBounds).addTo(map);
  map.fitBounds(imageBounds);

  // Sample data point for a pin/marker
  const pin = {
    x: 0.527375201288245,
    y: 0.519297519875233,
    created_at: "2018-06-20 06:04:11 UTC",
    updated_at: "2018-07-24 20:12:47 UTC",
    image_preview:
      "https://structionsite-code-challenge-assets.s3.us-east-2.amazonaws.com/preview.jpeg"
  };

  const ArrowIcon = L.Icon.extend({
    options: {
      iconUrl: "https://app.structionsite.com/assets/marker_flat.png",
      iconAnchor: [12, 0], // point of the icon which will correspond to marker's location
      popupAnchor: [3, -10] // point from which the popup should open relative to the iconAnchor
    }
  });

  // TODO handle errors for non-existent data properties
  const dataToMarker = (data: Data) => {
    // TODO markers are appearing off the map, troubleshoot
    const m = L.marker(L.latLng([data.y * 1590, data.x * 1016]), {
      draggable: true,
      // TODO this doesn't work, instead I could use a different image for the 3 different
      // rotations 0deg, 90deg, and 270deg, or I think there's a library that allows rotation
      // but that seems unnecessary
      icon: new ArrowIcon({ className: `rotate${data.rotation}` })
    });
    return m.bindPopup('<img src="' + data.image_preview + '" />', { maxWidth: 800 });
  };

  // Place pin marker(s) on the map, with thumbnail preview on click
  const marker = L.marker(L.latLng([pin.y * 1590, pin.x * 1016]), {
    draggable: true,
    icon: new ArrowIcon()
  });
  marker.bindPopup('<img src="' + pin.image_preview + '" />', { maxWidth: 800 });
  marker.addTo(map);
  sampleData.map((d: Data) => dataToMarker(d).addTo(map));

  const addMarkerToMap = (e: any) =>
    new L.Marker(L.latLng([e.latlng.lat, e.latlng.lng]), {
      icon: new ArrowIcon(),
      draggable: true
    })
      // TODO make this functional.
      .bindPopup("<a href=#>Click here to add an image</a>")
      .addTo(map);

  map.on("click", addMarkerToMap);
};
