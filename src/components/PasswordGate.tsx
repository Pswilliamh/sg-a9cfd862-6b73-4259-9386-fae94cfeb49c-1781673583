"use client";

import { useState } from "react";
import { Shield, Lock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PasswordGateProps {
  onAuthenticated: () => void;
  language?: "en" | "id";
}

export function PasswordGate({ onAuthenticated, language = "en" }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const MASTER_PASSWORD = "Dominion2026";

  const translations = {
    en: {
      title: "Dominion Freedom Guide",
      subtitle: "Private Classroom Beta Testing Portal | Authorized Access Only",
      label: "Enter Access Password",
      button: "Unlock Dashboard",
      error: "Access Denied. Please check with your Coordinator.",
      placeholder: "Enter password...",
    },
    id: {
      title: "Panduan Kebebasan Dominion",
      subtitle: "Portal Uji Beta Kelas Pribadi | Akses Hanya untuk yang Berwenang",
      label: "Masukkan Kata Sandi Akses",
      button: "Buka Dasbor",
      error: "Akses Ditolak. Silakan periksa dengan Koordinator Anda.",
      placeholder: "Masukkan kata sandi...",
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === MASTER_PASSWORD) {
      setError(false);
      onAuthenticated();
    } else {
      setError(true);
      setIsShaking(true);
      setPassword("");
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as any);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-navigation via-blue-900 to-navigation flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Shield Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 rounded-full p-6 shadow-2xl">
              <Shield className="w-16 h-16 text-navigation" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-white font-heading tracking-tight">
            {t.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          <p className="text-sm text-blue-200 font-semibold uppercase tracking-wider leading-relaxed px-4">
            {t.subtitle}
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400" />
              {t.label}
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              onKeyPress={handleKeyPress}
              placeholder={t.placeholder}
              className={`bg-white/10 border-2 ${
                error ? "border-red-500 shake" : "border-white/30"
              } text-white placeholder:text-blue-300/50 focus:border-amber-400 focus:bg-white/20 h-14 text-lg ${
                isShaking ? "animate-shake" : ""
              }`}
              autoFocus
            />
          </div>

          {error && (
            <Alert className="bg-red-500/20 border-2 border-red-500 animate-slide-down">
              <AlertCircle className="h-5 w-5 text-red-400" />
              <AlertDescription className="text-red-200 font-semibold">
                {t.error}
              </AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-600 text-navigation font-bold text-lg uppercase tracking-wide shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
          >
            <Lock className="w-5 h-5 mr-3" />
            {t.button}
          </Button>
        </form>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-xs text-blue-300/70 italic">
            {language === "en" 
              ? "Ministry of Wellness & Education | Kingdom of Heaven Embassy Governance"
              : "Kementerian Kesejahteraan & Pendidikan | Tata Kelola Kedutaan Kerajaan Surga"
            }
          </p>
        </div>
      </div>
    </div>
  );
}