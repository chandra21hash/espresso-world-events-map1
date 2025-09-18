import { Card } from "@/components/ui/card";
import espressoLogo from "@/assets/espresso-logo.png";

// Color constants matching the map markers
const DARK_ESPRESSO = "#b36d3c";
const LIGHT_ESPRESSO = "#f2b98f";

interface MapLegendProps {
  mode: "past" | "upcoming";
}

export default function MapLegend({ mode }: MapLegendProps) {
  return (
    <Card className="absolute bottom-4 right-4 z-[1000] p-3 shadow-lg bg-card/95 backdrop-blur-sm">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Event Types</h3>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: DARK_ESPRESSO }}
            ></div>
            <span className="text-xs text-muted-foreground">Past Events</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 shadow-sm overflow-hidden" style={{ borderColor: DARK_ESPRESSO }}>
              <img 
                src={espressoLogo} 
                alt="Espresso Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-muted-foreground">Upcoming Events</span>
          </div>
        </div>
        <div className="pt-1 border-t border-border space-y-1">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-2 opacity-40 rounded-sm"
              style={{ backgroundColor: DARK_ESPRESSO }}
            ></div>
            <span className="text-xs text-muted-foreground">Country Highlights</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Showing: <span className="font-medium text-foreground">{mode === "past" ? "Past" : "Upcoming"} Events</span>
          </p>
        </div>
      </div>
    </Card>
  );
}