import EspressoHeader from "@/components/EspressoHeader";
import EspressoWorldMap from "@/components/EspressoWorldMap";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <EspressoHeader />
      
      <div className="flex-1 relative">
        <div className="absolute top-4 right-4 z-[1001]">
          <ThemeToggle />
        </div>
        
        <div className="h-full p-4">
          <div className="h-full max-w-7xl mx-auto">
            <EspressoWorldMap />
          </div>
        </div>
      </div>
    </div>
  );
}