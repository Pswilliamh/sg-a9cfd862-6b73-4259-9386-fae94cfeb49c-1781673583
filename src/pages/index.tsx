"use client";

import { useState } from "react";
import { SovereignHeader } from "@/components/SovereignHeader";
import { NavigationDock } from "@/components/NavigationDock";
import { CommandMatrix } from "@/components/CommandMatrix";
import { CommunicationCanvas } from "@/components/CommunicationCanvas";
import { GeminiChatbox } from "@/components/GeminiChatbox";
import { SEO } from "@/components/SEO";

export default function Home() {
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const [previewMessage, setPreviewMessage] = useState<string>("");

  const handleSendToPreview = (message: string) => {
    setPreviewMessage(message);
  };

  return (
    <>
      <SEO 
        title="Dominion Freedom Pad"
        description="Emergency operations tablet interface for critical response and command coordination"
      />
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
        <SovereignHeader />
        <div className="flex-1 flex overflow-hidden">
          <NavigationDock onGeminiClick={() => setIsGeminiOpen(true)} />
          <CommandMatrix />
          <CommunicationCanvas previewMessage={previewMessage} />
          <GeminiChatbox 
            isOpen={isGeminiOpen} 
            onClose={() => setIsGeminiOpen(false)}
            onSendToPreview={handleSendToPreview}
          />
        </div>
      </div>
    </>
  );
}