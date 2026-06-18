"use client";

import { Wifi, Radio, Globe, Info, HelpCircle } from "lucide-react";
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
import type { ScenarioType } from "./SovereignHeader";

interface SystemFooterProps {
  isOffline: boolean;
  onOfflineToggle: (offline: boolean) => void;
  language: "en" | "id";
  onLanguageChange: (lang: "en" | "id") => void;
  scenario: ScenarioType;
  onScenarioChange: (scenario: ScenarioType) => void;
}

export function SystemFooter({
  isOffline,
  onOfflineToggle,
  language,
  onLanguageChange,
  scenario,
  onScenarioChange
}: SystemFooterProps) {
  const scenarioLabels = {
    local: "🏫 Local Classroom",
    whatsapp: "💬 Special-Needs Class",
    zoom: "🏡 Home Schooling"
  };

  const content = {
    en: {
      dialogTitle: "Dominion Freedom Guide: Operational Blueprints",
      dialogDescription: "Complete guide to using the communication system effectively",
      closeButton: "Close / Enter Dashboard",
      sections: {
        about: {
          title: "About Us & Governance",
          icon: "🛡️",
          content: [
            "The Dominion Freedom Guide is developed and authorized under the stewardship of the Ministry of Wellness & Education within the Kingdom of Heaven Embassy Governance. While this platform is intimately designed to help the many struggling and suffering children across the globe, we believe that every person is an architect of reality, endowed with an inherent right to absolute linguistic sovereignty.",
            "This system empowers special-needs students, non-verbal communicators, and hearing-impaired learners to express themselves with dignity, clarity, and independence through multi-modal communication channels."
          ]
        },
        assistant: {
          title: "Classroom Assistant & Aid Training",
          icon: "👨‍🏫",
          content: [
            "Instructions for helpers to monitor the right-hand Live Message Feed and utilize the inline reply input field for real-time classroom notes.",
            "Assistants can type manual observations, behavioral notes, or custom replies directly into the text field at the bottom of the Communication Canvas. Press Enter or click the Send button to append the message to the live feed stream.",
            "Use the inline reply panel to document progress, confirm understanding, or provide immediate feedback while students interact with the communication matrix cards.",
            "The Live Message Feed serves as a real-time transcript of all communication events, allowing teachers and aids to track student expressions, needs, and emotional states throughout the learning session."
          ]
        },
        kinetic: {
          title: "Kinetic Visuals Matrix",
          icon: "🎬",
          content: [
            "Explains the high-signal frequency system for special-needs children, detailing the use of looping kinetic animations (zooming car, dancing pants, marching shoes, flashing coins, splashing water) for immediate context recognition.",
            "Each animated icon is designed to capture attention and provide instant visual feedback before the student even reads the text label. The bold, continuous movements help students with cognitive processing delays or visual learning preferences to quickly identify and select the correct communication card.",
            "Kinetic animations are calibrated for high contrast, large-scale movements, and repeating loops that maintain engagement without causing sensory overload. The animations are paired with static sign language hand gesture silhouettes to provide multi-modal recognition pathways."
          ]
        },
        modes: {
          title: "Cognitive Language Modes",
          icon: "👑",
          content: [
            "Guidelines for shifting global Relationship Modes (Formal, Endearment, Peer) to dynamically update vocabulary phrases and communication strings.",
            "The Formal Mode (👑) uses respectful titles and professional language structures suitable for addressing teachers, administrators, or authority figures. Phrases include 'Sir/Ma'am' prefixes and polite request formats.",
            "The Endearment Mode (❤️) employs warm, affectionate language appropriate for family members, close caregivers, or trusted individuals. Phrases use 'Dear' prefixes and gentle, loving communication patterns.",
            "The Peer Mode (🌱) utilizes casual, friendly language designed for interactions with classmates, siblings, or age-appropriate companions. Phrases use 'Hey' prefixes and relaxed, conversational structures.",
            "Switching relationship modes instantly updates all phrase cards, vault sentences, and voice output to match the selected social context, helping students navigate different communication scenarios with appropriate language."
          ]
        },
        keyboard: {
          title: "Sign Language Keyboard",
          icon: "🤟",
          content: [
            "Operational rules for using the toggleable fingerspelling sign language visual layout to type custom alphanumeric strings.",
            "Click the '🤟 Sign Keyboard' button next to the text input field to slide up the fingerspelling keyboard panel. Each key displays a clear ASL hand gesture silhouette with a small letter index in the top-right corner for teacher verification.",
            "Students can tap individual gesture keys to spell words letter by letter. The letters appear in real-time in the text input field. Space and Backspace buttons are included for full composition control.",
            "The keyboard layout follows standard QWERTY arrangement for familiarity while teaching sign language alphabet recognition. This tool is especially valuable for hearing-impaired students learning to bridge sign language and written text, or for non-verbal students who prefer visual spelling over pre-composed phrases.",
            "After composing a message with the sign keyboard, click Send to broadcast it to the Live Message Feed and activate text-to-speech playback in the selected language."
          ]
        }
      }
    },
    id: {
      dialogTitle: "Dominion Freedom Guide: Cetak Biru Operasional",
      dialogDescription: "Panduan lengkap untuk menggunakan sistem komunikasi secara efektif",
      closeButton: "Tutup / Masuk Dasbor",
      sections: {
        about: {
          title: "Tentang Kami & Tata Kelola",
          icon: "🛡️",
          content: [
            "Dominion Freedom Guide dikembangkan dan diwenangkan di bawah bimbingan Kementerian Kesejahteraan & Pendidikan di dalam Tata Kelola Kedutaan Kerajaan Surga. Meskipun platform ini dirancang secara khusus untuk membantu banyak anak yang berjuang dan menderita di seluruh dunia, kami percaya bahwa setiap orang adalah arsitek realitas, yang diberkahi dengan hak inheren untuk kedaulatan linguistik absolut.",
            "Sistem ini memberdayakan siswa berkebutuhan khusus, komunikator non-verbal, dan pelajar tunarungu untuk mengekspresikan diri mereka dengan martabat, kejelasan, dan kemandirian melalui saluran komunikasi multi-modal."
          ]
        },
        assistant: {
          title: "Pelatihan Asisten & Pendamping Kelas",
          icon: "👨‍🏫",
          content: [
            "Instruksi bagi pendamping untuk memantau Live Message Feed di sebelah kanan dan menggunakan kolom input balasan langsung untuk catatan kelas waktu nyata.",
            "Asisten dapat mengetik observasi manual, catatan perilaku, atau balasan khusus langsung ke dalam kolom teks di bagian bawah Communication Canvas. Tekan Enter atau klik tombol Send untuk menambahkan pesan ke aliran feed langsung.",
            "Gunakan panel balasan inline untuk mendokumentasikan kemajuan, mengonfirmasi pemahaman, atau memberikan umpan balik segera saat siswa berinteraksi dengan kartu matriks komunikasi.",
            "Live Message Feed berfungsi sebagai transkrip waktu nyata dari semua peristiwa komunikasi, memungkinkan guru dan asisten untuk melacak ekspresi, kebutuhan, dan keadaan emosional siswa sepanjang sesi pembelajaran."
          ]
        },
        kinetic: {
          title: "Matriks Visual Kinetik",
          icon: "🎬",
          content: [
            "Menjelaskan sistem frekuensi sinyal tinggi untuk anak-anak berkebutuhan khusus, merinci penggunaan animasi kinetik melingkar (mobil melesat, celana menari, sepatu berbaris, koin berkedip, air memercik) untuk pengenalan konteks langsung.",
            "Setiap ikon animasi dirancang untuk menarik perhatian dan memberikan umpan balik visual instan bahkan sebelum siswa membaca label teks. Gerakan yang berani dan berkelanjutan membantu siswa dengan keterlambatan pemrosesan kognitif atau preferensi pembelajaran visual untuk dengan cepat mengidentifikasi dan memilih kartu komunikasi yang benar.",
            "Animasi kinetik dikalibrasi untuk kontras tinggi, gerakan skala besar, dan loop berulang yang mempertahankan keterlibatan tanpa menyebabkan kelebihan beban sensorik. Animasi dipasangkan dengan siluet gerakan tangan bahasa isyarat statis untuk menyediakan jalur pengenalan multi-modal."
          ]
        },
        modes: {
          title: "Mode Bahasa Kognitif",
          icon: "👑",
          content: [
            "Panduan untuk mengubah Mode Hubungan global (Formal, Kasih Sayang, Rekan) untuk memperbarui frasa kosakata dan rangkaian komunikasi secara dinamis.",
            "Mode Formal (👑) menggunakan gelar yang hormat dan struktur bahasa profesional yang cocok untuk menyapa guru, administrator, atau tokoh otoritas. Frasa mencakup awalan 'Bapak/Ibu' dan format permintaan yang sopan.",
            "Mode Kasih Sayang (❤️) menggunakan bahasa yang hangat dan penuh kasih sayang yang sesuai untuk anggota keluarga, pengasuh dekat, atau individu terpercaya. Frasa menggunakan awalan 'Sayang' dan pola komunikasi yang lembut dan penuh cinta.",
            "Mode Rekan (🌱) menggunakan bahasa santai dan ramah yang dirancang untuk interaksi dengan teman sekelas, saudara kandung, atau teman sebaya. Frasa menggunakan awalan 'Halo' dan struktur yang santai dan percakapan.",
            "Mengalihkan mode hubungan secara instan memperbarui semua kartu frasa, kalimat vault, dan output suara untuk mencocokkan konteks sosial yang dipilih, membantu siswa menavigasi skenario komunikasi yang berbeda dengan bahasa yang sesuai."
          ]
        },
        keyboard: {
          title: "Papan Ketik Bahasa Isyarat",
          icon: "🤟",
          content: [
            "Aturan operasional untuk menggunakan tata letak visual bahasa isyarat ejaan jari yang dapat dialihkan untuk mengetik rangkaian alfanumerik khusus.",
            "Klik tombol '🤟 Sign Keyboard' di samping kolom input teks untuk menggeser panel keyboard ejaan jari ke atas. Setiap tombol menampilkan siluet gerakan tangan ASL yang jelas dengan indeks huruf kecil di pojok kanan atas untuk verifikasi guru.",
            "Siswa dapat mengetuk tombol gerakan individual untuk mengeja kata huruf demi huruf. Huruf muncul secara real-time di kolom input teks. Tombol Spasi dan Backspace disertakan untuk kontrol komposisi penuh.",
            "Tata letak keyboard mengikuti susunan QWERTY standar untuk keakraban sambil mengajarkan pengenalan alfabet bahasa isyarat. Alat ini sangat berharga bagi siswa tunarungu yang belajar menjembatani bahasa isyarat dan teks tertulis, atau bagi siswa non-verbal yang lebih suka ejaan visual daripada frasa pra-komposisi.",
            "Setelah menyusun pesan dengan keyboard isyarat, klik Send untuk menyiarkannya ke Live Message Feed dan mengaktifkan pemutaran text-to-speech dalam bahasa yang dipilih."
          ]
        }
      }
    }
  };

  const currentContent = content[language];

  return (
    <footer className="w-full bg-navigation border-t-2 border-accent px-4 py-2 flex items-center justify-between gap-3 z-50">
      <div className="flex items-center gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="sm"
              className="hover:bg-white/10 flex items-center gap-2 px-3 py-1"
            >
              <HelpCircle className="w-4 h-4 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-semibold text-xs" style={{ color: "#D4AF37" }}>
                ❓ How It Works
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-3xl text-navigation">
                {currentContent.dialogTitle}
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                {currentContent.dialogDescription}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 py-6">
              {/* Section 1: About & Governance */}
              <Card className="border-2 border-navigation/30">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-navigation flex items-center gap-2">
                    <span className="text-2xl">{currentContent.sections.about.icon}</span>
                    {currentContent.sections.about.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentContent.sections.about.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>

              {/* Section 2: Classroom Assistant & Aid Training */}
              <Card className="border-2 border-blue-400/30">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-blue-600 flex items-center gap-2">
                    <span className="text-2xl">{currentContent.sections.assistant.icon}</span>
                    {currentContent.sections.assistant.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentContent.sections.assistant.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>

              {/* Section 3: Kinetic Visuals Matrix */}
              <Card className="border-2 border-purple-600/30">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-purple-600 flex items-center gap-2">
                    <span className="text-2xl">{currentContent.sections.kinetic.icon}</span>
                    {currentContent.sections.kinetic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentContent.sections.kinetic.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>

              {/* Section 4: Cognitive Language Modes */}
              <Card className="border-2 border-amber-400/30">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-amber-600 flex items-center gap-2">
                    <span className="text-2xl">{currentContent.sections.modes.icon}</span>
                    {currentContent.sections.modes.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentContent.sections.modes.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>

              {/* Section 5: Sign Language Keyboard */}
              <Card className="border-2 border-green-500/30">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-green-600 flex items-center gap-2">
                    <span className="text-2xl">{currentContent.sections.keyboard.icon}</span>
                    {currentContent.sections.keyboard.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentContent.sections.keyboard.content.map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-foreground">
                      {paragraph}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>

            <DialogFooter>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8">
                  {currentContent.closeButton}
                </Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2 px-3 py-1"
              style={{ borderColor: "#D4AF37" }}
            >
              <Globe className="w-4 h-4 text-gold" style={{ color: "#D4AF37" }} />
              <span className="text-gold font-semibold text-xs" style={{ color: "#D4AF37" }}>
                {language === "en" ? "🇺🇸 EN" : "🇮🇩 ID"}
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
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-navigation/50 border-gold/30 hover:bg-navigation/70 flex items-center gap-2 px-3 py-1"
              style={{ borderColor: "#D4AF37" }}
            >
              <span className="text-gold font-semibold text-xs" style={{ color: "#D4AF37" }}>
                Active Scenario: {scenarioLabels[scenario]}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[280px]">
            <DropdownMenuItem 
              onClick={() => onScenarioChange("local")} 
              className="cursor-pointer py-2"
            >
              <span className="font-semibold text-sm">🏫 Local Classroom</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onScenarioChange("whatsapp")} 
              className="cursor-pointer py-2"
            >
              <span className="font-semibold text-sm">💬 Special-Needs Class</span>
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => onScenarioChange("zoom")} 
              className="cursor-pointer py-2"
            >
              <span className="font-semibold text-sm">🏡 Home Schooling</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2 bg-navigation/50 px-3 py-1 rounded-lg border border-gold/30">
          <Label htmlFor="network-toggle-footer" className="text-gold font-semibold text-xs cursor-pointer" style={{ color: "#D4AF37" }}>
            Network:
          </Label>
          <span className="text-gold text-xs font-bold" style={{ color: "#D4AF37" }}>
            {isOffline ? "Local" : "Online"}
          </span>
          <Switch
            id="network-toggle-footer"
            checked={isOffline}
            onCheckedChange={onOfflineToggle}
            className="data-[state=checked]:bg-transport scale-75"
          />
        </div>
        
        <Badge 
          variant="outline" 
          className={`border-2 px-3 py-1 text-xs font-semibold flex items-center gap-1.5 ${
            isOffline 
              ? "bg-transport/20 border-transport text-transport" 
              : "bg-navigation border-gold"
          }`}
          style={!isOffline ? { borderColor: "#D4AF37", color: "#D4AF37" } : undefined}
        >
          {isOffline ? (
            <>
              <Radio className="w-3 h-3 animate-pulse" />
              Local Mode
            </>
          ) : (
            <>
              <Wifi className="w-3 h-3" />
              Cloud Connected
            </>
          )}
        </Badge>
      </div>
    </footer>
  );
}