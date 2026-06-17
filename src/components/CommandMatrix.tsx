"use client";

import { UtensilsCrossed, Droplet, Apple, Shirt, User2, Footprints, Car, Truck, MapPin, Shield, DollarSign, Home } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "NOURISHMENT",
    items: [
      { icon: UtensilsCrossed, label: "Meals" },
      { icon: Droplet, label: "Water" },
      { icon: Apple, label: "Snacks" },
    ],
  },
  {
    id: 2,
    title: "WARDROBE",
    items: [
      { icon: Shirt, label: "Shirts" },
      { icon: User2, label: "Pants" },
      { icon: Footprints, label: "Shoes" },
    ],
  },
  {
    id: 3,
    title: "TRANSPORT",
    items: [
      { icon: Car, label: "Car" },
      { icon: Truck, label: "Truck" },
      { icon: MapPin, label: "Location" },
    ],
  },
  {
    id: 4,
    title: "SECURITY",
    items: [
      { icon: Shield, label: "Protection" },
      { icon: Shield, label: "Safety" },
      { icon: Shield, label: "Alert" },
    ],
  },
  {
    id: 5,
    title: "FINANCIAL",
    items: [
      { icon: DollarSign, label: "Payment" },
      { icon: DollarSign, label: "Budget" },
      { icon: DollarSign, label: "Account" },
    ],
  },
  {
    id: 6,
    title: "DAILY LIFE",
    items: [
      { icon: Home, label: "Home" },
      { icon: Home, label: "Schedule" },
      { icon: Home, label: "Tasks" },
    ],
  },
];

export function CommandMatrix() {
  return (
    <main className="flex-1 p-8 bg-background overflow-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border-2 border-card-glow/30 shadow-lg shadow-card-glow/20 hover:border-card-glow/60 hover:shadow-card-glow/40 transition-all duration-300 flex flex-col p-6 cursor-pointer group"
          >
            <h3 className="text-xl font-bold text-foreground mb-4 text-center font-heading">
              {category.title}
            </h3>
            <div className="flex-1 flex flex-col gap-3">
              {category.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-foreground/80">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}