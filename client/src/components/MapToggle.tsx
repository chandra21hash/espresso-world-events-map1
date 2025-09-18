import { Button } from "@/components/ui/button";
import espressoLogo from "@/assets/espresso-logo.png";

// Color constants matching the map boundaries
const DARK_ESPRESSO = "#b36d3c";
const LIGHT_ESPRESSO = "#f2b98f";

interface MapToggleProps {
  mode: "past" | "upcoming";
  onModeChange: (mode: "past" | "upcoming") => void;
}

export default function MapToggle({ mode, onModeChange }: MapToggleProps) {
  return (
    <div className="absolute bottom-4 left-4 z-[1000] bg-card border border-card-border rounded-lg p-1 shadow-lg">
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onModeChange("past")}
          className="text-sm font-medium transition-all duration-300 flex items-center gap-1.5"
          style={{
            backgroundColor: mode === "past" ? DARK_ESPRESSO : "transparent",
            color: mode === "past" ? "white" : "inherit",
            borderColor: mode === "past" ? DARK_ESPRESSO : "transparent"
          }}
          data-testid="button-toggle-past"
        >
          <div 
            className="w-4 h-4 rounded-full overflow-hidden border border-white/30"
            style={{ 
              backgroundColor: mode === "past" ? 'rgba(255,255,255,0.1)' : 'transparent',
              filter: mode === "past" ? 'sepia(1) hue-rotate(15deg) saturate(1.5) brightness(0.6)' : 'none'
            }}
          >
            <img 
              src={espressoLogo} 
              alt="Espresso Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          Past Events
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onModeChange("upcoming")}
          className="text-sm font-medium transition-all duration-300"
          style={{
            backgroundColor: mode === "upcoming" ? LIGHT_ESPRESSO : "transparent",
            color: mode === "upcoming" ? "#1a1a1a" : "inherit",
            borderColor: mode === "upcoming" ? LIGHT_ESPRESSO : "transparent"
          }}
          data-testid="button-toggle-upcoming"
        >
          Upcoming Events
        </Button>
      </div>
    </div>
  );
}