import { Button } from "@/components/ui/button";

interface MapToggleProps {
  mode: "past" | "upcoming";
  onModeChange: (mode: "past" | "upcoming") => void;
}

export default function MapToggle({ mode, onModeChange }: MapToggleProps) {
  return (
    <div className="absolute top-4 left-4 z-[1000] bg-card border border-card-border rounded-lg p-1 shadow-lg">
      <div className="flex gap-1">
        <Button
          variant={mode === "past" ? "default" : "ghost"}
          size="sm"
          onClick={() => onModeChange("past")}
          className="text-sm font-medium transition-all duration-300"
          data-testid="button-toggle-past"
        >
          Past Events
        </Button>
        <Button
          variant={mode === "upcoming" ? "default" : "ghost"}
          size="sm"
          onClick={() => onModeChange("upcoming")}
          className="text-sm font-medium transition-all duration-300"
          data-testid="button-toggle-upcoming"
        >
          Upcoming Events
        </Button>
      </div>
    </div>
  );
}