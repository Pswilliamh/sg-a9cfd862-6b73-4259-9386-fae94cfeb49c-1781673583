"use client";

import { useState } from "react";
import { Crown, Heart, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type RelationshipMode = "formal" | "endearment" | "peer";

interface RelationshipToggleProps {
  onModeChange?: (mode: RelationshipMode) => void;
}

export function RelationshipToggle({ onModeChange }: RelationshipToggleProps) {
  const [mode, setMode] = useState<RelationshipMode>("formal");

  const handleToggle = (newMode: RelationshipMode) => {
    setMode(newMode);
    onModeChange?.(newMode);
  };

  const modes = [
    { id: "formal" as RelationshipMode, label: "Formal", icon: Crown, emoji: "👑" },
    { id: "endearment" as RelationshipMode, label: "Endearment", icon: Heart, emoji: "❤️" },
    { id: "peer" as RelationshipMode, label: "Peer", icon: Sprout, emoji: "🌱" },
  ];

  return (
    <div className="w-full bg-muted border-b-2 border-border px-8 py-3 flex items-center gap-4">
      <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wide">
        Relationship Mode:
      </span>
      <div className="flex gap-3">
        {modes.map((m) => {
          const Icon = m.icon;
          return (
            <Button
              key={m.id}
              variant={mode === m.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleToggle(m.id)}
              className={cn(
                "flex items-center gap-2 font-semibold transition-all",
                mode === m.id && "bg-accent text-accent-foreground shadow-lg"
              )}
            >
              <span className="text-base">{m.emoji}</span>
              <Icon className="w-4 h-4" />
              {m.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}