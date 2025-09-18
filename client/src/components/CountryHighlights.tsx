import { useEffect, useState } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import type { FeatureCollection } from "geojson";
import { getCountryEventType } from "@shared/country-mapping";

interface CountryHighlightsProps {
  mode: "past" | "upcoming";
}

const DARK_ESPRESSO = "#b36d3c";
const LIGHT_ESPRESSO = "#f2b98f";

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
    
    // Only highlight countries that match the current mode
    if (eventType === mode) {
      return {
        fillColor: mode === "past" ? DARK_ESPRESSO : LIGHT_ESPRESSO,
        weight: 2,
        opacity: 1,
        color: mode === "past" ? DARK_ESPRESSO : LIGHT_ESPRESSO,
        fillOpacity: 0.15 // Much more subtle fill
      };
    }
    
    // All other countries (including those with different event types) appear completely normal
    return {
      fillColor: 'transparent',
      weight: 0.5,
      opacity: 0.2,
      color: '#ccc',
      fillOpacity: 0
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const countryName = feature?.properties?.NAME || feature?.properties?.name || '';
    const eventType = getCountryEventType(countryName);
    
    // Only show tooltips for countries that match the current mode
    if (eventType === mode) {
      layer.bindTooltip(
        `<div class="font-medium">${countryName}</div>
         <div class="text-sm text-muted-foreground">${mode === "past" ? "Past Events" : "Upcoming Events"}</div>`,
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
      key={mode} // Force remount on mode change to rebind tooltips
      data={countriesData}
      style={getCountryStyle}
      onEachFeature={onEachFeature}
    />
  );
}