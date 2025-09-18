import { Button } from "@/components/ui/button";

// Color constants matching the map boundaries
const DARK_ESPRESSO = "#b36d3c";
const LIGHT_ESPRESSO = "#f2b98f";

interface MapToggleProps {
  mode: "past" | "upcoming";
  onModeChange: (mode: "past" | "upcoming") => void;
}

export default function MapToggle({ mode, onModeChange }: MapToggleProps) {
  return (
    <div className="absolute top-4 right-4 z-[1000] bg-card border border-card-border rounded-lg p-1 shadow-lg">
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onModeChange("past")}
          className="text-sm font-medium transition-all duration-300"
          style={{
            backgroundColor: mode === "past" ? DARK_ESPRESSO : "transparent",
            color: mode === "past" ? "white" : "inherit",
            borderColor: mode === "past" ? DARK_ESPRESSO : "transparent"
          }}
          data-testid="button-toggle-past"
        >
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