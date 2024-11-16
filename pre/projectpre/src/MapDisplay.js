import React from "react";
import { MapContainer, TileLayer ,Layout} from "react-leaflet";
import "leaflet/dist/leaflet.css";
function MapDisplay({ parameters }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
      {/* <AttributionControl Attr="true" /> */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default MapDisplay;
