// Mapping of countries to their event types for highlighting
export const countryEventMapping = {
  // Countries with past events
  "USA": "past",
  "United States": "past", 
  "France": "past",
  "Thailand": "past",
  "Belgium": "past",
  "Germany": "past",
  
  // Countries with upcoming events
  "Korea": "upcoming",
  "South Korea": "upcoming",
  "Argentina": "upcoming"
} as const;

// Country name variations to handle different naming conventions
export const countryNameVariations: Record<string, string[]> = {
  "USA": ["United States", "United States of America", "US", "United States of America"],
  "Korea": ["South Korea", "Republic of Korea", "Korea, Republic of"],
  "Germany": ["Deutschland", "Federal Republic of Germany"],
  "France": ["République française", "French Republic"],
  "Thailand": ["Kingdom of Thailand", "Siam"],
  "Belgium": ["Kingdom of Belgium", "België", "Belgique"],
  "Argentina": ["Argentine Republic", "República Argentina"]
};

export function getCountryEventType(countryName: string): "past" | "upcoming" | null {
  // Direct match
  if (countryName in countryEventMapping) {
    return countryEventMapping[countryName as keyof typeof countryEventMapping];
  }
  
  // Check variations
  for (const [baseCountry, variations] of Object.entries(countryNameVariations)) {
    if (variations.includes(countryName) && baseCountry in countryEventMapping) {
      return countryEventMapping[baseCountry as keyof typeof countryEventMapping];
    }
  }
  
  return null;
}