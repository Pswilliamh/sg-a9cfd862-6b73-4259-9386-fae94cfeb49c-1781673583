"use client";

import { UtensilsCrossed, Droplet, Apple, Shirt, User2, Footprints, Car, Truck, MapPin, Shield, DollarSign, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { RelationshipMode } from "@/components/RelationshipToggle";

const translations = {
  en: {
    nourishment: "NOURISHMENT",
    meals: "Meals",
    water: "Water",
    snacks: "Snacks",
    wardrobe: "WARDROBE",
    shirts: "Shirts",
    pants: "Pants",
    shoes: "Shoes",
    transport: "TRANSPORT",
    car: "Car",
    truck: "Truck",
    location: "Location",
    security: "SECURITY",
    protection: "Protection",
    safety: "Safety",
    alert: "Alert",
    financial: "FINANCIAL",
    payment: "Payment",
    budget: "Budget",
    account: "Account",
    dailyLife: "DAILY LIFE",
    home: "Home",
    schedule: "Schedule",
    tasks: "Tasks",
  },
  id: {
    nourishment: "NUTRISI",
    meals: "Makanan",
    water: "Air",
    snacks: "Camilan",
    wardrobe: "PAKAIAN",
    shirts: "Kemeja",
    pants: "Celana",
    shoes: "Sepatu",
    transport: "TRANSPORTASI",
    car: "Mobil",
    truck: "Truk",
    location: "Lokasi",
    security: "KEAMANAN",
    protection: "Perlindungan",
    safety: "Keselamatan",
    alert: "Peringatan",
    financial: "KEUANGAN",
    payment: "Pembayaran",
    budget: "Anggaran",
    account: "Akun",
    dailyLife: "KEHIDUPAN SEHARI-HARI",
    home: "Rumah",
    schedule: "Jadwal",
    tasks: "Tugas",
  },
};

const relationshipLabels = {
  formal: { en: "Formal", id: "Formal", icon: "👑" },
  endearment: { en: "Endearment", id: "Sayang", icon: "❤️" },
  peer: { en: "Peer", id: "Teman", icon: "🌱" },
};

const phraseVariations = {
  meals: [
    { en: "I need a meal", id: "Saya butuh makanan" },
    { en: "Could I please have some food", id: "Bisakah saya minta makanan" },
    { en: "I would like something to eat", id: "Saya ingin makan sesuatu" },
    { en: "May I have a meal", id: "Bolehkah saya makan" },
  ],
  water: [
    { en: "I need water", id: "Saya butuh air" },
    { en: "Could I please have some water", id: "Bisakah saya minta air" },
    { en: "May I have a drink of water", id: "Bolehkah saya minum air" },
    { en: "I would like some water", id: "Saya ingin air" },
  ],
  snacks: [
    { en: "I need a snack", id: "Saya butuh camilan" },
    { en: "Could I please have a snack", id: "Bisakah saya minta camilan" },
    { en: "May I have something light to eat", id: "Bolehkah saya makan ringan" },
    { en: "I would like a small bite", id: "Saya ingin camilan kecil" },
  ],
  shirts: [
    { en: "I need a shirt", id: "Saya butuh kemeja" },
    { en: "Could I please have a clean shirt", id: "Bisakah saya minta kemeja bersih" },
    { en: "May I have a shirt", id: "Bolehkah saya minta kemeja" },
    { en: "I would like a fresh shirt", id: "Saya ingin kemeja baru" },
  ],
  pants: [
    { en: "I need pants", id: "Saya butuh celana" },
    { en: "Could I please have clean pants", id: "Bisakah saya minta celana bersih" },
    { en: "May I have some pants", id: "Bolehkah saya minta celana" },
    { en: "I would like fresh pants", id: "Saya ingin celana baru" },
  ],
  shoes: [
    { en: "I need shoes", id: "Saya butuh sepatu" },
    { en: "Could I please have shoes", id: "Bisakah saya minta sepatu" },
    { en: "May I have a pair of shoes", id: "Bolehkah saya minta sepasang sepatu" },
    { en: "I would like shoes", id: "Saya ingin sepatu" },
  ],
  car: [
    { en: "I need car transport", id: "Saya butuh transportasi mobil" },
    { en: "Could I please have a car", id: "Bisakah saya minta mobil" },
    { en: "May I arrange for car transportation", id: "Bolehkah saya mengatur transportasi mobil" },
    { en: "I would like a vehicle", id: "Saya ingin kendaraan" },
  ],
  truck: [
    { en: "I need truck transport", id: "Saya butuh transportasi truk" },
    { en: "Could I please have a truck", id: "Bisakah saya minta truk" },
    { en: "May I arrange for truck transportation", id: "Bolehkah saya mengatur transportasi truk" },
    { en: "I would like a truck", id: "Saya ingin truk" },
  ],
  location: [
    { en: "I need location assistance", id: "Saya butuh bantuan lokasi" },
    { en: "Could I please get directions", id: "Bisakah saya minta petunjuk arah" },
    { en: "May I have location help", id: "Bolehkah saya minta bantuan lokasi" },
    { en: "I would like navigation support", id: "Saya ingin bantuan navigasi" },
  ],
  protection: [
    { en: "I need security protection", id: "Saya butuh perlindungan keamanan" },
    { en: "Could I please have security assistance", id: "Bisakah saya minta bantuan keamanan" },
    { en: "May I request protection", id: "Bolehkah saya minta perlindungan" },
    { en: "I would like security support", id: "Saya ingin dukungan keamanan" },
  ],
  safety: [
    { en: "I need safety assistance", id: "Saya butuh bantuan keselamatan" },
    { en: "Could I please have safety support", id: "Bisakah saya minta dukungan keselamatan" },
    { en: "May I request safety help", id: "Bolehkah saya minta bantuan keselamatan" },
    { en: "I would like to ensure safety", id: "Saya ingin memastikan keselamatan" },
  ],
  alert: [
    { en: "Security alert needed", id: "Peringatan keamanan diperlukan" },
    { en: "Please send a security alert", id: "Tolong kirim peringatan keamanan" },
    { en: "May I trigger an alert", id: "Bolehkah saya memicu peringatan" },
    { en: "I need to raise an alarm", id: "Saya perlu membunyikan alarm" },
  ],
  payment: [
    { en: "I need to make a payment", id: "Saya perlu melakukan pembayaran" },
    { en: "Could I please process a payment", id: "Bisakah saya memproses pembayaran" },
    { en: "May I complete a transaction", id: "Bolehkah saya menyelesaikan transaksi" },
    { en: "I would like to pay", id: "Saya ingin membayar" },
  ],
  budget: [
    { en: "I need budget assistance", id: "Saya butuh bantuan anggaran" },
    { en: "Could I please review my budget", id: "Bisakah saya meninjau anggaran saya" },
    { en: "May I have budget support", id: "Bolehkah saya minta dukungan anggaran" },
    { en: "I would like financial planning help", id: "Saya ingin bantuan perencanaan keuangan" },
  ],
  account: [
    { en: "I need account information", id: "Saya butuh informasi akun" },
    { en: "Could I please check my account", id: "Bisakah saya cek akun saya" },
    { en: "May I access account details", id: "Bolehkah saya mengakses detail akun" },
    { en: "I would like account support", id: "Saya ingin dukungan akun" },
  ],
  home: [
    { en: "I need home assistance", id: "Saya butuh bantuan rumah" },
    { en: "Could I please have help at home", id: "Bisakah saya minta bantuan di rumah" },
    { en: "May I request household support", id: "Bolehkah saya minta dukungan rumah tangga" },
    { en: "I would like home services", id: "Saya ingin layanan rumah" },
  ],
  schedule: [
    { en: "I need schedule help", id: "Saya butuh bantuan jadwal" },
    { en: "Could I please review my schedule", id: "Bisakah saya meninjau jadwal saya" },
    { en: "May I have scheduling assistance", id: "Bolehkah saya minta bantuan penjadwalan" },
    { en: "I would like to organize my time", id: "Saya ingin mengatur waktu saya" },
  ],
  tasks: [
    { en: "I need task assistance", id: "Saya butuh bantuan tugas" },
    { en: "Could I please get help with tasks", id: "Bisakah saya minta bantuan dengan tugas" },
    { en: "May I have task support", id: "Bolehkah saya minta dukungan tugas" },
    { en: "I would like help organizing tasks", id: "Saya ingin bantuan mengatur tugas" },
  ],
};

// Sign Language Hand Gesture SVG Components
const SignLanguageIcons = {
  eating: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="3">
      <path d="M 30 60 Q 40 50, 50 60" strokeLinecap="round" />
      <path d="M 50 60 L 50 40" strokeLinecap="round" />
      <circle cx="35" cy="65" r="4" fill="#0B3C5D" />
      <circle cx="45" cy="63" r="4" fill="#0B3C5D" />
      <circle cx="55" cy="63" r="4" fill="#0B3C5D" />
      <circle cx="65" cy="65" r="4" fill="#0B3C5D" />
      <path d="M 40 70 Q 50 75, 60 70" strokeLinecap="round" />
    </svg>
  ),
  drinking: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="3">
      <path d="M 40 50 L 35 70 L 65 70 L 60 50 Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="45" r="5" fill="none" />
      <path d="M 30 40 L 30 30" strokeLinecap="round" />
      <path d="M 25 35 L 35 35" strokeLinecap="round" />
    </svg>
  ),
  clothing: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="3">
      <path d="M 30 40 L 30 70 M 70 40 L 70 70" strokeLinecap="round" />
      <path d="M 30 40 L 50 30 L 70 40" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 30 55 L 40 55 M 60 55 L 70 55" strokeLinecap="round" />
      <circle cx="40" cy="50" r="3" fill="#0B3C5D" />
      <circle cx="60" cy="50" r="3" fill="#0B3C5D" />
    </svg>
  ),
  driving: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="3">
      <circle cx="50" cy="50" r="20" strokeLinecap="round" />
      <path d="M 30 50 L 45 50" strokeLinecap="round" />
      <path d="M 55 50 L 70 50" strokeLinecap="round" />
      <circle cx="40" cy="35" r="4" fill="#0B3C5D" />
      <circle cx="60" cy="35" r="4" fill="#0B3C5D" />
      <path d="M 45 60 Q 50 65, 55 60" strokeLinecap="round" />
    </svg>
  ),
  money: () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#0B3C5D" strokeWidth="3">
      <circle cx="50" cy="50" r="22" strokeLinecap="round" />
      <path d="M 50 35 L 50 65" strokeLinecap="round" />
      <path d="M 50 35 L 45 40 L 50 45" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 50 55 L 55 60 L 50 65" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="42" cy="45" r="2" fill="#0B3C5D" />
      <circle cx="58" cy="55" r="2" fill="#0B3C5D" />
    </svg>
  ),
};

interface CommandMatrixProps {
  onCardClick?: (variations: Array<{ en: string; id: string }>) => void;
  language: "en" | "id";
  relationshipMode: RelationshipMode;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
}

export function CommandMatrix({ onCardClick, language, relationshipMode, emergencyContactName, emergencyContactPhone }: CommandMatrixProps) {
  const t = translations[language];
  const modeLabel = relationshipLabels[relationshipMode];

  const categories = [
    {
      id: 1,
      title: t.nourishment,
      borderColor: "border-blue-400",
      bgColor: "bg-blue-50",
      items: [
        { icon: UtensilsCrossed, label: t.meals, messageKey: "meals", animation: "kinetic-meals", signIcon: "eating" },
        { icon: Droplet, label: t.water, messageKey: "water", animation: "kinetic-water", signIcon: "drinking" },
        { icon: Apple, label: t.snacks, messageKey: "snacks", animation: "kinetic-meals", signIcon: "eating" },
      ],
    },
    {
      id: 2,
      title: t.wardrobe,
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      items: [
        { icon: Shirt, label: t.shirts, messageKey: "shirts", animation: "", signIcon: "clothing" },
        { icon: User2, label: t.pants, messageKey: "pants", animation: "kinetic-pants", signIcon: "clothing" },
        { icon: Footprints, label: t.shoes, messageKey: "shoes", animation: "kinetic-shoes", signIcon: "clothing" },
      ],
    },
    {
      id: 3,
      title: t.transport,
      borderColor: "border-amber-400",
      bgColor: "bg-amber-50",
      items: [
        { icon: Car, label: t.car, messageKey: "car", animation: "kinetic-car", signIcon: "driving" },
        { icon: Truck, label: t.truck, messageKey: "truck", animation: "kinetic-car", signIcon: "driving" },
        { icon: MapPin, label: t.location, messageKey: "location", animation: "", signIcon: "driving" },
      ],
    },
    {
      id: 4,
      title: t.security,
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      items: [
        { icon: Shield, label: t.protection, messageKey: "protection", animation: "", signIcon: "money" },
        { icon: Shield, label: t.safety, messageKey: "safety", animation: "", signIcon: "money" },
        { icon: Shield, label: t.alert, messageKey: "alert", animation: "kinetic-payment", signIcon: "money" },
      ],
    },
    {
      id: 5,
      title: t.financial,
      borderColor: "border-purple-600",
      bgColor: "bg-purple-50",
      items: [
        { icon: DollarSign, label: t.payment, messageKey: "payment", animation: "kinetic-payment", signIcon: "money" },
        { icon: DollarSign, label: t.budget, messageKey: "budget", animation: "", signIcon: "money" },
        { icon: DollarSign, label: t.account, messageKey: "account", animation: "", signIcon: "money" },
      ],
    },
    {
      id: 6,
      title: t.dailyLife,
      borderColor: "border-navigation",
      bgColor: "bg-slate-50",
      items: [
        { icon: Home, label: t.home, messageKey: "home", animation: "", signIcon: "eating" },
        { icon: Home, label: t.schedule, messageKey: "schedule", animation: "", signIcon: "eating" },
        { icon: Home, label: t.tasks, messageKey: "tasks", animation: "", signIcon: "eating" },
      ],
    },
  ];

  const handleItemClick = (messageKey: string) => {
    const variations = phraseVariations[messageKey as keyof typeof phraseVariations];
    if (variations && onCardClick) {
      onCardClick(variations);
      
      const textToSpeak = variations[0].en;
      
      // Special handling for alert messages - send to WhatsApp
      if (messageKey === "alert" && emergencyContactPhone) {
        const alertMessage = `🚨 EMERGENCY ALERT from ${emergencyContactName || "Unknown"}: ${textToSpeak}`;
        const whatsappPhone = emergencyContactPhone.replace(/[^0-9]/g, "");
        const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(alertMessage)}`;
        window.open(whatsappUrl, "_blank");
      }
      
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = "en-US";
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <main className="flex-1 p-4 md:p-8 bg-background overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 md:gap-6 h-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-white rounded-lg border-4 ${category.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col`}
          >
            <div className={`flex items-center justify-between py-3 px-4 border-b-2 ${category.borderColor} ${category.bgColor}`}>
              <h3 className="text-lg md:text-xl font-bold font-heading" style={{ color: "#000000" }}>
                {category.title}
              </h3>
              <Badge variant="outline" className="text-xs font-semibold border-accent/40 text-accent">
                {modeLabel.icon} {modeLabel[language]}
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-3 p-2 flex-1">
              {category.items.map((item, idx) => {
                const Icon = item.icon;
                const SignIcon = SignLanguageIcons[item.signIcon as keyof typeof SignLanguageIcons];
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleItemClick(item.messageKey)}
                    className="flex flex-col items-center justify-start active:scale-[0.92] active:bg-blue-50 duration-150 cursor-pointer rounded-xl overflow-hidden bg-white border border-slate-200"
                  >
                    {/* LAYER 1 (TOP 30%) - Sign Language Hand Gesture */}
                    <div className="w-full bg-white flex items-center justify-center p-2" style={{ height: "30%" }}>
                      <div className="w-full h-full flex items-center justify-center">
                        <SignIcon />
                      </div>
                    </div>
                    
                    {/* LAYER 2 (MIDDLE 40%) - Kinetic Cartoon Animation */}
                    <div className="w-full bg-slate-50 flex items-center justify-center p-2" style={{ height: "40%" }}>
                      {item.animation ? (
                        <div className={item.animation} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", transformOrigin: "center" }}>
                          <Icon className="w-full h-full text-accent" strokeWidth={2} />
                        </div>
                      ) : (
                        <Icon className="w-full h-full text-accent" strokeWidth={2} />
                      )}
                    </div>
                    
                    {/* LAYER 3 (BOTTOM 30%) - Text Label */}
                    <div className="w-full bg-white flex items-center justify-center p-1" style={{ height: "30%" }}>
                      <span className="text-xs md:text-sm font-bold text-center leading-tight px-1" style={{ color: "#000000" }}>
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}