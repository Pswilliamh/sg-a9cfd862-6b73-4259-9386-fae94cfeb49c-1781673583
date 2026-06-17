"use client";

import { Home, Truck, DollarSign, Shield, AlertTriangle, Calendar, Calculator, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavModule {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const modules: NavModule[] = [
  { id: "daily", label: "DAILY LIFE", icon: Home, color: "text-blue-400" },
  { id: "transport", label: "TRANSPORT", icon: Truck, color: "text-transport" },
  { id: "financial", label: "FINANCIAL", icon: DollarSign, color: "text-financial" },
  { id: "security", label: "SECURITY", icon: Shield, color: "text-security" },
];

interface NavigationDockProps {
  onGeminiClick: () => void;
}

export function NavigationDock({ onGeminiClick }: NavigationDockProps) {
  return (
    <aside className="w-32 bg-navigation flex flex-col items-center py-8 gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30">
      {modules.map((module) => {
        const Icon = module.icon;
        return (
          <button
            key={module.id}
            className="flex flex-col items-center gap-2 px-4 py-6 w-full hover:bg-white/10 transition-colors group"
          >
            <Icon className={cn("w-10 h-10", module.color, "group-hover:scale-110 transition-transform")} />
            <span className="text-white text-xs font-semibold tracking-wide text-center leading-tight">
              {module.label}
            </span>
          </button>
        );
      })}

      <div className="w-full border-t border-white/20 my-2" />

      <button className="flex flex-col items-center gap-2 px-4 py-4 w-full hover:bg-white/10 transition-colors group">
        <Calendar className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="text-white text-xs font-semibold tracking-wide text-center">
          CALENDAR
        </span>
      </button>

      <button className="flex flex-col items-center gap-2 px-4 py-4 w-full hover:bg-white/10 transition-colors group">
        <Calculator className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="text-white text-xs font-semibold tracking-wide text-center">
          CALCULATOR
        </span>
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex flex-col items-center gap-2 px-4 py-4 w-full hover:bg-white/10 transition-colors group">
            <div className="relative">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="navigation text-xs font-bold">G</span>
              </div>
              <ChevronDown className="w-3 h-3 text-white absolute -bottom-1 -right-1" />
            </div>
            <span className="text-white text-xs font-semibold tracking-wide text-center">
              WORKSPACE
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="ml-2">
          <DropdownMenuItem>
            <span className="text-blue-600 font-semibold mr-2">📄</span>
            Google Docs
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="text-green-600 font-semibold mr-2">📊</span>
            Google Sheets
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="text-yellow-600 font-semibold mr-2">📁</span>
            Google Drive
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <button 
        onClick={onGeminiClick}
        className="flex flex-col items-center gap-2 px-4 py-4 w-full bg-gemini/20 hover:bg-gemini/30 transition-colors group border-y border-gemini/40"
      >
        <Sparkles className="w-8 h-8 text-gemini group-hover:scale-110 transition-transform" />
        <span className="text-gemini text-xs font-bold tracking-wide text-center">
          GEMINI AI
        </span>
      </button>

      <div className="flex-1" />

      <button className="w-full px-4 py-6 bg-emergency hover:bg-red-600 transition-all animate-pulse-slow flex flex-col items-center gap-2 group mt-4">
        <AlertTriangle className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
        <span className="text-white text-sm font-bold tracking-wider">
          EMERGENCY
        </span>
      </button>
    </aside>
  );
}