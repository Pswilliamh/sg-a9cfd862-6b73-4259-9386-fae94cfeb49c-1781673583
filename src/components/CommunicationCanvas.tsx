"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, Video, MessageCircle, Users, Mic, Camera, Monitor, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ScenarioType } from "./SovereignHeader";

export interface ChatMessage {
  id: string;
  textEn: string;
  textId: string;
  timestamp: Date;
  isZoomCaption?: boolean;
}

interface CommunicationCanvasProps {
  messages: ChatMessage[];
  scenario: ScenarioType;
  onManualMessage?: (text: string) => void;
}

export function CommunicationCanvas({ messages, scenario, onManualMessage }: CommunicationCanvasProps) {
  const [replyText, setReplyText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendReply = () => {
    if (replyText.trim() && onManualMessage) {
      onManualMessage(replyText);
      setReplyText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendReply();
    }
  };

  const handleJoinZoom = () => {
    console.log("Simulating Zoom session join...");
    alert("Zoom session joined! Messages will now appear in Zoom chat and captions.");
  };

  const handleLaunchWhatsApp = () => {
    if (messages.length === 0) {
      alert("No messages to send. Please send a message first.");
      return;
    }
    
    const latestMessage = messages[messages.length - 1];
    const messageText = `${latestMessage.textEn}\n${latestMessage.textId}`;
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  // Zoom Meeting Window Mode
  if (scenario === "zoom") {
    return (
      <aside className="w-96 bg-muted/30 border-l border-muted flex flex-col p-6 relative">
        <div className="flex-1 bg-black rounded-lg border-2 border-blue-600 shadow-2xl flex flex-col overflow-hidden">
          {/* Zoom Meeting Header */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-700 bg-gray-900">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-500" />
              <h3 className="text-xs font-bold uppercase tracking-wide text-white">
                Sovereign Zoom Meeting Web SDK Stream
              </h3>
            </div>
            <Button 
              onClick={handleJoinZoom}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3 py-1 h-auto"
            >
              Join
            </Button>
          </div>

          {/* Zoom Video Area */}
          <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700">
            <div className="text-center space-y-3 p-8">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto border-2 border-blue-500/50">
                <Users className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-sm font-semibold text-white">Remote Classroom Session</p>
              <p className="text-xs text-gray-400">Teacher's Video Feed</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <Mic className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <Camera className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                  <Monitor className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Zoom Chat Component */}
          <div className="h-64 bg-gray-800 flex flex-col border-t-2 border-blue-600/30">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700 bg-gray-900">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wide">Zoom Chat Stream</h4>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-xs text-gray-500 text-center">
                    No messages yet<br />
                    <span className="text-[10px]">Messages will appear here</span>
                  </p>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div key={message.id} className="bg-gray-700/50 rounded px-3 py-2 border-l-2 border-blue-500">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[10px] font-bold text-blue-400">You</span>
                        <span className="text-[9px] text-gray-500">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <p className="text-xs text-white leading-relaxed font-medium">
                        {message.textEn}
                      </p>
                      <p className="text-[11px] text-gray-400 italic mt-0.5">
                        {message.textId}
                      </p>
                      <div className="flex items-center gap-1 mt-1 text-[9px] text-blue-300">
                        <Video className="w-3 h-3" />
                        <span>Sent to captions</span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Inline Reply Input */}
            <div className="border-t border-gray-700 bg-gray-900 p-2 flex gap-2">
              <Input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type manual classroom note or reply here..."
                className="flex-1 bg-gray-800 border-gray-600 text-white text-xs placeholder:text-gray-500 focus:border-blue-500"
              />
              <Button
                onClick={handleSendReply}
                size="sm"
                disabled={!replyText.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3"
              >
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>

        <Button
          onClick={handleLaunchWhatsApp}
          size="lg"
          className="absolute bottom-8 right-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-white font-bold text-base px-6 py-7 flex items-center gap-3 hover:scale-105"
          style={{ 
            backgroundColor: "#25D366",
            border: "3px solid #128C7E"
          }}
          disabled={messages.length === 0}
        >
          <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
          <span className="tracking-wide">Launch WhatsApp Live</span>
        </Button>
      </aside>
    );
  }

  // Default WhatsApp-style Chat Mode
  return (
    <aside className="w-96 bg-muted/30 border-l border-muted flex flex-col p-6 relative">
      <div className="flex-1 bg-white rounded-lg border-2 border-accent/30 shadow-lg flex flex-col overflow-hidden mb-24">
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-muted bg-accent/5">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-accent" />
            <h3 className="text-sm font-bold uppercase tracking-wide" style={{ color: "#000000" }}>
              Live Message Feed
            </h3>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-muted/5 to-white">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto" />
                <p className="text-xs uppercase tracking-widest" style={{ color: "#000000" }}>
                  No messages yet
                </p>
                <p className="text-xs" style={{ color: "#0B3C5D" }}>
                  Click an item or type to send
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[85%] bg-accent text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md relative">
                    <p className="text-sm font-medium leading-relaxed">
                      {message.textEn}
                    </p>
                    <p className="text-xs italic opacity-80 mt-1 leading-relaxed">
                      {message.textId}
                    </p>
                    <p className="text-[10px] opacity-60 mt-1 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* Inline Reply Input Panel */}
        <div className="border-t-2 border-accent/20 bg-accent/5 p-3 flex gap-2">
          <Input
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type manual classroom note or reply here..."
            className="flex-1 border-accent/40 focus:border-accent text-sm"
          />
          <Button
            onClick={handleSendReply}
            size="sm"
            disabled={!replyText.trim()}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Button
        onClick={handleLaunchWhatsApp}
        size="lg"
        className="absolute bottom-8 right-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 text-white font-bold text-base px-6 py-7 flex items-center gap-3 hover:scale-105"
        style={{ 
          backgroundColor: "#25D366",
          border: "3px solid #128C7E"
        }}
        disabled={messages.length === 0}
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
        <span className="tracking-wide">Launch WhatsApp Live</span>
      </Button>
    </aside>
  );
}