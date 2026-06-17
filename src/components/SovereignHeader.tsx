import { Shield } from "lucide-react";

export function SovereignHeader() {
  return (
    <header className="w-full bg-navigation border-b-4 border-accent px-8 py-4 flex items-center gap-6">
      <div className="flex items-center gap-4">
        <Shield className="w-16 h-16 text-accent" strokeWidth={1.5} />
        <div className="flex flex-col">
          <h1 className="text-white font-heading font-bold text-3xl tracking-wide">
            Dominion Freedom Guide
          </h1>
          <p className="text-accent/90 font-sans text-sm tracking-wide">
            Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance
          </p>
        </div>
      </div>
    </header>
  );
}