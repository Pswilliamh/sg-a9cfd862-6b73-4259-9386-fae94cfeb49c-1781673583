"use client";

import { useEffect, useRef } from "react";
import { MessageSquare } from "lucide-react";

export interface ChatMessage {
  id: string;
  textEn: string;
  textId: string;
  timestamp: Date;
}

interface CommunicationCanvasProps {
  messages: ChatMessage[];
}

export function CommunicationCanvas({ messages }: CommunicationCanvasProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <aside className="w-96 bg-muted/30 border-l border-muted flex flex-col p-6">
      <div className="flex-1 bg-white rounded-lg border-2 border-accent/30 shadow-lg flex flex-col overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-muted bg-accent/5">
          <MessageSquare className="w-6 h-6 text-accent" />
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
            Live Message Feed
          </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-muted/5 to-white">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  No messages yet
                </p>
                <p className="text-xs text-muted-foreground/60">
                  Click an item or type to send
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[85%] bg-accent text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md">
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
      </div>
    </aside>
  );
}