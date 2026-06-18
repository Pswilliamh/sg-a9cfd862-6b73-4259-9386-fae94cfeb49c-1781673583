"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Mock events for demonstration
const mockEvents = [
  { date: 5, title: "Math Class", color: "bg-blue-500" },
  { date: 10, title: "Field Trip", color: "bg-green-500" },
  { date: 15, title: "Parent Meeting", color: "bg-purple-500" },
  { date: 20, title: "Science Fair", color: "bg-amber-500" },
  { date: 25, title: "Holiday", color: "bg-red-500" },
];

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };
  
  const renderDays = () => {
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="aspect-square" />);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const eventsOnDay = mockEvents.filter(e => e.date === day);
      const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
      
      days.push(
        <div
          key={day}
          className={`aspect-square border border-slate-200 rounded-lg p-2 flex flex-col ${isToday ? "bg-accent/10 border-accent" : "bg-white hover:bg-slate-50"} transition-colors cursor-pointer`}
        >
          <span className={`text-sm font-bold ${isToday ? "text-accent" : "text-foreground"}`}>
            {day}
          </span>
          <div className="flex-1 flex flex-col gap-1 mt-1">
            {eventsOnDay.map((event, idx) => (
              <div
                key={idx}
                className={`text-xs px-1 py-0.5 rounded ${event.color} text-white truncate`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return days;
  };
  
  return (
    <div className="flex-1 bg-white p-6 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-navigation">School Calendar</h1>
          <div className="flex items-center gap-4">
            <Button onClick={previousMonth} variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xl font-bold text-navigation min-w-[200px] text-center">
              {months[month]} {year}
            </span>
            <Button onClick={nextMonth} variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-4 mb-4">
          <div className="flex gap-4 flex-wrap">
            <Badge className="bg-blue-500">Math Class</Badge>
            <Badge className="bg-green-500">Field Trip</Badge>
            <Badge className="bg-purple-500">Parent Meeting</Badge>
            <Badge className="bg-amber-500">Science Fair</Badge>
            <Badge className="bg-red-500">Holiday</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center font-bold text-navigation py-2">
              {day}
            </div>
          ))}
          {renderDays()}
        </div>
      </div>
    </div>
  );
}