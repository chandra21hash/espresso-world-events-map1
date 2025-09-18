import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Marker, Popup, useMap } from "react-leaflet";
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

// Color constants from espresso logo
const DARK_ESPRESSO = "#b36d3c";
const LIGHT_ESPRESSO = "#f2b98f";
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

function ZoomToModeEvents({ mode }: { mode: "past" | "upcoming" }) {
  const map = useMap();
  
  useEffect(() => {
    const events = mode === "past" ? espressoEvents.pastEvents : espressoEvents.upcomingEvents;
    if (events.length > 0) {
      const eventBounds = events.map(e => e.coords);
      // Zoom to the events for the current mode with a slight delay for smooth transition
      setTimeout(() => {
        map.fitBounds(eventBounds, { 
          padding: [50, 50], 
          maxZoom: events.length === 1 ? 8 : 5,
          duration: 0.8 
        });
      }, 100);
    }
  }, [mode, map]);
  
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

// Component to handle event clicks with map access
function EventMarkers({ events, mode }: { events: EspressoEvent[], mode: "past" | "upcoming" }) {
  const map = useMap();

  
  return (
    <>
      {events.map((event: EspressoEvent, idx: number) => (
        <Marker
          key={`${event.event}-${idx}`}
          position={event.coords as LatLngExpression}
          icon={L.divIcon({
            html: `<div style="background:${mode === "past" ? DARK_ESPRESSO : "white"};border:2px solid ${mode === "past" ? "white" : DARK_ESPRESSO};border-radius:50%;width:${MARKER_RADIUS * 2}px;height:${MARKER_RADIUS * 2}px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>`,
            className: "custom-marker",
            iconSize: [MARKER_RADIUS * 2, MARKER_RADIUS * 2],
            iconAnchor: [MARKER_RADIUS, MARKER_RADIUS]
          })}
          eventHandlers={{
            click: (e) => {
              // Zoom to the specific event when clicked
              map.setView(event.coords as LatLngExpression, 8, {
                animate: true,
                duration: 0.6
              });
              // Open popup
              try {
                e.target.openPopup();
              } catch (err) {
                console.error('Error opening popup:', err);
              }
            }
          }}
        >
            <Popup closeButton={true}>
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
        </Marker>
      ))}
    </>
  );
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
        attributionControl={false}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution=""
          subdomains="abcd"
        />
        
        <CountryHighlights mode={mode} />
        <FitBoundsToEvents bounds={allBounds} />
        <ZoomToModeEvents mode={mode} />
        
        <MarkerClusterGroup 
          iconCreateFunction={(cluster: any) => createClusterCustomIcon(cluster, mode)}
          maxClusterRadius={80}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
          disableClusteringAtZoom={4}
          zoomToBoundsOnClick={true}
        >
          <EventMarkers events={events} mode={mode} />
        </MarkerClusterGroup>
      </MapContainer>
      
      <MapToggle mode={mode} onModeChange={setMode} />
      <MapLegend mode={mode} />
    </div>
  );
}