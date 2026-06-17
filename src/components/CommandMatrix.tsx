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

const messageTranslations = {
  en: {
    meals: "I need a meal",
    water: "I need water",
    snacks: "I need a snack",
    shirts: "I need a shirt",
    pants: "I need pants",
    shoes: "I need shoes",
    car: "I need car transport",
    truck: "I need truck transport",
    location: "I need location assistance",
    protection: "I need security protection",
    safety: "I need safety assistance",
    alert: "Security alert needed",
    payment: "I need to make a payment",
    budget: "I need budget assistance",
    account: "I need account information",
    home: "I need home assistance",
    schedule: "I need schedule help",
    tasks: "I need task assistance",
  },
  id: {
    meals: "Saya butuh makanan",
    water: "Saya butuh air",
    snacks: "Saya butuh camilan",
    shirts: "Saya butuh kemeja",
    pants: "Saya butuh celana",
    shoes: "Saya butuh sepatu",
    car: "Saya butuh transportasi mobil",
    truck: "Saya butuh transportasi truk",
    location: "Saya butuh bantuan lokasi",
    protection: "Saya butuh perlindungan keamanan",
    safety: "Saya butuh bantuan keselamatan",
    alert: "Peringatan keamanan diperlukan",
    payment: "Saya perlu melakukan pembayaran",
    budget: "Saya butuh bantuan anggaran",
    account: "Saya butuh informasi akun",
    home: "Saya butuh bantuan rumah",
    schedule: "Saya butuh bantuan jadwal",
    tasks: "Saya butuh bantuan tugas",
  },
};

interface CommandMatrixProps {
  onCardClick?: (messageEn: string, messageId: string) => void;
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
    if (onCardClick) {
      const messageEn = messageTranslations.en[messageKey as keyof typeof messageTranslations.en];
      onCardClick(messageEn, messageKey);
    }
  };

  return (
    <main className="flex-1 p-8 bg-background overflow-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border-2 border-card-glow/30 shadow-lg shadow-card-glow/20 hover:border-card-glow/60 hover:shadow-card-glow/40 transition-all duration-300 flex flex-col p-6 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-4 text-center font-heading">
              {category.title}
            </h3>
            <div className="flex-1 flex flex-col gap-3">
              {category.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleItemClick(item.messageKey)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-foreground/80">
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