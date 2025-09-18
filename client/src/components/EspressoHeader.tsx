import espressoLogo from "@/assets/espresso-logo.png";

export default function EspressoHeader() {
  return (
    <header className="w-full bg-card border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <img 
            src={espressoLogo} 
            alt="Espresso Logo" 
            className="w-8 h-8"
            data-testid="img-logo"
          />
          <div>
            <h1 className="text-lg font-bold text-foreground font-serif">
              Espresso World Map
            </h1>
            <p className="text-xs text-muted-foreground">
              Global Events & Community Presence
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}