"use client";

import { UtensilsCrossed, Droplet, Apple, Shirt, User2, Footprints, Car, Truck, MapPin, Shield, DollarSign, Home } from "lucide-react";

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

interface CommandMatrixProps {
  onCardClick?: (variations: Array<{ en: string; id: string }>) => void;
  language: "en" | "id";
}

export function CommandMatrix({ onCardClick, language }: CommandMatrixProps) {
  const t = translations[language];

  const categories = [
    {
      id: 1,
      title: t.nourishment,
      items: [
        { icon: UtensilsCrossed, label: t.meals, messageKey: "meals" },
        { icon: Droplet, label: t.water, messageKey: "water" },
        { icon: Apple, label: t.snacks, messageKey: "snacks" },
      ],
    },
    {
      id: 2,
      title: t.wardrobe,
      items: [
        { icon: Shirt, label: t.shirts, messageKey: "shirts" },
        { icon: User2, label: t.pants, messageKey: "pants" },
        { icon: Footprints, label: t.shoes, messageKey: "shoes" },
      ],
    },
    {
      id: 3,
      title: t.transport,
      items: [
        { icon: Car, label: t.car, messageKey: "car" },
        { icon: Truck, label: t.truck, messageKey: "truck" },
        { icon: MapPin, label: t.location, messageKey: "location" },
      ],
    },
    {
      id: 4,
      title: t.security,
      items: [
        { icon: Shield, label: t.protection, messageKey: "protection" },
        { icon: Shield, label: t.safety, messageKey: "safety" },
        { icon: Shield, label: t.alert, messageKey: "alert" },
      ],
    },
    {
      id: 5,
      title: t.financial,
      items: [
        { icon: DollarSign, label: t.payment, messageKey: "payment" },
        { icon: DollarSign, label: t.budget, messageKey: "budget" },
        { icon: DollarSign, label: t.account, messageKey: "account" },
      ],
    },
    {
      id: 6,
      title: t.dailyLife,
      items: [
        { icon: Home, label: t.home, messageKey: "home" },
        { icon: Home, label: t.schedule, messageKey: "schedule" },
        { icon: Home, label: t.tasks, messageKey: "tasks" },
      ],
    },
  ];

  const handleItemClick = (messageKey: string) => {
    const variations = phraseVariations[messageKey as keyof typeof phraseVariations];
    if (variations && onCardClick) {
      onCardClick(variations);
      
      const textToSpeak = variations[0].en;
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
    <main className="flex-1 p-8 bg-background overflow-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border-2 border-card-glow/30 shadow-lg shadow-card-glow/20 hover:border-card-glow/60 hover:shadow-card-glow/40 transition-all duration-300 flex flex-col p-6"
            style={{ backgroundColor: "#F8FAFC" }}
          >
            <h3 className="text-xl font-bold text-center font-heading mb-6" style={{ color: "#000000" }}>
              {category.title}
            </h3>
            <div className="flex-1 grid grid-cols-3 gap-4">
              {category.items.map((item, idx) => {
                const Icon = item.icon;
                
                // Determine animation class based on category
                let animationClass = "";
                if (category.id === 2) {
                  // Wardrobe items (Shirts, Pants, Shoes) - sway animation
                  animationClass = "animate-sway";
                } else if (category.id === 1) {
                  // Nourishment items - ripple for water, float for others
                  animationClass = item.messageKey === "water" ? "animate-ripple" : "animate-float";
                }
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleItemClick(item.messageKey)}
                    className="flex flex-col items-center justify-between p-3 rounded-2xl bg-white border-2 border-accent/20 hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-200 transform cursor-pointer group active:scale-90 active:bg-blue-100"
                  >
                    <div className={`w-full aspect-square bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 shadow-inner ${animationClass}`}>
                      <Icon className="w-3/5 h-3/5 text-accent group-hover:animate-pulse" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-bold text-center leading-tight w-full" style={{ color: "#000000" }}>
                      {item.label}
                    </span>
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