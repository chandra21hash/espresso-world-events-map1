import { Card } from "@/components/ui/card";

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
            <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow-sm"></div>
            <span className="text-xs text-muted-foreground">Past Events</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-primary shadow-sm"></div>
            <span className="text-xs text-muted-foreground">Upcoming Events</span>
          </div>
        </div>
        <div className="pt-1 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Showing: <span className="font-medium text-foreground">{mode === "past" ? "Past" : "Upcoming"} Events</span>
          </p>
        </div>
      </div>
    </Card>
  );
}