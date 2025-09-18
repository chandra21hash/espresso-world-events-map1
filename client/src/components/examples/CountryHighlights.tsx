import { MapContainer, TileLayer } from "react-leaflet";
import CountryHighlights from "../CountryHighlights";
import "leaflet/dist/leaflet.css";

export default function CountryHighlightsExample() {
  return (
    <div className="w-full h-96 border border-border rounded-lg overflow-hidden">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <CountryHighlights mode="past" />
      </MapContainer>
    </div>
  );
}