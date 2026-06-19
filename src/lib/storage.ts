// Local storage utilities for offline-first architecture

export interface UserSettings {
  language: "en" | "id";
  relationshipMode: "formal" | "endearment" | "peer";
  emergencyContactName: string;
  emergencyContactPhone: string;
  isAuthenticated: boolean;
}

export interface ChatMessageStorage {
  id: string;
  textEn: string;
  textId: string;
  timestamp: string;
  sender: "student" | "teacher";
  isZoomCaption?: boolean;
}

// Default settings
const DEFAULT_SETTINGS: UserSettings = {
  language: "en",
  relationshipMode: "formal",
  emergencyContactName: "Emergency Coordinator",
  emergencyContactPhone: "+1234567890",
  isAuthenticated: false
};

// Storage keys
const STORAGE_KEYS = {
  SETTINGS: 'dominion_settings',
  MESSAGES: 'dominion_messages',
  ACHIEVEMENTS: 'dominion_achievements',
  SCHEDULE_PROGRESS: 'dominion_schedule_progress'
};

// Settings management
export const saveSettings = (settings: Partial<UserSettings>): void => {
  try {
    const current = getSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
  } catch (error) {
    console.error('Failed to save settings:', error);
  }
};

export const getSettings = (): UserSettings => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
  } catch (error) {
    console.error('Failed to load settings:', error);
  }
  return DEFAULT_SETTINGS;
};

// Message history management
export const saveMessage = (message: ChatMessageStorage): void => {
  try {
    const messages = getMessages();
    messages.push(message);
    // Keep only last 100 messages
    const recentMessages = messages.slice(-100);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(recentMessages));
  } catch (error) {
    console.error('Failed to save message:', error);
  }
};

export const getMessages = (): ChatMessageStorage[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load messages:', error);
  }
  return [];
};

export const clearMessages = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.MESSAGES);
  } catch (error) {
    console.error('Failed to clear messages:', error);
  }
};

// Check if running in offline mode
export const isOnline = (): boolean => {
  return navigator.onLine;
};

// Register service worker
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};