"use client";

import { useState, useEffect } from "react";
import { Volume2, Play, Mic, MicOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TTSAudioBarProps {
  onSendMessage?: (text: string) => void;
}

export function TTSAudioBar({ onSendMessage }: TTSAudioBarProps) {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition();
        recognitionInstance.continuous = false;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setText(transcript);
          if (onSendMessage) {
            onSendMessage(transcript);
          }
          setIsListening(false);
        };

        recognitionInstance.onerror = () => {
          setIsListening(false);
        };

        recognitionInstance.onend = () => {
          setIsListening(false);
        };

        setRecognition(recognitionInstance);
      }
    }
  }, [onSendMessage]);

  const handleMicrophoneToggle = () => {
    if (!recognition) {
      alert("Speech Recognition is not supported in this browser");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const handleSpeak = () => {
    if (!text.trim()) return;

    if (onSendMessage) {
      onSendMessage(text);
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        setText("");
      };
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in this browser");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSpeak();
    }
  };

  return (
    <div className="w-full bg-muted border-t-2 border-border px-8 py-4">
      <div className="flex items-center gap-4">
        <Volume2 className="w-6 h-6 text-foreground/60" />
        <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wide whitespace-nowrap">
          Type to Speak Natively:
        </span>
        <div className="flex-1 flex items-center gap-3">
          <Button
            onClick={handleMicrophoneToggle}
            size="lg"
            variant={isListening ? "destructive" : "outline"}
            className={`px-4 ${isListening ? "bg-red-600 hover:bg-red-700 animate-pulse" : ""}`}
          >
            {isListening ? (
              <Mic className="w-6 h-6 text-white" />
            ) : (
              <Mic className="w-6 h-6" />
            )}
          </Button>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={isListening ? "Listening..." : "Enter text to speak aloud or use microphone..."}
            className="flex-1 text-base"
            disabled={isListening}
          />
          <Button
            onClick={handleSpeak}
            disabled={!text.trim() || isSpeaking}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center gap-2 px-6"
          >
            <Play className="w-6 h-6" fill="currentColor" />
            <span className="font-bold">SPEAK</span>
          </Button>
        </div>
      </div>
    </div>
  );
}