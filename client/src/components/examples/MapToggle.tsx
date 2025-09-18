import { useState } from "react";
import MapToggle from "../MapToggle";

export default function MapToggleExample() {
  const [mode, setMode] = useState<"past" | "upcoming">("past");

  return (
    <div className="relative h-32 bg-muted rounded-lg">
      <MapToggle mode={mode} onModeChange={setMode} />
    </div>
  );
}