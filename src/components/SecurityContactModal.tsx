"use client";

import { useState } from "react";
import { X, Shield, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SecurityContactModalProps {
  onClose: () => void;
  onSave: (name: string, phone: string) => void;
  currentName: string;
  currentPhone: string;
}

export function SecurityContactModal({ onClose, onSave, currentName, currentPhone }: SecurityContactModalProps) {
  const [name, setName] = useState(currentName);
  const [phone, setPhone] = useState(currentPhone);

  const handleSave = () => {
    if (name.trim() && phone.trim()) {
      onSave(name, phone);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border-4 border-security">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-security bg-red-50">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-security" />
            <h2 className="text-xl font-bold font-heading text-security">
              Emergency Contact Configuration
            </h2>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="hover:bg-white/50"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-sm font-bold text-foreground">
              Emergency Contact Coordinator Name
            </Label>
            <Input
              id="contact-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter coordinator's full name"
              className="border-security/40 focus:border-security"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone" className="text-sm font-bold text-foreground">
              Mobile Number (WhatsApp)
            </Label>
            <Input
              id="contact-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1234567890"
              type="tel"
              className="border-security/40 focus:border-security"
            />
            <p className="text-xs text-muted-foreground">
              Include country code (e.g., +1 for USA, +62 for Indonesia)
            </p>
          </div>

          <div className="bg-red-50 border-2 border-security/30 rounded-lg p-4">
            <p className="text-sm text-security font-semibold">
              ⚠️ This contact will receive emergency SOS messages when you tap the Alert button in the Security category.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!name.trim() || !phone.trim()}
            className="flex-1 bg-security hover:bg-security/90 text-white font-bold"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Contact
          </Button>
        </div>
      </div>
    </div>
  );
}