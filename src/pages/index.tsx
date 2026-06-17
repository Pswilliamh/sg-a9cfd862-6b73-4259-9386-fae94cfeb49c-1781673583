"use client";

import { useState } from "react";
import { SovereignHeader } from "@/components/SovereignHeader";
import { RelationshipToggle, type RelationshipMode } from "@/components/RelationshipToggle";
import { NavigationDock } from "@/components/NavigationDock";
import { CommandMatrix } from "@/components/CommandMatrix";
import { CommunicationCanvas } from "@/components/CommunicationCanvas";
import { GeminiChatbox } from "@/components/GeminiChatbox";
import { TTSAudioBar } from "@/components/TTSAudioBar";
import { SEO } from "@/components/SEO";

export default function Home() {
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const [previewMessage, setPreviewMessage] = useState<string>("");
  const [relationshipMode, setRelationshipMode] = useState<RelationshipMode>("formal");

  const handleSendToPreview = (message: string) => {
    let formattedMessage = message;
    
    if (relationshipMode === "formal") {
      formattedMessage = `Sir/Ma'am, ${message}`;
    } else if (relationshipMode === "endearment") {
      formattedMessage = `Dear, ${message}`;
    } else if (relationshipMode === "peer") {
      formattedMessage = `Hey, ${message}`;
    }
    
    setPreviewMessage(formattedMessage);
  };

  return (
    <>
      <SEO 
        title="Dominion Freedom Pad"
        description="Emergency operations tablet interface for critical response and command coordination"
      />
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
        <SovereignHeader />
        <RelationshipToggle onModeChange={setRelationshipMode} />
        <div className="flex-1 flex overflow-hidden">
          <NavigationDock onGeminiClick={() => setIsGeminiOpen(true)} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <CommandMatrix />
            <TTSAudioBar />
          </div>
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