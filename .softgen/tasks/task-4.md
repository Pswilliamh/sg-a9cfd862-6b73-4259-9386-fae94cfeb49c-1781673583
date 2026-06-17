---
title: Header Styling, Humanized Modifiers, Visual Dictionary, and TTS Audio
status: done
priority: high
type: feature
tags: [header, accessibility, tts, icons, offline, ux]
created_by: agent
created_at: 2026-06-17T04:23:00Z
position: 4
---

## Notes
Fix header text contrast, add relationship modifier toggles below header, implement visual dictionary icons in command matrix cards, add TTS audio bar at bottom with Web Speech API, and display offline mode badge.

## Checklist
- [x] Change header text to radiant gold (#D4AF37) or white for high contrast
- [x] Add horizontal relationship toggle bar below header with 3 buttons (Formal, Endearment, Peer)
- [x] Wire up toggle state to dynamically update message prefixes/suffixes
- [x] Update CommandMatrix cards with category-specific micro-icons
- [x] Add icons for Nourishment (Plate, Droplet, Apple)
- [x] Add icons for Wardrobe (Shirt, Pants, Shoes icons)
- [x] Add icons for Transport (Car, Truck, MapPin)
- [x] Create TTS audio bar component at bottom of command area
- [x] Add text input with "Type to Speak Natively" label
- [x] Implement Web Speech API (speechSynthesis) integration
- [x] Add large Speaker/Play button for audio playback
- [x] Add "Sovereign Local Mode Active" badge to header
- [x] Style all new components for 16:9 tablet layout

## Acceptance
- Header text is clearly visible in gold or white against dark blue
- Relationship toggles change message formatting dynamically
- Command matrix shows relevant icons for each category
- TTS bar speaks typed text using browser API
- Offline badge displays in header