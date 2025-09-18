import { useEffect, useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import { getCountryEventType } from "@shared/country-mapping";

interface CountryHighlightsProps {
  mode: "past" | "upcoming";
}

const DARK_ESPRESSO = "hsl(25, 65%, 25%)";
const LIGHT_ESPRESSO = "hsl(35, 45%, 55%)";

export default function CountryHighlights({ mode }: CountryHighlightsProps) {
  const [countriesData, setCountriesData] = useState<FeatureCollection | null>(null);
  const map = useMap();

  useEffect(() => {
    // Fetch world countries GeoJSON data
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then(response => response.json())
      .then((data: FeatureCollection) => {
        setCountriesData(data);
      })
      .catch(error => {
        console.error('Error loading countries data:', error);
      });
  }, []);

  const getCountryStyle = (feature: any) => {
    const countryName = feature?.properties?.NAME || feature?.properties?.name || '';
    const eventType = getCountryEventType(countryName);
    
    if (!eventType) {
      return {
        fillColor: 'transparent',
        weight: 0.5,
        opacity: 0.2,
        color: '#666',
        fillOpacity: 0
      };
    }

    // Show highlighting based on current mode
    const shouldHighlight = eventType === mode;
    
    return {
      fillColor: eventType === "past" ? DARK_ESPRESSO : LIGHT_ESPRESSO,
      weight: 1,
      opacity: shouldHighlight ? 0.8 : 0.3,
      color: eventType === "past" ? DARK_ESPRESSO : LIGHT_ESPRESSO,
      fillOpacity: shouldHighlight ? 0.4 : 0.15
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const countryName = feature?.properties?.NAME || feature?.properties?.name || '';
    const eventType = getCountryEventType(countryName);
    
    if (eventType) {
      layer.bindTooltip(
        `<div class="font-medium">${countryName}</div>
         <div class="text-sm text-muted-foreground">${eventType === "past" ? "Past Events" : "Upcoming Events"}</div>`,
        {
          permanent: false,
          direction: 'top',
          className: 'custom-tooltip'
        }
      );
    }
  };

  if (!countriesData) return null;

  return (
    <GeoJSON
      data={countriesData}
      style={getCountryStyle}
      onEachFeature={onEachFeature}
    />
  );
}