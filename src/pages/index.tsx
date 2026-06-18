"use client";

import { useState } from "react";
import { SovereignHeader, type ScenarioType } from "@/components/SovereignHeader";
import { RelationshipToggle, type RelationshipMode } from "@/components/RelationshipToggle";
import { NavigationDock } from "@/components/NavigationDock";
import { CommandMatrix } from "@/components/CommandMatrix";
import { CommunicationCanvas, type ChatMessage } from "@/components/CommunicationCanvas";
import { GeminiChatbox } from "@/components/GeminiChatbox";
import { TTSAudioBar } from "@/components/TTSAudioBar";
import { GoogleMapsView } from "@/components/GoogleMapsView";
import { YouTubeView } from "@/components/YouTubeView";
import { CalendarView } from "@/components/CalendarView";
import { CalculatorView } from "@/components/CalculatorView";
import { VaultOverlay } from "@/components/VaultOverlay";
import { SecurityContactModal } from "@/components/SecurityContactModal";
import { SEO } from "@/components/SEO";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Radio } from "lucide-react";

export default function Home() {
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [relationshipMode, setRelationshipMode] = useState<RelationshipMode>("formal");
  const [isOffline, setIsOffline] = useState(false);
  const [language, setLanguage] = useState<"en" | "id">("en");
  const [currentView, setCurrentView] = useState<"matrix" | "maps" | "youtube" | "calendar" | "calculator">("matrix");
  const [scenario, setScenario] = useState<ScenarioType>("local");
  const [activeVault, setActiveVault] = useState<"daily" | "transport" | "financial" | null>(null);
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [emergencyContactName, setEmergencyContactName] = useState("Emergency Coordinator");
  const [emergencyContactPhone, setEmergencyContactPhone] = useState("+1234567890");

  const addChatMessage = (textEn: string, textId: string) => {
    let formattedEn = textEn;
    let formattedId = textId;
    
    if (relationshipMode === "formal") {
      formattedEn = `Sir/Ma'am, ${textEn}`;
      formattedId = `Pak/Bu, ${textId}`;
    } else if (relationshipMode === "endearment") {
      formattedEn = `Dear, ${textEn}`;
      formattedId = `Sayang, ${textId}`;
    } else if (relationshipMode === "peer") {
      formattedEn = `Hey, ${textEn}`;
      formattedId = `Hei, ${textId}`;
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      textEn: formattedEn,
      textId: formattedId,
      timestamp: new Date(),
      isZoomCaption: scenario === "zoom",
    };

    setChatMessages((prev) => [...prev, newMessage]);
    
    if (scenario === "zoom") {
      console.log("📹 Zoom Integration: Message routed to chat stream and captions:", {
        chat: formattedEn,
        captions: formattedEn,
        timestamp: new Date().toISOString()
      });
    }
  };

  const handleCardClick = (variations: Array<{ en: string; id: string }>) => {
    let selectedIndex = 0;
    
    if (relationshipMode === "formal") {
      selectedIndex = 0;
    } else if (relationshipMode === "endearment") {
      selectedIndex = 1;
    } else if (relationshipMode === "peer") {
      selectedIndex = 2;
    }
    
    const selectedVariation = variations[selectedIndex] || variations[0];
    addChatMessage(selectedVariation.en, selectedVariation.id);
  };

  const handleSendToPreview = (message: string) => {
    addChatMessage(message, message);
  };

  const handleTTSMessage = (text: string) => {
    addChatMessage(text, text);
  };

  const handleManualMessage = (text: string) => {
    addChatMessage(text, text);
  };

  const handleViewChange = (view: string) => {
    if (view === "matrix" || view === "maps" || view === "youtube" || view === "calendar" || view === "calculator") {
      setCurrentView(view);
    }
  };

  const handleVaultOpen = (vault: "daily" | "transport" | "financial") => {
    setActiveVault(vault);
  };

  const handleVaultClose = () => {
    setActiveVault(null);
  };

  const handleSecurityOpen = () => {
    setShowSecurityModal(true);
  };

  const handleSecuritySave = (name: string, phone: string) => {
    setEmergencyContactName(name);
    setEmergencyContactPhone(phone);
  };

  const handleVaultSendText = (textEn: string, textId: string) => {
    addChatMessage(textEn, textId);
  };

  const handleVaultSendVoice = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
    addChatMessage(text, text);
  };

  return (
    <>
      <SEO 
        title="Dominion Freedom Pad"
        description="Emergency operations tablet interface for critical response and command coordination"
      />
      <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
        <SovereignHeader 
          isOffline={isOffline} 
          onOfflineToggle={setIsOffline}
          language={language}
          onLanguageChange={setLanguage}
          scenario={scenario}
          onScenarioChange={setScenario}
        />
        
        {isOffline && (
          <Alert className="rounded-none border-x-0 border-t-0 border-b-4 border-transport bg-transport/10">
            <Radio className="h-5 w-5 text-transport animate-pulse" />
            <AlertDescription className="text-transport font-bold text-base flex items-center gap-2">
              Local Sovereign Network Active - Operating Fully Offline
            </AlertDescription>
          </Alert>
        )}
        
        {scenario === "zoom" && (
          <Alert className="rounded-none border-x-0 border-t-0 border-b-2 border-blue-600 bg-blue-50">
            <AlertDescription className="text-blue-700 font-semibold text-sm flex items-center gap-2">
              📹 Zoom Mode Active: All messages will route to Zoom chat stream and closed-caption subtitles
            </AlertDescription>
          </Alert>
        )}
        
        <RelationshipToggle onModeChange={setRelationshipMode} />
        <div className="flex-1 flex overflow-hidden">
          <NavigationDock 
            onGeminiClick={() => setIsGeminiOpen(true)} 
            onViewChange={handleViewChange}
            onVaultOpen={handleVaultOpen}
            onSecurityOpen={handleSecurityOpen}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            {currentView === "matrix" && (
              <>
                <CommandMatrix 
                  onCardClick={handleCardClick} 
                  language={language} 
                  relationshipMode={relationshipMode}
                  emergencyContactName={emergencyContactName}
                  emergencyContactPhone={emergencyContactPhone}
                />
                <TTSAudioBar onSendMessage={handleTTSMessage} />
              </>
            )}
            {currentView === "maps" && <GoogleMapsView />}
            {currentView === "youtube" && <YouTubeView />}
            {currentView === "calendar" && <CalendarView />}
            {currentView === "calculator" && <CalculatorView />}
          </div>
          <CommunicationCanvas 
            messages={chatMessages} 
            scenario={scenario}
            onManualMessage={handleManualMessage}
          />
          <GeminiChatbox 
            isOpen={isGeminiOpen} 
            onClose={() => setIsGeminiOpen(false)}
            onSendToPreview={handleSendToPreview}
          />
          
          {/* Vault Overlays */}
          {activeVault && (
            <VaultOverlay
              theme={activeVault}
              onClose={handleVaultClose}
              onSendText={handleVaultSendText}
              onSendVoice={handleVaultSendVoice}
              language={language}
            />
          )}

          {/* Security Contact Modal */}
          {showSecurityModal && (
            <SecurityContactModal
              onClose={() => setShowSecurityModal(false)}
              onSave={handleSecuritySave}
              currentName={emergencyContactName}
              currentPhone={emergencyContactPhone}
            />
          )}
        </div>
      </div>
    </>
  );
}