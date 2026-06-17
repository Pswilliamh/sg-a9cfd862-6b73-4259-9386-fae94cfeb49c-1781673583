---
title: Multi-Language Selector and WhatsApp Chat Feed
status: done
priority: high
type: feature
tags: [i18n, language, translation, chat, whatsapp]
created_by: agent
created_at: 2026-06-17T04:41:00Z
position: 6
---

## Notes
Add language selector dropdown (English/Indonesian) to header that updates all matrix card labels. Transform Communication Canvas into WhatsApp-style chat feed showing bilingual bubbles (English + Indonesian). Clicking matrix items or typing in TTS bar should add chat bubbles to the feed.

## Checklist
- [x] Add language selector dropdown to header (left of offline badge)
- [x] Populate with flag icons (🇺🇸 English, 🇮🇩 Indonesian)
- [x] Create translation dictionary for matrix card labels
- [x] Wire language selector to update all 6 matrix card texts
- [x] Transform Communication Canvas into scrollable chat feed
- [x] Style chat bubbles like WhatsApp (rounded, colored)
- [x] Show English text + Indonesian translation in italics in bubbles
- [x] Add click handlers to matrix sub-items to push chat bubbles
- [x] Update TTSAudioBar to also push typed text to chat feed
- [x] Test language switching updates all UI labels
- [x] Ensure chat feed scrolls to newest message

## Acceptance
- Language selector switches between English and Indonesian
- All matrix card labels update when language changes
- Clicking matrix items adds bilingual chat bubbles to feed
- Typing in TTS bar and clicking SPEAK adds bubble to chat feed
- Chat feed displays messages in WhatsApp style with scrolling