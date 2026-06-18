"use client";

import { useState } from "react";
import { SovereignHeader, type ScenarioType } from "@/components/SovereignHeader";
import { SystemFooter } from "@/components/SystemFooter";
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
import { PasswordGate } from "@/components/PasswordGate";
import { SEO } from "@/components/SEO";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Radio } from "lucide-react";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  // Simulated inbound message listener - runs in background
  useState(() => {
    const teacherResponses = [
      { en: "Great job! I received your message.", id: "Kerja bagus! Saya menerima pesan Anda." },
      { en: "Thank you for letting me know.", id: "Terima kasih telah memberi tahu saya." },
      { en: "I understand. How can I help you?", id: "Saya mengerti. Bagaimana saya bisa membantu Anda?" },
      { en: "Got it! Please wait a moment.", id: "Mengerti! Tolong tunggu sebentar." },
      { en: "I'm here to support you.", id: "Saya di sini untuk mendukung Anda." },
    ];

    const interval = setInterval(() => {
      // Simulate random inbound messages from teacher (30% chance every 15 seconds)
      if (Math.random() < 0.3 && chatMessages.length > 0) {
        const randomResponse = teacherResponses[Math.floor(Math.random() * teacherResponses.length)];
        const inboundMessage: ChatMessage = {
          id: `teacher-${Date.now()}`,
          textEn: randomResponse.en,
          textId: randomResponse.id,
          timestamp: new Date(),
          sender: "teacher",
        };
        setChatMessages((prev) => [...prev, inboundMessage]);
      }
    }, 15000); // Check every 15 seconds

    return () => clearInterval(interval);
  });

  const addChatMessage = (textEn: string, textId: string, sender: "student" | "teacher" = "student") => {
    let formattedEn = textEn;
    let formattedId = textId;
    
    if (sender === "student") {
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
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      textEn: formattedEn,
      textId: formattedId,
      timestamp: new Date(),
      isZoomCaption: scenario === "zoom",
      sender: sender,
    };

    setChatMessages((prev) => [...prev, newMessage]);
    
    if (scenario === "zoom" && sender === "student") {
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
      utterance.lang = language === "en" ? "en-US" : "id-ID";
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
      
      {!isAuthenticated ? (
        <PasswordGate 
          onAuthenticated={() => setIsAuthenticated(true)}
          language={language}
        />
      ) : (
        <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
          <SovereignHeader />
          
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
                  <TTSAudioBar onSendMessage={handleTTSMessage} language={language} />
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

          <SystemFooter
            isOffline={isOffline}
            onOfflineToggle={setIsOffline}
            language={language}
            onLanguageChange={setLanguage}
            scenario={scenario}
            onScenarioChange={setScenario}
          />
        </div>
      )}
    </>
  );
}