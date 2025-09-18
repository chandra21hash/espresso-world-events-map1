import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { espressoEvents, type EspressoEvent } from "@shared/espresso-events";
import MapToggle from "./MapToggle";
import MapLegend from "./MapLegend";
import CountryHighlights from "./CountryHighlights";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

// Color constants matching design guidelines
const DARK_ESPRESSO = "hsl(25, 65%, 25%)";
const LIGHT_ESPRESSO = "hsl(35, 45%, 55%)";
const MARKER_RADIUS = 8;

function FitBoundsToEvents({ bounds }: { bounds: [number, number][] }) {
  const map = useMap();
  
  useEffect(() => {
    if (bounds?.length) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 5 });
    }
  }, [bounds, map]);
  
  return null;
}

function createClusterCustomIcon(cluster: any, mode: "past" | "upcoming") {
  const count = cluster.getChildCount();
  const color = mode === "past" ? DARK_ESPRESSO : LIGHT_ESPRESSO;
  const textColor = mode === "past" ? "#fff" : "#1a1a1a";
  
  return L.divIcon({
    html: `<div style="background:${color};color:${textColor};border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;font-weight:bold;border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.2);">${count}</div>`,
    className: "custom-cluster",
    iconSize: [40, 40]
  });
}

export default function EspressoWorldMap() {
  const [mode, setMode] = useState<"past" | "upcoming">("past");
  
  const events = mode === "past" ? espressoEvents.pastEvents : espressoEvents.upcomingEvents;
  
  const allBounds = useMemo(() => [
    ...espressoEvents.pastEvents,
    ...espressoEvents.upcomingEvents
  ].map(e => e.coords), []);

  return (
    <div className="relative w-full h-full">
      <MapContainer 
        center={[20, 0] as LatLngExpression} 
        zoom={2} 
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <CountryHighlights mode={mode} />
        <FitBoundsToEvents bounds={allBounds} />
        
        <MarkerClusterGroup 
          iconCreateFunction={(cluster) => createClusterCustomIcon(cluster, mode)}
          maxClusterRadius={50}
          spiderfyOnMaxZoom={true}
          showCoverageOnHover={false}
        >
          {events.map((event: EspressoEvent, idx: number) => (
            <CircleMarker
              key={`${event.event}-${idx}`}
              center={event.coords as LatLngExpression}
              radius={MARKER_RADIUS}
              pathOptions={{
                fillColor: mode === "past" ? DARK_ESPRESSO : "white",
                color: mode === "past" ? "white" : DARK_ESPRESSO,
                weight: 2,
                fillOpacity: 1,
                opacity: 1
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-foreground">
                      {event.event}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.city}, {event.country}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        size="sm" 
                        variant="default"
                        className="w-full"
                        asChild
                        data-testid={`button-event-link-${idx}`}
                      >
                        <a 
                          href={event.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Event
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      
      <MapToggle mode={mode} onModeChange={setMode} />
      <MapLegend mode={mode} />
    </div>
  );
}