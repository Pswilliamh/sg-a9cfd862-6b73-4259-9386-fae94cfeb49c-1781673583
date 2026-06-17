"use client";

import { useState } from "react";
import { SovereignHeader } from "@/components/SovereignHeader";
import { RelationshipToggle, type RelationshipMode } from "@/components/RelationshipToggle";
import { NavigationDock } from "@/components/NavigationDock";
import { CommandMatrix } from "@/components/CommandMatrix";
import { CommunicationCanvas, type ChatMessage } from "@/components/CommunicationCanvas";
import { GeminiChatbox } from "@/components/GeminiChatbox";
import { TTSAudioBar } from "@/components/TTSAudioBar";
import { SEO } from "@/components/SEO";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Radio } from "lucide-react";

const messageTranslations = {
  meals: { en: "I need a meal", id: "Saya butuh makanan" },
  water: { en: "I need water", id: "Saya butuh air" },
  snacks: { en: "I need a snack", id: "Saya butuh camilan" },
  shirts: { en: "I need a shirt", id: "Saya butuh kemeja" },
  pants: { en: "I need pants", id: "Saya butuh celana" },
  shoes: { en: "I need shoes", id: "Saya butuh sepatu" },
  car: { en: "I need car transport", id: "Saya butuh transportasi mobil" },
  truck: { en: "I need truck transport", id: "Saya butuh transportasi truk" },
  location: { en: "I need location assistance", id: "Saya butuh bantuan lokasi" },
  protection: { en: "I need security protection", id: "Saya butuh perlindungan keamanan" },
  safety: { en: "I need safety assistance", id: "Saya butuh bantuan keselamatan" },
  alert: { en: "Security alert needed", id: "Peringatan keamanan diperlukan" },
  payment: { en: "I need to make a payment", id: "Saya perlu melakukan pembayaran" },
  budget: { en: "I need budget assistance", id: "Saya butuh bantuan anggaran" },
  account: { en: "I need account information", id: "Saya butuh informasi akun" },
  home: { en: "I need home assistance", id: "Saya butuh bantuan rumah" },
  schedule: { en: "I need schedule help", id: "Saya butuh bantuan jadwal" },
  tasks: { en: "I need task assistance", id: "Saya butuh bantuan tugas" },
};

export default function Home() {
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [relationshipMode, setRelationshipMode] = useState<RelationshipMode>("formal");
  const [isOffline, setIsOffline] = useState(false);
  const [language, setLanguage] = useState<"en" | "id">("en");

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
    };

    setChatMessages((prev) => [...prev, newMessage]);
  };

  const handleCardClick = (messageEn: string, messageKey: string) => {
    const translation = messageTranslations[messageKey as keyof typeof messageTranslations];
    if (translation) {
      addChatMessage(messageEn, translation.id);
    }
  };

  const handleSendToPreview = (message: string) => {
    addChatMessage(message, message);
  };

  const handleTTSMessage = (text: string) => {
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
        />
        
        {isOffline && (
          <Alert className="rounded-none border-x-0 border-t-0 border-b-4 border-transport bg-transport/10">
            <Radio className="h-5 w-5 text-transport animate-pulse" />
            <AlertDescription className="text-transport font-bold text-base flex items-center gap-2">
              Local Sovereign Network Active - Operating Fully Offline
            </AlertDescription>
          </Alert>
        )}
        
        <RelationshipToggle onModeChange={setRelationshipMode} />
        <div className="flex-1 flex overflow-hidden">
          <NavigationDock onGeminiClick={() => setIsGeminiOpen(true)} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <CommandMatrix onCardClick={handleCardClick} language={language} />
            <TTSAudioBar onSendMessage={handleTTSMessage} />
          </div>
          <CommunicationCanvas messages={chatMessages} />
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