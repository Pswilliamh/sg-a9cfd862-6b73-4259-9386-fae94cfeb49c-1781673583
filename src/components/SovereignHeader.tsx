import { Shield, Wifi } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function SovereignHeader() {
  return (
    <header className="w-full bg-navigation border-b-4 border-accent px-8 py-4 flex items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <Shield className="w-16 h-16 text-gold" strokeWidth={1.5} style={{ color: "#D4AF37" }} />
        <div className="flex flex-col">
          <h1 className="font-heading font-bold text-3xl tracking-wide" style={{ color: "#D4AF37" }}>
            Dominion Freedom Guide
          </h1>
          <p className="font-sans text-sm tracking-wide" style={{ color: "#D4AF37" }}>
            Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance
          </p>
        </div>
      </div>
      <Badge variant="outline" className="bg-navigation border-gold text-gold px-4 py-2 text-sm font-semibold flex items-center gap-2" style={{ borderColor: "#D4AF37", color: "#D4AF37" }}>
        <Wifi className="w-4 h-4" />
        Sovereign Local Mode Active
      </Badge>
    </header>
  );
}