"use client";

import { Shield, Wifi, Radio, Globe, Info, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export type ScenarioType = "local" | "whatsapp" | "zoom";

interface SovereignHeaderProps {
  isOffline: boolean;
  onOfflineToggle: (offline: boolean) => void;
  language: "en" | "id";
  onLanguageChange: (lang: "en" | "id") => void;
  scenario: ScenarioType;
  onScenarioChange: (scenario: ScenarioType) => void;
}

export function SovereignHeader({ 
  isOffline, 
  onOfflineToggle, 
  language, 
  onLanguageChange,
  scenario,
  onScenarioChange 
}: SovereignHeaderProps) {
  const scenarioLabels = {
    local: "🏫 Local Classroom (Mesh Layout)",
    whatsapp: "💬 Special-Needs Class (WhatsApp Link)",
    zoom: "🏡 Home Schooling (Zoom Broadcast)"
  };

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
      
      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              className="hover:bg-navigation/70 flex items-center gap-2 px-4"
            >
              <HelpCircle className="w-5 h-5 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-bold text-sm" style={{ color: "#D4AF37" }}>
                ❓ How It Works
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-3xl text-navigation">
                Dominion Freedom Guide: Operational Blueprints
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                Complete guide to using the communication system effectively
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
              <Card className="border-2 border-accent/30 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">1</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Select Relationship Frequency</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    Choose the emotional tone for your communications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">👑</span>
                    <div>
                      <p className="font-bold text-sm">Formal Mode</p>
                      <p className="text-xs text-muted-foreground">
                        Adds "Sir/Ma'am" (English) or "Pak/Bu" (Indonesian) prefix. 
                        Best for professional or respectful contexts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">❤️</span>
                    <div>
                      <p className="font-bold text-sm">Endearment Mode</p>
                      <p className="text-xs text-muted-foreground">
                        Adds "Dear" (English) or "Sayang" (Indonesian) prefix. 
                        For close relationships and family settings.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">🌱</span>
                    <div>
                      <p className="font-bold text-sm">Peer Mode</p>
                      <p className="text-xs text-muted-foreground">
                        Adds "Hey" (English) or "Hei" (Indonesian) prefix. 
                        For casual friend-to-friend communication.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-financial/30 hover:border-financial transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-financial/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-financial">2</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Set Environmental Scenario</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    Configure the communication routing path
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">🏫</span>
                    <div>
                      <p className="font-bold text-sm">Local Classroom</p>
                      <p className="text-xs text-muted-foreground">
                        Peer-to-peer mesh network. Works 100% offline. 
                        Messages route between devices via Bluetooth/WiFi mesh.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">💬</span>
                    <div>
                      <p className="font-bold text-sm">Special-Needs Class</p>
                      <p className="text-xs text-muted-foreground">
                        Routes through WhatsApp Web Bridge API. 
                        Guardians monitor remotely via WhatsApp.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">🏡</span>
                    <div>
                      <p className="font-bold text-sm">Home Schooling</p>
                      <p className="text-xs text-muted-foreground">
                        Zoom Meeting SDK integration. Messages appear in 
                        Zoom chat stream and closed-caption subtitles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gemini/30 hover:border-gemini transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gemini/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gemini">3</span>
                    </div>
                    <CardTitle className="font-heading text-xl">Broadcast Natively</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    Three ways to communicate your message
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">🎯</span>
                    <div>
                      <p className="font-bold text-sm">Tactile Cards</p>
                      <p className="text-xs text-muted-foreground">
                        Tap category cards (Nourishment, Wardrobe, Transport) 
                        to instantly send pre-built phrases with 4 natural variations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">⌨️</span>
                    <div>
                      <p className="font-bold text-sm">Manual Typing</p>
                      <p className="text-xs text-muted-foreground">
                        Type custom messages in the bottom input bar. 
                        Press SPEAK to hear it aloud via native browser TTS.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">🎤</span>
                    <div>
                      <p className="font-bold text-sm">Microphone Dictation</p>
                      <p className="text-xs text-muted-foreground">
                        Click the microphone button (turns red when listening). 
                        Speak naturally - voice converts to text automatically.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <DialogFooter>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                  Close / Enter Dashboard
                </Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2"
              style={{ borderColor: "#D4AF37" }}
            >
              <Globe className="w-5 h-5 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-semibold" style={{ color: "#D4AF37" }}>
                {language === "en" ? "🇺🇸 English" : "🇮🇩 Indonesian"}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onLanguageChange("en")} className="cursor-pointer">
              🇺🇸 English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLanguageChange("id")} className="cursor-pointer">
              🇮🇩 Indonesian
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline" 
                className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2 min-w-[280px]"
                style={{ borderColor: "#D4AF37" }}
              >
                <span className="text-gold font-semibold text-sm" style={{ color: "#D4AF37" }}>
                  Active Scenario: {scenarioLabels[scenario].split(" (")[0]}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[320px]">
              <DropdownMenuItem 
                onClick={() => onScenarioChange("local")} 
                className="cursor-pointer py-3"
              >
                <span className="font-semibold">🏫 Local Classroom (Mesh Layout)</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onScenarioChange("whatsapp")} 
                className="cursor-pointer py-3"
              >
                <span className="font-semibold">💬 Special-Needs Class (WhatsApp Link)</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onScenarioChange("zoom")} 
                className="cursor-pointer py-3"
              >
                <span className="font-semibold">🏡 Home Schooling (Zoom Broadcast)</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="bg-navigation/50 border-gold/30 hover:bg-navigation/70"
                style={{ borderColor: "#D4AF37" }}
              >
                <Info className="w-5 h-5 text-gold" style={{ color: "#D4AF37" }} />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Scenario Connection Paths</DialogTitle>
                <DialogDescription className="text-base pt-4 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">🏫 Local Classroom (Mesh Layout)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Connection Path:</strong> Local Peer-to-Peer mesh network using device-to-device communication. 
                      No internet required. Messages route directly between tablets in the same physical space using 
                      Bluetooth or local WiFi mesh protocols.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Use Case:</strong> Classroom environments where students communicate directly with teachers 
                      and peers without internet dependency.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">💬 Special-Needs Class (WhatsApp Link)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Connection Path:</strong> Messages are routed through WhatsApp Web Bridge API. 
                      Requires internet connection. Communication flows through WhatsApp's end-to-end encrypted servers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Use Case:</strong> Special education settings where guardians and support staff monitor 
                      communication remotely via familiar WhatsApp interface.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-foreground text-lg">🏡 Home Schooling (Zoom Broadcast)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Connection Path:</strong> Integration with Zoom Meeting SDK. Messages are injected into 
                      active Zoom session's chat stream and closed-caption subtitle array in real-time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Use Case:</strong> Home schooling environments where students participate in remote learning. 
                      AAC messages appear instantly in Zoom chat and captions for all participants to see.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center gap-3 bg-navigation/50 px-4 py-2 rounded-lg border border-gold/30">
          <Label htmlFor="network-toggle" className="text-gold font-semibold text-sm cursor-pointer" style={{ color: "#D4AF37" }}>
            Network Status:
          </Label>
          <span className="text-gold text-sm font-bold" style={{ color: "#D4AF37" }}>
            {isOffline ? "Local Mesh" : "Online"}
          </span>
          <Switch
            id="network-toggle"
            checked={isOffline}
            onCheckedChange={onOfflineToggle}
            className="data-[state=checked]:bg-transport"
          />
        </div>
        
        <Badge 
          variant="outline" 
          className={`border-2 px-4 py-2 text-sm font-semibold flex items-center gap-2 ${
            isOffline 
              ? "bg-transport/20 border-transport text-transport" 
              : "bg-navigation border-gold"
          }`}
          style={!isOffline ? { borderColor: "#D4AF37", color: "#D4AF37" } : undefined}
        >
          {isOffline ? (
            <>
              <Radio className="w-4 h-4 animate-pulse" />
              Sovereign Local Mode Active
            </>
          ) : (
            <>
              <Wifi className="w-4 h-4" />
              Cloud Connected
            </>
          )}
        </Badge>
      </div>
    </header>
  );
}