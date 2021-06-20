import { CRS, icon, LatLng, LatLngBoundsExpression } from "leaflet";
import "leaflet-rotatedmarker";
import { useEffect, useState } from "react";
import {
  ImageOverlay,
  MapContainer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { Data } from "./sample_data";

interface MapProps {
  data: Data[];
}

export const Map = (props: MapProps) => {
  const [cleanData, setCleanData] = useState<CleanData[]>([]);
  useEffect(() => {
    // it should be relatively easy to use an api request here instead of props
    setCleanData(props.data.map((d) => cleanUpData(d)));
  }, [props.data]);

  const imageBounds: LatLngBoundsExpression = [
    [0, 0],
    [1016, 1590], // TODO use consts instead of "magic numbers"
  ];
  const imageUrl =
    "https://structionsite-code-challenge-assets.s3.us-east-2.amazonaws.com/full_map.png";

  return (
    // TODO not sure why I had to modify the lat and lng so much, should investigate that
    <MapContainer
      crs={CRS.Simple}
      center={{ lat: 451.505, lng: 800 }}
      maxZoom={1}
      minZoom={-1}
      zoom={0}
      bounds={imageBounds}
    >
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
      <MarkersAddedViaClick />
      {cleanData.map((m) => dataToMarker(m))}
    </MapContainer>
  );
};

function MarkersAddedViaClick() {
  const [positions, setPositions] = useState<LatLng[]>([]);
  useMapEvents({
    click(e) {
      setPositions([...positions, e.latlng]);
      // It's probably a better UX to show a prompt for the user to add an
      // image, rather than waiting for them to click on the marker again
    },
  });

  return (
    <>
      {positions.map((p, i) => (
        <Marker
          key={i}
          icon={arrowIcon()}
          position={[p.lat, p.lng]}
          draggable={true}
        >
          <Popup>
            {/* TODO make this functional */}
            <a href="#">Click to add image</a>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

// I'm assuming we have data validation at boundaries and don't need to worry
// about that here
const cleanUpData = (data: Data) => ({
  id: data.id,
  x: data.x,
  y: data.y,
  draggable: true,
  image_preview: data.image_preview || "",
  rotation: data.rotation || 0.0,
});

const dataToMarker = (cD: CleanData) => (
  <Marker
    key={cD.id}
    icon={arrowIcon()}
    position={[cD.y * 1590, cD.x * 1016]}
    draggable={cD.draggable}
    rotationAngle={cD.rotation}
  >
    <Popup>
      <img src={cD.image_preview} />
    </Popup>
  </Marker>
);

interface CleanData {
  id: number;
  x: number;
  y: number;
  draggable: boolean;
  image_preview: string;
  rotation: number;
}

const arrowIcon = () =>
  icon({
    iconUrl: "https://app.structionsite.com/assets/marker_flat.png",
    iconAnchor: [12, 0],
    popupAnchor: [3, -10],
  });
