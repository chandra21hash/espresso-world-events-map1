# Espresso World Map 🌍☕

An interactive world map showcasing Espresso's global events, built with React and Leaflet. Toggle between past and upcoming events with beautiful visualizations and country highlighting.

## ✨ Features

- **Interactive World Map**: Clean CartoDB map without grid lines for a professional look
- **Event Toggle**: Switch between past and upcoming events with color-coded controls
- **Smart Clustering**: Events are intelligently grouped by region with proper count display
- **Country Highlighting**: Visual highlighting of countries with events
- **Brand Consistency**: Uses official Espresso colors (#b36d3c, #f2b98f) throughout
- **Custom Markers**: 
  - Past events: Dark espresso circular markers
  - Upcoming events: Official Espresso logo markers
- **Event Details**: Click markers to see event information with direct links
- **Responsive Design**: Works seamlessly across different screen sizes

## 🚀 Tech Stack

- **Frontend**: React with TypeScript
- **Map Library**: Leaflet with React-Leaflet
- **Clustering**: React-Leaflet-Cluster
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter
- **State Management**: React Query (TanStack Query)
- **Backend**: Express.js
- **Build Tool**: Vite

## 🗺️ Event Locations

### Past Events
- Denver, USA - Denver Meetup (June 2023)
- San Francisco, USA - SF Summit (September 2023)
- New York, USA - NY Conference (February 2024)
- Cannes, France - Cannes Forum (May 2023)
- Bangkok, Thailand - Bangkok Talk (April 2024)
- Brussels, Belgium - Brussels Meetup (March 2024)
- Berlin, Germany - Berlin Workshop (July 2024)

### Upcoming Events
- Seoul, Korea - That's That Me Espresso | Karaoke Night (September 25, 2025)
- Buenos Aires, Argentina - Buenos Aires Con (December 2025)

## 🎨 Design Elements

- **Past Events**: Dark espresso color (#b36d3c) with circular markers
- **Upcoming Events**: Espresso logo markers with light espresso accents (#f2b98f)
- **Toggle Controls**: Bottom-left positioning for easy access
- **Legend**: Bottom-right corner showing event types and current mode
- **Country Highlights**: Semi-transparent overlays matching event colors

## 🛠️ Development

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Local Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:5000

### Project Structure
```
├── client/src/
│   ├── components/
│   │   ├── EspressoWorldMap.tsx    # Main map component
│   │   ├── MapToggle.tsx           # Past/Upcoming toggle
│   │   ├── MapLegend.tsx           # Event type legend
│   │   └── CountryHighlights.tsx   # Country highlighting
│   ├── assets/
│   │   └── espresso-logo.png       # Official logo for markers
│   └── App.tsx
├── shared/
│   └── espresso-events.ts          # Event data and types
└── server/
    └── routes.ts                   # API endpoints
```

## 🎯 Key Features Explained

### Intelligent Clustering
- Events are grouped by geographic proximity
- Cluster radius optimized for North America (3 events: Denver, SF, NYC)
- No spiderfy effect for smooth user experience
- Click clusters to zoom into individual events

### Visual Consistency
- All colors derived from official Espresso branding
- Toggle button colors match their respective boundary colors
- Legend accurately represents actual map markers
- Seamless dark/light mode support

### Event Management
- Easy-to-update event data in `shared/espresso-events.ts`
- Type-safe event structure with TypeScript
- Automatic coordinate mapping and popup generation
- Direct links to event registration pages

## 🔧 Customization

### Adding New Events
1. Edit `shared/espresso-events.ts`
2. Add event object with required fields:
   ```typescript
   {
     event: "Event Name",
     city: "City",
     country: "Country",
     coords: [latitude, longitude],
     date: "YYYY-MM-DD",
     status: "Past" | "Upcoming",
     link: "https://event-link.com"
   }
   ```

### Styling Updates
- Colors: Update constants in component files
- Map tiles: Modify TileLayer URL in `EspressoWorldMap.tsx`
- Layout: Adjust positioning classes in component files

## 📱 Usage

1. **View Events**: The map loads showing past events by default
2. **Toggle Mode**: Use bottom-left controls to switch between past/upcoming events
3. **Explore**: Click markers or clusters to see event details
4. **Navigate**: Use standard map controls to zoom and pan
5. **Learn More**: Click event links to visit registration pages

## 🌟 Brand Integration

This map represents Espresso's global presence with pixel-perfect brand alignment:
- Official color palette throughout the interface
- Espresso logo as upcoming event markers
- Professional, clean aesthetic matching brand guidelines
- Consistent visual language across all interactive elements

---

Built with ❤️ for the Espresso community